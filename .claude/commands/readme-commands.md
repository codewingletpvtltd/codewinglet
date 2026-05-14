# Claude Commands Guide

## Overview

This directory contains specialized Claude Code commands for development, testing, and verification of the Codewinglet website. Each command automates specific tasks to ensure code quality, website functionality, and user experience.

---

## 📋 Available Commands

### 1. **Screen Development Check** `/screen-check`
**Purpose:** Verify all home page screens are properly developed and structured.

```bash
# Check only home page sections (default)
/screen-check home

# Generate detailed component analysis
/screen-check detailed

# Check all pages and modules
/screen-check all
```

**What it does:**
- ✅ Verifies all 7 home page sections exist
- ✅ Checks component file structure
- ✅ Validates exports and imports
- ✅ Checks TypeScript types
- ✅ Generates development status report

**Output:** `.claudeTesting/screen-check/screen-report.md`

---

### 2. **Comprehensive QA Check** `/qa-check`
**Purpose:** Run complete quality assurance checks including bugs, TypeScript errors, and performance.

```bash
# Quick check (lint + TypeScript)
/qa-check quick

# Full analysis (everything)
/qa-check full

# Auto-fix common issues
/qa-check auto-fix
```

**What it does:**
- ✅ Runs ESLint checks
- ✅ TypeScript compilation check
- ✅ Build verification
- ✅ Performance analysis
- ✅ Accessibility compliance
- ✅ Security audit
- ✅ Auto-fixes common issues
- ✅ Generates comprehensive QA report

**Output:** `.claudeTesting/qa-check/qa-report.md`

---

### 3. **Console Health Check** `/console-health-check`
**Purpose:** Monitor console for errors, warnings, and runtime issues.

```bash
# Quick check (dev server logs)
/console-health-check quick

# Full console analysis
/console-health-check full

# Live real-time monitoring
/console-health-check monitor

# Auto-suggest fixes for issues
/console-health-check auto-fix
```

**What it does:**
- ✅ Analyzes dev server logs
- ✅ Detects JavaScript errors
- ✅ Finds React warnings
- ✅ Monitors network errors
- ✅ Tracks console pollution
- ✅ Tests page loads
- ✅ Generates health report

**Output:** `.claudeTesting/console-health/health-report.md`

---

### 4. **Browser Error Detector** `/browser-error-detector`
**Purpose:** Detect and report runtime errors in the browser.

```bash
# Development mode (catch all warnings)
/browser-error-detector dev

# Test mode (strict checking)
/browser-error-detector test

# Production build check
/browser-error-detector production

# Auto-fix detected issues
/browser-error-detector fix
```

**What it does:**
- ✅ Monitors JavaScript errors
- ✅ Detects React hook violations
- ✅ Checks network failures
- ✅ Tests component health
- ✅ Provides stack traces
- ✅ Suggests fixes
- ✅ Categorizes by severity

**Output:** `.claudeTesting/browser-errors/error-report.md`

---

### 5. **Website Functionality Test** `/website-functionality-test`
**Purpose:** Test all website features to ensure everything works correctly.

```bash
# Quick smoke test (5 min)
/website-functionality-test quick

# Full comprehensive test (20 min)
/website-functionality-test full

# Interactive step-by-step guide
/website-functionality-test interactive

# Critical path testing
/website-functionality-test smoke-test
```

**What it does:**
- ✅ Tests all page loads
- ✅ Verifies each component renders
- ✅ Tests form submissions
- ✅ Checks navigation and links
- ✅ Tests responsive design
- ✅ Verifies accessibility
- ✅ Checks browser compatibility
- ✅ Measures performance
- ✅ Generates detailed test report

**Output:** `.claudeTesting/website-tests/test-report.md`

---

## 🔍 Bug Fixes Check (Existing) `/bug-fixes`
**Purpose:** Analyze current branch for bugs and generate QA report.

```bash
# Full-scan for all issues
/bug-fixes full-scan

# Quick analysis
/bug-fixes feature

# Component-specific check
/bug-fixes component
```

---

## 📊 When to Use Each Command

### During Development
```bash
# After making code changes
/qa-check quick          # Check for lint/type errors
/console-health-check quick   # Check console for errors

# Before committing
/qa-check full           # Complete quality check
/bug-fixes full-scan     # Check for all bugs
```

### After Code Changes
```bash
# Verify everything still works
/website-functionality-test quick     # Test critical paths
/screen-check home                    # Verify screens intact
/browser-error-detector dev           # Check for runtime errors
```

### Before Deployment
```bash
# Full verification
/qa-check full                        # Quality assurance
/website-functionality-test full      # Complete functionality test
/console-health-check full            # Monitor console health
/browser-error-detector test          # Strict error checking
/responsive-testing full              # Test responsive design
```

### Debugging Issues
```bash
# Find what's wrong
/console-health-check full            # Check console output
/browser-error-detector dev           # Identify runtime errors
/website-functionality-test interactive # Manual testing guide
/bug-fixes full-scan                  # Deep bug analysis
```

---

## ⚡ Quick Command Reference

| Task | Command | Time |
|------|---------|------|
| **Check structure** | `/screen-check home` | 1 min |
| **Quick lint check** | `/qa-check quick` | 2 min |
| **Monitor console** | `/console-health-check quick` | 1 min |
| **Detect errors** | `/browser-error-detector dev` | 2 min |
| **Test functions** | `/website-functionality-test quick` | 5 min |
| **Full QA** | `/qa-check full` | 5 min |
| **Full testing** | `/website-functionality-test full` | 20 min |
| **Complete check** | `/console-health-check full` | 3 min |

