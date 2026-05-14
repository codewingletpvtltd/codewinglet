---
description: Monitor console for errors, warnings, and runtime issues. Verify website works fine without console errors or failures
argument-hint: [quick|full|monitor|auto-fix]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Console Health Check & Error Monitoring

> **💡 What is this command?**  
> The `/console-health-check` command monitors and analyzes your application for console errors, warnings, and runtime issues. It verifies the website is functioning properly without any breaking errors or critical warnings.

> **🚀 How to use it:**  
> Type `/console-health-check [option]` where option is:
> - `quick` — Fast check (current console output)
> - `full` — Complete analysis (all dev server logs)
> - `monitor` — Live monitoring (watch for errors)
> - `auto-fix` — Detect and suggest fixes for common issues

## Automation Prompt

When `/console-health-check` command is invoked:

### Phase 1: Console Log Analysis

1. **Capture dev server logs**:
   ```bash
   tail -f /tmp/dev-server.log
   ```
   Analyze for:
   - 🔴 JavaScript errors
   - 🟠 TypeScript compilation errors
   - 🟡 React warnings (StrictMode, hook violations)
   - 🟢 Info messages
   - ⚠️ Deprecation warnings

2. **Check for known error patterns**:
   - React hook violations (useState, useEffect order)
   - Missing dependencies
   - Memory leaks
   - Infinite loops
   - Unhandled promise rejections
   - Network errors

3. **Verify no critical errors**:
   - App crashes
   - White screen of death
   - Failed imports
   - Missing environment variables
   - Build failures

### Phase 2: Runtime Verification

4. **Test application pages** (if `full` or `auto-fix`):
   - Check home page loads without errors
   - Check each screen section loads
   - Check forms submit without errors
   - Check navigation works
   - Check responsive design doesn't break

5. **Check browser DevTools console**:
   - Screenshot errors if running in browser
   - Log all console messages
   - Track error frequency

### Phase 3: Report Generation

6. **Generate console health report** in `.claudeTesting/console-health/health-report.md`:
   - **Overall Health Score** (0-100)
   - **Error Summary** — Count and severity
   - **Warning Summary** — Count by type
   - **Critical Issues** — Must fix
   - **Warnings** — Should fix
   - **Info Messages** — For reference
   - **Recommendations** — Priority-ordered fixes

### Phase 4: Auto-Fix (if auto-fix option)

7. **Suggest and apply fixes**:
   - Add missing React hook dependencies
   - Fix console.log/console.error statements
   - Remove deprecated API calls
   - Add error boundaries
   - Fix type errors

## Example Report

