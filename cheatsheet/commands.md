# Command Reference

Quick lookup for terminal commands used in this project. 
No deep explanation here — just command + one-line meaning.
See notes/ folder for full explanations of concepts.

---

## Project Setup

npm init playwright@latest
Scaffolds a new Playwright project (TypeScript, config, sample test).

npx tsc --noEmit
Checks TypeScript for errors without building/output files. Fast 
sanity check before running actual tests.

npx playwright test --list
Lists all tests without running them. Confirms config loads 
correctly, no errors.

npx playwright test
Runs the actual test suite.

npm list <package-name>
Checks if a package (e.g. dotenv) is installed, shows version.

npm install <package-name> --save-dev
Installs a package as a dev dependency.

---

## File / Folder Navigation

pwd
Shows current folder location (confirms you're in the right place).

find . -maxdepth 2 -not -path "*/node_modules*" -not -path "*/.git*"
Lists files/folders, 2 levels deep, skips node_modules and .git 
folders. Use after creating/moving files to confirm placement.

ls -la
Lists all files in current folder, including hidden ones (like .env).

mkdir <folder-name>
Creates a new folder.

touch <file-name>
Creates a new empty file.

cat <file-name>
Prints file contents to terminal.

cp <source> <destination>
Copies a file (e.g. cp .env .env.example).

mv <source> <destination>
Moves or renames a file.

rm <file-name>
Deletes a file.

grep "<text>" <file-name>
Searches for text inside a file (e.g. checking if something is 
in .gitignore).

---

## Git — Basic Flow

git init
Initializes a new local git repository.

git status
Shows what's changed, staged, or untracked. Always run before 
git add — never guess what's about to be committed.

git add <file-or-folder>
Stages specific file(s)/folder(s) for commit.

git add .
Stages everything changed in the current folder. Use with 
caution — prefer specific file/folder names for cleaner commit 
history.

git commit -m "message"
Saves staged changes as a commit, with a description.

git push
Sends local commits to GitHub (remote repository).

git diff <file-name>
Shows exact line-by-line changes in a file before committing.

---

## Git — Remote / GitHub Connection

git remote add origin <repo-url>
Connects local repo to a GitHub repository.

git branch
Shows current branch name.

git branch -M main
Renames current branch to "main".

git push -u origin main
Pushes local main branch to GitHub, sets it as the default 
upstream for future pushes.

---

## Commit Message Convention Used

feat(scope): description   → new feature/functionality
docs: description           → documentation only
chore: description          → setup/config/dependency changes

Examples used so far:
feat(auth): add LoginPage POM class with data-test locators
docs: add setup notes for env baseURL configuration
chore: add dotenv dependency
docs: consolidate framework structure into single status file