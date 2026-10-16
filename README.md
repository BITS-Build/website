# BITS

**Build. Innovate. Transform.**

The BITS website is built with Next.js App Router, TypeScript, Tailwind CSS and Motion. It presents BITS as a technology company spanning software, AI, automation, data, digital products and digital growth.

## Routes

- `/` — Home
- `/services` — Capabilities
- `/work` — Approach
- `/about` — About BITS
- `/contact` — Project enquiry

## Develop

Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, then serve it with `npm run start`.

## Contact form

The contact form does not send or store submissions. When `NEXT_PUBLIC_BITS_CONTACT_EMAIL` is set to BITS's real public inbox, submitting the form opens a prefilled email draft for the visitor to review and send. Without that setting, the page clearly reports that no message was sent. A real submission backend can be connected later if needed.

## Original static site

The original HTML and CSS pages remain in the repository during the migration. They are retained in Git history and have not been deleted.
