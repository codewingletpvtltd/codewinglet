---
description: Detect and report browser/runtime errors in development. Monitor application health and identify breaking issues before users see them
argument-hint: [dev|test|production|fix]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Browser Error Detector & Runtime Monitor

> **💡 What is this command?**  
> The `/browser-error-detector` command detects and reports errors that occur in the browser at runtime. It monitors for JavaScript errors, React warnings, network failures, and other issues that could break the user experience.

> **🚀 How to use it:**  
> Type `/browser-error-detector [environment]` where environment is:
> - `dev` — Development mode (catch all warnings and errors)
> - `test` — Test mode (strict checking)
> - `production` — Production build check
> - `fix` — Auto-fix detected issues

## Automation Prompt

When `/browser-error-detector` command is invoked:

### Phase 1: Error Detection

1. **Monitor JavaScript Errors**:
   ```
   - Syntax errors
   - Runtime errors (TypeError, ReferenceError, etc.)
   - Uncaught exceptions
   - Promise rejections
   ```

2. **Detect React-specific Issues**:
   ```
   - Hook violations (Invalid hook call)
   - Render errors
   - StrictMode warnings
   - Key warnings in lists
   - Missing component props
   ```

3. **Check Network Errors**:
   ```
   - Failed API calls (4xx, 5xx)
   - CORS errors
   - Timeout errors
   - Missing resources (404)
   ```

4. **Monitor Component Health**:
   ```
   - Infinite loops
   - Memory leaks
   - Unnecessary re-renders
   - Stale closures
   - Missing dependencies
   ```

### Phase 2: Error Categorization

5. **Categorize by severity**:
   - 🔴 **CRITICAL** — App breaks, users can't use it
   - 🟠 **ERROR** — Feature broken, bad user experience
   - 🟡 **WARNING** — Potential issue, should fix
   - 🟢 **INFO** — Informational, no impact

### Phase 3: Report Generation

6. **Generate error detection report** in `.claudeTesting/browser-errors/error-report.md`:
   - Error summary with counts
   - Detailed error logs by page
   - Stack traces and file locations
   - User impact assessment
   - Recommended fixes

### Phase 4: Auto-Fix (if fix option)

7. **Suggest and apply fixes**:
   - Add error boundaries
   - Fix hook violations
   - Add missing null checks
   - Add error handling
   - Suppress legitimate warnings

## Error Detection Examples

### Critical Errors 🔴

```javascript
// ERROR: Cannot read property 'title' of undefined
// File: src/modules/Home/AboutUs/AboutUs.tsx:25
// Impact: AboutUs section fails to render
// Fix: Add null check before accessing property

❌ {stat.title}  // crashes if stat is undefined
✅ {stat?.title || 'N/A'}  // safe with fallback
```

### React Warnings 🟡

```javascript
// WARNING: React Hook useEffect has a missing dependency
// File: src/modules/Home/Technology/Technology.tsx:45
// Issue: useEffect depends on 'selectedTab' but doesn't declare it
// Fix: Add 'selectedTab' to dependency array

❌ useEffect(() => { setTab(selectedTab); }, [])
✅ useEffect(() => { setTab(selectedTab); }, [selectedTab])
```

### Network Errors 🟠

```
ERROR: Failed to fetch from API
URL: https://api.example.com/data
Status: 500
Message: Internal Server Error
File: src/modules/Home/Technology/Technology.tsx (line 67)
Fix: Add error handling and retry logic
```

---

## Report Format

