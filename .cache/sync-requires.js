
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/beepa/projects/kapmanagement/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/404.js")),
  "component---src-pages-elements-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/Elements.js")),
  "component---src-pages-generic-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/Generic.js")),
  "component---src-pages-index-js": preferDefault(require("/home/beepa/projects/kapmanagement/src/pages/index.js"))
}

