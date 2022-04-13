exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module) => {

module.exports = {
  siteTitle: 'Gatsby Starter Spectral',
  // <title>
  manifestName: 'Spectral',
  manifestShortName: 'Landing',
  // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-spectral/`,
  // This path is subpath of your hosting https://domain/portfolio
  heading: 'Anubhav Srivastava',
  subHeading: 'Full time Web Developer. Part time Open source contributor  ',
  // social
  socialLinks: [{
    style: 'brands',
    icon: 'fa-github',
    name: 'Github',
    url: 'https://github.com/anubhavsrivastava'
  }, {
    style: 'brands',
    icon: 'fa-twitter',
    name: 'Twitter',
    url: 'https://twitter.com/onlyanubhav'
  }, {
    style: 'solid',
    icon: 'fa-envelope',
    name: 'Email',
    url: 'mailto:test@example.com'
  }]
};

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);


function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    id: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "icons"
  }, _config__WEBPACK_IMPORTED_MODULE_1___default().socialLinks.map(social => {
    const {
      style,
      icon,
      name,
      url
    } = social;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: url,
      className: `icon ${style} ${icon}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "label"
    }, name)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "copyright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "\xA9 Spectral"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Design: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "http://html5up.net"
  }, "HTML5 UP"))));
}

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3649515864.json */ "./public/page-data/sq/d/3649515864.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sass/main.scss */ "./src/assets/sass/main.scss");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");









class Layout extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isPreloaded: false
      });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const {
      children,
      fullMenu
    } = this.props;
    const {
      isPreloaded
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.StaticQuery, {
      query: "3649515864",
      render: data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: data.site.siteMetadata.title,
        meta: [{
          name: 'description',
          content: 'Spectral'
        }, {
          name: 'keywords',
          content: 'site, web'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("html", {
        lang: "en"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: isPreloaded ? 'landing main-body is-preload' : 'landing main-body'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        id: "page-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fullMenu: fullMenu
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)))),
      data: _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__
    });
  }

}

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


function Nav({
  onMenuToggle = () => {}
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "special"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#menu",
    onClick: e => {
      e.preventDefault();
      onMenuToggle();
    },
    className: "menuToggle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Menu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/Generic"
  }, "Generic Page")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/Elements"
  }, "Elements"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "close",
    onClick: e => {
      e.preventDefault();
      onMenuToggle();
    },
    href: "#menu"
  }, '')))));
}

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./src/components/Nav.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");



function SideBar({
  fullMenu
}) {
  const {
    0: headerOpen,
    1: toggleHeader
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    id: "header",
    className: `${fullMenu ? '' : 'alt'}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Spectral")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `${headerOpen ? 'is-menu-visible' : ' '}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onMenuToggle: () => toggleHeader(!headerOpen)
  })));
}

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");



const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  fullMenu: true
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
  id: "main"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Not Found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Not a Valid URL"))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/3649515864.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3649515864.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Starter Spectral"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map