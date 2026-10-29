# Oromia STEM Suite

A mobile-first, English-only learning website by Abdi Gebisa Nagasa.

## Pages
Home, Physics, Maths, Chemistry, Biology, About.

## Edit the site
- `index.html`: website shell and navigation.
- `styles.css`: mobile layout and light/dark appearance.
- `content.js`: topic names, descriptions, experiment input labels and defaults.
- `app.js`: formulas, interactive diagrams, question logic, and maths question editor.
- `assets/*.svg`: original simplified educational illustrations.

## Experiments
Open Physics or Chemistry, select a topic, and type any finite number in an input. Calculations update instantly. Some values (such as zero mass, zero resistance, or invalid logarithm inputs) are mathematically invalid and show an error instead. The diagrams are teaching illustrations and are not all scaled to the inputs.

## Questions
Physics: 12 topics × 50 generated practice items. Chemistry: 5 topics × 50 generated practice items. These use five reusable question patterns with varied numerical inputs, **not 850 individually authored or independently curriculum-reviewed questions**. Questions are designed to be extended and improved in `app.js`.

Mathematics: The user-supplied EUEE PDF contains formula-heavy questions that require visual verification. The original PDF is **not included or republished**. Add approved questions manually in Maths or import JSON; use Export to back up your questions. Browser edits are local to that device and do not publish to all visitors. To publish shared questions, store a reviewed JSON file in the repository and add loading code.

Biology: 8 topics with original diagrams and concise notes. Enzyme activity includes an illustrative interactive temperature model. These are simplified teaching drawings, not microscope photographs.

## Publish using GitHub Pages
Upload `index.html`, `styles.css`, `content.js`, `app.js`, `README.md` and the entire `assets` directory to the repository root. Ensure `assets` stays a folder. GitHub Pages serves the site without a build step. Back up your old repository before replacing files.

## Testing
JavaScript syntax is checked with Node.js. Live browser testing is still needed before distributing widely.
