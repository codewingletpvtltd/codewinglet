---
description: Test website functionality - verify all features work correctly, no broken links, forms submit, pages load properly
argument-hint: [quick|full|interactive|smoke-test]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Website Functionality Test

> **💡 What is this command?**  
> The `/website-functionality-test` command performs comprehensive testing of your website to ensure all features work correctly. It verifies page loads, form submissions, navigation, responsiveness, and identifies any broken functionality.

> **🚀 How to use it:**  
> Type `/website-functionality-test [option]` where option is:
> - `quick` — Fast smoke test (basic functionality)
> - `full` — Complete test suite (all features)
> - `interactive` — Manual testing guide
> - `smoke-test` — Critical path testing

## Automation Prompt

When `/website-functionality-test` command is invoked:

### Phase 1: Page Load Testing

1. **Test page accessibility**:
   - ✅ Home page loads (http://localhost:3000)
   - ✅ All sections render without errors
   - ✅ Images load correctly
   - ✅ Stylesheets applied properly
   - ✅ JavaScript executes without errors

2. **Verify page performance**:
   - Page load time < 3 seconds
   - Time to Interactive (TTI) < 5 seconds
   - Largest Contentful Paint (LCP) < 2.5 seconds
   - Cumulative Layout Shift (CLS) < 0.1

3. **Check resource loading**:
   - All images load (200 status)
   - No 404 errors
   - CSS fully applied
   - JavaScript bundles loaded

### Phase 2: Component Testing

4. **Test each home page section**:
   ```
   ✅ HeroSection
     - Heading visible
     - CTA buttons clickable
     - Stats displayed
     - Background gradient rendering
   
   ✅ AboutUs
     - Content visible
     - Stat cards render
     - Two-column layout responsive
   
   ✅ OurServices
     - Service cards display
     - Card content correct
     - Icons showing
     - Grid layout responsive
   
   ✅ Technology
     - Tab interface works
     - Tabs switch correctly
     - Content updates on switch
     - Responsive on mobile
   
   ✅ Industries
     - Industry pills display
     - List renders properly
     - Styling applied
   
   ✅ OurWorkProcess
     - Timeline shows all steps
     - Numbers visible
     - Description text present
   
   ✅ ContactUs
     - Form fields visible
     - Labels correct
     - Placeholders showing
     - Submit button clickable
   ```

### Phase 3: Form Functionality Testing

5. **Test contact form**:
   - Input fields accept text
   - Form validation works
   - Submit button enabled/disabled correctly
   - Form submission handling
   - Success/error messages display
   - Form resets after submission

6. **Test form validation**:
   - Required fields enforced
   - Email validation works
   - Phone number validation (if applicable)
   - Message length validation
   - Error messages display correctly

### Phase 4: Navigation & Links Testing

7. **Test navigation**:
   - All internal links work (no 404s)
   - Links open correct pages
   - Back button works
   - URL updates correctly

8. **Test interactive elements**:
   - Buttons clickable
   - Links have proper hover states
   - Clickable areas are large enough (min 44x44px)
   - Focus states visible (accessibility)

### Phase 5: Responsive Design Testing

9. **Test on different screen sizes**:
   ```
   Mobile (375px)
   - Layout stacks vertically
   - No horizontal scrolling
   - Touch targets are large (min 44x44px)
   - Text is readable
   
   Tablet (768px)
   - Two-column layouts work
   - Images scale properly
   - Navigation works
   
   Desktop (1024px+)
   - Full layout displays
   - Grid systems work
   - Content properly spaced
   ```

10. **Test responsive features**:
    - Images responsive
    - Font sizes scale
    - Spacing adjusts
    - Navigation adapts

### Phase 6: Browser Compatibility Testing

11. **Test cross-browser**:
    - Chrome/Chromium ✅
    - Firefox ✅
    - Safari ✅
    - Edge ✅

12. **Test browser features**:
    - LocalStorage works
    - Cookies work
    - SessionStorage works
    - IndexedDB (if used)

### Phase 7: Accessibility Testing

13. **Test keyboard navigation**:
    - Tab key navigates all interactive elements
    - Enter key activates buttons
    - Escape key closes modals
    - Focus indicators visible

14. **Test accessibility compliance**:
    - Color contrast adequate (4.5:1 for text)
    - Alt text on images
    - Form labels associated
    - Semantic HTML used
    - ARIA attributes correct

### Phase 8: Report Generation

15. **Generate test report** in `.claudeTesting/website-tests/test-report.md`:
    - Test execution summary
    - Pass/fail for each component
    - Performance metrics
    - Issues found
    - Recommendations

## Example Test Report

```
═══════════════════════════════════════════════════════════════
  WEBSITE FUNCTIONALITY TEST REPORT
═══════════════════════════════════════════════════════════════

Test Type: Full Test Suite
Timestamp: 2026-05-13 14:45:00
Browser: Chrome 120
Environment: Development (localhost:3000)

---

## Summary

| Category | Passed | Failed | Total | Status |
|----------|--------|--------|-------|--------|
| Page Loads | 1 | 0 | 1 | ✅ PASS |
| Components | 7 | 0 | 7 | ✅ PASS |
| Forms | 1 | 1 | 2 | ⚠️ FAIL |
| Navigation | 15 | 2 | 17 | ⚠️ FAIL |
| Responsive | 9 | 0 | 9 | ✅ PASS |
| Accessibility | 12 | 1 | 13 | ⚠️ FAIL |
| Performance | 4 | 0 | 4 | ✅ PASS |
| **TOTAL** | **49** | **4** | **53** | **⚠️** |

**Overall Status:** ⚠️ NEEDS FIXES (92% Pass Rate)

---

## Page Load Test Results

### Home Page
- **URL:** http://localhost:3000
- **Status:** ✅ PASS
- **Load Time:** 245ms ✓
- **TTI:** 1.2s ✓
- **LCP:** 1.8s ✓
- **CLS:** 0.08 ✓
- **Errors:** 0
- **Warnings:** 0

---

## Component Test Results

### ✅ HeroSection
- [x] Heading visible
- [x] Gradient background rendering
- [x] CTA buttons visible
- [x] CTA buttons clickable
- [x] Stats cards displayed
- [x] Responsive on mobile

### ✅ AboutUs
- [x] Section renders
- [x] Two-column layout
- [x] Stat cards display
- [x] Stats numbers correct
- [x] Responsive design

### ✅ OurServices
- [x] Service cards display
- [x] 6 services shown
- [x] Card content correct
- [x] Icons visible
- [x] Grid layout responsive

### ✅ Technology
- [x] Component renders
- [x] Tabs visible
- [x] Tab switching works
- [x] Content updates
- [x] Responsive layout

### ✅ Industries
- [x] Industry pills display
- [x] All industries shown
- [x] Layout responsive
- [x] Styling applied

### ✅ OurWorkProcess
- [x] Timeline displays
- [x] All 5 steps shown
- [x] Numbers visible
- [x] Descriptions present

### ✅ ContactUs
- [x] Section renders
- [x] Form visible
- [x] Input fields present
- [x] Submit button visible

---

## Form Functionality Test Results

### Contact Form
- [x] First name field accepts input
- [x] Last name field accepts input
- [x] Email field accepts input
- [x] Message field accepts input
- ❌ **Form submission fails** — No handler configured
- [x] Form layout responsive
- [x] Labels visible

**Issues Found:**
1. **Form submission not handling** (ERROR)
   - Issue: onSubmit prop has no handler
   - Impact: Form appears to submit but nothing happens
   - Fix: Add form submission handler or API endpoint

---

## Navigation & Links Test

### Internal Links
- [x] Scroll to sections work
- [x] Hash navigation working
- ❌ **Link to /about page returns 404**
- ❌ **Link to /services page returns 404**
- [x] Back button works
- [x] Forward button works

**Issues Found:**
1. Links to /about and /services pages don't exist
   - Pages not created yet
   - Should be built or links removed

---

## Responsive Design Test

### Mobile (375px)
- [x] No horizontal scrolling
- [x] Touch targets adequate (44x44px+)
- [x] Text readable
- [x] Images scale properly
- [x] Navigation accessible
- [x] Forms usable

### Tablet (768px)
- [x] Two-column layouts work
- [x] Images scale correctly
- [x] Spacing appropriate
- [x] Navigation functions
- [x] Forms accessible

### Desktop (1024px)
- [x] Full layout displays
- [x] Grid systems work
- [x] Content properly spaced
- [x] All features visible

---

## Accessibility Test Results

### Keyboard Navigation
- [x] Tab key navigates
- [x] Enter activates buttons
- [x] Focus indicators visible
- [x] No keyboard traps
- [x] Form fields focusable

### Color & Contrast
- [x] Text contrast adequate
- ❌ **Button text color issue** — Insufficient contrast on hover state
- [x] Headings readable
- [x] Icons distinguishable

### Semantic HTML
- [x] Proper heading hierarchy
- [x] Form labels associated
- [x] Semantic elements used
- [x] List markup correct

### Images & Media
- ❌ **Missing alt text** — 3 images missing alt attributes
- [x] Icons have labels
- [x] Images load correctly

**Issues Found:**
1. Missing alt text on 3 images
   - Location: OurServices section
   - Fix: Add descriptive alt text
   - Priority: Medium

2. Button contrast issue
   - Location: CTA buttons on hover
   - Issue: Text color not enough contrast with background
   - Fix: Adjust hover state colors
   - Priority: High

---

## Performance Metrics

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Load Time | 245ms | < 3s | ✅ |
| TTI | 1.2s | < 5s | ✅ |
| LCP | 1.8s | < 2.5s | ✅ |
| CLS | 0.08 | < 0.1 | ✅ |
| FCP | 0.8s | < 1.8s | ✅ |
| Bundle Size | 425KB | < 500KB | ✅ |

---

## Issues Found (4 Critical & High Priority)

### 🔴 CRITICAL

None

### 🟠 HIGH PRIORITY

1. **Form submission not configured**
   - Component: ContactUs
   - Status: ❌ BROKEN
   - Impact: Users can't submit contact form
   - Fix Time: 10 min
   - Solution: Implement form submission handler

2. **Button contrast issue**
   - Component: CTA Buttons
   - Status: ⚠️ ACCESSIBILITY ISSUE
   - Issue: Hover state text color insufficient contrast
   - Fix Time: 5 min
   - Solution: Adjust hover colors in tailwind

### 🟡 MEDIUM PRIORITY

3. **Missing internal pages**
   - Links: /about, /services
   - Status: ⚠️ BROKEN LINKS
   - Impact: Links return 404
   - Fix Time: Implementation dependent
   - Solution: Create pages or remove links

4. **Missing alt text**
   - Location: OurServices images (3)
   - Status: ⚠️ ACCESSIBILITY
   - Impact: Images not accessible
   - Fix Time: 5 min
   - Solution: Add descriptive alt attributes

---

## Recommendations

### 🔴 Critical (Fix Now)
1. Implement contact form submission handler

### 🟠 High Priority (Fix Before Deploy)
1. Fix button color contrast on hover state
2. Add form submission validation and feedback

### 🟡 Medium Priority (Fix Before Production)
1. Add missing alt text to images
2. Create missing pages (/about, /services) or update links

### 🟢 Low Priority (Nice to Have)
- Optimize images for WebP format
- Add loading skeletons
- Implement analytics tracking

**Total Estimated Fix Time:** 20 minutes

---

## Test Execution Checklist

### Pre-Test
- [x] Dev server running on localhost:3000
- [x] No console errors
- [x] Browser DevTools open
- [x] Network throttling off
- [x] JavaScript enabled

### During Test
- [x] Tested all pages
- [x] Tested all components
- [x] Tested all forms
- [x] Tested navigation
- [x] Tested on mobile view
- [x] Tested keyboard navigation
- [x] Checked accessibility

### Post-Test
- [ ] Issues documented
- [ ] Screenshots taken of failures
- [ ] Recommended fixes listed
- [ ] Developers assigned
- [ ] Fix timeline created

---

## Browser & Environment

- **Browser:** Chrome 120.0
- **OS:** macOS 14.5
- **Node Version:** 20.x
- **Next.js Version:** 14
- **React Version:** 18
- **Tailwind Version:** 3.x

---

## Approval Status

⚠️ **NEEDS FIXES**

**Status:** Website mostly functional but has 4 issues preventing production deployment.

**Before Staging:**
1. Fix form submission (CRITICAL)
2. Fix accessibility issues (HIGH)
3. Add missing features (MEDIUM)

**Before Production:**
1. All above fixes
2. Re-run full test suite
3. Pass accessibility audit
4. Performance optimization

---

## Next Test Run

Recommended: After implementing fixes from issues found
Command: `/website-functionality-test full`
```

---

## Test Commands

```bash
# Quick smoke test (5 min)
/website-functionality-test quick

# Full comprehensive test (20 min)
/website-functionality-test full

# Interactive testing guide
/website-functionality-test interactive

# Critical path only
/website-functionality-test smoke-test
```

---

## Interactive Testing Mode

When using `interactive` option, you'll get step-by-step guides:

```
📋 INTERACTIVE WEBSITE TESTING GUIDE

Step 1: Test Home Page
- Open http://localhost:3000 in browser
- Verify page loads without errors
- Check all sections render correctly
- Take screenshot if issues found

Step 2: Test Navigation
- Click each internal link
- Verify correct page/section loads
- Check no 404 errors in console
- Verify URL updates

Step 3: Test Contact Form
- Click on Contact section
- Fill out form with test data
- Submit form
- Check if submission succeeds
- Verify success/error message

... (more steps)
```

---

## Automated Testing Integration

For CI/CD pipelines:

```bash
#!/bin/bash
/website-functionality-test smoke-test
RESULT=$?

if [ $RESULT -eq 0 ]; then
  echo "✅ Website tests passed"
  exit 0
else
  echo "❌ Website tests failed"
  exit 1
fi
```

---

## Debugging Failed Tests

If tests fail:

```bash
# 1. Check browser console
/console-health-check full

# 2. Run specific component test
/screen-check detailed

# 3. Check for errors
/browser-error-detector dev

# 4. Detailed bug analysis
/bug-fixes full-scan
```

---

## Related Commands

- `/console-health-check` — Monitor console health
- `/browser-error-detector` — Detect runtime errors
- `/qa-check` — Comprehensive QA checks
- `/responsive-testing` — Test responsive design
- `/test-workflow` — Run complete test suite
- `/screen-check` — Verify screen structure
