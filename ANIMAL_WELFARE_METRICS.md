# Animal Welfare Metrics - Definitions and Research Foundations

This document defines all metrics used in the Animal Welfare Governance Simulator, with citations to research frameworks and academic sources.

## Measured Metrics (What Organizations Optimize)

### Production Efficiency (0-1)
**Definition**: Output per unit input in animal production systems.

**What it captures**: How efficiently resources (feed, land, water) are converted into animal products. Higher values indicate more efficient production.

**Research basis**: Standard agricultural efficiency metrics used in life cycle assessments (LCA) and production system comparisons. See: "Quantifying the value of on-farm measurements to inform the selection of KPIs for livestock production systems" (Nature Scientific Reports, 2021).

### Cost Per Unit (0-1, lower is better)
**Definition**: Production cost per unit of animal product.

**What it captures**: Economic efficiency of production. Lower values indicate lower production costs.

**Research basis**: Standard economic metrics in agricultural production analysis. Cost considerations are central to welfare standard adoption decisions (see Animal Protection Index methodology).

### Welfare Incident Rate (0-1, lower is better)
**Definition**: Rate of disease, injury, and mortality in animal production systems.

**What it captures**: Direct welfare outcomes - physical health problems, injuries, and deaths. Lower values indicate better welfare outcomes.

**Research basis**: 
- **Animal-based welfare indicators**: Physical indicators like morbidity, mortality, lameness, injuries are core to welfare assessment (see "Animal-Based Welfare Indicators for Calves and Cattle", MDPI, 2023).
- **Five Domains Model**: Health domain includes disease, injury, and functional impairment (Mellor & Reid, 1994).
- **Operational welfare indicators**: Used in farm-level welfare assessments across species.

### Welfare Standard Adoption (0-3, can exceed 1.0)
**Definition**: Adoption level of welfare standards across production systems.

**What it captures**: 
- 0-1: Basic welfare standards (Five Freedoms baseline)
- 1-2: Enhanced welfare standards (beyond minimum requirements)
- 2-3: Premium welfare standards (highest tier certifications)

**Research basis**:
- **Animal Protection Index (API)**: Measures adoption of welfare legislation and standards (World Animal Protection).
- **Benchmark Method**: Scores welfare initiatives on legislative and market-based dimensions (University of Copenhagen/AnimalEthics).
- **GLOBALG.A.P./IFA Standards**: Private market-driven standards that include welfare components.

## Unmeasured Metrics (Governance Debt)

### Welfare Debt (0-1)
**Definition**: Accumulated welfare compromises that are not immediately visible or measured.

**What it captures**: 
- Historical decisions that reduced welfare but weren't fully accounted for
- Compromises made for efficiency or cost that accumulate over time
- Welfare impacts that are difficult to measure (e.g., psychological suffering, chronic stress)

**Research basis**:
- Concept of "welfare debt" draws from governance debt frameworks applied to animal welfare.
- **Five Domains Model**: Mental state domain captures welfare impacts that may not be immediately visible (Mellor & Beausoleil, 2015).
- **Positive vs. Negative Welfare**: Much historical focus is on avoiding suffering (negative welfare), less on promoting positive experiences - this gap represents a form of welfare debt.

### Enforcement Gap (0-1)
**Definition**: Delay and inadequacy between welfare policy and actual enforcement.

**What it captures**:
- Time lag between policy adoption and implementation
- Resource gaps (inspectors, budget, training)
- Inadequate oversight capacity relative to standards

**Research basis**:
- **Animal Protection Index (API)**: Includes "Government support systems" indicator measuring enforcement capacity, resources, and accountability mechanisms.
- **SEI Report**: "Mainstreaming Animal Welfare in Sustainable Development" highlights enforcement capacity as a critical gap in welfare governance.
- Research on governance of animals in research shows enforcement gaps are common, especially in low-resource settings (see studies on Africa and Middle East).

### Regulatory Capture (0-1)
**Definition**: Industry influence on animal welfare policy and standards.

**What it captures**:
- Industry groups shaping welfare standards to their advantage
- Self-regulation replacing government oversight
- Standards that favor production efficiency over welfare

**Research basis**:
- **GLOBALG.A.P. legitimacy research**: Explores how private standard-setting bodies seek legitimacy through stakeholder participation, potentially leading to industry influence (Journal of Environmental Law, 2018).
- **Industry self-regulation**: Voluntary industry-led standards often reflect production interests rather than welfare priorities.
- **Animal Protection Index**: Measures presence of independent oversight bodies vs. industry-controlled standards.

