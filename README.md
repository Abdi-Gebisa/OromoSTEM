# Oromia STEM Suite

A mobile-first, browser-native virtual physics learning and experiment-preparation tool for Ethiopian secondary-school students. It uses HTML5, CSS3, Canvas and vanilla JavaScript; it has no external runtime libraries.

## Files
- `index.html`, `styles.css`, `script.js`: existing site and original kinematics, optics, thin-lens and EUEE-style practice.
- `enhancements.css`, `enhancements.js`: additional idealized physics models, report builder, teacher worksheet, impact placeholders, language selector, accessibility controls and offline status.
- `manifest.json`, `icon.svg`: installable web app metadata and lightweight vector icon.
- `sw.js`: same-origin service-worker cache.

## Publish on GitHub Pages
Upload all files to the same folder used by the existing `index.html`. Preserve exact filenames. GitHub Pages must serve the site over HTTPS for service workers and install prompts. Open the published site online once, wait for it to load, then test airplane mode. If you update cached files, bump `CACHE_NAME` in `sw.js` (for example, `oromia-stem-suite-v2`).

## Test on an Android phone
1. Open the published HTTPS page in Chrome while online and navigate through the existing three labs and the “More labs” section.
2. Change every control; check that outputs change and remain finite within allowed input ranges.
3. Try English, Afaan Oromoo and French. Some of the new technical descriptions are source-language content and need review by a physics teacher and a fluent translator before public release; the selector does not imply every existing sentence has a reviewed French translation.
4. Test report download, worksheet download, contrast and large-text controls.
5. Wait until the page loads, enable airplane mode, reload and test the cached core interface. First install/cache requires a successful online visit.
6. Use Chrome menu → Add to Home screen if available.

## Scientific scope and limitations
The additional cards provide idealized calculators, not laboratory-grade numerical solvers. They include Newton's second law, mechanical energy, perfectly inelastic one-dimensional momentum, centripetal acceleration, ideal mass-spring SHM, Ohm's law, series resistance, wave speed, linear thermal expansion, Faraday induction, half-life decay and rest energy. Each model states assumptions; confirm the formulas and terminology with teachers and the current Ethiopian curriculum before competition judging. The existing projectile model neglects air resistance; thin-lens equations assume an ideal thin converging lens; Snell's law assumes the usual ray-optics model.

## Privacy and teacher mode
Report details and impact placeholders stay in the browser unless a student manually shares the downloaded report. Avoid entering sensitive student information on shared phones. Teacher mode is a local worksheet builder, not a secure account system. Do not add public admin passwords or service-role API keys to GitHub Pages. If central results are later needed, use a server-side authenticated backend, role-based access, row-level security, consent, retention rules and data minimization.

## EUEE practice integrity
Questions in the site are original EUEE-style practice and must not be presented as official past-paper questions. The current question bank is small; expand it only with reviewed, original questions and explanations. A timer, full subject/chapter filters and detailed mistake bank are future enhancements, not claimed as complete in this version.

## Impact statement
Designed as a low-cost physics learning and experiment-preparation tool for students with limited access to laboratory equipment. Simulations support learning and do not replace real laboratories. All impact metrics are placeholders until collected and verified.
