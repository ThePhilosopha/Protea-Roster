# Wix Integration Plan - Protea Roster

This plan outlines how to get the Protea Roster running on your Wix site "Protea Ridge Lodge".

## Phase 1: Styling & Bundling Fixes
The widget needs its own styles to work correctly on Wix.
- Generate `index.css` with Tailwind directives.
- Update `widget.tsx` to import and inject these styles into the Shadow DOM.
- Update `vite.config.widget.ts` to ensure CSS is bundled.

## Phase 2: Wix CMS Integration (Optional but Recommended)
Currently, data is stored in `localStorage`. To make it professional:
- Create a "Roster" collection in Wix CMS.
- Update `useRosterData` hook to fetch and save from Wix Data when running in a Wix environment.

## Phase 3: Deployment
1. **Build:** Run `npm run build:widget`.
2. **Host:** Push the `dist-widget/protea-roster.js` to GitHub.
3. **Enable Pages:** Turn on GitHub Pages for the repo.
4. **Wix Editor:**
   - Add a "Custom Element".
   - Tag Name: `protea-roster`.
   - Source URL: `https://thephilosopha.github.io/Protea-Roster/dist-widget/protea-roster.js`

## Automation (via MCP)
- [ ] Create Wix CMS Collection "Roster"
- [ ] Prepare the code updates
