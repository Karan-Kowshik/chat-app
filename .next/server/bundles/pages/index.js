module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Chat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("pusher-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ChatMessage__ = __webpack_require__("./components/ChatMessage.js");
var _jsxFileName = "D:\\Chat App\\chat-app\\components\\Chat.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var colors = ['#e21400', '#91580f', '#f8a700', '#f78b00', '#58dc00', '#287b00', '#a8f07a', '#4ae8c4', '#3b88eb', '#3824aa', '#a700ff', '#d300e7'];

var getUsernameColor = function getUsernameColor(username) {
  // Compute hash code
  var hash = 7;

  for (var i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + (hash << 5) - hash;
  } // Calculate color


  var index = Math.abs(hash % colors.length);
  return colors[index];
};

var emojis = {
  sad: [55357, 56864],
  happy: [55357, 56832],
  neutral: [55357, 56848]
};
var RIGHT = 'right';
var LEFT = 'left';
var encrypted = true;

var Chat =
/*#__PURE__*/
function (_Component) {
  _inherits(Chat, _Component);

  function Chat() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Chat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Chat.__proto__ || Object.getPrototypeOf(Chat)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        chats: []
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "scrollToBottom", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.chatsEnd.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var keyCode = _ref2.keyCode,
            shiftKey = _ref2.shiftKey,
            target = _ref2.target;

        if (keyCode === 13 && !shiftKey) {
          var timestamp = +new Date();
          var message = target.value;
          var user = _this.props.activeUser;
          var chat = {
            user: user,
            message: message,
            timestamp: timestamp
          };
          target.value = '';
          __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/message', chat);
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderChat", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(chat, idx) {
        var previousIndex = Math.max(0, idx - 1);
        var previousChat = _this.state.chats[previousIndex];
        var position = chat.user === _this.props.activeUser ? RIGHT : LEFT; // user messages on right

        var isFirst = previousIndex === idx;
        var inSequence = chat.user === previousChat.user;
        var hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60));
        var mood;

        if (chat.sentiment === 0) {
          mood = emojis.neutral;
        } else {
          mood = chat.sentiment > 0 ? emojis.happy : emojis.sad;
        }

        var username = chat.user || 'Anonymous';
        var usernameColor = getUsernameColor(username);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, isFirst || !inSequence || hasDelay ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-".concat(position),
          style: {
            fontSize: '0.9rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          style: {
            color: usernameColor
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, username, ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          style: {
            fontSize: '1.2rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, String.fromCodePoint.apply(String, _toConsumableArray(mood))))) : null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ChatMessage__["a" /* default */], {
          message: chat.message,
          position: position,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }));
      }
    }), _temp));
  }

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.scrollToBottom();
      var cluster = process.env.PUSHER_APP_CLUSTER;
      var appKey = process.env.PUSHER_APP_KEY;
      var pusherConfig = {
        cluster: cluster,
        encrypted: encrypted
      };
      this.pusher = new __WEBPACK_IMPORTED_MODULE_2_pusher_js___default.a(appKey, pusherConfig);
      this.channel = this.pusher.subscribe('chat-room');
      this.channel.bind('new-message', function (_ref3) {
        var _ref3$chat = _ref3.chat,
            chat = _ref3$chat === void 0 ? null : _ref3$chat;
        var chats = _this2.state.chats;

        if (chat) {
          chats.push(chat);
        }

        _this2.setState({
          chats: chats
        });
      });
      this.pusher.connection.bind('connected', function () {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/messages').then(function (response) {
          var chats = response.data.messages;

          _this2.setState({
            chats: chats
          });
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToBottom();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.pusher.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return this.props.activeUser ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "border-bottom border-gray w-100 d-flex align-items-center bg-white",
        style: {
          height: 90
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "text-dark mb-0 mx-4 px-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, this.props.activeUser)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative",
        style: {
          height: 'calc(100% - 180px)',
          overflowY: 'scroll'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, this.state.chats.map(this.renderChat), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          clear: 'both',
          float: 'left'
        },
        ref: function ref(el) {
          _this3.chatsEnd = el;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "border-bottom border-gray w-100 d-flex align-items-center bg-light",
        style: {
          minHeight: 90
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        className: "form-control px-3 py-2",
        onKeyUp: this.handleKeyUp,
        placeholder: "Enter a chat message",
        style: {
          resize: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }))) : null;
    }
  }]);

  return Chat;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Chat);

/***/ }),

/***/ "./components/ChatMessage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\Chat App\\chat-app\\components\\ChatMessage.js";


var ChatMessage = function ChatMessage(_ref) {
  var _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'left' : _ref$position,
      message = _ref.message;
  var isRight = position.toLowerCase() === 'right';
  var align = isRight ? 'text-right' : 'text-left';
  var justify = isRight ? 'justify-content-end' : 'justify-content-start';
  var messageBoxStyles = {
    maxWidth: '70%',
    flexGrow: 0
  };
  var messageStyles = {
    fontWeight: 500,
    lineHeight: 1.4,
    whiteSpace: 'pre-wrap'
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "w-100 my-1 d-flex ".concat(justify),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "bg-light rounded border border-gray p-2",
    style: messageBoxStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "d-block text-secondary ".concat(align),
    style: messageStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, message)));
};

/* harmony default export */ __webpack_exports__["a"] = (ChatMessage);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "D:\\Chat App\\chat-app\\components\\Layout.js";



var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, props.pageTitle || 'Realtime Chat, Y\'all!')), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Chat__ = __webpack_require__("./components/Chat.js");
var _jsxFileName = "D:\\Chat App\\chat-app\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var IndexPage =
/*#__PURE__*/
function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        user: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var keyCode = _ref2.keyCode,
            target = _ref2.target;

        if (keyCode === 13) {
          // On pressing enter
          var user = target.value;

          _this.setState({
            user: user
          });
        }
      }
    }), _temp));
  }

  _createClass(IndexPage, [{
    key: "render",
    value: function render() {
      var user = this.state.user;
      var nameInputStyles = {
        background: 'transparent',
        color: '#999',
        border: 0,
        borderBottom: '1px solid #666',
        borderRadius: 0,
        fontSize: '3rem',
        fontWeight: 500,
        boxShadow: 'none !import'
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
        pageTitle: "Chat App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
        className: "container-fluid position-absolute h-100 bg-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row position-absolute w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row position-absolute w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "col-md-8 d-flex flex-row flex-wrap align-items-center align-content-center px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "px-5 mx-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "d-block w-100 h1 text-light",
        style: {
          marginTop: -50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, user ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          color: '#999'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Hello!"), " ", user) : 'What is your name?'), !user ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        className: "form-control mt-3 px-3 py-2",
        onKeyUp: this.handleKeyUp,
        autoComplete: "off",
        style: nameInputStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }) : null)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, user ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Chat__["a" /* default */], {
        activeUser: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }) : null)))));
    }
  }]);

  return IndexPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(IndexPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  });
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map