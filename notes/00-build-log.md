# Framework Build Log

## Purpose
Running record of what got built, in order. File/command level, 
one-line reason per major step. Updated every session.

---

## Day 1 — Jul 17, 2026

1. Scaffolded project — npm init playwright@latest 
   (why: standard Playwright + TypeScript starting point)

2. Added npm scripts to package.json 
   (why: shortcuts for running tests/reports)

3. Git initialized, connected to GitHub, first commit pushed 
   (why: version control from day one)

4. Created tsconfig.json with esModuleInterop, skipLibCheck 
   (why: fixes common TypeScript import issues)

5. Configured testIdAttribute in playwright.config.ts 
   (why: app uses data-test, not Playwright's default data-testid)

6. Built pages/LoginPage.ts 
   (why: first POM class, login flow)

7. Fixed missing await bug in LoginPage.login() 
   (why: caught during review, async actions need await)

8. Set up .env / .env.example, wired into playwright.config.ts 
   (why: avoid hardcoded baseURL)

9. Created notes/ (public) and learning-log/ (private, gitignored) 
   (why: separate portfolio docs from personal learning notes)

10. Cleaned up duplicate structure file 
    (why: framework-scaffold.md and framework-status.md overlapped, 
    kept one)

---

## Day 2 — Jul 18, 2026

1. Built pages/BasePage.ts 
   (why: shared base class for common page properties/methods, 
   avoids repeating page setup in every page class)

2. Refactored LoginPage.ts to extend BasePage 
   (why: removes duplicate constructor/property, inherits from 
   BasePage instead)

3. Removed unused Page import from LoginPage.ts 
   (why: no longer directly referenced after refactor, caught via 
   review)

4. Verified refactor compiles cleanly — npx tsc --noEmit 
   (why: confirm inheritance change introduced no errors)

5. Committed and pushed BasePage + LoginPage changes 
   (why: checkpoint working refactor before moving to next concept)

6. Created cheatsheet/commands.md 
   (why: separate quick command reference from concept notes in notes/)

7. Revised full project timetable with actual calendar dates, 
   accounting for interview deadline and unavailable days (Aug 8-10) 
   (why: align learning pace with real constraint, not open-ended estimate)

---

## Day 3 — [date]
(next entries go here)