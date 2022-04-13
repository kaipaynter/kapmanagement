exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
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

/***/ "./src/components/Scroll.js":
/*!**********************************!*\
  !*** ./src/components/Scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const Element = props => {
  return props.children;
};

class Scroll extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill();
  }

  handleClick(e) {
    e.preventDefault();
    let elem = 0;
    let scroll = true;
    const {
      type,
      element,
      offset,
      timeout
    } = this.props;

    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = elem ? true : false;
          break;

        case 'id':
          elem = document.getElementById(element);
          scroll = elem ? true : false;
          break;

        default:
      }
    }

    scroll ? this.scrollTo(elem, offset, timeout) : console.log(`Element not found: ${element}`); // eslint-disable-line
  }

  scrollTo(element, offSet = 0, timeout = null) {
    const elemPos = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;

    if (timeout) {
      setTimeout(() => {
        window.scroll({
          top: elemPos + offSet,
          left: 0,
          behavior: 'smooth'
        });
      }, timeout);
    } else {
      window.scroll({
        top: elemPos + offSet,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Element, null, typeof this.props.children === 'object' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(this.props.children, {
      onClick: this.handleClick
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      onClick: this.handleClick
    }, this.props.children));
  }

}

Scroll.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  timeout: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroll);

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Scroll */ "./src/components/Scroll.js");
/* harmony import */ var _assets_images_pic01_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/pic01.jpg */ "./src/assets/images/pic01.jpg");
/* harmony import */ var _assets_images_pic02_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/pic02.jpg */ "./src/assets/images/pic02.jpg");
/* harmony import */ var _assets_images_pic03_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/pic03.jpg */ "./src/assets/images/pic03.jpg");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);








const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "banner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, (_config__WEBPACK_IMPORTED_MODULE_6___default().heading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, (_config__WEBPACK_IMPORTED_MODULE_6___default().subHeading)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "actions special"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Scroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
  type: "id",
  element: "one"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/#",
  className: "button primary"
}, "Explore"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Scroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
  type: "id",
  element: "one"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "#one",
  className: "more"
}, "Learn More"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "one",
  className: "wrapper style1 special"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
  className: "major"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Arcu aliquet vel lobortis ata nisl", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "eget augue amet aliquet nisl cep donec"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "icons major"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "icon fa-gem major style1"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "label"
}, "Lorem"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "icon fa-heart major style2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "label"
}, "Ipsum"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "icon solid fa-code major style3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
  className: "label"
}, "Dolor")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "two",
  className: "wrapper alt style2"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  className: "spotlight"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "image"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_images_pic01_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "content"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Magna primis lobortis", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "sed ullamcorper"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  className: "spotlight"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "image"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_images_pic02_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "content"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Tortor dolore feugiat", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "elementum magna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  className: "spotlight"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "image"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_images_pic03_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "content"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Augue eleifend aliquet", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "sed condimentum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "three",
  className: "wrapper style3 special"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
  className: "major"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Accumsan mus tortor nunc aliquet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "features"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "icon fa-paper-plane"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Arcu accumsan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "icon solid fa-laptop"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Ac Augue Eget"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "icon solid fa-code"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Mus Scelerisque"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "icon solid fa-headphones-alt"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Mauris Imperdiet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "icon fa-heart"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Aenean Primis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
  className: "icon fa-flag"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Tortor Ut"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "cta",
  className: "wrapper style4"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Arcue ut vel commodo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
  className: "actions stacked"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/#",
  className: "button fit primary"
}, "Activate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/#",
  className: "button fit"
}, "Learn More"))))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/***/ ((module) => {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./src/assets/images/pic01.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic01.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/pic01-b5237c7a6ee1be59e3104df91131dcad.jpg");

/***/ }),

/***/ "./src/assets/images/pic02.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic02.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/pic02-cef9b65fbf89c8b0a0216b68a8afcd7f.jpg");

/***/ }),

/***/ "./src/assets/images/pic03.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic03.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/pic03-676ef3e7eb4e3ae3fe90243f7af79944.jpg");

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
//# sourceMappingURL=component---src-pages-index-js.js.map