```
═══════════════════════════════════════════════════════════════
  BROWSER ERROR DETECTION REPORT
═══════════════════════════════════════════════════════════════

Environment: development
Timestamp: 2026-05-13 14:30:00
Build: Next.js 14 / React 18

---

## Error Summary

| Severity | Count | Status |
|----------|-------|--------|
| 🔴 Critical | 0 | ✅ PASS |
| 🟠 Error | 2 | ⚠️ ACTION NEEDED |
| 🟡 Warning | 8 | ⚠️ REVIEW |
| 🟢 Info | 5 | ℹ️ NOTE |

---

## Critical Errors
✅ NONE — Application is stable

---

## Errors (2)

### ERROR-001: TypeError in ContactUs Form
- **Severity:** 🟠 ERROR
- **File:** src/modules/Home/ContactUs/ContactUs.tsx (line 45)
- **Error:** Cannot read property 'email' of undefined
- **Trigger:** When form data is not initialized
- **Stack:**
  ```
  at HTMLInputElement.handleChange (ContactUs.tsx:45)
  at HTMLElement.dispatchEvent
  ```
- **Impact:** HIGH — Form input fails when user types
- **Root Cause:** formData not properly initialized
- **Solution:**
  ```javascript
  // Before
  const { email } = formData;  // May be undefined
  
  // After
  const { email } = formData || {};  // Safe default
  ```
- **Fix Time:** 2 minutes

### ERROR-002: Network Error in Technology Component
- **Severity:** 🟠 ERROR
- **File:** src/modules/Home/Technology/Technology.tsx (line 67)
- **Error:** Fetch failed: API endpoint unreachable
- **Status:** 503 Service Unavailable
- **Trigger:** Component tries to load tech data
- **Impact:** MEDIUM — Technology section shows nothing
- **Root Cause:** API not responding
- **Solution:**
  ```javascript
  // Add error handling and fallback
  try {
    const data = await fetch(API_URL);
    setTechData(data);
  } catch (error) {
    console.error('Failed to fetch:', error);
    setTechData(DEFAULT_DATA);  // Fallback
  }
  ```
- **Fix Time:** 5 minutes

---

## Warnings (8)

### WARN-001: React Hook Missing Dependency
- **Component:** Technology.tsx (line 78)
- **Hook:** useEffect
- **Warning:** React Hook useEffect has missing dependencies
- **Missing:** 'selectedTab'
- **Fix:** Add to dependency array: [selectedTab]
- **Effort:** 1 min

### WARN-002: Missing Alt Text
- **Component:** OurServices.tsx (line 24)
- **Element:** Image
- **Warning:** img element is missing required alt attribute
- **Fix:** Add alt="service description"
- **Effort:** 1 min

... (6 more warnings listed)

---

## Info Messages (5)

ℹ️ StrictMode: Detected unexpected side effect (HeroSection)
ℹ️ Performance: Component re-rendered 3 times
ℹ️ DevTools: React DevTools extension detected
ℹ️ FastRefresh: Hot reload working correctly
ℹ️ Build: Production build size: 425KB (gzipped)

---

## Page Health Status

| Page | Status | Errors | Warnings | Load Time |
|------|--------|--------|----------|-----------|
| Home | ⚠️ | 0 | 0 | 245ms |
| HeroSection | ✅ | 0 | 0 | 45ms |
| AboutUs | ✅ | 0 | 0 | 52ms |
| OurServices | ⚠️ | 0 | 1 | 78ms |
| Technology | ⚠️ | 1 | 2 | 156ms |
| Industries | ✅ | 0 | 0 | 34ms |
| OurWorkProcess | ✅ | 0 | 0 | 41ms |
| ContactUs | ⚠️ | 1 | 2 | 89ms |

---

## Component Health Details

### Technology Component
- **Status:** ⚠️ NEEDS ATTENTION
- **Issues:** 1 Error, 2 Warnings
- **Error:** Network fetch failure (ERROR-002)
- **Warnings:**
  - Missing useEffect dependency
  - Missing alt text on images
- **User Impact:** Section loads but shows incomplete data
- **Priority:** HIGH

### ContactUs Component
- **Status:** ⚠️ NEEDS ATTENTION
- **Issues:** 1 Error, 2 Warnings
- **Error:** Form data undefined (ERROR-001)
- **Warnings:**
  - Unused variable
  - Deprecation warning
- **User Impact:** Form may fail on input
- **Priority:** HIGH

---

## Network Requests

| Endpoint | Status | Response Time | Error |
|----------|--------|----------------|-------|
| /api/tech-stack | 503 | 2100ms | Service Unavailable |
| /api/services | 200 | 145ms | None |
| /api/industries | 200 | 98ms | None |

---

## Browser Console Logs

```
[ERROR] TypeError: Cannot read property 'email' of undefined
  at ContactUs.tsx:45
  