---

## 🎯 Command Usage Examples

### Scenario 1: Quick Development Check
After making changes to a component:
```bash
/qa-check quick          # 2 min - Check for errors
/console-health-check quick    # 1 min - Check console
```

### Scenario 2: Full Quality Review
Before pushing to develop branch:
```bash
/qa-check full           # 5 min - Full QA check
/bug-fixes full-scan     # 3 min - Check for bugs
/console-health-check full     # 3 min - Monitor console
```

### Scenario 3: Complete Validation
Before deploying to production:
```bash
/website-functionality-test full  # 20 min - Full test
/qa-check full                    # 5 min - Quality check
/console-health-check full        # 3 min - Console check
/browser-error-detector test      # 2 min - Strict error check
/responsive-testing full          # 10 min - Responsive test
```

### Scenario 4: Debugging Reported Issue
When users report errors:
```bash
/console-health-check full        # Check console logs
/browser-error-detector dev       # Find runtime errors
/website-functionality-test interactive  # Manual test
/bug-fixes full-scan              # Deep bug analysis
```

---

## 📈 Command Output Locations

All reports are generated in the `.claudeTesting/` directory:

```
.claudeTesting/
├── screen-check/
│   └── screen-report.md          # Screen development status
├── qa-check/
│   └── qa-report.md              # Quality assurance report
├── console-health/
│   └── health-report.md          # Console health report
├── browser-errors/
│   └── error-report.md           # Browser error report
├── website-tests/
│   └── test-report.md            # Functionality test report
└── bug-fixes/
    └── bug-report.md             # Bug analysis report
```

---

## 🚀 Recommended Daily Workflow

### Morning (Start of day)
```bash
/console-health-check quick    # Check for overnight issues
/qa-check quick                # Verify no regression
```

### During Development
```bash
/console-health-check quick    # After code changes
/qa-check quick                # Before committing
```

### Before Pushing
```bash
/qa-check full                 # Full quality check
/bug-fixes full-scan           # Check for all bugs
/website-functionality-test quick  # Test critical paths
```

### Before Deployment
```bash
/website-functionality-test full   # Complete test suite
/qa-check full                     # Full QA check
/console-health-check full         # Monitor everything
/responsive-testing full           # Test all devices
```

---

## 📝 Report Interpretation Guide

### Quality Score (QA Check)
- **90-100:** Excellent ✅ - Ready to merge
- **85-89:** Good ✅ - Minor issues acceptable
- **70-84:** Needs Work ⚠️ - Address issues before merge
- **Below 70:** Blocked ❌ - Critical issues must be fixed

### Health Score (Console Check)
- **90-100:** Excellent ✅ - No issues
- **80-89:** Good ✅ - Minor warnings only
- **70-79:** Fair ⚠️ - Some issues to address
- **Below 70:** Poor ❌ - Significant issues

### Test Pass Rate (Functionality Test)
- **95-100%:** Pass ✅ - All systems go
- **90-94%:** Minor Issues ⚠️ - Check details
- **80-89%:** Needs Fixes ⚠️ - Address issues
- **Below 80%:** Blocked ❌ - Critical failures

---

## 🔧 Auto-Fix Options

Most commands support auto-fix:

```bash
/qa-check auto-fix                    # Auto-fix QA issues
/console-health-check auto-fix        # Suggest console fixes
/browser-error-detector fix           # Fix common errors
```

---

## 🆘 Troubleshooting

### If commands aren't available
- Ensure dev server is running: `npm run dev`
- Verify you're in the project directory
- Check `.claude/commands/` folder exists

### If reports don't generate
- Check `.claudeTesting/` folder exists
- Verify write permissions
- Try running command again

### If tests fail
1. Run `/console-health-check quick` to check for errors
2. Run `/browser-error-detector dev` to find runtime issues
3. Check dev server logs: `tail -f /tmp/dev-server.log`
4. Restart dev server: `npm run dev`

---

## 📚 Related Documentation

- **Project Guide:** See `CLAUDE.md` for project architecture
- **Stitch Guide:** See `.claude/agents/stitch-code-generator.md`
- **Testing Guide:** See `test-workflow` command documentation

---

## ✨ Tips & Best Practices

1. **Run quick checks frequently** during development
2. **Run full checks** before committing or pushing
3. **Review reports carefully** - they contain actionable fixes
4. **Auto-fix when possible** - saves time on common issues
5. **Re-run after fixes** to verify improvements
6. **Keep reports** for documentation and tracking
7. **Use interactive mode** when learning the system

---

## 🎯 Success Metrics

**Your website is ready when:**
- ✅ All screens developed and verified
- ✅ Quality score ≥ 85/100
- ✅ Console health ≥ 80/100
- ✅ Zero critical errors
- ✅ All functionality tests pass
- ✅ Accessibility compliant
- ✅ Responsive on all devices
- ✅ Performance acceptable

---

## 📞 Support

For questions about commands:
- Run `[command] --help` for detailed documentation
- Check report files in `.claudeTesting/` for insights
- Review command markdown files in this folder
- Use `/help` for general Claude Code help

---

**Last Updated:** 2026-05-13  
**Status:** All commands active and ready to use ✅
