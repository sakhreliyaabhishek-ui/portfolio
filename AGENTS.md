# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js App Router portfolio built with TypeScript and Tailwind CSS. Route files live in `app/`, including section pages such as `app/about/page.tsx` and shared app shell files like `app/layout.tsx` and `app/globals.css`. Reusable UI and scene components live under `components/ui` and `components/scene`. Static content is centralized in `data/content.ts`, shared helpers live in `lib/`, and public assets such as icons, portraits, and skill logos belong in `public/`.

## Build, Test, and Development Commands
- `npm run dev`: start the local development server.
- `npm run build`: create a production build with Next.js webpack.
- `npm run start`: serve the production build locally.
- `npm run lint`: run ESLint with the Next Core Web Vitals config.
- `npm run typecheck`: generate Next types and run `tsc --noEmit`.

Run `npm run lint` and `npm run typecheck` before opening a PR.

## Coding Style & Naming Conventions
Use TypeScript with strict typing and the `@/*` import alias from `tsconfig.json`. Follow the existing style: 2-space indentation, double quotes, semicolons, and named exports for reusable components. Use PascalCase for React components (`SiteHeader.tsx`), camelCase for variables and functions, and lowercase route folder names in `app/`. Keep content data in structured exported objects and arrays rather than scattering copy across components.

## Testing Guidelines
There is no automated test suite in the current workspace. Treat `npm run lint` and `npm run typecheck` as the minimum validation gate for every change. When adding tests later, place them beside the feature or in a dedicated `tests/` folder and name them after the target module, for example `site-header.test.tsx`.

## Commit & Pull Request Guidelines
Git history is not available in this workspace, so no local commit convention can be inferred. Use short, imperative commit subjects such as `Add skills page hero animation`. Keep commits focused and avoid mixing content edits with refactors. PRs should include a clear summary, affected routes or components, screenshots or short recordings for UI changes, and links to any related issue or task.

## Assets & Content Notes
Optimize new images before adding them to `public/`. Keep portfolio copy updates in `data/content.ts` when possible so content changes remain easy to review.