```
═══════════════════════════════════════════════════════════════
  CONSOLE HEALTH CHECK REPORT
═══════════════════════════════════════════════════════════════

📊 OVERALL HEALTH SCORE: 85/100 ✅ GOOD

🔴 CRITICAL ERRORS: 0
🟠 MAJOR WARNINGS: 2
🟡 MINOR WARNINGS: 5
🟢 INFO MESSAGES: 12

---

## Critical Errors
✅ NONE — No critical errors found

---

## Major Warnings

### WARN-001: React Hook Missing Dependency
- **Component:** Technology.tsx
- **Hook:** useEffect (line 45)
- **Issue:** Missing dependency in dependency array
- **Message:** React Hook useEffect has a missing dependency: 'selectedTab'
- **Severity:** 🟠 HIGH
- **Fix:** Add 'selectedTab' to dependency array: [selectedTab]
- **Fix Effort:** 1 min

### WARN-002: Unused Variable
- **Component:** ContactUs.tsx
- **Variable:** clientDate (line 38)
- **Issue:** Variable declared but never used
- **Message:** 'clientDate' is assigned a value but never used
- **Severity:** 🟡 MEDIUM
- **Fix:** Remove unused variable declaration
- **Fix Effort:** 1 min

---

## Minor Warnings (5)

1. ⚠️ Missing alt text on images (OurServices.tsx:12)
2. ⚠️ Console.log statement left in code (ContactUs.tsx:64)
3. ⚠️ Deprecated prop usage (HeroSection.tsx:28)
4. ⚠️ Unhandled promise rejection potential (Form submission)
5. ⚠️ Memory leak potential in scroll listener

---

## Info Messages (12)

✓ Dev server running successfully on port 3000
✓ All components loaded
✓ Hot module replacement working
✓ TypeScript compilation successful
✓ Tailwind CSS compiled
... (more info messages)

---

## Page Load Status

| Page | Status | Load Time | Errors |
|------|--------|-----------|--------|
| Home | ✅ OK | 245ms | 0 |
| About | ✅ OK | 198ms | 0 |
| Services | ✅ OK | 312ms | 0 |
| Technology | ✅ OK | 287ms | 0 |
| Contact | ⚠️ WARNING | 425ms | 1 warning |

---

## Recommendations

### 🔴 Critical (Fix Now)
None

### 🟠 High Priority (Fix Soon)
1. Fix React hook dependency warning (1 min)

### 🟡 Medium Priority (Fix Before Deploy)
1. Remove unused variable (1 min)
2. Fix console statements (2 min)

### 🟢 Low Priority (Nice to Have)
1. Add missing alt text (5 min)
2. Review memory leak potential (10 min)

**Total estimated fix time:** 19 minutes

---

## Health Indicators

✅ **App Starts Successfully** — No startup errors
✅ **Pages Load** — All pages accessible
✅ **No Crashes** — App doesn't crash on interaction
✅ **Forms Work** — Form submissions process
✅ **Navigation Works** — All links functional
✅ **Responsive Design** — Works on all sizes

⚠️ **Minor Warnings** — 7 warnings that should be addressed
⚠️ **Performance** — Contact page takes 425ms (target: <300ms)

---

## Action Items

- [ ] Fix React hook dependency warning (Technology.tsx:45)
- [ ] Remove unused clientDate variable (ContactUs.tsx:38)
- [ ] Add missing alt text to images
- [ ] Review and remove console statements
- [ ] Test form submission end-to-end
- [ ] Monitor performance metrics
- [ ] Re-run console health check after fixes

---

## Approval Status

✅ **WEBSITE IS FUNCTIONAL**

**Status:** Website works without critical errors. Minor warnings should be addressed before production.

**Next Steps:**
1. Fix critical warnings (1 min)
2. Remove minor issues (10 min)
3. Re-run `/console-health-check full` to verify
4. Deploy to staging for user testing
```

---

## Commands for Different Scenarios

```bash
# Quick check (dev server logs only)
/console-health-check quick

# Full analysis (comprehensive)
/console-health-check full

# Live monitoring (watch for errors in real-time)
/console-health-check monitor

# Auto-suggest fixes
/console-health-check auto-fix

# After fixing issues, verify again
/console-health-check full
```

---

## Common Issues Detected

### 🔴 Critical
- **App Crashes** — White screen, unhandled errors, missing imports
- **Build Failures** — TypeScript errors, missing dependencies
- **Runtime Errors** — Unhandled promise rejections, null reference

### 🟠 High Priority
- **React Warnings** — Hook dependency violations, StrictMode warnings
- **Network Errors** — Failed API calls, CORS issues
- **Type Errors** — Runtime type mismatches

### 🟡 Medium Priority
- **Console Pollution** — Excessive console.log/warn statements
- **Unused Code** — Dead imports, unused variables
- **Performance** — Slow page loads, memory leaks

### 🟢 Low Priority
- **Deprecation Warnings** — Old API usage
- **Missing Metadata** — Alt text, meta tags
- **Code Quality** — Unused variables, style issues

---

## Real-Time Monitoring

When using `monitor` option:

```bash
/console-health-check monitor

# Output streams in real-time:
[ERROR] TypeError: Cannot read property 'name' of undefined (HeroSection.tsx:45)
[WARN] Missing dependency in useEffect: 'selectedTab' (Technology.tsx:78)
[INFO] Page loaded successfully in 245ms
[ERROR] Unhandled promise rejection in form submission
[WARN] Component re-renders 5 times on mount (Performance)
```

---

## Integration with CI/CD

Use in automated checks:

```bash
#!/bin/bash
/console-health-check full
SCORE=$(grep "OVERALL HEALTH SCORE" .claudeTesting/console-health/health-report.md)
if [ "$SCORE" -lt 80 ]; then
  echo "❌ Health check failed: $SCORE"
  exit 1
else
  echo "✅ Health check passed: $SCORE"
  exit 0
fi
```

---

## Related Commands

- `/qa-check` — Comprehensive QA and bug detection
- `/bug-fixes` — Find and fix specific bugs
- `/screen-check` — Verify all screens are developed
- `/responsive-testing` — Test responsive design
- `/test-workflow` — Run complete test suite
