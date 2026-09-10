# Repository change policy

This file applies to any AI coding agent working in this repository (Claude
Code, Codex, or otherwise). Follow it for every task unless the user
explicitly overrides a specific rule in their request.

- Begin every task from a clean branch based on current `origin/main`.
- Edit only files explicitly named or clearly required by the prompt.
- If another file appears necessary, stop and request approval before editing it.
- Never modify `.gitignore`, `netlify.toml`, GitHub configuration, shared CSS,
  sitemaps, analytics, or build tools unless explicitly requested.
- Never run site-wide mutation scripts unless explicitly requested.
- Before committing, run `git diff --name-only origin/main...HEAD`.
- If the output contains unrelated files, stop and report them.
- Commit and push only the current feature branch.
- Never push directly to `main`.
- Never run `netlify deploy --prod`.
- Open a GitHub pull request and use its Netlify Deploy Preview.
- Merge the pull request only after the user gives explicit go-ahead in chat.

## Change isolation

- Never continue work on a stale local branch or an old checkout that
  predates this policy — pull latest `origin/main` first.
- Do not perform drive-by cleanup, renames, formatting passes, or
  "while I'm in here" fixes on files outside the task's scope, even if they
  look wrong.
- If your working tree already has unrelated local or uncommitted changes
  when a task starts, do not fold them into your commit. Report what you
  found and ask how to handle it before writing any new commits.
- If you discover that `main` has moved (new commits you didn't expect)
  since you branched, stop before merging or force-pushing. Diff your
  branch against the new `origin/main` and report what's actually different
  before reconciling — another agent or session may have already covered
  the same ground.

## Site structure notes

- Published site lives in `site/` (plain HTML/CSS/JS, tracked directly in git).
- `netlify.toml` has no build command — Netlify publishes `site/` as-is.
- There is no build/generator step and no `.netlify-public` output directory
  at this time. If one is added later, update this file accordingly.
