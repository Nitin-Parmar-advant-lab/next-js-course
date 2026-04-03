# Data fetching

## Static Generation

- Pre-generate a page (with data prepared on the server-side) during build time
- Pages are prepared ahead to time and can be cached by the server / CDN serving the app

- It is done by function called getStaticProps like this(it is part of page router only and it's not used in app router, in app router we use react server component):
  `export async function getStaticProps(context) {...}`

## Server
