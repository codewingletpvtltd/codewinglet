---
description: Verify all home page screens are developed, check component structure, and generate screen development report
argument-hint: [home|all|detailed]
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
---

# Screen Development Verification

> **💡 What is this command?**  
> The `/screen-check` command verifies that all required home page screens/sections have been properly developed. It checks component files, type definitions, exports, and generates a comprehensive screen development report.

> **🚀 How to use it:**  
> Type `/screen-check [option]` where option is:
> - `home` — Check only home page sections (default)
> - `all` — Check all pages and modules
> - `detailed` — Generate detailed component analysis

## Automation Prompt

When `/screen-check` command is invoked:

1. **Scan home page modules** in `src/modules/Home/`:
   - ✅ Check if HeroSection exists and is properly exported
   - ✅ Check if AboutUs exists and is properly exported
   - ✅ Check if OurServices exists and is properly exported
   - ✅ Check if Technology exists and is properly exported
   - ✅ Check if Industries exists and is properly exported
   - ✅ Check if OurWorkProcess exists and is properly exported
   - ✅ Check if ContactUs exists and is properly exported

2. **Verify component structure** for each screen:
   - Check main component file exists (e.g., `HeroSection.tsx`)
   - Check `index.ts` exports component
   - Check TypeScript types are defined
   - Check for CSS/styling files
   - Verify props interface exists

3. **Analyze imports and dependencies**:
   - Check components import from correct paths
   - Verify no missing dependencies
   - Check for unused imports

4. **Generate screen development report** in `.claudeTesting/screen-check/screen-report.md` with:
   - **Status Summary** — Development completion percentage
   - **Component Checklist** — Each screen with status (✓ Complete / ✗ Missing / ⚠ Incomplete)
   - **Missing Files** — Any files that should exist but don't
   - **Export Status** — Verify all components are properly exported
   - **Type Coverage** — Check if all props are typed
   - **Recommendations** — Next steps for incomplete screens

5. **Build verification**:
   - Run `npm run build` to ensure all screens compile
   - Check for TypeScript errors in screen components
   - Verify no import resolution issues

## Example Output

```
═══════════════════════════════════════════════════════════════
  SCREEN DEVELOPMENT REPORT
═══════════════════════════════════════════════════════════════

📊 OVERALL STATUS: 7/7 Screens Developed (100%)

✓ HeroSection      [COMPLETE]     6 files, fully typed, exported
✓ AboutUs          [COMPLETE]     4 files, fully typed, exported
✓ OurServices      [COMPLETE]     5 files, fully typed, exported
✓ Technology       [COMPLETE]     6 files, fully typed, exported
✓ Industries       [COMPLETE]     3 files, fully typed, exported
✓ OurWorkProcess   [COMPLETE]     4 files, fully typed, exported
✓ ContactUs        [COMPLETE]     5 files, fully typed, exported

📁 FILE STRUCTURE:
   ✓ All component files present
   ✓ All index.ts files properly export components
   ✓ All type definitions present
   ✓ All styling files present

🔗 EXPORTS:
   ✓ All screens exported from src/modules/Home/index.tsx
   ✓ All screens imported in src/app/page.tsx

✅ BUILD STATUS: PASSED
   ✓ No TypeScript errors
   ✓ No missing imports
   ✓ All components compile successfully

✨ COMPLETION: Ready for review and deployment
```

## Related Commands

- `/bug-fixes` — Find and fix bugs in screens
- `/test-workflow` — Run comprehensive tests on screens
- `/responsive-testing` — Test screen responsiveness
- `/design-validation` — Validate screen design accuracy
