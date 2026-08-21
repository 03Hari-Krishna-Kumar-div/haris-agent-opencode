# Haris Agent OpenCode Backup

Complete backup of OpenCode agents, skills, and configuration.

## Contents

### `/opencode/` - Global OpenCode Config
- `agents/` - Agent definitions (web-analyzer, webdev-v1, seo, apple-boy-v1)
- `skills/` - Skills (ui-ux-pro-max, slides, design, brand, ui-styling, design-system, banner-design)

### `/agents/` - Workspace Agent Definitions
- Web-Analyzer.md
- Webdeveloper.md
- seo.md
- Testing.md
- DebugV1.1.md
- apple-boy-v1.md
- opencode.json (main config)

### `/skills/` - Installed Skills
- brandkit
- design-taste-frontend
- design-taste-frontend-v1
- find-skills
- full-output-enforcement
- gpt-taste
- high-end-visual-design
- image-to-code
- imagegen-frontend-mobile
- imagegen-frontend-web
- industrial-brutalist-ui
- minimalist-ui
- redesign-existing-projects
- skill-creator
- stitch-design-taste

### `/config/` - Lock Files
- skills-lock.json
- .skill-lock.json

### `/claude/` - Claude Settings
- settings.json

## Restoration Instructions

### For OpenCode
1. Copy `opencode/agents/` contents to `~/.opencode/agent/`
2. Copy `opencode/skills/` contents to `~/.opencode/skills/`
3. Copy `config/skills-lock.json` to workspace root

### For .agents Skills
1. Copy `skills/` contents to `~/.agents/skills/`
2. Copy `config/.skill-lock.json` to `~/.agents/`

### For Workspace
1. Copy `agents/` contents to your project root
2. Copy `agents/opencode.json` to project root

## Agents Included

| Agent | Description |
|-------|-------------|
| web-analyzer | Website Intelligence consulting workflow |
| webdev-v1 | Full-stack web developer |
| seo | Production-grade SEO specialist |
| apple-boy-v1 | Apple design philosophy & fluid interfaces |
| DebugV1.1 | Universal debugging engineer |
| Testing | Enterprise QA agent blueprint |

## Skills Included

| Skill | Source |
|-------|--------|
| ui-ux-pro-max | OpenCode built-in |
| slides | OpenCode built-in |
| design | OpenCode built-in |
| brand | OpenCode built-in |
| ui-styling | OpenCode built-in |
| design-system | OpenCode built-in |
| banner-design | OpenCode built-in |
| brandkit | Leonxlnx/taste-skill |
| design-taste-frontend | Leonxlnx/taste-skill |
| design-taste-frontend-v1 | Leonxlnx/taste-skill |
| full-output-enforcement | Leonxlnx/taste-skill |
| gpt-taste | Leonxlnx/taste-skill |
| high-end-visual-design | Leonxlnx/taste-skill |
| image-to-code | Leonxlnx/taste-skill |
| imagegen-frontend-mobile | Leonxlnx/taste-skill |
| imagegen-frontend-web | Leonxlnx/taste-skill |
| industrial-brutalist-ui | Leonxlnx/taste-skill |
| minimalist-ui | Leonxlnx/taste-skill |
| redesign-existing-projects | Leonxlnx/taste-skill |
| stitch-design-taste | Leonxlnx/taste-skill |
| skill-creator | anthropics/skills |
| find-skills | vercel-labs/skills |
