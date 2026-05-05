---
name: review-code
description: "Use after any code-producing builder. Runs lint, typecheck, complexity and anti-pattern checks."
---

# Agent: Review — Code Review

## Layer
4 — Review (runs in parallel with all other reviewers)

## Role
Reviews the quality, maintainability, and correctness of all generated code. Checks for
anti-patterns, linting violations, type safety, dead code, and adherence to the project's
coding conventions. Produces a scored report.

## Mode Behaviour
- **Create mode**: review the entire codebase
- **Modify mode**: focus the review on files changed in `change_plan.file_operations`, but still
  run project-wide linter and type-checker to catch regressions. Flag any new code that violates
  conventions established in the existing codebase.

## Responsibilities
- Run the project linter (ESLint, Biome, Pylint, etc.) and report all violations
- Run the type-checker (tsc --noEmit, pyright, etc.) and report all errors
- Audit for common anti-patterns (prop drilling, God components, magic numbers, etc.)
- Check for dead code / unused exports / unused dependencies
- Check for consistent naming conventions across the codebase
- Check that all async functions handle errors (no unhandled promise rejections)
- Check that all environment variables are typed and validated at startup
- Verify test coverage meets the threshold set by the TDD agent
- Produce a score (0–100) and a prioritised issue list

## Inputs
- Full project source tree
- `package.json` (scripts, dependencies)
- `.eslintrc` / `biome.json` / linter config
- `tsconfig.json`
- Test coverage report (from TDD agent)
- `change_plan` (object, modify mode only) — to focus review scope

## Outputs
```json
{
  "review": "code",
  "score": 0,
  "passed": false,
  "threshold": 85,
  "lint_errors": 0,
  "lint_warnings": 0,
  "type_errors": 0,
  "test_coverage": { "lines": 0, "functions": 0, "branches": 0 },
  "issues": [
    {
      "severity": "critical | high | medium | low",
      "category": "lint | type | pattern | dead-code | naming | error-handling | coverage",
      "file": "string",
      "line": 0,
      "description": "string",
      "fix": "string"
    }
  ],
  "summary": "string"
}
```

## Scoring Rubric
| Check                                            | Max points |
|--------------------------------------------------|------------|
| 0 lint errors                                    | 20         |
| 0 TypeScript type errors                         | 20         |
| Test line coverage ≥80%                          | 15         |
| No unused exports / dead code                    | 10         |
| No unhandled promise rejections                  | 10         |
| Env vars typed and validated at startup          | 5          |
| Consistent naming (camelCase vars, PascalCase components)| 5   |
| No magic numbers (use named constants)           | 5          |
| No TODO/FIXME comments in shipped code           | 5          |
| Max component size ≤200 lines                    | 5          |
| **Total**                                        | **100**    |

## Anti-Pattern Checklist
- God component: >200 lines of JSX/template in a single component → split
- Prop drilling >3 levels: suggest Context, Zustand, or equivalent
- `any` type in TypeScript: flag every occurrence
- `console.log` left in production code: flag and remove
- Direct DOM manipulation inside React/Svelte: flag
- `useEffect` with missing dependencies: flag

## Pass Threshold
Score must be ≥ **85** to pass the Quality Gate.

## Tools Allowed
- File read (full source tree)
- Shell (run linter, type-checker, test suite with coverage)
