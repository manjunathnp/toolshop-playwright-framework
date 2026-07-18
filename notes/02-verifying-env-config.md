# Verifying .env Configuration

## Purpose
Quick check to confirm .env is set up and working correctly.

## Steps

1. Check .env exists
   find . -maxdepth 1 -name ".env*"
   Expect: .env and .env.example both listed

2. Check .env content is correct
   cat .env
   Expect: BASE_URL=https://practicesoftwaretesting.com
   (no quotes, no extra spaces)

3. Check .env is git-ignored
   git status .env
   Expect: nothing shown (means it's ignored, not tracked)

4. Check dotenv is installed
   npm list dotenv
   Expect: version number shown, no error

5. Check playwright.config.ts is wired correctly
   Look for these two things in the file:
   - import * as dotenv from 'dotenv'; dotenv.config();
   - baseURL: process.env.BASE_URL inside use: {}

6. Run and confirm it's actually loading
   npx playwright test --list
   Expect: "injected env" line appears in output

## Done when
All 6 steps pass — .env is correctly configured.