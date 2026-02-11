# Inheritance - An AI Governance and Risk Simulator for Animals

A Streamlit-hosted 3D WebGL globe dashboard that visualizes AI and animal welfare governance decision scenarios, showing how governance choices around factory farming, alternative proteins, wildlife conservation, AI systems managing animals, and animal rights compound long-horizon welfare debt over time.

Part of the Electric Sheep/Futurekind ecosystem - exploring governance for both animals and AI systems across vast timescales, considering the welfare of trillions of beings (animals and potentially sentient AI) across billions of years.

## Features

✅ **Complete Scenario Engine**
- 5 phases with 20 decision nodes covering AI and animal welfare governance
- AI integration throughout: 19/20 nodes explicitly address AI systems managing animals
- State management with reducer pattern
- Metrics tracking (measured welfare outcomes and unmeasured governance debt)
- Memory decay for assumptions
- System irreversibility mechanics
- Loss conditions system with 5 condition types and warning thresholds

✅ **Interactive 3D Globe**
- Real GeoJSON country boundaries
- 31 countries tracked with detailed welfare data
- Choropleth visualization (3 modes: Welfare Standards, Welfare Debt, Enforcement)
- Animated arcs between regions (supply chains, regulatory flows, research collaboration)
- Hub points for governance centers (welfare agencies, research labs, enforcement offices)
- Event rings that fade over time (policy shifts, welfare incidents, research breakthroughs)

✅ **Full UI Components**
- Decision Panel with AI chat interface (EthosGPT) for progressive disclosure
- Metrics Panel showing measured success and governance debt indices
- Post-Mortem Modal at scenario completion with trajectory visualization
- Header Bar with map mode switching and debug toggle
- Turn U personalization phase for player name collection

✅ **Mechanics**
- Choice expansion: 4-5 choices per node with quality metadata (best, good, neutral, poor, terrible)
- Deterministic choice shuffling per node to prevent memorization
- Assumption preservation checkbox
- System irreversibility tracking (choice locking)
- Loss conditions: 5 types with non-blocking warnings and post-mortem tracking
- Automatic state persistence (localStorage)
- Reset functionality

## Metrics

### Measured Metrics (What Organizations Optimize)
- **Production Efficiency**: Output per unit input
- **Cost Per Unit**: Production cost (lower is better)
- **Welfare Incident Rate**: Disease, injury, mortality (lower is better)
- **Welfare Standard Adoption**: Adoption of welfare standards (0-3 scale)

### Unmeasured Metrics (Governance Debt)
- **Welfare Debt**: Accumulated welfare compromises
- **Enforcement Gap**: Delay between policy and enforcement
- **Regulatory Capture**: Industry influence on policy
- **Sentience Knowledge Gap**: Gaps in understanding animal needs
- **System Irreversibility**: Difficulty unwinding harmful systems

## Quick Start (Local Development)

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+ and pip
- Streamlit

### Setup

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Build frontend:**
   ```bash
   npm run build
   ```

4. **Copy build to static:**
   ```bash
   # Windows
   .\scripts\build_and_copy.ps1
   
   # Linux/Mac
   ./scripts/build_and_copy.sh
   ```

5. **Run Streamlit:**
   ```bash
   streamlit run app.py
   ```

6. **Open browser:**
   - Navigate to `http://localhost:8501`
   - The app should load with the 3D globe

## Development Workflow

### Option 1: Vite Dev Server (Recommended for Development)

1. **Start Vite dev server:**
   ```bash
   cd frontend
   npm run dev
   ```

2. **Start Streamlit:**
   ```bash
   streamlit run app.py
   ```

3. **In Streamlit UI:**
   - Check "Use Dev Server (Vite)" checkbox
   - Enter dev server URL: `http://localhost:5173`

### Option 2: Static Build (Production-like)

1. **Build and copy:**
   ```bash
   cd frontend
   npm run build
   cd ..
   .\scripts\build_and_copy.ps1  # or ./scripts/build_and_copy.sh
   ```

2. **Run Streamlit:**
   ```bash
   streamlit run app.py
   ```

## Deployment to Streamlit Community Cloud

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Animal welfare governance simulator"
   git push origin main
   ```

2. **Deploy on Streamlit Cloud:**
   - Go to https://share.streamlit.io
   - Connect your GitHub repository
   - Set main file path: `app.py`
   - Deploy!

3. **Important:** Ensure `static/` directory contains built assets before pushing, or Streamlit Cloud will need to build them (requires Node.js in cloud environment).

## How It Works

### Scenario Flow
1. **Phase 1: Foundation** - Integrating animal welfare into AI governance frameworks, initial welfare standards for farm animals and AI systems
2. **Phase 2: Scale** - Factory farming regulation with AI oversight, alternative proteins with AI systems, wildlife conservation with AI monitoring
3. **Phase 3: Enforcement** - Enforcement capacity for both animals and AI systems, industry compliance, international standards including AI governance
4. **Phase 4: Integration** - Alternative vs. traditional with AI considerations, wildlife farming with AI monitoring, lab animals and AI alternatives
5. **Phase 5: Irreversibility** - Market dependency with AI systems, long-term governance including AI sentience considerations, AI welfare governance

### Map Modes
- **Welfare Standards**: Adoption of welfare standards across regions
- **Welfare Debt**: Accumulated welfare compromises
- **Enforcement**: Enforcement capacity and oversight

### Decision Mechanics
- Each choice updates measured and unmeasured metrics
- Assumptions can be preserved (reaffirmed) to maintain strength
- System irreversibility increases over time, potentially locking certain choices
- AI chat interface (EthosGPT) provides progressive disclosure of decision context
- Player name personalization throughout the experience

## Research Foundations

This simulator is based on research from:
- **Animal Protection Index (API)** by World Animal Protection
- **Five Domains Model** for animal welfare assessment
- **Five Freedoms** framework
- **WOAH/OIE** international welfare standards
- **UNEA Resolution on Animal Welfare** (2022)
- **EU AI Act** and AI governance frameworks
- **US AI Executive Order** on AI Safety
- Academic research on animal welfare governance, factory farming, alternative proteins, wildlife conservation, and AI systems managing animals

See `ANIMAL_WELFARE_METRICS.md` for detailed metric definitions and citations.

## Documentation

- `AUTHORING_COOKBOOK.md` - Guide for creating new scenarios
- `ENGINE_INVARIANTS.md` - Core engine rules and invariants
- `VISUAL_SEMANTICS.md` - Globe visualization meaning
- `INTERPRETATION_BOUNDARIES.md` - What this tool is and isn't
- `ANIMAL_WELFARE_METRICS.md` - Metric definitions and research citations

## Troubleshooting

### Blank Screen
- Ensure Vite dev server is running if using dev mode
- Check browser console for errors
- Verify `static/` directory has `index.html` and `assets/` folder

### Globe Not Rendering
- Check that `world.geojson` is in `frontend/public/`
- Verify browser supports WebGL
- Check console for GeoJSON loading errors

### State Not Persisting
- Check browser localStorage (DevTools > Application > Local Storage)
- Verify scenario version matches saved state version
- Try clearing localStorage and resetting

### Build Errors
- Ensure Node.js 18+ is installed
- Run `npm install` in `frontend/` directory
- Check `vite.config.ts` has `base: './'` for relative paths

## License

MIT
