# Testing.md v2.0 Blueprint
## Enterprise QA Agent Upgrade Plan (10/10 Target)

This document defines the architectural improvements required to evolve the current OpenCode QA agent into a production-grade, enterprise-level testing specification.

# Planned Modifications

## 1. Agent Architecture
- System Layer
- Project Discovery Engine
- Framework Detection Engine
- Dependency Analysis Engine
- UI Mapping Engine
- Route Discovery Engine
- API Discovery Engine
- Testing Engine
- Evidence Engine
- Reporting Engine
- Permission Engine

## 2. Execution State Machine
Initialize → Discover → Detect Framework → Build Project Graph → Static Analysis → Functional Analysis → UI Audit → UX Audit → Evidence Collection → Risk Analysis → Report → Permission Gate → Advanced Testing → Final Report

## 3. Project Discovery
Automatic detection of:
- React
- Next.js
- Vue
- Angular
- Laravel
- Django
- Flask
- FastAPI
- Express
- ASP.NET
- Spring
- Flutter
- React Native
- Electron
- Tauri

## 4. Repository Intelligence
Map:
- Folder tree
- Components
- Pages
- Routes
- Services
- APIs
- Database
- Assets
- Configuration
- Tests
- Build system

## 5. UI Intelligence
Expand to 250+ UI validation rules covering:
Typography, spacing, grids, colors, contrast, hover/focus states, animations,
loading states, error states, responsiveness, navigation, modals, drawers,
cards, forms, tables, search, filtering, pagination, themes, RTL, consistency.

## 6. UX Intelligence
Implement:
- Nielsen's 10 Heuristics
- Material Design
- Apple Human Interface Guidelines
- Fluent Design
- Cognitive Load analysis
- User journey validation
- Error prevention
- Feedback loops

## 7. Accessibility
Full WCAG 2.2 AA coverage:
- Keyboard navigation
- ARIA
- Screen readers
- Semantic HTML
- Focus management
- Contrast
- Reduced motion
- Touch targets

## 8. Functional Intelligence
Deep validation of:
CRUD, authentication, authorization, forms, uploads, downloads, sessions,
offline mode, caching, retries, race conditions, navigation, APIs.

## 9. Security Engine
OWASP Top 10
OWASP ASVS
Secrets scanning
JWT
OAuth
CORS
Cookies
Headers
XSS
CSRF
SQL Injection
SSRF
Command Injection
Rate limiting
File upload validation

## 10. Performance Engine
Measure:
- Core Web Vitals
- FCP
- LCP
- CLS
- INP
- TTFB
- Bundle size
- Memory
- CPU
- Render blocking
- Network waterfall

## 11. Framework-Specific Rules
Dedicated rule sets for:
Laravel, React, Vue, Angular, Next.js, Django, FastAPI, PHP, Python, Node.js, Java.

## 12. Evidence Engine
Every finding must include:
Severity
Priority
Confidence
Environment
Affected files
Expected behavior
Observed behavior
Evidence
Reproduction steps
Recommendation

## 13. Severity Matrix
Critical
High
Medium
Low
Info
Plus confidence %, business impact, technical impact, exploitability.

## 14. Report Engine
Primary report:
- test.md

Optional sectioned reports:
- summary.md
- ui.md
- ux.md
- security.md
- performance.md
- accessibility.md
- api.md

## 15. Testing Workflow
Audit → Report → Permission → Select Suite → Execute → Collect Evidence → Coverage → Final Report

## 16. OpenCode Optimization
- Incremental scanning
- Ignore lists
- Context optimization
- Parallel analysis
- Monorepo awareness
- Workspace awareness
- Chunked processing

## 17. Immutable Agent Rules
- Never modify code without explicit permission.
- Never fabricate findings.
- Never report without evidence.
- Never duplicate issues.
- Always include confidence.
- Always remain read-only until authorized.

## 18. Standard Finding Schema
ID
Category
Severity
Priority
Confidence
Environment
Component
Description
Evidence
Expected
Observed
Impact
Risk
Steps
Recommendation
Status

## 19. Coverage Metrics
- UI Coverage
- UX Coverage
- API Coverage
- Accessibility Coverage
- Performance Coverage
- Security Coverage
- Overall Confidence

## 20. Quality Gates
PASS
PASS WITH WARNINGS
FAIL

Release criteria are determined by unresolved Critical and High severity findings.

---

This blueprint is intended to be merged into the next major version of the OpenCode Testing Agent specification rather than replacing the existing Testing.md.
