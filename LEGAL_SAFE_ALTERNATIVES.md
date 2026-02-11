# Legally Safe Alternatives for Civ-Style Features

## General Principles
1. **Use archetypes/concepts, not names** - "The Ethicist" not "Peter Singer"
2. **Generic titles** - "The Welfare Scientist" not "Temple Grandin"
3. **Historical figures (public domain)** - Only if clearly historical and factual
4. **Fictionalized versions** - Inspired by but clearly not representing real people
5. **Focus on roles** - What they do, not who they are

## Great People / Specialists - Safe Alternatives

### Instead of Real Names → Use Archetypes

| Real Person Inspiration | Safe Alternative | Description |
|---|---|---|
| Jane Goodall | **The Primatologist** | "A renowned researcher whose groundbreaking work on animal cognition has revolutionized our understanding of sentience." |
| Temple Grandin | **The Welfare Engineer** | "An innovator who designs humane systems that balance welfare with practical production needs." |
| Peter Singer | **The Ethicist** | "A philosopher whose work on animal ethics has shaped modern welfare frameworks." |
| Rachel Carson | **The Conservationist** | "An advocate whose research on ecosystem health has influenced conservation policy." |
| Any Policy Expert | **The Policy Architect** | "A governance expert who designs effective regulatory frameworks." |

### Implementation Approach
- Use titles/roles: "The [Role]" format
- Add descriptive bios that are generic but inspired
- Focus on contributions/concepts, not individuals
- Can mention "inspired by the work of researchers in this field" in credits

## Wonders - Safe Alternatives

### Instead of Real Projects → Use Conceptual Achievements

| Real Inspiration | Safe Alternative | Effect |
|---|---|---|
| Universal Declaration on Animal Welfare | **Global Welfare Accord** | Reduces enforcement gap globally |
| EU Animal Welfare Strategy | **Regional Standards Framework** | Improves standards in multiple countries |
| Alternative Protein Innovation | **Protein Transition Initiative** | Reduces welfare debt |

### Approach
- Generic names that describe the concept
- Inspired by real achievements but not copying names
- Focus on the type of achievement, not specific organizations

## Victory Conditions - Already Safe ✅
- These are game mechanics, not real-world references
- "Welfare Victory" is generic enough
- No legal concerns here

## Random Events - Safe Alternatives

### Use Generic Event Types, Not Specific Incidents

| Real Inspiration | Safe Alternative |
|---|---|
| "Horsemeat Scandal" | **"Food Safety Incident"** |
| "Battery Cage Ban" | **"Confinement Standard Reform"** |
| "Live Export Ban" | **"Transport Regulation Shift"** |

### Approach
- Describe the type of event, not specific real-world incidents
- Use generic terms: "scandal," "breakthrough," "pressure"
- Focus on the category of event, not the specific case

## Tech Tree - Safe Alternatives

### Use Research Domains, Not Specific Papers

| Real Inspiration | Safe Alternative |
|---|---|
| "Five Domains Model" | **"Comprehensive Welfare Assessment"** |
| "Cambridge Declaration" | **"Sentience Recognition Framework"** |
| "Animal Protection Index" | **"Global Welfare Standards Index"** |

### Approach
- Generic research areas
- Can reference concepts in descriptions without naming specific papers
- Focus on the type of research, not specific publications

## Diplomacy/Trade - Already Safe ✅
- Generic concepts: "Trade Agreement," "Research Partnership"
- No real-world references needed

## Timeline/History - Safe Approach
- Show YOUR decisions and their impacts
- Don't reference real historical events
- Focus on the simulated timeline

## Achievement System - Already Safe ✅
- Generic achievement names
- "Ethical Pioneer," "Pragmatic Governor" - all generic

## Best Practices

1. **Use "The [Role]" format** - Clear archetype, not person
2. **Generic descriptions** - "A researcher who..." not "Dr. X who..."
3. **Conceptual names** - "Welfare Accord" not "EU Directive 98/58"
4. **Focus on types** - "A breakthrough in..." not "The 2012 breakthrough..."
5. **Educational context** - Can mention real concepts in credits/explainers, but not in gameplay

## Example: Great People Implementation

```typescript
interface GreatPerson {
  id: string
  title: string  // "The Ethicist" not "Peter Singer"
  description: string  // Generic description
  triggerCondition: string  // What unlocks them
  effect: { /* bonuses */ }
  quote?: string  // Generic inspirational quote
}

const greatPeople: GreatPerson[] = [
  {
    id: "the_ethicist",
    title: "The Ethicist",
    description: "A philosopher whose groundbreaking work on animal ethics has shaped modern welfare frameworks. Their insights help balance competing moral considerations.",
    triggerCondition: "Emphasize ethics in 3+ decisions",
    effect: { welfareDebt: -0.15, sentienceKnowledgeGap: -0.1 }
  },
  // ... more generic archetypes
]
```

## Legal Safety Checklist

- ✅ No real person names (except historical/public domain if clearly historical)
- ✅ No specific organization names (use generic: "International Organization" not "WOAH")
- ✅ No specific event names (use types: "Policy Shift" not "EU Directive 98/58")
- ✅ Generic titles and roles
- ✅ Conceptual achievements
- ✅ Focus on types/categories, not specifics
- ✅ Can reference concepts in educational context (credits, explainers) but not gameplay
