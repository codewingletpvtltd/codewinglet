---
description: Analyze current branch for bugs, TypeScript issues, lint failures, build errors, security risks, and generate a comprehensive QA report
argument-hint: [feature|component|api|full-scan]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Bug Fixes & Quality Assurance

> **💡 What is this command?**  
> The `/bug-fixes` command automatically scans your current branch for bugs, quality issues, and potential problems. It generates a comprehensive bug report with severity levels, fix recommendations, and a quality score. Use this to identify and prioritize issues before merging to develop or main.

> **🚀 How to use it:**  
> Simply type `/bug-fixes` in your Claude Code session. The command will:
> - Analyze your code for linting errors, TypeScript issues, and build problems
> - Generate a detailed bug report in `.claudeTesting/bug-fixes/bug-report.md`
> - Calculate an Overall Quality Score to gauge branch readiness
> - Provide priority and timeline recommendations for fixes

## Automation Prompt

When `/bug-fixes` command is invoked:

1. **Automatically detect bugs** on the current branch:
   - Run `npm run lint` to get linting warnings
   - Run `npm run build` to check for build errors
   - Analyze TypeScript compilation
   - Check for existing issues in the codebase

2. **Generate bug report automatically** in `.claudeTesting/bug-fixes/bug-report.md` with:
   - **Command:** /bug-fixes (at the top of report)
   - **Current date:** YYYY-MM-DD format
   - **Current branch:** from git (e.g., feat/integrate-ai-agent)
   - **All required sections:** Assessment Summary, Critical Issues, Major Issues, Minor Issues, Quality Check Breakdown, Fix Priority & Timeline, Verification Checklist, Approval Status
   - **Scoring:** Calculate Overall Quality Score based on formula (Sum of Quality Check Scores / 70) × 100

3. **No manual input required** — The report should be generated programmatically with actual findings from the branch analysis.

---

## Overview

Bug identification, tracking, and resolution process with quality metrics.

> **📋 Report Structure:**  
> The auto-generated bug report follows a standardized format with severity levels, detailed assessments, and actionable recommendations. This helps you prioritize fixes and understand the overall health of your branch.

## Bug Report Markdown Format

Generate `.claudeTesting/bug-fixes/bug-report.md` automatically using this format:

```markdown
# Bug Report: [branch-name]

**Date:** YYYY-MM-DD  
**Branch:** [branch]  
**Severity:** CRITICAL|HIGH|MEDIUM|LOW  
**Status:** OPEN|IN_PROGRESS|NEEDS_REVIEW  

---

## Assessment Summary

| Metric | Score | Result |
|--------|-------|--------|
| **Overall Quality Score** | X/100 | ✅ or ⚠️ or ❌ |
| **Critical Bugs** | X | 🔴 |
| **Major Bugs** | X | 🟠 |
| **Minor Bugs** | X | 🟡 |
| **Total Issues** | X | — |

---

## Critical Issues

### BUG-001: [Title]
- **Severity:** 🔴 CRITICAL
- **File:** [path]
- **Issue:** [Description]
- **Impact:** [HIGH/MEDIUM/LOW]
- **Root Cause:** [Cause]
- **Recommendation:** [Fix description]
- **Fix Effort:** [Time estimate]

---

## Major Issues

### BUG-002: [Title]
- **Severity:** 🟠 MAJOR
- **File:** [path]
- **Lines:** [Line numbers]
- **Issue:** [Description]
- **Impact:** [Impact statement]
- **Recommendation:** [Fix description]
- **Fix Effort:** [Time estimate]

---

## Minor Issues

### BUG-00X: [Title]
- **Severity:** 🟡 MINOR
- **File:** [path]
- **Issue:** [Description]
- **Recommendation:** [Fix suggestion]

---

## Quality Check Breakdown

| Category | Score | Max | Issues |
|----------|-------|-----|--------|
| **Code Quality** | X | 20 | [Issues list] |
| **Testing** | X | 20 | [Issues list] |
| **Security** | X | 15 | [Issues list] |
| **Performance** | X | 15 | [Issues list] |
| **Compatibility** | X | 15 | [Issues list] |
| **Documentation** | X | 15 | [Issues list] |

---

## Fix Priority & Timeline

| Priority | Bug | Est. Time | Risk |
|----------|-----|-----------|------|
| 🔴 HIGH | BUG-XXX | XX min | [Risk level] |
| 🟠 MEDIUM | BUG-XXX | XX min | [Risk level] |

**Total estimated fix time:** XX minutes

---

## Verification Checklist
- [ ] [Item 1]
- [ ] [Item 2]
- [ ] [Item 3]

---

## Approval Status
✅ PASS or ❌ BLOCKED

**Merge Decision:** ✅ MERGE or 🛑 BLOCKED
```

