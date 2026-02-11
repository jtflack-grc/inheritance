"""
Streamlit app that embeds the React globe dashboard.

For local development: Uses Vite dev server (port 5173)
For production / Streamlit Cloud: Uses built static files from static/ directory.
"""
import os
import socket
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="Inheritance - an animal governance and risk simulator",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Apply black dark mode to Streamlit page
st.markdown("""
    <style>
        /* Modern Apple-like font stack */
        * {
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
            letter-spacing: -0.01em;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        /* Main Streamlit background */
        .stApp {
            background-color: #000000 !important;
        }
        
        /* Main content area */
        .main .block-container {
            background-color: #000000 !important;
            padding-top: 2rem;
        }
        
        /* Sidebar */
        .css-1d391kg {
            background-color: #000000 !important;
        }
        
        /* Remove Streamlit's default background */
        body {
            background-color: #000000 !important;
        }
        
        /* Iframe container */
        iframe {
            background-color: #000000 !important;
        }
        
        /* Hide Streamlit branding */
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
    </style>
    """, unsafe_allow_html=True)

# For deployment (including Streamlit Cloud), always use the built static files.
# Localhost dev-server embedding is disabled by default to avoid localhost:5173
# references in production. If you want to re-enable it locally, you can add
# back a sidebar checkbox and set use_dev_server=True.
use_dev_server = False
force_dev = False
debug_mode = False

def check_port(host, port):
    """Check if a port is open (dev server running)"""
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((host, port))
        sock.close()
        return result == 0
    except:
        return False

def is_vite_running(port=5173):
    """Check if Vite dev server is running - try multiple methods"""
    # Try localhost first
    if check_port('localhost', port):
        return True
    # Try 127.0.0.1 (sometimes localhost resolves differently)
    if check_port('127.0.0.1', port):
        return True
    return False

if use_dev_server:
    # Dev server path is currently disabled (use_dev_server=False).
    pass
else:
    # Fall back to static files (for production or when dev server unavailable)
    static_path = Path("static/index.html")
    assets_dir = Path("static/assets")

    if static_path.exists() and assets_dir.exists():
        # Find hashed asset filenames dynamically
        try:
            main_js = next(assets_dir.glob("index-*.js"))
            globe_js = next(assets_dir.glob("globe-*.js"))
            main_css = next(assets_dir.glob("index-*.css"))
        except StopIteration:
            st.error("⚠️ Could not locate built JS/CSS assets in static/assets/")
        else:
            # Read contents
            main_js_code = main_js.read_text(encoding="utf-8")
            globe_js_code = globe_js.read_text(encoding="utf-8")
            main_css_code = main_css.read_text(encoding="utf-8")

            # Minimal HTML shell that inlines CSS and JS so we don't rely on
            # Streamlit's /static/ asset serving or MIME types.
            html = f"""
            <!doctype html>
            <html lang="en" style="background-color: #000000;">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Inheritance - an animal governance and risk simulator</title>
                <style>
                {main_css_code}
                </style>
              </head>
              <body style="background-color: #000000; margin: 0; padding: 0;">
                <div id="root"></div>
                <script type="module">
                {globe_js_code}
                </script>
                <script type="module">
                {main_js_code}
                </script>
              </body>
            </html>
            """

            components.html(html, height=900, scrolling=False)
            st.sidebar.info("📦 **Production Mode**: Using inlined static assets")
    else:
        st.error("⚠️ Static files not found")
        st.markdown("""
        The React app needs to be built first. Run the build script locally:
        
        **Windows:**
        ```powershell
        scripts\\build_and_copy.ps1
        ```
        
        **Unix/Mac:**
        ```bash
        scripts/build_and_copy.sh
        ```
        
        Then push the updated static/ directory to your repository and redeploy.
        """)
