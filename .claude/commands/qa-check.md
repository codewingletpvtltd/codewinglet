# QA Check Command

## Overview

Comprehensive quality assurance checks for any project. Scans code for bugs, TypeScript errors, linting issues, performance problems, accessibility violations, and generates a detailed QA report with recommendations.

## Purpose

Run automated quality assurance across your project to:
- Detect linting errors and style violations
- Check TypeScript compilation
- Identify build problems
- Analyze performance metrics
- Audit accessibility compliance
- Security vulnerability scan
- Generate actionable report

## Usage

```bash
/qa-check [option]
```

### Options

- `quick` — Fast scan (lint + TypeScript only) - **2-3 minutes**
- `full` — Complete analysis (lint + TypeScript + build + perf + a11y) - **5-10 minutes**
- `auto-fix` — Detect and auto-fix common issues - **3-5 minutes**

## What It Checks

### Code Quality
- ✅ ESLint violations (code style, best practices)
- ✅ Unused variables and imports
- ✅ Code complexity and duplication
- ✅ Missing dependencies
- ✅ Import ordering
- ✅ Naming conventions

### TypeScript
- ✅ Type errors
- ✅ Missing type definitions
- ✅ Incorrect prop types
- ✅ Generic type issues
- ✅ Union type violations
- ✅ Interface implementation

### Build
- ✅ Build compilation errors
- ✅ Bundle size analysis
- ✅ Dead code detection
- ✅ Missing assets
- ✅ Configuration issues
- ✅ Dependency conflicts

### Performance
- ✅ Component render optimization
- ✅ Unnecessary re-renders
- ✅ Large dependencies
- ✅ Memory usage patterns
- ✅ Bundle size bloat
- ✅ Image optimization

### Accessibility (WCAG 2.1 AA)
- ✅ Missing alt text on images
- ✅ Insufficient color contrast
- ✅ Missing semantic HTML
- ✅ ARIA attribute errors
- ✅ Keyboard navigation issues
- ✅ Focus management problems

### Security
- ✅ Hardcoded secrets/credentials
- ✅ XSS vulnerabilities
- ✅ SQL injection risks
- ✅ Dependency vulnerabilities (CVEs)
- ✅ Insecure headers
- ✅ Authentication issues

### Best Practices
- ✅ React hooks violations
- ✅ Next.js patterns
- ✅ Framework conventions
- ✅ Common pitfalls
- ✅ Performance anti-patterns
- ✅ Security best practices

## Output Report

### Report Structure

```
═══════════════════════════════════════════════════════════════
  COMPREHENSIVE QA REPORT
═══════════════════════════════════════════════════════════════

📊 OVERALL QA SCORE: XX/100

🔴 CRITICAL ISSUES: X
🟠 MAJOR ISSUES: X
🟡 MINOR ISSUES: X
🟢 INFO: X

---

## Critical Issues
- [Issue description]
- [Fix recommendation]

## Major Issues
- [Issue description]
- [Fix recommendation]

## Quality Breakdown
- Code Quality: XX/100
- TypeScript: XX/100
- Build: XX/100
- Performance: XX/100
- Accessibility: XX/100
- Security: XX/100

## Recommendations
- [Priority 1: Critical]
- [Priority 2: High]
- [Priority 3: Medium]

## Approval Status
✅ READY / ⚠️ NEEDS FIXES / ❌ BLOCKED
```

## Severity Levels

| Level | Impact | Action | Timeline |
|-------|--------|--------|----------|
| 🔴 CRITICAL | App broken, data loss, security risk | Fix immediately | Now |
| 🟠 MAJOR | Feature broken, significant UX impact | Fix soon | 24 hours |
| 🟡 MINOR | Feature partially broken, workaround exists | Fix before release | 72 hours |
| 🟢 INFO | Minor issue, no impact | Consider fixing | 1 week |

## Scoring

### Overall QA Score
```
Score = (Sum of Category Scores / 60) × 100

Categories (0-10 each):
- Code Quality (10 points)
- TypeScript (10 points)
- Build (10 points)
- Performance (10 points)
- Accessibility (10 points)
- Security (10 points)
```

### Pass/Fail Thresholds
- **90-100:** Excellent - Ready to merge immediately ✅
- **80-89:** Good - Minor fixes suggested ✅
- **70-79:** Fair - Address issues before release ⚠️
- **Below 70:** Poor - Critical fixes required ❌

## Common Issues & Fixes

### Code Quality Issues
- **Unused variables** → Remove or prefix with underscore
- **Missing imports** → Add import statements
- **Import ordering** → Reorder according to ESLint config
- **Console statements** → Remove debug logs
- **Duplicate code** → Extract to shared function