[WARN] React Hook useEffect has missing dependencies
  at Technology.tsx:78
  
[ERROR] Fetch failed: API Service Unavailable (503)
  at Technology.tsx:67
  
[WARN] Missing alt attribute on image element
  at OurServices.tsx:24
  
[INFO] Compiled successfully in 2.3s
```

---

## Fix Recommendations (Priority Order)

### 🔴 Critical (Fix Now)
None

### 🟠 High Priority (Fix Before Deploy)
1. **Fix ContactUs form error** (2 min)
   - Add null checks on formData
   - Test with empty form

2. **Fix Technology API error** (5 min)
   - Add error handling
   - Use fallback data
   - Test with offline mode

### 🟡 Medium Priority (Fix Before Production)
1. **Fix React Hook warnings** (2 min)
   - Add missing dependencies
   
2. **Add missing alt text** (2 min)
   - Accessibility improvement

### 🟢 Low Priority (Nice to Have)
- Remove unused variables
- Optimize performance
- Update deprecated APIs

**Total Fix Time:** 11 minutes

---

## Auto-Fix Applied (if fix option used)

✅ Fixed error in ContactUs.tsx (null safety)
✅ Added error boundary to Technology component
✅ Added alt text to images in OurServices
✅ Fixed useEffect dependencies in Technology

---

## Verification Checklist

- [ ] All critical errors fixed
- [ ] High priority warnings addressed
- [ ] Console shows no errors
- [ ] All pages load correctly
- [ ] Forms work without errors
- [ ] Network requests succeed
- [ ] Performance is acceptable
- [ ] Accessibility improved

---

## Deployment Readiness

**Status:** ⚠️ NEEDS FIXES

**Before Deploying:**
1. Fix 2 errors (11 min)
2. Re-run `/browser-error-detector test`
3. Verify all pages work
4. Test forms end-to-end
5. Check network requests

**After Fixes:**
- Re-run this command to verify
- Should show 0 errors, minimal warnings
- Ready for staging deployment
```

---

## Usage Examples

```bash
# Development check (catch warnings too)
/browser-error-detector dev

# Test environment (strict)
/browser-error-detector test

# Production build check
/browser-error-detector production

# Auto-fix common issues
/browser-error-detector fix

# After fixing, verify again
/browser-error-detector test
```

---

## Real-Time Error Streaming

When running in dev mode, errors are captured as they occur:

```
[14:30:45] [ERROR] TypeError in ContactUs at line 45
[14:30:46] [WARN] Missing dependency in useEffect
[14:30:47] [INFO] Network request started
[14:30:48] [ERROR] Network request failed (503)
[14:30:49] [INFO] Error boundary caught error
```

---

## Error Recovery

### Automatic Error Handling
- Error boundaries catch React errors
- Try-catch blocks wrap async code
- Fallback data for failed requests
- User-friendly error messages

### Manual Recovery
```bash
# Clear cache and restart dev server
npm run dev

# Check if issue is reproducible
/browser-error-detector dev

# If persistent, check specific component
npm run lint src/modules/Home/Technology/
```

---

## Related Commands

- `/console-health-check` — Monitor console health
- `/qa-check` — Comprehensive QA checks
- `/bug-fixes` — Find and fix bugs
- `/test-workflow` — Run complete tests
- `/responsive-testing` — Test on all devices
