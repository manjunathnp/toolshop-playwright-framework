# Lessons Learnt — Auth POM (LoginPage, RegisterPage)

## 1. DOM structure is not consistent within the same app

Finding: Login form has 3 separate error elements, not 1.
- data-test="email-error" → "Email is required"
- data-test="password-error" → "Password is required"
- data-test="login-error" → "Invalid email or password"

Finding: Register form uses inconsistent data-test naming convention.
- data-test="first-name" (hyphen)
- data-test="last-name" (hyphen)
- data-test="postal_code" (underscore)
- data-test="house_number" (underscore)

Lesson: Never assume a naming pattern applies across an entire app, 
even within the same form. Inspect every field individually before 
writing a locator. A pattern seen on 2 fields does not guarantee 
the 3rd field follows it.

---

## 2. TypeScript null-safety errors are design signals, not noise

Code: 
async getErrorMessage(): Promise<string> {
  return await errorLocator.textContent();
}

Error:
Type 'string | null' is not assignable to type 'string'.

Root cause: Playwright's .textContent() returns Promise<string | null> 
by design — null is returned if the element has no text or does not 
exist at the time of the call.

Fix: Changed return type to Promise<string | null> instead of forcing 
it to string.

Lesson: A TypeScript type error here was not a mistake to silence — 
it was TypeScript correctly identifying a real possibility (element 
might not exist) that the code wasn't handling. Read type errors as 
"what case have I not considered," not just "fix the syntax."

---

## 3. Locator organization matters regardless of file size

Initial LoginPage.ts: locators written inline inside login().
  await this.page.getByTestId('email').fill(email);

Initial RegisterPage.ts (first attempt): same inline pattern, 
but with 12 fields — visibly harder to read and maintain.

Fix: Locators declared once as class properties, methods reference 
them by name.
  private emailInput = this.page.getByTestId('email');
  async login(email: string, password: string) {
    await this.emailInput.fill(email);
  }

Lesson: The problem was present in LoginPage too (2 fields) — it 
just wasn't visible yet at that size. Applying a correct pattern 
should not depend on when the pain becomes obvious. Retrofitted 
LoginPage to match once the issue was identified in RegisterPage.

---

## 4. A test can pass without actually testing anything

Code (initial):
await page.getByTestId('nav-home').isVisible();

Problem: .isVisible() returns a boolean but does not wait/retry, 
and without wrapping it in expect(), the test does not fail even 
if the result is false. This line executed but asserted nothing.

Fix:
await expect(page.getByTestId('nav-home')).toBeVisible();

Lesson: A green test result is not proof of a correct test. Confirm 
every assertion can actually cause a failure — if you can't imagine 
a scenario where this line would make the test fail, it likely isn't 
asserting anything real.

---

## 5. Locator timeouts point to "wrong context," not "wrong syntax"

Error:
Test timeout of 30000ms exceeded.
waiting for getByTestId('email')

Root cause: Test navigated to '/' (homepage) instead of '/auth/login'. 
The email field genuinely did not exist on that page — Playwright 
was correctly waiting for something that would never appear.

Lesson: A locator timeout usually means the element does not exist 
in the current page/state — check navigation and page state first, 
before questioning the locator string itself.

---

## 6. Self-registered test accounts introduce flakiness

Observation: Login worked immediately after registering a new test 
account, then failed on a later run using the same credentials.

Root cause: Relying on a just-created, non-permanent account 
introduces dependency on registration having fully succeeded and 
persisted — an extra point of failure unrelated to what the login 
test is meant to verify.

Fix: Used documented, stable test account instead 
(customer@practicesoftwaretesting.com / welcome01).

Lesson: Login tests should test login behavior only. Use fixed, 
known-good accounts for this — self-registered accounts belong in 
registration-specific tests, not as a login dependency.

---

## 7. Naming consistency across page classes is a real review point

Observation: LoginPage had login() (verb), RegisterPage initially 
had registration() (noun) — inconsistent naming convention across 
otherwise-identical class structures.

Fix: Renamed to register() to match the verb pattern.

Lesson: Small naming inconsistencies across files are the kind of 
thing a code reviewer flags on a real team — worth catching even 
when both names technically work.