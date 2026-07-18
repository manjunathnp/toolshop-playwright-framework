# Framework Build Log

## Purpose
Running record of what got built, in order. File/command level, 
one-line reason per major step. Updated every session.

---

## Day 1 — [date]

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

## Day 2 — [date]
(next entries go here)