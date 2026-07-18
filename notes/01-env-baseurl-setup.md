# .env — BASE_URL Configuration

## What
Store BASE_URL in .env, wire into playwright.config.ts. 
Avoid hardcoded URL in config file.

## Why
- No hardcoded URLs in config
- Standard practice, even single-environment setups
- Sets pattern for future multi-environment use (with-bugs variant)

## Steps

1. Create .env in project root:
   BASE_URL=https://practicesoftwaretesting.com

2. Create .env.example (committed, shows required vars):
   BASE_URL=https://practicesoftwaretesting.com

3. Add .env to .gitignore:
   .env

4. Top of playwright.config.ts:
   import * as dotenv from 'dotenv';
   dotenv.config();

5. Inside use: {} block:
   baseURL: process.env.BASE_URL,

## Verification

1. Temporarily add debug line, top of playwright.config.ts, 
   after dotenv.config():
   console.log('BASE_URL from env:', process.env.BASE_URL);

2. Run:
   npx playwright test --list

3. Expected output:
   ◇ injected env (1) from .env
   BASE_URL from env: https://practicesoftwaretesting.com
   Total: 2 tests in 1 file

4. Confirms env var resolved correctly, config loads without errors.

5. Remove debug line after verification — not part of final code:
   console.log('BASE_URL from env:', process.env.BASE_URL);

## Gotchas / Notes
- Playwright auto-detects .env in newer versions — 
  "injected env" line confirms this. dotenv.config() 
  possibly redundant, not confirmed, low priority.
- Debug console.log is a temporary verification step only. 
  Always remove before committing — leftover debug logs 
  are a common review flag in real PRs.