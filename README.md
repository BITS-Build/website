# BITS

**Build. Innovate. Transform.**

A responsive, multi-page website for BITS, built with plain HTML, CSS and JavaScript modules. There is no build step or framework.

## Pages

- `index.html` — Home
- `services.html` — Services
- `work.html` — Project approach
- `about.html` — About BITS
- `contact.html` — Contact and project brief

## Structure

```text
.
├── index.html
├── services.html
├── work.html
├── about.html
├── contact.html
├── styles.css              # CSS entry point
├── css/
│   ├── tokens.css          # Colors, type and layout variables
│   ├── base.css            # Reset, accessible defaults and shared helpers
│   ├── components.css      # Navigation, cards, forms and footer
│   └── pages.css           # Page-specific layouts and responsive rules
└── js/
    ├── main.js             # Small application entry point
    ├── config.js           # Site-specific settings
    └── modules/
        ├── navigation.js
        ├── reveal.js
        ├── visual-effects.js
        └── contact-form.js
```

## Run locally

Serve this directory with any static web server. ES modules require HTTP(S), so opening the HTML files directly with `file://` will not run the interactions.

For example, with Python installed:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Contact form setup

The form validates and formats a project enquiry as an email draft. Add BITS's real public inbox to `siteConfig.contactEmail` in `js/config.js` to enable the `mailto:` draft. The site does not send or store submissions.
