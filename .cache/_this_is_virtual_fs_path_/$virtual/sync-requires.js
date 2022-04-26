
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/beepa/projects/kapmanagement/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/contact.js")),
  "component---src-pages-elements-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/Elements.js")),
  "component---src-pages-generic-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/Generic.js")),
  "component---src-pages-index-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/index.js")),
  "component---src-pages-locations-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/locations.js")),
  "component---src-pages-submissions-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/submissions.js"))
}

