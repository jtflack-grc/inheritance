"""
Streamlit app that embeds the React globe dashboard.

For local development: Uses Vite dev server (port 5173)
For production: Uses built static files from static/ directory
"""
import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path
import socket

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

# Check if we should use dev server or static files
use_dev_server = st.sidebar.checkbox("Use Dev Server (Vite)", value=True)
force_dev = st.sidebar.checkbox("Force Dev Server (skip port check)", value=True)  # Default to True for easier dev
debug_mode = st.sidebar.checkbox("Debug Mode", value=False)

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
    # Try to use Vite dev server (much better for development)
    vite_port = 5173
    vite_url = f"http://localhost:{vite_port}"
    
    if force_dev or is_vite_running(vite_port):
        if debug_mode:
            st.sidebar.success(f"✓ Vite dev server detected on port {vite_port}")
        
        # Embed Vite dev server via iframe
        iframe_html = f'''
        <iframe 
            src="{vite_url}"
            width="100%" 
            height="900" 
            frameborder="0"
            style="border: none; width: 100%; height: 900px;"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; webgl">
        </iframe>
        '''
        
        components.html(iframe_html, height=900, scrolling=False)
        
        st.sidebar.info("💡 **Dev Mode**: React app running on Vite dev server with hot reload!")
        st.sidebar.markdown(f"Direct link: [{vite_url}]({vite_url})")
    else:
        if debug_mode:
            st.sidebar.write(f"**Port check results:**")
            st.sidebar.write(f"- localhost:{vite_port}: {check_port('localhost', vite_port)}")
            st.sidebar.write(f"- 127.0.0.1:{vite_port}: {check_port('127.0.0.1', vite_port)}")
        st.sidebar.warning("⚠️ Vite dev server not running")
        st.error("**Vite dev server not found**")
        st.markdown(f"""
        To start the dev server:
        
        1. Open a terminal
        2. Run:
        ```bash
        cd frontend
        npm run dev
        ```
        
        3. Wait for it to start (usually on http://localhost:{vite_port})
        4. Refresh this page
        
        Or uncheck "Use Dev Server" to use built static files instead.
        """)
        
        if st.button("Retry Connection"):
            st.rerun()

else:
    # Fall back to static files (for production or when dev server unavailable)
    static_path = Path("static/index.html")
    if static_path.exists():
        with open(static_path, 'r', encoding='utf-8') as f:
            html = f.read()
        
        if debug_mode:
            st.sidebar.write("**Using static files**")
            assets_path = Path("static/assets")
            if assets_path.exists():
                st.sidebar.write("**JS files:**")
                for asset_file in sorted(assets_path.glob("*.js")):
                    st.sidebar.write(f"✓ {asset_file.name}")
        
        # Embed static HTML directly
        iframe_html = f'''
        <iframe 
            srcdoc={html!r}
            width="100%" 
            height="900" 
            frameborder="0"
            style="border: none; width: 100%; height: 900px;"
            sandbox="allow-scripts allow-same-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; webgl">
        </iframe>
        '''
        
        components.html(iframe_html, height=900, scrolling=False)
        
        st.sidebar.info("📦 **Production Mode**: Using built static files")
    else:
        st.error("⚠️ Static files not found")
        st.markdown("""
        The React app needs to be built first. Run the build script:
        
        **Windows:**
        ```powershell
        scripts\build_and_copy.ps1
        ```
        
        **Unix/Mac:**
        ```bash
        scripts/build_and_copy.sh
        ```
        
        Then refresh this page.
        
        Or check "Use Dev Server" to use Vite dev server instead.
        """)
        st.code("cd frontend && npm install && npm run build", language="bash")
