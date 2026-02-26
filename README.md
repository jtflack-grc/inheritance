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



## License

MIT
