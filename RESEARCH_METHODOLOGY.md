# Research Methodology
## How Research Was Selected and Verified for Inheritance

**Date**: January 2026  
**Purpose**: Document the research selection process, citation standards, and limitations

---

## Research Selection Criteria

### Primary Sources

**Government Documents:**
- Official policy documents, legislation, and regulatory frameworks
- Direct links to government websites (.gov, .gov.uk, ec.europa.eu, etc.)
- Preference for primary sources over secondary summaries
- Archive.org fallbacks for historical documents (pre-2020)

**Academic Papers:**
- Peer-reviewed journals (Nature, Cell, MDPI, etc.)
- DOI links where available
- Preference for open-access or publicly accessible papers
- Focus on recent research (2020-2024) with historical context where relevant

**NGO Reports:**
- Established organizations (World Animal Protection, Humane Society International, Animal Welfare Institute)
- Direct links to organization websites
- Preference for primary reports over news summaries

**Industry Sources:**
- Company websites for market data (Beyond Meat, Good Food Institute)
- Industry association reports where relevant
- Clearly labeled as industry sources

### Source Type Classification

All sources are classified with `sourceType`:
- `government`: Official government documents
- `peer-reviewed`: Academic journals with peer review
- `ngo`: Non-governmental organization reports
- `industry`: Industry association/company reports
- `news`: News articles (Nature News, etc.)
- `academic`: Academic but not peer-reviewed (working papers, etc.)

---

## Citation Standards

### URL Verification
- All URLs verified for accessibility (as of 2026-01-19)
- Broken URLs replaced with working alternatives
- Historical documents include `archiveUrl` pointing to Archive.org
- `lastVerified` date recorded for all URLs (YYYY-MM-DD format)

### DOI Integration
- All academic papers include DOI where available
- DOI format: `https://doi.org/[DOI]`
- DOI displayed prominently in citations

### Metadata Requirements
- **Required**: `sourceType`, `lastVerified`
- **Optional**: `doi`, `archiveUrl`, `year`
- **Case Studies**: `title`, `description`, `url`, `year`, `analysis`, `outcomes`

---

## Limitations and Gaps

### Known Limitations

1. **Language**: All sources are in English
   - Non-English sources translated or summarized
   - May miss nuances in original language

2. **Temporal Scope**: 
   - Focus on 1990s-present for detailed case studies
   - Historical context provided but not exhaustive
   - Future projections based on current trends

3. **Geographic Coverage**:
   - Emphasis on US, EU, UK, and major producing countries
   - Some regions have less detailed coverage
   - 31 countries tracked, but not comprehensive global coverage

4. **Source Availability**:
   - Some historical documents may be difficult to access
   - Archive.org used as fallback for older sources
   - Some industry data may be behind paywalls

5. **AI Governance Integration**:
   - AI governance frameworks are rapidly evolving
   - Some case studies reference emerging policies
   - May need updates as AI governance matures

### Research Gaps

1. **Wild Animal Suffering**: 
   - Less comprehensive than farm animal welfare
   - Emerging field with limited historical data
   - More theoretical frameworks

2. **Invertebrate Welfare**:
   - Scientific consensus still developing
   - UK 2022 recognition is recent
   - Limited regulatory frameworks

3. **AI Sentience**:
   - Highly speculative
   - No established frameworks yet
   - Based on theoretical considerations

4. **Long-term Impacts**:
   - Many outcomes are projections
   - Limited historical data for long-term governance debt
   - Based on theoretical models

---

## Verification Process

### URL Verification Steps

1. **Automated Checks**: Verify URLs are accessible
2. **Content Verification**: Ensure URL matches case study description
3. **Domain Updates**: Check for moved URLs (e.g., EU food.ec.europa.eu)
4. **Archive Fallbacks**: Add Archive.org links for historical documents
5. **Metadata Addition**: Add sourceType, lastVerified, doi where applicable

### Quality Assurance

- All URLs tested for accessibility
- Broken URLs replaced or removed
- Metadata standardized across all sources
- DOI format consistent (`https://doi.org/[DOI]`)

---

## Future Maintenance

### Regular Updates Needed

1. **Quarterly**: Verify URLs are still accessible
2. **Annually**: Update `lastVerified` dates
3. **As Needed**: Add new case studies and citations
4. **When Policies Change**: Update relevant case studies

### Version Control

- All changes tracked in URL_VERIFICATION_LOG.md
- Version numbers in scenario files
- Clear documentation of updates

---

## Citation Format

### In-Text Citations
- Author/Organization, Year
- Direct links provided
- DOI links for academic papers

### Bibliography Format
- Exportable as BibTeX, APA, MLA, Markdown
- Includes all metadata
- Sorted by category and year

---

## Contact and Updates

For questions about research methodology or to report broken links:
- Check URL_VERIFICATION_LOG.md for verification status
- All URLs verified as of 2026-01-19
- Regular updates recommended