### TypeScript Issues
- **Type mismatch** → Correct type definition
- **Missing type** → Add explicit type annotation
- **Any type** → Replace with specific type
- **Interface mismatch** → Align implementation with interface
- **Generic error** → Fix generic type parameter

### Build Issues
- **Missing dependency** → Install missing package
- **Config error** → Fix build configuration
- **Path issue** → Correct import paths
- **Asset missing** → Add required asset
- **Syntax error** → Fix syntax in code

### Performance Issues
- **Large bundle** → Code split or optimize
- **Slow component** → Memoize or optimize render
- **Large image** → Optimize or compress
- **Memory leak** → Add cleanup in useEffect
- **N+1 query** → Batch queries or memoize

### Accessibility Issues
- **Missing alt text** → Add descriptive alt text
- **Low contrast** → Increase contrast ratio
- **No labels** → Associate labels with inputs
- **Not semantic** → Use semantic HTML tags
- **No focus** → Add focus styles

### Security Issues
- **Hardcoded secret** → Move to environment variable
- **XSS vulnerability** → Sanitize user input
- **CSRF token** → Implement CSRF protection
- **Outdated dependency** → Update to patched version
- **Missing header** → Add security headers

## Workflow

### Step 1: Run QA Check
```bash
/qa-check quick    # Fast check
/qa-check full     # Complete analysis
```

### Step 2: Review Report
- Check overall score
- Read critical/major issues
- Understand recommendations
- Plan fixes by priority

### Step 3: Fix Issues
- Address critical issues first
- Fix major issues
- Handle minor issues
- Re-run checks

### Step 4: Verify
```bash
/qa-check full
# Verify score improvement
# Confirm all fixes applied
# Check no new issues
```

### Step 5: Approve
- Score ≥ 80/100
- All critical issues fixed
- Ready for merge/release

## Integration with CI/CD

### Pre-commit
```bash
/qa-check quick
# Fails if critical issues found
```

### Pre-push
```bash
/qa-check full
# Fails if score < 80
```

### Pre-release
```bash
/qa-check full
# Fails if score < 90
```

## Tips & Best Practices

### Before Running
- ✅ Save all changes
- ✅ Commit current work
- ✅ Update dependencies
- ✅ Install latest packages

### Interpreting Results
- Read issue descriptions carefully
- Understand the "why" not just "what"
- Check recommendations
- Use provided fix suggestions

### Fixing Issues
- Start with critical issues
- Test each fix
- Don't introduce new issues
- Re-run QA check

### Automation
- Set up pre-commit hooks
- Run in CI/CD pipeline
- Block merge on low scores
- Track trends over time

## Project-Specific Customization

QA Check is general-purpose but can be customized per project via:
- ESLint configuration (`.eslintrc.json`)
- TypeScript config (`tsconfig.json`)
- Prettier config (`.prettierrc`)
- Security policies
- Accessibility standards

## Success Metrics

✅ All critical issues fixed  
✅ Score ≥ 85/100  
✅ Build passes  
✅ No TypeScript errors  
✅ Accessibility compliant  
✅ Security verified  

## Related Commands

- `/bug-fixes` — Find and list bugs
- `/console-health-check` — Monitor console output
- `/browser-error-detector` — Detect runtime errors
- `/screen-check` — Verify component structure
- `/design-validation` — Validate design compliance
- `/website-functionality-test` — Test features
- `/responsive-testing` — Test responsiveness

## Troubleshooting

### If QA Check Hangs
- Stop process (Ctrl+C)
- Check disk space
- Restart dev server
- Try with `quick` option first

### If Results Seem Wrong
- Run again to confirm
- Check for intermittent issues
- Review actual error messages
- Search issue in code

### If You Disagree with Result
- Review the specific issue
- Check ESLint/TypeScript documentation
- Consider if it's a valid concern
- Update configuration if needed

## FAQs

**Q: Should I fix all issues immediately?**  
A: Fix critical first, then major, then minor. Low priority can be batched.

**Q: Can I ignore certain issues?**  
A: Only with good reason. Most issues indicate real problems or maintenance debt.

**Q: How often should I run QA checks?**  
A: After each commit, before pushing, and definitely before releasing.

**Q: Can I use auto-fix for everything?**  
A: Use auto-fix for simple issues, but review the changes. Some fixes need manual review.

**Q: What's a good QA score?**  
A: Aim for 90+. Below 80 indicates significant issues that should be addressed.

---

## Status

✅ **READY TO USE** - General-purpose QA command for any project

**Works With:**
- Next.js projects ✅
- React projects ✅
- Node.js backends ✅
- TypeScript projects ✅
- JavaScript projects ✅
- Mixed technology stacks ✅

---

**Last Updated:** 2026-05-13  
**Version:** 1.0  
**Status:** Active
