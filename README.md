# KINI'S VIGIL — Early Testing Site

Static website. No framework, package installation, or build process required.

## Preview

Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Included assets

- `assets/logo.png` — original uploaded game logo
- `assets/main-menu.png` — original uploaded main menu screenshot
- `assets/pause-menu.png` — original uploaded pause menu screenshot
- `assets/gameplay.png` — original uploaded gameplay screenshot

## Downloads

Windows and macOS buttons are deliberately disabled. No build URLs have been invented. When builds are ready, replace each disabled `<button>` in the Downloads section of `index.html` with an `<a href="YOUR_REAL_URL" ...>` link.

## Public comments

Giscus is configured in `script.js` for `spkecreation/kinis-vigil-feedback`, General category, with a dark high-contrast theme. Visitors can comment with GitHub accounts. Discussions are stored in the public GitHub repository.

Publish the site to an HTTPS URL to test comments reliably. Local `file://` previews are not a reliable way to test the pathname mapping. GitHub Discussions must remain enabled and the Giscus GitHub app must have repository access. The widget loads only once through `script.js`; do not paste another Giscus script into `index.html`.

## Creator

Update the short creator bio in `index.html` and add a portrait or links when ready.