## Bug Severity Levels

> **🎯 Understanding Severity:**  
> Each issue is classified by severity to help you prioritize fixes. CRITICAL and HIGH issues should block merging, while MEDIUM and LOW can often be handled after merge.

| Severity | Description | Response Time |
|----------|-------------|----------------|
| 🔴 CRITICAL | App crash, data loss, security breach | Immediate |
| 🟠 HIGH | Major feature broken, significant UX impact | 24 hours |
| 🟡 MEDIUM | Feature partially broken, workaround exists | 72 hours |
| 🟢 LOW | Minor issue, cosmetic, no impact | 1 week |

**💡 Tip:** If your report has CRITICAL or HIGH issues, fix them before merging. LOW issues can be tracked for future sprints.

## Quality Checks (70 points total)

> **📊 What these scores mean:**  
> Your Overall Quality Score is calculated from 6 categories (70 points total). A score of 85+ is considered passing. Each category has specific criteria that ensure your code meets professional standards before merge.

### Code Quality (20 points)
- Fix follows code standards
- No new complexity introduced
- Clear variable naming
- Proper error handling

> **💡 Why it matters:** Clean, maintainable code is easier to debug and extend later.

### Testing (20 points)
- Unit tests added/updated
- Integration tests pass
- Edge cases covered
- No new test failures

> **💡 Why it matters:** Tests catch regressions and ensure your fix works in all scenarios.

### Security (15 points)
- No security vulnerabilities introduced
- Input validation maintained
- No hardcoded values
- Dependencies secure

> **💡 Why it matters:** Security issues can expose user data and compromise the app.

### Performance (15 points)
- No performance regression
- Optimized fix implementation
- Efficient algorithms
- Minimal memory overhead

> **💡 Why it matters:** Slow code degrades user experience and increases server costs.

### Compatibility (15 points)
- Backwards compatible
- No breaking changes
- Cross-browser compatible
- Mobile responsive

> **💡 Why it matters:** Your fix should work across all devices and browsers your users rely on.

### Documentation (15 points)
- Code comments clear
- Commit message descriptive
- Related issues linked
- Test cases documented

> **💡 Why it matters:** Good documentation helps team members understand and maintain your code.

## Scoring Formula

Overall Score = (Sum of Quality Check Scores / 70) × 100

**Pass if:** Score ≥ 85 AND all critical tests pass

> **📈 Understanding your score:**
> - **90-100:** Excellent — ready to merge immediately
> - **85-89:** Good — minor issues to address
> - **70-84:** Needs review — significant issues to fix
> - **Below 70:** Blocked — critical issues prevent merge

---

## 💡 Quick Tips & Examples

### After Running `/bug-fixes`

1. **Review the Bug Report** in `.claudeTesting/bug-fixes/bug-report.md`
2. **Check CRITICAL and HIGH issues first** — these must be fixed before merge
3. **Run the fixes** — Claude can help you fix identified issues
4. **Re-run `/bug-fixes`** to verify improvements and see the updated score

### Example Workflow

```
1. You create a feature branch: feat/new-blog-page
2. Run `/bug-fixes` → Report shows 2 CRITICAL linting errors, score of 60
3. Fix the errors based on recommendations
4. Run `/bug-fixes` again → Score improves to 88, ready to merge
5. Create PR to develop branch
```

### Common Issues Found

- **Linting Errors:** ESLint violations (use `npm run lint:fix` to auto-fix)
- **TypeScript Errors:** Type mismatches (fix in source files)
- **Build Errors:** Missing imports or config issues (shown in build output)
- **Code Quality:** Unused variables, long functions, duplicated code
- **Security:** Hardcoded secrets, missing input validation
- **Performance:** Inefficient loops, missing optimizations

> **🎯 Remember:** This tool is here to help you ship better code. Use it early and often in your development process!
