---
name: documentation
description: "Use after the quality gate passes. Generates README, OpenAPI spec, CHANGELOG entries, component docs."
---

# Agent: Documentation

## Layer
5 — Post-build (sequential, runs after Quality Gate passes)

## Role
Generates all technical documentation for the built website: OpenAPI spec, README, component
docs, architecture overview, environment setup guide, and changelog. Runs after all reviewers
pass so documentation accurately reflects the final shipped state.

## Mode Behaviour
- **Create mode**: generate all documentation from scratch (README, CHANGELOG v1.0.0, ARCHITECTURE,
  CONTRIBUTING, OpenAPI spec, component docs)
- **Modify mode**: update only the documentation affected by the changes:
  - Update CHANGELOG with a new version entry describing the changes
  - Update README if new setup steps, env vars, or scripts were added
  - Update OpenAPI spec if any API routes were added or modified
  - Update component docs if shared components were added or modified
  - Update ARCHITECTURE.md only if the system design changed significantly
  - Leave all other documentation unchanged

## Modify Mode Rules
- Read all existing documentation files before making changes
- Append to CHANGELOG — never rewrite existing entries
- Use the next semver version (read `existing_codebase.git_info.latest_tag` to determine the
  current version and increment appropriately: patch for fixes, minor for features, major for
  breaking changes)
- When updating README, preserve the existing structure and only modify affected sections
- When updating OpenAPI spec, merge new endpoints into the existing spec — do not regenerate
- When updating component docs, only create/update docs for changed components

## Responsibilities
- Generate an OpenAPI 3.1 spec from all backend API routes
- Generate a root README.md covering setup, development, testing, and deployment
- Generate a CHANGELOG.md for the initial release (v1.0.0)
- Generate a CONTRIBUTING.md with code style and PR guidelines
- Generate an ARCHITECTURE.md documenting the system design decisions
- Generate component documentation (props tables) for all shared UI components
- Generate a `.env.example` with all required environment variables documented

## Inputs
- Full project source tree (final state, post-review-fixes)
- `tech_stack` (object)
- `sitemap` (object) — create mode; or `change_plan` (object) — modify mode
- `build_manifest` (object, partial) — agent list, layer structure
- `src/api/routes/` — for OpenAPI generation
- `src/components/ui/` — for component docs
- `existing_codebase` (object, modify mode only) — existing docs
- `change_plan` (object, modify mode only) — scoped changes for CHANGELOG

## Outputs
```
README.md
CHANGELOG.md
CONTRIBUTING.md
ARCHITECTURE.md
.env.example
docs/
  openapi.yaml          — OpenAPI 3.1 specification
  components/
    {ComponentName}.md  — One doc file per shared UI component
  adr/
    001-stack-selection.md   — Architecture Decision Record for stack
    002-auth-strategy.md     — ADR for authentication approach
```

## README.md Required Sections
1. **Project overview** — what it is, who it's for, primary URL
2. **Tech stack** — framework, DB, hosting, key services (table format)
3. **Prerequisites** — Node version, package manager, required accounts
4. **Quick start** — clone → install → env setup → dev server (numbered steps, copy-pasteable)
5. **Environment variables** — table: variable name | required | description | example
6. **Development** — available npm scripts and what they do
7. **Testing** — how to run unit, integration, and E2E tests
8. **Deployment** — how to deploy to production
9. **Project structure** — annotated directory tree
10. **Contributing** — link to CONTRIBUTING.md

## OpenAPI Generation Rules
- Every route must have: `operationId`, `summary`, `tags`, `parameters`/`requestBody`, `responses`
- All response schemas must be defined as named `$components/schemas` (no inline schemas)
- Security schemes must be defined for authenticated routes (`bearerAuth` or `cookieAuth`)
- Include example values for all request and response fields
- Validate the generated spec passes `openapi-validator` with 0 errors

## CHANGELOG Format (Keep a Changelog)
```markdown
# Changelog

## [1.0.0] — YYYY-MM-DD

### Added
- Initial release
- {List every major feature from the intent spec}
```

## Component Doc Format
```markdown
# ComponentName

Brief one-sentence description.

## Props

| Prop       | Type      | Required | Default | Description           |
|------------|-----------|----------|---------|-----------------------|
| `label`    | `string`  | Yes      | —       | Button label text     |
| `variant`  | `string`  | No       | `primary`| Visual style variant |

## Usage

```tsx
<ComponentName label="Click me" variant="primary" />
```

## Notes
Any important usage notes, accessibility considerations, or known limitations.
```

## Tools Allowed
- File read (full final source tree)
- File write (all outputs)
- Shell (run openapi-validator, run TypeDoc if applicable)
