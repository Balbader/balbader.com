# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Correct entries that work proves wrong; add new ones only by deliberate maintainer choice, never as routine task output.

## Project

Personal portfolio site for balbader.com: a single-page landing at `/`.
Stack: Next.js 16 App Router (Turbopack), React 19, TypeScript strict, Tailwind CSS v4, shadcn/ui (new-york, Radix), GSAP.

## Commands

- Use pnpm 10 (`npx pnpm@10 ...` if your global pnpm is 11). The repo has no `packageManager` pin, and pnpm 11 fails `install`/`run` with `ERR_PNPM_IGNORED_BUILDS` and rewrites `pnpm-workspace.yaml`. Don't commit that rewrite.
- `pnpm install --frozen-lockfile`
- `pnpm dev`: dev server on http://localhost:3000
- `pnpm build`: production build. Works without any env vars.
- `pnpm lint`: ESLint (flat config, `eslint-config-next`). It currently exits 1 with existing errors in `src/components/ui/sidebar.tsx` and `ContactSection.tsx`. Make sure you add no new errors.
- There is no test suite and no formatter config.

## Layout

- `src/app/`: `page.tsx` (home, client component that registers GSAP ScrollTrigger and animates `.fade-in-up` elements), `globals.css` (Tailwind v4 theme tokens; there is no `tailwind.config`).
- `src/components/home/<section>/` and `src/components/navigation/`: hand-written site sections (PascalCase files).
- `src/components/ui/`: shadcn primitives, vendored generator output (kebab-case files). Prefer re-adding them over hand-editing.
- Import alias `@/*` maps to `src/*`. Aliases for new shadcn components are in `components.json`.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