### Sentience Knowledge Gap (0-1)
**Definition**: Gaps in understanding animal sentience, needs, and welfare requirements.

**What it captures**:
- Uncertainty about which animals are sentient
- Limited understanding of animal cognitive and emotional capacities
- Gaps in knowledge about welfare needs for different species

**Research basis**:
- **Animal Sentience research**: Ongoing scientific investigation into which animals are sentient (vertebrates, cephalopods, decapod crustaceans) - see Animal Sentience journal.
- **Recognition of sentience in law**: Varies by jurisdiction - some recognize only mammals/birds, others include more species (see API methodology).
- **Five Domains Model**: Mental state domain acknowledges gaps in understanding animal affective states.

### System Irreversibility (0-1)
**Definition**: Difficulty unwinding harmful animal production systems.

**What it captures**:
- Infrastructure lock-in (intensive farming facilities, supply chains)
- Market dependencies on current systems
- Political and economic barriers to transformation
- Path dependency in food systems

**Research basis**:
- **Path dependency in agriculture**: Research on agricultural system transitions shows how infrastructure and market structures create lock-in.
- **Alternative protein transitions**: Studies show barriers to shifting from traditional to alternative protein systems (cost, infrastructure, consumer acceptance).
- **System transformation literature**: General governance research on irreversibility applied to animal production systems.

## Research Frameworks Referenced

### Animal Protection Index (API)
**Source**: World Animal Protection  
**URL**: https://api.worldanimalprotection.org/methodology  
**Use**: Legal recognition, welfare legislation, government support systems, international standards alignment

### Five Domains Model
**Source**: Mellor & Reid (1994), Mellor & Beausoleil (2015)  
**Use**: Comprehensive welfare assessment framework covering nutrition, environment, health, behavior, and mental state

### Five Freedoms
**Source**: Farm Animal Welfare Council (UK, 1979)  
**Use**: Ethical baseline for welfare - freedom from hunger/thirst, discomfort, pain/injury/disease, ability to express normal behaviors, freedom from fear/distress

### WOAH/OIE Standards
**Source**: World Organisation for Animal Health (formerly OIE)  
**Use**: International animal welfare standards for farm animals, transport, slaughter

### Universal Declaration on Animal Welfare (UDAW)
**Source**: Proposed non-binding UN declaration  
**Use**: Framework for recognizing sentience and establishing welfare principles

### UNEA Resolution on Animal Welfare (2022)
**Source**: United Nations Environment Assembly  
**Use**: Recognition of animal welfare as part of environmental and sustainability policy

### Benchmark Method
**Source**: University of Copenhagen / AnimalEthics  
**Use**: Comparative scoring of welfare initiatives combining legislative and market-based dimensions

## Academic Journals Referenced

- **Journal of Applied Animal Welfare Science (JAAWS)**: Welfare science for farm, lab, zoo, companion animals
- **Frontiers in Animal Science** (Animal Welfare & Policy section): Policy analysis and welfare practices
- **Animal Sentience**: Investigations into animals' subjective experiences
- **Animal Welfare**: Peer-reviewed journal focusing on welfare science
- **Nature Scientific Reports**: Empirical studies on livestock production metrics

## Notes on Metric Design

### Why Measured vs. Unmeasured?
The distinction reflects the reality that organizations optimize for measurable outcomes (efficiency, cost, visible incidents) while welfare debt accumulates in less visible ways (enforcement gaps, knowledge gaps, system lock-in).

### Why These Specific Metrics?
Metrics were selected based on:
1. **Research validation**: All metrics have basis in academic or policy frameworks
2. **Governance relevance**: Metrics capture governance structure, not just welfare outcomes
3. **Simulator utility**: Metrics create meaningful tradeoffs and decision complexity
4. **Domain coverage**: Metrics span factory farming, alternative proteins, wildlife, and lab animals

### Metric Interactions
- **Welfare Debt** increases with decisions that prioritize efficiency/cost over welfare
- **Enforcement Gap** widens when standards are set without capacity to enforce
- **Regulatory Capture** increases with industry self-regulation
- **System Irreversibility** increases as infrastructure and market dependencies grow
- **Sentience Knowledge Gap** affects all other metrics by limiting understanding of welfare needs

## Version History

- **v1.0.0**: Initial metric definitions based on research synthesis
- Created for Animal Welfare Governance Simulator
- Metrics aligned with Electric Sheep/Futurekind ecosystem focus
