function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["backend-authentication-authentication-module"], {
  /***/
  "./node_modules/sweetalert2/dist/sweetalert2.all.js":
  /*!**********************************************************!*\
    !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSweetalert2DistSweetalert2AllJs(module, exports, __webpack_require__) {
    /*!
    * sweetalert2 v9.10.12
    * Released under the MIT License.
    */
    (function (global, factory) {
      true ? module.exports = factory() : undefined;
    })(this, function () {
      'use strict';

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _extends() {
        _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        return _extends.apply(this, arguments);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
          };
        }

        return _construct.apply(null, arguments);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _createSuper(Derived) {
        return function () {
          var Super = _getPrototypeOf(Derived),
              result;

          if (_isNativeReflectConstruct()) {
            var NewTarget = _getPrototypeOf(this).constructor;

            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }

          return _possibleConstructorReturn(this, result);
        };
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          };
        }

        return _get(target, property, receiver || target);
      }

      var consolePrefix = 'SweetAlert2:';
      /**
       * Filter the unique values into a new array
       * @param arr
       */

      var uniqueArray = function uniqueArray(arr) {
        var result = [];

        for (var i = 0; i < arr.length; i++) {
          if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
          }
        }

        return result;
      };
      /**
       * Capitalize the first letter of a string
       * @param str
       */


      var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      /**
       * Returns the array ob object values (Object.values isn't supported in IE11)
       * @param obj
       */


      var objectValues = function objectValues(obj) {
        return Object.keys(obj).map(function (key) {
          return obj[key];
        });
      };
      /**
       * Convert NodeList to Array
       * @param nodeList
       */


      var toArray = function toArray(nodeList) {
        return Array.prototype.slice.call(nodeList);
      };
      /**
       * Standardise console warnings
       * @param message
       */


      var warn = function warn(message) {
        console.warn("".concat(consolePrefix, " ").concat(message));
      };
      /**
       * Standardise console errors
       * @param message
       */


      var error = function error(message) {
        console.error("".concat(consolePrefix, " ").concat(message));
      };
      /**
       * Private global state for `warnOnce`
       * @type {Array}
       * @private
       */


      var previousWarnOnceMessages = [];
      /**
       * Show a console warning, but only if it hasn't already been shown
       * @param message
       */

      var warnOnce = function warnOnce(message) {
        if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
          previousWarnOnceMessages.push(message);
          warn(message);
        }
      };
      /**
       * Show a one-time console warning about deprecated params/methods
       */


      var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
        warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
      };
      /**
       * If `arg` is a function, call it (with no arguments or context) and return the result.
       * Otherwise, just pass the value through
       * @param arg
       */


      var callIfFunction = function callIfFunction(arg) {
        return typeof arg === 'function' ? arg() : arg;
      };

      var isPromise = function isPromise(arg) {
        return arg && Promise.resolve(arg) === arg;
      };

      var DismissReason = Object.freeze({
        cancel: 'cancel',
        backdrop: 'backdrop',
        close: 'close',
        esc: 'esc',
        timer: 'timer'
      });

      var isJqueryElement = function isJqueryElement(elem) {
        return _typeof(elem) === 'object' && elem.jquery;
      };

      var isElement = function isElement(elem) {
        return elem instanceof Element || isJqueryElement(elem);
      };

      var argsToParams = function argsToParams(args) {
        var params = {};

        if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
          _extends(params, args[0]);
        } else {
          ['title', 'html', 'icon'].forEach(function (name, index) {
            var arg = args[index];

            if (typeof arg === 'string' || isElement(arg)) {
              params[name] = arg;
            } else if (arg !== undefined) {
              error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
            }
          });
        }

        return params;
      };

      var swalPrefix = 'swal2-';

      var prefix = function prefix(items) {
        var result = {};

        for (var i in items) {
          result[items[i]] = swalPrefix + items[i];
        }

        return result;
      };

      var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
      var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

      var getContainer = function getContainer() {
        return document.body.querySelector(".".concat(swalClasses.container));
      };

      var elementBySelector = function elementBySelector(selectorString) {
        var container = getContainer();
        return container ? container.querySelector(selectorString) : null;
      };

      var elementByClass = function elementByClass(className) {
        return elementBySelector(".".concat(className));
      };

      var getPopup = function getPopup() {
        return elementByClass(swalClasses.popup);
      };

      var getIcons = function getIcons() {
        var popup = getPopup();
        return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
      };

      var getIcon = function getIcon() {
        var visibleIcon = getIcons().filter(function (icon) {
          return isVisible(icon);
        });
        return visibleIcon.length ? visibleIcon[0] : null;
      };

      var getTitle = function getTitle() {
        return elementByClass(swalClasses.title);
      };

      var getContent = function getContent() {
        return elementByClass(swalClasses.content);
      };

      var getHtmlContainer = function getHtmlContainer() {
        return elementByClass(swalClasses['html-container']);
      };

      var getImage = function getImage() {
        return elementByClass(swalClasses.image);
      };

      var getProgressSteps = function getProgressSteps() {
        return elementByClass(swalClasses['progress-steps']);
      };

      var getValidationMessage = function getValidationMessage() {
        return elementByClass(swalClasses['validation-message']);
      };

      var getConfirmButton = function getConfirmButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
      };

      var getCancelButton = function getCancelButton() {
        return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
      };

      var getActions = function getActions() {
        return elementByClass(swalClasses.actions);
      };

      var getHeader = function getHeader() {
        return elementByClass(swalClasses.header);
      };

      var getFooter = function getFooter() {
        return elementByClass(swalClasses.footer);
      };

      var getTimerProgressBar = function getTimerProgressBar() {
        return elementByClass(swalClasses['timer-progress-bar']);
      };

      var getCloseButton = function getCloseButton() {
        return elementByClass(swalClasses.close);
      }; // https://github.com/jkup/focusable/blob/master/index.js


      var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";

      var getFocusableElements = function getFocusableElements() {
        var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
        .sort(function (a, b) {
          a = parseInt(a.getAttribute('tabindex'));
          b = parseInt(b.getAttribute('tabindex'));

          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          }

          return 0;
        });
        var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
          return el.getAttribute('tabindex') !== '-1';
        });
        return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
          return isVisible(el);
        });
      };

      var isModal = function isModal() {
        return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
      };

      var isToast = function isToast() {
        return document.body.classList.contains(swalClasses['toast-shown']);
      };

      var isLoading = function isLoading() {
        return getPopup().hasAttribute('data-loading');
      };

      var states = {
        previousBodyPadding: null
      };

      var setInnerHtml = function setInnerHtml(elem, html) {
        // #1926
        elem.textContent = '';

        if (html) {
          var parser = new DOMParser();
          var parsed = parser.parseFromString(html, "text/html");
          toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
            elem.appendChild(child);
          });
          toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
            elem.appendChild(child);
          });
        }
      };

      var hasClass = function hasClass(elem, className) {
        if (!className) {
          return false;
        }

        var classList = className.split(/\s+/);

        for (var i = 0; i < classList.length; i++) {
          if (!elem.classList.contains(classList[i])) {
            return false;
          }
        }

        return true;
      };

      var removeCustomClasses = function removeCustomClasses(elem, params) {
        toArray(elem.classList).forEach(function (className) {
          if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
            elem.classList.remove(className);
          }
        });
      };

      var applyCustomClass = function applyCustomClass(elem, params, className) {
        removeCustomClasses(elem, params);

        if (params.customClass && params.customClass[className]) {
          if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
            return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
          }

          addClass(elem, params.customClass[className]);
        }
      };

      function getInput(content, inputType) {
        if (!inputType) {
          return null;
        }

        switch (inputType) {
          case 'select':
          case 'textarea':
          case 'file':
            return getChildByClass(content, swalClasses[inputType]);

          case 'checkbox':
            return content.querySelector(".".concat(swalClasses.checkbox, " input"));

          case 'radio':
            return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

          case 'range':
            return content.querySelector(".".concat(swalClasses.range, " input"));

          default:
            return getChildByClass(content, swalClasses.input);
        }
      }

      var focusInput = function focusInput(input) {
        input.focus(); // place cursor at end of text in text input

        if (input.type !== 'file') {
          // http://stackoverflow.com/a/2345915
          var val = input.value;
          input.value = '';
          input.value = val;
        }
      };

      var toggleClass = function toggleClass(target, classList, condition) {
        if (!target || !classList) {
          return;
        }

        if (typeof classList === 'string') {
          classList = classList.split(/\s+/).filter(Boolean);
        }

        classList.forEach(function (className) {
          if (target.forEach) {
            target.forEach(function (elem) {
              condition ? elem.classList.add(className) : elem.classList.remove(className);
            });
          } else {
            condition ? target.classList.add(className) : target.classList.remove(className);
          }
        });
      };

      var addClass = function addClass(target, classList) {
        toggleClass(target, classList, true);
      };

      var removeClass = function removeClass(target, classList) {
        toggleClass(target, classList, false);
      };

      var getChildByClass = function getChildByClass(elem, className) {
        for (var i = 0; i < elem.childNodes.length; i++) {
          if (hasClass(elem.childNodes[i], className)) {
            return elem.childNodes[i];
          }
        }
      };

      var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
        if (value || parseInt(value) === 0) {
          elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
        } else {
          elem.style.removeProperty(property);
        }
      };

      var show = function show(elem) {
        var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
        elem.style.opacity = '';
        elem.style.display = display;
      };

      var hide = function hide(elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
      };

      var toggle = function toggle(elem, condition, display) {
        condition ? show(elem, display) : hide(elem);
      }; // borrowed from jquery $(elem).is(':visible') implementation


      var isVisible = function isVisible(elem) {
        return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
      };
      /* istanbul ignore next */


      var isScrollable = function isScrollable(elem) {
        return !!(elem.scrollHeight > elem.clientHeight);
      }; // borrowed from https://stackoverflow.com/a/46352119


      var hasCssAnimation = function hasCssAnimation(elem) {
        var style = window.getComputedStyle(elem);
        var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
        var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
        return animDuration > 0 || transDuration > 0;
      };

      var contains = function contains(haystack, needle) {
        if (typeof haystack.contains === 'function') {
          return haystack.contains(needle);
        }
      };

      var animateTimerProgressBar = function animateTimerProgressBar(timer) {
        var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var timerProgressBar = getTimerProgressBar();

        if (isVisible(timerProgressBar)) {
          if (reset) {
            timerProgressBar.style.transition = 'none';
            timerProgressBar.style.width = '100%';
          }

          setTimeout(function () {
            timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
            timerProgressBar.style.width = '0%';
          }, 10);
        }
      };

      var stopTimerProgressBar = function stopTimerProgressBar() {
        var timerProgressBar = getTimerProgressBar();
        var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = '100%';
        var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
        timerProgressBar.style.removeProperty('transition');
        timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
      }; // Detect Node env


      var isNodeEnv = function isNodeEnv() {
        return typeof window === 'undefined' || typeof document === 'undefined';
      };

      var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

      var resetOldContainer = function resetOldContainer() {
        var oldContainer = getContainer();

        if (!oldContainer) {
          return false;
        }

        oldContainer.parentNode.removeChild(oldContainer);
        removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
        return true;
      };

      var oldInputVal; // IE11 workaround, see #1109 for details

      var resetValidationMessage = function resetValidationMessage(e) {
        if (Swal.isVisible() && oldInputVal !== e.target.value) {
          Swal.resetValidationMessage();
        }

        oldInputVal = e.target.value;
      };

      var addInputChangeListeners = function addInputChangeListeners() {
        var content = getContent();
        var input = getChildByClass(content, swalClasses.input);
        var file = getChildByClass(content, swalClasses.file);
        var range = content.querySelector(".".concat(swalClasses.range, " input"));
        var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
        var select = getChildByClass(content, swalClasses.select);
        var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
        var textarea = getChildByClass(content, swalClasses.textarea);
        input.oninput = resetValidationMessage;
        file.onchange = resetValidationMessage;
        select.onchange = resetValidationMessage;
        checkbox.onchange = resetValidationMessage;
        textarea.oninput = resetValidationMessage;

        range.oninput = function (e) {
          resetValidationMessage(e);
          rangeOutput.value = range.value;
        };

        range.onchange = function (e) {
          resetValidationMessage(e);
          range.nextSibling.value = range.value;
        };
      };

      var getTarget = function getTarget(target) {
        return typeof target === 'string' ? document.querySelector(target) : target;
      };

      var setupAccessibility = function setupAccessibility(params) {
        var popup = getPopup();
        popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
        popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

        if (!params.toast) {
          popup.setAttribute('aria-modal', 'true');
        }
      };

      var setupRTL = function setupRTL(targetElement) {
        if (window.getComputedStyle(targetElement).direction === 'rtl') {
          addClass(getContainer(), swalClasses.rtl);
        }
      };
      /*
       * Add modal + backdrop to DOM
       */


      var init = function init(params) {
        // Clean up the old popup container if it exists
        var oldContainerExisted = resetOldContainer();
        /* istanbul ignore if */

        if (isNodeEnv()) {
          error('SweetAlert2 requires document to initialize');
          return;
        }

        var container = document.createElement('div');
        container.className = swalClasses.container;

        if (oldContainerExisted) {
          addClass(container, swalClasses['no-transition']);
        }

        setInnerHtml(container, sweetHTML);
        var targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
      };

      var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
        // DOM element
        if (param instanceof HTMLElement) {
          target.appendChild(param); // Object
        } else if (_typeof(param) === 'object') {
          handleObject(param, target); // Plain string
        } else if (param) {
          setInnerHtml(target, param);
        }
      };

      var handleObject = function handleObject(param, target) {
        // JQuery element(s)
        if (param.jquery) {
          handleJqueryElem(target, param); // For other objects use their string representation
        } else {
          setInnerHtml(target, param.toString());
        }
      };

      var handleJqueryElem = function handleJqueryElem(target, elem) {
        target.textContent = '';

        if (0 in elem) {
          for (var i = 0; i in elem; i++) {
            target.appendChild(elem[i].cloneNode(true));
          }
        } else {
          target.appendChild(elem.cloneNode(true));
        }
      };

      var animationEndEvent = function () {
        // Prevent run in Node env

        /* istanbul ignore if */
        if (isNodeEnv()) {
          return false;
        }

        var testEl = document.createElement('div');
        var transEndEventNames = {
          WebkitAnimation: 'webkitAnimationEnd',
          OAnimation: 'oAnimationEnd oanimationend',
          animation: 'animationend'
        };

        for (var i in transEndEventNames) {
          if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
            return transEndEventNames[i];
          }
        }

        return false;
      }(); // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js


      var measureScrollbar = function measureScrollbar() {
        var scrollDiv = document.createElement('div');
        scrollDiv.className = swalClasses['scrollbar-measure'];
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      };

      var renderActions = function renderActions(instance, params) {
        var actions = getActions();
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton(); // Actions (buttons) wrapper

        if (!params.showConfirmButton && !params.showCancelButton) {
          hide(actions);
        } // Custom class


        applyCustomClass(actions, params, 'actions'); // Render confirm button

        renderButton(confirmButton, 'confirm', params); // render Cancel Button

        renderButton(cancelButton, 'cancel', params);

        if (params.buttonsStyling) {
          handleButtonsStyling(confirmButton, cancelButton, params);
        } else {
          removeClass([confirmButton, cancelButton], swalClasses.styled);
          confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
          cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
        }

        if (params.reverseButtons) {
          confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
        }
      };

      function handleButtonsStyling(confirmButton, cancelButton, params) {
        addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

        if (params.confirmButtonColor) {
          confirmButton.style.backgroundColor = params.confirmButtonColor;
        }

        if (params.cancelButtonColor) {
          cancelButton.style.backgroundColor = params.cancelButtonColor;
        } // Loading state


        var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
        confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
        confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
      }

      function renderButton(button, buttonType, params) {
        toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
        setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

        button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
        // Add buttons custom classes

        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, "".concat(buttonType, "Button"));
        addClass(button, params["".concat(buttonType, "ButtonClass")]);
      }

      function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === 'string') {
          container.style.background = backdrop;
        } else if (!backdrop) {
          addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
        }
      }

      function handlePositionParam(container, position) {
        if (position in swalClasses) {
          addClass(container, swalClasses[position]);
        } else {
          warn('The "position" parameter is not valid, defaulting to "center"');
          addClass(container, swalClasses.center);
        }
      }

      function handleGrowParam(container, grow) {
        if (grow && typeof grow === 'string') {
          var growClass = "grow-".concat(grow);

          if (growClass in swalClasses) {
            addClass(container, swalClasses[growClass]);
          }
        }
      }

      var renderContainer = function renderContainer(instance, params) {
        var container = getContainer();

        if (!container) {
          return;
        }

        handleBackdropParam(container, params.backdrop);

        if (!params.backdrop && params.allowOutsideClick) {
          warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        }

        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow); // Custom class

        applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

        var queueStep = document.body.getAttribute('data-swal2-queue-step');

        if (queueStep) {
          container.setAttribute('data-queue-step', queueStep);
          document.body.removeAttribute('data-swal2-queue-step');
        }
      };
      /**
       * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
       * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
       * This is the approach that Babel will probably take to implement private methods/fields
       *   https://github.com/tc39/proposal-private-methods
       *   https://github.com/babel/babel/pull/7555
       * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
       *   then we can use that language feature.
       */


      var privateProps = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
      };
      var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

      var renderInput = function renderInput(instance, params) {
        var content = getContent();
        var innerParams = privateProps.innerParams.get(instance);
        var rerender = !innerParams || params.input !== innerParams.input;
        inputTypes.forEach(function (inputType) {
          var inputClass = swalClasses[inputType];
          var inputContainer = getChildByClass(content, inputClass); // set attributes

          setAttributes(inputType, params.inputAttributes); // set class

          inputContainer.className = inputClass;

          if (rerender) {
            hide(inputContainer);
          }
        });

        if (params.input) {
          if (rerender) {
            showInput(params);
          } // set custom class


          setCustomClass(params);
        }
      };

      var showInput = function showInput(params) {
        if (!renderInputType[params.input]) {
          return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
        }

        var inputContainer = getInputContainer(params.input);
        var input = renderInputType[params.input](inputContainer, params);
        show(input); // input autofocus

        setTimeout(function () {
          focusInput(input);
        });
      };

      var removeAttributes = function removeAttributes(input) {
        for (var i = 0; i < input.attributes.length; i++) {
          var attrName = input.attributes[i].name;

          if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
            input.removeAttribute(attrName);
          }
        }
      };

      var setAttributes = function setAttributes(inputType, inputAttributes) {
        var input = getInput(getContent(), inputType);

        if (!input) {
          return;
        }

        removeAttributes(input);

        for (var attr in inputAttributes) {
          // Do not set a placeholder for <input type="range">
          // it'll crash Edge, #1298
          if (inputType === 'range' && attr === 'placeholder') {
            continue;
          }

          input.setAttribute(attr, inputAttributes[attr]);
        }
      };

      var setCustomClass = function setCustomClass(params) {
        var inputContainer = getInputContainer(params.input);

        if (params.customClass) {
          addClass(inputContainer, params.customClass.input);
        }
      };

      var setInputPlaceholder = function setInputPlaceholder(input, params) {
        if (!input.placeholder || params.inputPlaceholder) {
          input.placeholder = params.inputPlaceholder;
        }
      };

      var getInputContainer = function getInputContainer(inputType) {
        var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
        return getChildByClass(getContent(), inputClass);
      };

      var renderInputType = {};

      renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
        if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
          input.value = params.inputValue;
        } else if (!isPromise(params.inputValue)) {
          warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
        }

        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
      };

      renderInputType.file = function (input, params) {
        setInputPlaceholder(input, params);
        return input;
      };

      renderInputType.range = function (range, params) {
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        return range;
      };

      renderInputType.select = function (select, params) {
        select.textContent = '';

        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          setInnerHtml(placeholder, params.inputPlaceholder);
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }

        return select;
      };

      renderInputType.radio = function (radio) {
        radio.textContent = '';
        return radio;
      };

      renderInputType.checkbox = function (checkboxContainer, params) {
        var checkbox = getInput(getContent(), 'checkbox');
        checkbox.value = 1;
        checkbox.id = swalClasses.checkbox;
        checkbox.checked = Boolean(params.inputValue);
        var label = checkboxContainer.querySelector('span');
        setInnerHtml(label, params.inputPlaceholder);
        return checkboxContainer;
      };

      renderInputType.textarea = function (textarea, params) {
        textarea.value = params.inputValue;
        setInputPlaceholder(textarea, params);

        if ('MutationObserver' in window) {
          // #1699
          var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
          var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

          var outputsize = function outputsize() {
            var contentWidth = textarea.offsetWidth + popupPadding;

            if (contentWidth > initialPopupWidth) {
              getPopup().style.width = "".concat(contentWidth, "px");
            } else {
              getPopup().style.width = null;
            }
          };

          new MutationObserver(outputsize).observe(textarea, {
            attributes: true,
            attributeFilter: ['style']
          });
        }

        return textarea;
      };

      var renderContent = function renderContent(instance, params) {
        var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

        if (params.html) {
          parseHtmlToContainer(params.html, content);
          show(content, 'block'); // Content as plain text
        } else if (params.text) {
          content.textContent = params.text;
          show(content, 'block'); // No content
        } else {
          hide(content);
        }

        renderInput(instance, params); // Custom class

        applyCustomClass(getContent(), params, 'content');
      };

      var renderFooter = function renderFooter(instance, params) {
        var footer = getFooter();
        toggle(footer, params.footer);

        if (params.footer) {
          parseHtmlToContainer(params.footer, footer);
        } // Custom class


        applyCustomClass(footer, params, 'footer');
      };

      var renderCloseButton = function renderCloseButton(instance, params) {
        var closeButton = getCloseButton();
        setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

        applyCustomClass(closeButton, params, 'closeButton');
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
      };

      var renderIcon = function renderIcon(instance, params) {
        var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

        if (innerParams && params.icon === innerParams.icon && getIcon()) {
          applyCustomClass(getIcon(), params, 'icon');
          return;
        }

        hideAllIcons();

        if (!params.icon) {
          return;
        }

        if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
          var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
          show(icon); // Custom or default content

          setContent(icon, params);
          adjustSuccessIconBackgoundColor(); // Custom class

          applyCustomClass(icon, params, 'icon'); // Animate icon

          addClass(icon, params.showClass.icon);
        } else {
          error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
        }
      };

      var hideAllIcons = function hideAllIcons() {
        var icons = getIcons();

        for (var i = 0; i < icons.length; i++) {
          hide(icons[i]);
        }
      }; // Adjust success icon background color to match the popup background color


      var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
        var popup = getPopup();
        var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
        var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

        for (var i = 0; i < successIconParts.length; i++) {
          successIconParts[i].style.backgroundColor = popupBackgroundColor;
        }
      };

      var setContent = function setContent(icon, params) {
        icon.textContent = '';

        if (params.iconHtml) {
          setInnerHtml(icon, iconContent(params.iconHtml));
        } else if (params.icon === 'success') {
          setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
        } else if (params.icon === 'error') {
          setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
        } else {
          var defaultIconHtml = {
            question: '?',
            warning: '!',
            info: 'i'
          };
          setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
        }
      };

      var iconContent = function iconContent(content) {
        return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
      };

      var renderImage = function renderImage(instance, params) {
        var image = getImage();

        if (!params.imageUrl) {
          return hide(image);
        }

        show(image); // Src, alt

        image.setAttribute('src', params.imageUrl);
        image.setAttribute('alt', params.imageAlt); // Width, height

        applyNumericalStyle(image, 'width', params.imageWidth);
        applyNumericalStyle(image, 'height', params.imageHeight); // Class

        image.className = swalClasses.image;
        applyCustomClass(image, params, 'image');
      };

      var currentSteps = [];
      /*
       * Global function for chaining sweetAlert popups
       */

      var queue = function queue(steps) {
        var Swal = this;
        currentSteps = steps;

        var resetAndResolve = function resetAndResolve(resolve, value) {
          currentSteps = [];
          resolve(value);
        };

        var queueResult = [];
        return new Promise(function (resolve) {
          (function step(i, callback) {
            if (i < currentSteps.length) {
              document.body.setAttribute('data-swal2-queue-step', i);
              Swal.fire(currentSteps[i]).then(function (result) {
                if (typeof result.value !== 'undefined') {
                  queueResult.push(result.value);
                  step(i + 1, callback);
                } else {
                  resetAndResolve(resolve, {
                    dismiss: result.dismiss
                  });
                }
              });
            } else {
              resetAndResolve(resolve, {
                value: queueResult
              });
            }
          })(0);
        });
      };
      /*
       * Global function for getting the index of current popup in queue
       */


      var getQueueStep = function getQueueStep() {
        return getContainer() && getContainer().getAttribute('data-queue-step');
      };
      /*
       * Global function for inserting a popup to the queue
       */


      var insertQueueStep = function insertQueueStep(step, index) {
        if (index && index < currentSteps.length) {
          return currentSteps.splice(index, 0, step);
        }

        return currentSteps.push(step);
      };
      /*
       * Global function for deleting a popup from the queue
       */


      var deleteQueueStep = function deleteQueueStep(index) {
        if (typeof currentSteps[index] !== 'undefined') {
          currentSteps.splice(index, 1);
        }
      };

      var createStepElement = function createStepElement(step) {
        var stepEl = document.createElement('li');
        addClass(stepEl, swalClasses['progress-step']);
        setInnerHtml(stepEl, step);
        return stepEl;
      };

      var createLineElement = function createLineElement(params) {
        var lineEl = document.createElement('li');
        addClass(lineEl, swalClasses['progress-step-line']);

        if (params.progressStepsDistance) {
          lineEl.style.width = params.progressStepsDistance;
        }

        return lineEl;
      };

      var renderProgressSteps = function renderProgressSteps(instance, params) {
        var progressStepsContainer = getProgressSteps();

        if (!params.progressSteps || params.progressSteps.length === 0) {
          return hide(progressStepsContainer);
        }

        show(progressStepsContainer);
        progressStepsContainer.textContent = '';
        var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

        if (currentProgressStep >= params.progressSteps.length) {
          warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
        }

        params.progressSteps.forEach(function (step, index) {
          var stepEl = createStepElement(step);
          progressStepsContainer.appendChild(stepEl);

          if (index === currentProgressStep) {
            addClass(stepEl, swalClasses['active-progress-step']);
          }

          if (index !== params.progressSteps.length - 1) {
            var lineEl = createLineElement(step);
            progressStepsContainer.appendChild(lineEl);
          }
        });
      };

      var renderTitle = function renderTitle(instance, params) {
        var title = getTitle();
        toggle(title, params.title || params.titleText);

        if (params.title) {
          parseHtmlToContainer(params.title, title);
        }

        if (params.titleText) {
          title.innerText = params.titleText;
        } // Custom class


        applyCustomClass(title, params, 'title');
      };

      var renderHeader = function renderHeader(instance, params) {
        var header = getHeader(); // Custom class

        applyCustomClass(header, params, 'header'); // Progress steps

        renderProgressSteps(instance, params); // Icon

        renderIcon(instance, params); // Image

        renderImage(instance, params); // Title

        renderTitle(instance, params); // Close button

        renderCloseButton(instance, params);
      };

      var renderPopup = function renderPopup(instance, params) {
        var popup = getPopup(); // Width

        applyNumericalStyle(popup, 'width', params.width); // Padding

        applyNumericalStyle(popup, 'padding', params.padding); // Background

        if (params.background) {
          popup.style.background = params.background;
        } // Classes


        addClasses(popup, params);
      };

      var addClasses = function addClasses(popup, params) {
        // Default Class + showClass when updating Swal.update({})
        popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

        if (params.toast) {
          addClass([document.documentElement, document.body], swalClasses['toast-shown']);
          addClass(popup, swalClasses.toast);
        } else {
          addClass(popup, swalClasses.modal);
        } // Custom class


        applyCustomClass(popup, params, 'popup');

        if (typeof params.customClass === 'string') {
          addClass(popup, params.customClass);
        } // Icon class (#1842)


        if (params.icon) {
          addClass(popup, swalClasses["icon-".concat(params.icon)]);
        }
      };

      var render = function render(instance, params) {
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderHeader(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);

        if (typeof params.onRender === 'function') {
          params.onRender(getPopup());
        }
      };
      /*
       * Global function to determine if SweetAlert2 popup is shown
       */


      var isVisible$1 = function isVisible$$1() {
        return isVisible(getPopup());
      };
      /*
       * Global function to click 'Confirm' button
       */


      var clickConfirm = function clickConfirm() {
        return getConfirmButton() && getConfirmButton().click();
      };
      /*
       * Global function to click 'Cancel' button
       */


      var clickCancel = function clickCancel() {
        return getCancelButton() && getCancelButton().click();
      };

      function fire() {
        var Swal = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _construct(Swal, args);
      }
      /**
       * Returns an extended version of `Swal` containing `params` as defaults.
       * Useful for reusing Swal configuration.
       *
       * For example:
       *
       * Before:
       * const textPromptOptions = { input: 'text', showCancelButton: true }
       * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
       * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
       *
       * After:
       * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
       * const {value: firstName} = await TextPrompt('What is your first name?')
       * const {value: lastName} = await TextPrompt('What is your last name?')
       *
       * @param mixinParams
       */


      function mixin(mixinParams) {
        var MixinSwal =
        /*#__PURE__*/
        function (_this) {
          _inherits(MixinSwal, _this);

          var _super = _createSuper(MixinSwal);

          function MixinSwal() {
            _classCallCheck(this, MixinSwal);

            return _super.apply(this, arguments);
          }

          _createClass(MixinSwal, [{
            key: "_main",
            value: function _main(params) {
              return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
            }
          }]);

          return MixinSwal;
        }(this);

        return MixinSwal;
      }
      /**
       * Show spinner instead of Confirm button
       */


      var showLoading = function showLoading() {
        var popup = getPopup();

        if (!popup) {
          Swal.fire();
        }

        popup = getPopup();
        var actions = getActions();
        var confirmButton = getConfirmButton();
        show(actions);
        show(confirmButton, 'inline-block');
        addClass([popup, actions], swalClasses.loading);
        confirmButton.disabled = true;
        popup.setAttribute('data-loading', true);
        popup.setAttribute('aria-busy', true);
        popup.focus();
      };

      var RESTORE_FOCUS_TIMEOUT = 100;
      var globalState = {};

      var focusPreviousActiveElement = function focusPreviousActiveElement() {
        if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
          globalState.previousActiveElement.focus();
          globalState.previousActiveElement = null;
        } else if (document.body) {
          document.body.focus();
        }
      }; // Restore previous active (focused) element


      var restoreActiveElement = function restoreActiveElement() {
        return new Promise(function (resolve) {
          var x = window.scrollX;
          var y = window.scrollY;
          globalState.restoreFocusTimeout = setTimeout(function () {
            focusPreviousActiveElement();
            resolve();
          }, RESTORE_FOCUS_TIMEOUT); // issues/900

          /* istanbul ignore if */

          if (typeof x !== 'undefined' && typeof y !== 'undefined') {
            // IE doesn't have scrollX/scrollY support
            window.scrollTo(x, y);
          }
        });
      };
      /**
       * If `timer` parameter is set, returns number of milliseconds of timer remained.
       * Otherwise, returns undefined.
       */


      var getTimerLeft = function getTimerLeft() {
        return globalState.timeout && globalState.timeout.getTimerLeft();
      };
      /**
       * Stop timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       */


      var stopTimer = function stopTimer() {
        if (globalState.timeout) {
          stopTimerProgressBar();
          return globalState.timeout.stop();
        }
      };
      /**
       * Resume timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       */


      var resumeTimer = function resumeTimer() {
        if (globalState.timeout) {
          var remaining = globalState.timeout.start();
          animateTimerProgressBar(remaining);
          return remaining;
        }
      };
      /**
       * Resume timer. Returns number of milliseconds of timer remained.
       * If `timer` parameter isn't set, returns undefined.
       */


      var toggleTimer = function toggleTimer() {
        var timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
      };
      /**
       * Increase timer. Returns number of milliseconds of an updated timer.
       * If `timer` parameter isn't set, returns undefined.
       */


      var increaseTimer = function increaseTimer(n) {
        if (globalState.timeout) {
          var remaining = globalState.timeout.increase(n);
          animateTimerProgressBar(remaining, true);
          return remaining;
        }
      };
      /**
       * Check if timer is running. Returns true if timer is running
       * or false if timer is paused or stopped.
       * If `timer` parameter isn't set, returns undefined
       */


      var isTimerRunning = function isTimerRunning() {
        return globalState.timeout && globalState.timeout.isRunning();
      };

      var defaultParams = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        icon: undefined,
        iconHtml: undefined,
        toast: false,
        animation: true,
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
        hideClass: {
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide'
        },
        customClass: undefined,
        target: 'body',
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showCancelButton: false,
        preConfirm: undefined,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: undefined,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: undefined,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusCancel: false,
        showCloseButton: false,
        closeButtonHtml: '&times;',
        closeButtonAriaLabel: 'Close this dialog',
        showLoaderOnConfirm: false,
        imageUrl: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
        imageAlt: '',
        timer: undefined,
        timerProgressBar: false,
        width: undefined,
        padding: undefined,
        background: undefined,
        input: undefined,
        inputPlaceholder: '',
        inputValue: '',
        inputOptions: {},
        inputAutoTrim: true,
        inputAttributes: {},
        inputValidator: undefined,
        validationMessage: undefined,
        grow: false,
        position: 'center',
        progressSteps: [],
        currentProgressStep: undefined,
        progressStepsDistance: undefined,
        onBeforeOpen: undefined,
        onOpen: undefined,
        onRender: undefined,
        onClose: undefined,
        onAfterClose: undefined,
        onDestroy: undefined,
        scrollbarPadding: true
      };
      var updatableParams = ['title', 'titleText', 'text', 'html', 'icon', 'hideClass', 'customClass', 'allowOutsideClick', 'allowEscapeKey', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep'];
      var deprecatedParams = {
        animation: 'showClass" and "hideClass'
      };
      var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
      /**
       * Is valid parameter
       * @param {String} paramName
       */

      var isValidParameter = function isValidParameter(paramName) {
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
      };
      /**
       * Is valid parameter for Swal.update() method
       * @param {String} paramName
       */


      var isUpdatableParameter = function isUpdatableParameter(paramName) {
        return updatableParams.indexOf(paramName) !== -1;
      };
      /**
       * Is deprecated parameter
       * @param {String} paramName
       */


      var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
        return deprecatedParams[paramName];
      };

      var checkIfParamIsValid = function checkIfParamIsValid(param) {
        if (!isValidParameter(param)) {
          warn("Unknown parameter \"".concat(param, "\""));
        }
      };

      var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
        if (toastIncompatibleParams.indexOf(param) !== -1) {
          warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
        }
      };

      var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
        if (isDeprecatedParameter(param)) {
          warnAboutDepreation(param, isDeprecatedParameter(param));
        }
      };
      /**
       * Show relevant warnings for given params
       *
       * @param params
       */


      var showWarningsForParams = function showWarningsForParams(params) {
        for (var param in params) {
          checkIfParamIsValid(param);

          if (params.toast) {
            checkIfToastParamIsValid(param);
          }

          checkIfParamIsDeprecated(param);
        }
      };

      var staticMethods =
      /*#__PURE__*/
      Object.freeze({
        isValidParameter: isValidParameter,
        isUpdatableParameter: isUpdatableParameter,
        isDeprecatedParameter: isDeprecatedParameter,
        argsToParams: argsToParams,
        isVisible: isVisible$1,
        clickConfirm: clickConfirm,
        clickCancel: clickCancel,
        getContainer: getContainer,
        getPopup: getPopup,
        getTitle: getTitle,
        getContent: getContent,
        getHtmlContainer: getHtmlContainer,
        getImage: getImage,
        getIcon: getIcon,
        getIcons: getIcons,
        getCloseButton: getCloseButton,
        getActions: getActions,
        getConfirmButton: getConfirmButton,
        getCancelButton: getCancelButton,
        getHeader: getHeader,
        getFooter: getFooter,
        getTimerProgressBar: getTimerProgressBar,
        getFocusableElements: getFocusableElements,
        getValidationMessage: getValidationMessage,
        isLoading: isLoading,
        fire: fire,
        mixin: mixin,
        queue: queue,
        getQueueStep: getQueueStep,
        insertQueueStep: insertQueueStep,
        deleteQueueStep: deleteQueueStep,
        showLoading: showLoading,
        enableLoading: showLoading,
        getTimerLeft: getTimerLeft,
        stopTimer: stopTimer,
        resumeTimer: resumeTimer,
        toggleTimer: toggleTimer,
        increaseTimer: increaseTimer,
        isTimerRunning: isTimerRunning
      });
      /**
       * Enables buttons and hide loader.
       */

      function hideLoading() {
        // do nothing if popup is closed
        var innerParams = privateProps.innerParams.get(this);

        if (!innerParams) {
          return;
        }

        var domCache = privateProps.domCache.get(this);

        if (!innerParams.showConfirmButton) {
          hide(domCache.confirmButton);

          if (!innerParams.showCancelButton) {
            hide(domCache.actions);
          }
        }

        removeClass([domCache.popup, domCache.actions], swalClasses.loading);
        domCache.popup.removeAttribute('aria-busy');
        domCache.popup.removeAttribute('data-loading');
        domCache.confirmButton.disabled = false;
        domCache.cancelButton.disabled = false;
      }

      function getInput$1(instance) {
        var innerParams = privateProps.innerParams.get(instance || this);
        var domCache = privateProps.domCache.get(instance || this);

        if (!domCache) {
          return null;
        }

        return getInput(domCache.content, innerParams.input);
      }

      var fixScrollbar = function fixScrollbar() {
        // for queues, do not do this more than once
        if (states.previousBodyPadding !== null) {
          return;
        } // if the body has overflow


        if (document.body.scrollHeight > window.innerHeight) {
          // add padding so the content doesn't shift after removal of scrollbar
          states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
          document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
        }
      };

      var undoScrollbar = function undoScrollbar() {
        if (states.previousBodyPadding !== null) {
          document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
          states.previousBodyPadding = null;
        }
      };
      /* istanbul ignore file */


      var iOSfix = function iOSfix() {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
          var offset = document.body.scrollTop;
          document.body.style.top = "".concat(offset * -1, "px");
          addClass(document.body, swalClasses.iosfix);
          lockBodyScroll();
        }
      };

      var lockBodyScroll = function lockBodyScroll() {
        // #1246
        var container = getContainer();
        var preventTouchMove;

        container.ontouchstart = function (e) {
          preventTouchMove = shouldPreventTouchMove(e.target);
        };

        container.ontouchmove = function (e) {
          if (preventTouchMove) {
            e.preventDefault();
            e.stopPropagation();
          }
        };
      };

      var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
        var container = getContainer();

        if (target === container) {
          return true;
        }

        if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
        !(isScrollable(getContent()) && // #1944
        getContent().contains(target))) {
          return true;
        }

        return false;
      };

      var undoIOSfix = function undoIOSfix() {
        if (hasClass(document.body, swalClasses.iosfix)) {
          var offset = parseInt(document.body.style.top, 10);
          removeClass(document.body, swalClasses.iosfix);
          document.body.style.top = '';
          document.body.scrollTop = offset * -1;
        }
      };
      /* istanbul ignore file */


      var isIE11 = function isIE11() {
        return !!window.MSInputMethodContext && !!document.documentMode;
      }; // Fix IE11 centering sweetalert2/issues/933


      var fixVerticalPositionIE = function fixVerticalPositionIE() {
        var container = getContainer();
        var popup = getPopup();
        container.style.removeProperty('align-items');

        if (popup.offsetTop < 0) {
          container.style.alignItems = 'flex-start';
        }
      };

      var IEfix = function IEfix() {
        if (typeof window !== 'undefined' && isIE11()) {
          fixVerticalPositionIE();
          window.addEventListener('resize', fixVerticalPositionIE);
        }
      };

      var undoIEfix = function undoIEfix() {
        if (typeof window !== 'undefined' && isIE11()) {
          window.removeEventListener('resize', fixVerticalPositionIE);
        }
      }; // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
      // elements not within the active modal dialog will not be surfaced if a user opens a screen
      // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.


      var setAriaHidden = function setAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function (el) {
          if (el === getContainer() || contains(el, getContainer())) {
            return;
          }

          if (el.hasAttribute('aria-hidden')) {
            el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
          }

          el.setAttribute('aria-hidden', 'true');
        });
      };

      var unsetAriaHidden = function unsetAriaHidden() {
        var bodyChildren = toArray(document.body.children);
        bodyChildren.forEach(function (el) {
          if (el.hasAttribute('data-previous-aria-hidden')) {
            el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
            el.removeAttribute('data-previous-aria-hidden');
          } else {
            el.removeAttribute('aria-hidden');
          }
        });
      };
      /**
       * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
       * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
       * This is the approach that Babel will probably take to implement private methods/fields
       *   https://github.com/tc39/proposal-private-methods
       *   https://github.com/babel/babel/pull/7555
       * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
       *   then we can use that language feature.
       */


      var privateMethods = {
        swalPromiseResolve: new WeakMap()
      };
      /*
       * Instance method to close sweetAlert
       */

      function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
        if (isToast$$1) {
          triggerOnAfterCloseAndDispose(instance, onAfterClose);
        } else {
          restoreActiveElement().then(function () {
            return triggerOnAfterCloseAndDispose(instance, onAfterClose);
          });
          globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
          });
          globalState.keydownHandlerAdded = false;
        }

        if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
          container.parentNode.removeChild(container);
        }

        if (isModal()) {
          undoScrollbar();
          undoIOSfix();
          undoIEfix();
          unsetAriaHidden();
        }

        removeBodyClasses();
      }

      function removeBodyClasses() {
        removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
      }

      function close(resolveValue) {
        var popup = getPopup();

        if (!popup) {
          return;
        }

        var innerParams = privateProps.innerParams.get(this);

        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
          return;
        }

        var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        var backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

        swalPromiseResolve(resolveValue || {});
      }

      var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
        var container = getContainer(); // If animation is supported, animate

        var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
        var onClose = innerParams.onClose,
            onAfterClose = innerParams.onAfterClose;

        if (onClose !== null && typeof onClose === 'function') {
          onClose(popup);
        }

        if (animationIsSupported) {
          animatePopup(instance, popup, container, onAfterClose);
        } else {
          // Otherwise, remove immediately
          removePopupAndResetState(instance, container, isToast(), onAfterClose);
        }
      };

      var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
        popup.addEventListener(animationEndEvent, function (e) {
          if (e.target === popup) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          }
        });
      };

      var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
        setTimeout(function () {
          if (typeof onAfterClose === 'function') {
            onAfterClose();
          }

          instance._destroy();
        });
      };

      function setButtonsDisabled(instance, buttons, disabled) {
        var domCache = privateProps.domCache.get(instance);
        buttons.forEach(function (button) {
          domCache[button].disabled = disabled;
        });
      }

      function setInputDisabled(input, disabled) {
        if (!input) {
          return false;
        }

        if (input.type === 'radio') {
          var radiosContainer = input.parentNode.parentNode;
          var radios = radiosContainer.querySelectorAll('input');

          for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = disabled;
          }
        } else {
          input.disabled = disabled;
        }
      }

      function enableButtons() {
        setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
      }

      function disableButtons() {
        setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
      }

      function enableInput() {
        return setInputDisabled(this.getInput(), false);
      }

      function disableInput() {
        return setInputDisabled(this.getInput(), true);
      }

      function showValidationMessage(error) {
        var domCache = privateProps.domCache.get(this);
        setInnerHtml(domCache.validationMessage, error);
        var popupComputedStyle = window.getComputedStyle(domCache.popup);
        domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
        domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
        show(domCache.validationMessage);
        var input = this.getInput();

        if (input) {
          input.setAttribute('aria-invalid', true);
          input.setAttribute('aria-describedBy', swalClasses['validation-message']);
          focusInput(input);
          addClass(input, swalClasses.inputerror);
        }
      } // Hide block with validation message


      function resetValidationMessage$1() {
        var domCache = privateProps.domCache.get(this);

        if (domCache.validationMessage) {
          hide(domCache.validationMessage);
        }

        var input = this.getInput();

        if (input) {
          input.removeAttribute('aria-invalid');
          input.removeAttribute('aria-describedBy');
          removeClass(input, swalClasses.inputerror);
        }
      }

      function getProgressSteps$1() {
        var domCache = privateProps.domCache.get(this);
        return domCache.progressSteps;
      }

      var Timer =
      /*#__PURE__*/
      function () {
        function Timer(callback, delay) {
          _classCallCheck(this, Timer);

          this.callback = callback;
          this.remaining = delay;
          this.running = false;
          this.start();
        }

        _createClass(Timer, [{
          key: "start",
          value: function start() {
            if (!this.running) {
              this.running = true;
              this.started = new Date();
              this.id = setTimeout(this.callback, this.remaining);
            }

            return this.remaining;
          }
        }, {
          key: "stop",
          value: function stop() {
            if (this.running) {
              this.running = false;
              clearTimeout(this.id);
              this.remaining -= new Date() - this.started;
            }

            return this.remaining;
          }
        }, {
          key: "increase",
          value: function increase(n) {
            var running = this.running;

            if (running) {
              this.stop();
            }

            this.remaining += n;

            if (running) {
              this.start();
            }

            return this.remaining;
          }
        }, {
          key: "getTimerLeft",
          value: function getTimerLeft() {
            if (this.running) {
              this.stop();
              this.start();
            }

            return this.remaining;
          }
        }, {
          key: "isRunning",
          value: function isRunning() {
            return this.running;
          }
        }]);

        return Timer;
      }();

      var defaultInputValidators = {
        email: function email(string, validationMessage) {
          return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
        },
        url: function url(string, validationMessage) {
          // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
        }
      };

      function setDefaultInputValidators(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (!params.inputValidator) {
          Object.keys(defaultInputValidators).forEach(function (key) {
            if (params.input === key) {
              params.inputValidator = defaultInputValidators[key];
            }
          });
        }
      }

      function validateCustomTargetElement(params) {
        // Determine if the custom target element is valid
        if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
          warn('Target parameter is not valid, defaulting to "body"');
          params.target = 'body';
        }
      }
      /**
       * Set type, text and actions on popup
       *
       * @param params
       * @returns {boolean}
       */


      function setParameters(params) {
        setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

        if (params.showLoaderOnConfirm && !params.preConfirm) {
          warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
        } // params.animation will be actually used in renderPopup.js
        // but in case when params.animation is a function, we need to call that function
        // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
        // inside the params.animation function


        params.animation = callIfFunction(params.animation);
        validateCustomTargetElement(params); // Replace newlines with <br> in title

        if (typeof params.title === 'string') {
          params.title = params.title.split('\n').join('<br />');
        }

        init(params);
      }
      /**
       * Open popup, add necessary classes and styles, fix scrollbar
       *
       * @param {Array} params
       */


      var openPopup = function openPopup(params) {
        var container = getContainer();
        var popup = getPopup();

        if (typeof params.onBeforeOpen === 'function') {
          params.onBeforeOpen(popup);
        }

        addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

        setScrollingVisibility(container, popup);

        if (isModal()) {
          fixScrollContainer(container, params.scrollbarPadding);
        }

        if (!isToast() && !globalState.previousActiveElement) {
          globalState.previousActiveElement = document.activeElement;
        }

        if (typeof params.onOpen === 'function') {
          setTimeout(function () {
            return params.onOpen(popup);
          });
        }

        removeClass(container, swalClasses['no-transition']);
      };

      function swalOpenAnimationFinished(event) {
        var popup = getPopup();

        if (event.target !== popup) {
          return;
        }

        var container = getContainer();
        popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
        container.style.overflowY = 'auto';
      }

      var setScrollingVisibility = function setScrollingVisibility(container, popup) {
        if (animationEndEvent && hasCssAnimation(popup)) {
          container.style.overflowY = 'hidden';
          popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
        } else {
          container.style.overflowY = 'auto';
        }
      };

      var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
        iOSfix();
        IEfix();
        setAriaHidden();

        if (scrollbarPadding) {
          fixScrollbar();
        } // sweetalert2/issues/1247


        setTimeout(function () {
          container.scrollTop = 0;
        });
      };

      var addClasses$1 = function addClasses(container, popup, params) {
        addClass(container, params.showClass.backdrop);
        show(popup); // Animate popup right after showing it

        addClass(popup, params.showClass.popup);
        addClass([document.documentElement, document.body], swalClasses.shown);

        if (params.heightAuto && params.backdrop && !params.toast) {
          addClass([document.documentElement, document.body], swalClasses['height-auto']);
        }
      };

      var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
        if (params.input === 'select' || params.input === 'radio') {
          handleInputOptions(instance, params);
        } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
          handleInputValue(instance, params);
        }
      };

      var getInputValue = function getInputValue(instance, innerParams) {
        var input = instance.getInput();

        if (!input) {
          return null;
        }

        switch (innerParams.input) {
          case 'checkbox':
            return getCheckboxValue(input);

          case 'radio':
            return getRadioValue(input);

          case 'file':
            return getFileValue(input);

          default:
            return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
      };

      var getCheckboxValue = function getCheckboxValue(input) {
        return input.checked ? 1 : 0;
      };

      var getRadioValue = function getRadioValue(input) {
        return input.checked ? input.value : null;
      };

      var getFileValue = function getFileValue(input) {
        return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
      };

      var handleInputOptions = function handleInputOptions(instance, params) {
        var content = getContent();

        var processInputOptions = function processInputOptions(inputOptions) {
          return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
        };

        if (isPromise(params.inputOptions)) {
          showLoading();
          params.inputOptions.then(function (inputOptions) {
            instance.hideLoading();
            processInputOptions(inputOptions);
          });
        } else if (_typeof(params.inputOptions) === 'object') {
          processInputOptions(params.inputOptions);
        } else {
          error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
        }
      };

      var handleInputValue = function handleInputValue(instance, params) {
        var input = instance.getInput();
        hide(input);
        params.inputValue.then(function (inputValue) {
          input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
          show(input);
          input.focus();
          instance.hideLoading();
        })["catch"](function (err) {
          error("Error in inputValue promise: ".concat(err));
          input.value = '';
          show(input);
          input.focus();
          instance.hideLoading();
        });
      };

      var populateInputOptions = {
        select: function select(content, inputOptions, params) {
          var select = getChildByClass(content, swalClasses.select);
          inputOptions.forEach(function (inputOption) {
            var optionValue = inputOption[0];
            var optionLabel = inputOption[1];
            var option = document.createElement('option');
            option.value = optionValue;
            setInnerHtml(option, optionLabel);

            if (params.inputValue.toString() === optionValue.toString()) {
              option.selected = true;
            }

            select.appendChild(option);
          });
          select.focus();
        },
        radio: function radio(content, inputOptions, params) {
          var radio = getChildByClass(content, swalClasses.radio);
          inputOptions.forEach(function (inputOption) {
            var radioValue = inputOption[0];
            var radioLabel = inputOption[1];
            var radioInput = document.createElement('input');
            var radioLabelElement = document.createElement('label');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;

            if (params.inputValue.toString() === radioValue.toString()) {
              radioInput.checked = true;
            }

            var label = document.createElement('span');
            setInnerHtml(label, radioLabel);
            label.className = swalClasses.label;
            radioLabelElement.appendChild(radioInput);
            radioLabelElement.appendChild(label);
            radio.appendChild(radioLabelElement);
          });
          var radios = radio.querySelectorAll('input');

          if (radios.length) {
            radios[0].focus();
          }
        }
      };
      /**
       * Converts `inputOptions` into an array of `[value, label]`s
       * @param inputOptions
       */

      var formatInputOptions = function formatInputOptions(inputOptions) {
        var result = [];

        if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
          inputOptions.forEach(function (value, key) {
            result.push([key, value]);
          });
        } else {
          Object.keys(inputOptions).forEach(function (key) {
            result.push([key, inputOptions[key]]);
          });
        }

        return result;
      };

      var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
        instance.disableButtons();

        if (innerParams.input) {
          handleConfirmWithInput(instance, innerParams);
        } else {
          confirm(instance, innerParams, true);
        }
      };

      var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
      };

      var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
        var inputValue = getInputValue(instance, innerParams);

        if (innerParams.inputValidator) {
          instance.disableInput();
          var validationPromise = Promise.resolve().then(function () {
            return innerParams.inputValidator(inputValue, innerParams.validationMessage);
          });
          validationPromise.then(function (validationMessage) {
            instance.enableButtons();
            instance.enableInput();

            if (validationMessage) {
              instance.showValidationMessage(validationMessage);
            } else {
              confirm(instance, innerParams, inputValue);
            }
          });
        } else if (!instance.getInput().checkValidity()) {
          instance.enableButtons();
          instance.showValidationMessage(innerParams.validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      };

      var succeedWith = function succeedWith(instance, value) {
        instance.closePopup({
          value: value
        });
      };

      var confirm = function confirm(instance, innerParams, value) {
        if (innerParams.showLoaderOnConfirm) {
          showLoading(); // TODO: make showLoading an *instance* method
        }

        if (innerParams.preConfirm) {
          instance.resetValidationMessage();
          var preConfirmPromise = Promise.resolve().then(function () {
            return innerParams.preConfirm(value, innerParams.validationMessage);
          });
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(getValidationMessage()) || preConfirmValue === false) {
              instance.hideLoading();
            } else {
              succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
            }
          });
        } else {
          succeedWith(instance, value);
        }
      };

      var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
        if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
          globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
          });
          globalState.keydownHandlerAdded = false;
        }

        if (!innerParams.toast) {
          globalState.keydownHandler = function (e) {
            return keydownHandler(instance, e, dismissWith);
          };

          globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
          globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
          globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
            capture: globalState.keydownListenerCapture
          });
          globalState.keydownHandlerAdded = true;
        }
      }; // Focus handling


      var setFocus = function setFocus(innerParams, index, increment) {
        var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

        for (var i = 0; i < focusableElements.length; i++) {
          index = index + increment; // rollover to first item

          if (index === focusableElements.length) {
            index = 0; // go to last item
          } else if (index === -1) {
            index = focusableElements.length - 1;
          }

          return focusableElements[index].focus();
        } // no visible focusable elements, focus the popup


        getPopup().focus();
      };

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];
      var escKeys = ['Escape', 'Esc' // IE11
      ];

      var keydownHandler = function keydownHandler(instance, e, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);

        if (innerParams.stopKeydownPropagation) {
          e.stopPropagation();
        } // ENTER


        if (e.key === 'Enter') {
          handleEnter(instance, e, innerParams); // TAB
        } else if (e.key === 'Tab') {
          handleTab(e, innerParams); // ARROWS - switch focus between buttons
        } else if (arrowKeys.indexOf(e.key) !== -1) {
          handleArrows(); // ESC
        } else if (escKeys.indexOf(e.key) !== -1) {
          handleEsc(e, innerParams, dismissWith);
        }
      };

      var handleEnter = function handleEnter(instance, e, innerParams) {
        // #720 #721
        if (e.isComposing) {
          return;
        }

        if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          clickConfirm();
          e.preventDefault();
        }
      };

      var handleTab = function handleTab(e, innerParams) {
        var targetElement = e.target;
        var focusableElements = getFocusableElements();
        var btnIndex = -1;

        for (var i = 0; i < focusableElements.length; i++) {
          if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(innerParams, btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(innerParams, btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault();
      };

      var handleArrows = function handleArrows() {
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus(); // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }
      };

      var handleEsc = function handleEsc(e, innerParams, dismissWith) {
        if (callIfFunction(innerParams.allowEscapeKey)) {
          e.preventDefault();
          dismissWith(DismissReason.esc);
        }
      };

      var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
        var innerParams = privateProps.innerParams.get(instance);

        if (innerParams.toast) {
          handleToastClick(instance, domCache, dismissWith);
        } else {
          // Ignore click events that had mousedown on the popup but mouseup on the container
          // This can happen when the user drags a slider
          handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

          handleContainerMousedown(domCache);
          handleModalClick(instance, domCache, dismissWith);
        }
      };

      var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
        // Closing toast by internal click
        domCache.popup.onclick = function () {
          var innerParams = privateProps.innerParams.get(instance);

          if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
            return;
          }

          dismissWith(DismissReason.close);
        };
      };

      var ignoreOutsideClick = false;

      var handleModalMousedown = function handleModalMousedown(domCache) {
        domCache.popup.onmousedown = function () {
          domCache.container.onmouseup = function (e) {
            domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
            // have any other direct children aside of the popup

            if (e.target === domCache.container) {
              ignoreOutsideClick = true;
            }
          };
        };
      };

      var handleContainerMousedown = function handleContainerMousedown(domCache) {
        domCache.container.onmousedown = function () {
          domCache.popup.onmouseup = function (e) {
            domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

            if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
              ignoreOutsideClick = true;
            }
          };
        };
      };

      var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
        domCache.container.onclick = function (e) {
          var innerParams = privateProps.innerParams.get(instance);

          if (ignoreOutsideClick) {
            ignoreOutsideClick = false;
            return;
          }

          if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
            dismissWith(DismissReason.backdrop);
          }
        };
      };

      function _main(userParams) {
        showWarningsForParams(userParams);

        if (globalState.currentInstance) {
          globalState.currentInstance._destroy();
        }

        globalState.currentInstance = this;
        var innerParams = prepareParams(userParams);
        setParameters(innerParams);
        Object.freeze(innerParams); // clear the previous timer

        if (globalState.timeout) {
          globalState.timeout.stop();
          delete globalState.timeout;
        } // clear the restore focus timeout


        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = populateDomCache(this);
        render(this, innerParams);
        privateProps.innerParams.set(this, innerParams);
        return swalPromise(this, domCache, innerParams);
      }

      var prepareParams = function prepareParams(userParams) {
        var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

        var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

        var params = _extends({}, defaultParams, userParams);

        params.showClass = showClass;
        params.hideClass = hideClass; // @deprecated

        if (userParams.animation === false) {
          params.showClass = {
            popup: 'swal2-noanimation',
            backdrop: 'swal2-noanimation'
          };
          params.hideClass = {};
        }

        return params;
      };

      var swalPromise = function swalPromise(instance, domCache, innerParams) {
        return new Promise(function (resolve) {
          // functions to handle all closings/dismissals
          var dismissWith = function dismissWith(dismiss) {
            instance.closePopup({
              dismiss: dismiss
            });
          };

          privateMethods.swalPromiseResolve.set(instance, resolve);

          domCache.confirmButton.onclick = function () {
            return handleConfirmButtonClick(instance, innerParams);
          };

          domCache.cancelButton.onclick = function () {
            return handleCancelButtonClick(instance, dismissWith);
          };

          domCache.closeButton.onclick = function () {
            return dismissWith(DismissReason.close);
          };

          handlePopupClick(instance, domCache, dismissWith);
          addKeydownHandler(instance, globalState, innerParams, dismissWith);

          if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
            addClass(document.body, swalClasses['toast-column']);
          } else {
            removeClass(document.body, swalClasses['toast-column']);
          }

          handleInputOptionsAndValue(instance, innerParams);
          openPopup(innerParams);
          setupTimer(globalState, innerParams, dismissWith);
          initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

          setTimeout(function () {
            domCache.container.scrollTop = 0;
          });
        });
      };

      var populateDomCache = function populateDomCache(instance) {
        var domCache = {
          popup: getPopup(),
          container: getContainer(),
          content: getContent(),
          actions: getActions(),
          confirmButton: getConfirmButton(),
          cancelButton: getCancelButton(),
          closeButton: getCloseButton(),
          validationMessage: getValidationMessage(),
          progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
      };

      var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
        var timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);

        if (innerParams.timer) {
          globalState$$1.timeout = new Timer(function () {
            dismissWith('timer');
            delete globalState$$1.timeout;
          }, innerParams.timer);

          if (innerParams.timerProgressBar) {
            show(timerProgressBar);
            setTimeout(function () {
              if (globalState$$1.timeout.running) {
                // timer can be already stopped at this point
                animateTimerProgressBar(innerParams.timer);
              }
            });
          }
        }
      };

      var initFocus = function initFocus(domCache, innerParams) {
        if (innerParams.toast) {
          return;
        }

        if (!callIfFunction(innerParams.allowEnterKey)) {
          return blurActiveElement();
        }

        if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
          return domCache.cancelButton.focus();
        }

        if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
          return domCache.confirmButton.focus();
        }

        setFocus(innerParams, -1, 1);
      };

      var blurActiveElement = function blurActiveElement() {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      };
      /**
       * Updates popup parameters.
       */


      function update(params) {
        var popup = getPopup();
        var innerParams = privateProps.innerParams.get(this);

        if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
          return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
        }

        var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

        Object.keys(params).forEach(function (param) {
          if (Swal.isUpdatableParameter(param)) {
            validUpdatableParams[param] = params[param];
          } else {
            warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
          }
        });

        var updatedParams = _extends({}, innerParams, validUpdatableParams);

        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
          params: {
            value: _extends({}, this.params, params),
            writable: false,
            enumerable: true
          }
        });
      }

      function _destroy() {
        var domCache = privateProps.domCache.get(this);
        var innerParams = privateProps.innerParams.get(this);

        if (!innerParams) {
          return; // This instance has already been destroyed
        } // Check if there is another Swal closing


        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
          globalState.swalCloseEventFinishedCallback();
          delete globalState.swalCloseEventFinishedCallback;
        } // Check if there is a swal disposal defer timer


        if (globalState.deferDisposalTimer) {
          clearTimeout(globalState.deferDisposalTimer);
          delete globalState.deferDisposalTimer;
        }

        if (typeof innerParams.onDestroy === 'function') {
          innerParams.onDestroy();
        }

        disposeSwal(this);
      }

      var disposeSwal = function disposeSwal(instance) {
        // Unset this.params so GC will dispose it (#1569)
        delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

        delete globalState.keydownHandler;
        delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

        unsetWeakMaps(privateProps);
        unsetWeakMaps(privateMethods);
      };

      var unsetWeakMaps = function unsetWeakMaps(obj) {
        for (var i in obj) {
          obj[i] = new WeakMap();
        }
      };

      var instanceMethods =
      /*#__PURE__*/
      Object.freeze({
        hideLoading: hideLoading,
        disableLoading: hideLoading,
        getInput: getInput$1,
        close: close,
        closePopup: close,
        closeModal: close,
        closeToast: close,
        enableButtons: enableButtons,
        disableButtons: disableButtons,
        enableInput: enableInput,
        disableInput: disableInput,
        showValidationMessage: showValidationMessage,
        resetValidationMessage: resetValidationMessage$1,
        getProgressSteps: getProgressSteps$1,
        _main: _main,
        update: update,
        _destroy: _destroy
      });
      var currentInstance; // SweetAlert constructor

      function SweetAlert() {
        // Prevent run in Node env

        /* istanbul ignore if */
        if (typeof window === 'undefined') {
          return;
        } // Check for the existence of Promise

        /* istanbul ignore if */


        if (typeof Promise === 'undefined') {
          error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
        }

        currentInstance = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var outerParams = Object.freeze(this.constructor.argsToParams(args));
        Object.defineProperties(this, {
          params: {
            value: outerParams,
            writable: false,
            enumerable: true,
            configurable: true
          }
        });

        var promise = this._main(this.params);

        privateProps.promise.set(this, promise);
      } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


      SweetAlert.prototype.then = function (onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      };

      SweetAlert.prototype["finally"] = function (onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }; // Assign instance methods from src/instanceMethods/*.js to prototype


      _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


      _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


      Object.keys(instanceMethods).forEach(function (key) {
        SweetAlert[key] = function () {
          if (currentInstance) {
            var _currentInstance;

            return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
          }
        };
      });
      SweetAlert.DismissReason = DismissReason;
      SweetAlert.version = '9.10.12';
      var Swal = SweetAlert;
      Swal["default"] = Swal;
      return Swal;
    });

    if (typeof this !== 'undefined' && this.Sweetalert2) {
      this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
    }

    "undefined" != typeof document && function (e, t) {
      var n = e.createElement("style");
      if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
        n.innerHTML = t;
      } catch (e) {
        n.innerText = t;
      }
    }(document, ".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");
    /***/
  },

  /***/
  "./src/app/backend/authentication/404/not-found.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/backend/authentication/404/not-found.component.ts ***!
    \*******************************************************************/

  /*! exports provided: NotfoundComponent */

  /***/
  function srcAppBackendAuthentication404NotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
      return NotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotfoundComponent =
    /*#__PURE__*/
    function () {
      function NotfoundComponent(route) {
        _classCallCheck2(this, NotfoundComponent);

        this.route = route;
        this.defaulHomepage = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_1__["DefaulHomepage"];
      }

      _createClass2(NotfoundComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "backHome",
        value: function backHome() {
          this.defaulHomepage();
        }
      }]);

      return NotfoundComponent;
    }();

    NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
      return new (t || NotfoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotfoundComponent,
      selectors: [["app-not-found"]],
      decls: 10,
      vars: 0,
      consts: [[1, "error-box"], [1, "error-body", "text-center"], [1, "error-title", "text-danger"], [1, "text-uppercase", "error-subtitle"], [1, "text-muted", "m-t-30", "m-b-30"], ["href", "javascript:;", 1, "btn", "btn-danger", "btn-rounded", "waves-effect", "waves-light", "m-b-40", 3, "click"]],
      template: function NotfoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PAGE NOT FOUND !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "YOU SEEM TO BE TRYING TO FIND HIS WAY HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotfoundComponent_Template_a_click_8_listener() {
            return ctx.backHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Back to home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/authentication/authentication.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/backend/authentication/authentication.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppBackendAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./404/not-found.component */
    "./src/app/backend/authentication/404/not-found.component.ts");
    /* harmony import */


    var _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lock/lock.component */
    "./src/app/backend/authentication/lock/lock.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/backend/authentication/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/backend/authentication/signup/signup.component.ts");
    /* harmony import */


    var _authentication_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./authentication.routing */
    "./src/app/backend/authentication/authentication.routing.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/backend/authentication/reset-password/reset-password.component.ts");
    /* harmony import */


    var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./forgot/forgot.component */
    "./src/app/backend/authentication/forgot/forgot.component.ts");
    /* harmony import */


    var _forgot_get_password_forgot_get_password_forgot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./forgot/get-password-forgot/get-password-forgot.component */
    "./src/app/backend/authentication/forgot/get-password-forgot/get-password-forgot.component.ts");
    /* harmony import */


    var _verify_odp_verify_odp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./verify-odp/verify-odp.component */
    "./src/app/backend/authentication/verify-odp/verify-odp.component.ts");
    /* harmony import */


    var _shared_utilities_numbers_only_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/utilities/numbers-only.directive */
    "./src/app/shared/utilities/numbers-only.directive.ts"); // import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck2(this, AuthenticationModule);
    };

    AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthenticationModule
    });
    AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthenticationModule_Factory(t) {
        return new (t || AuthenticationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_8__["AuthenticationRoutes"]), // NgbModule,
      _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, {
        declarations: [_verify_odp_verify_odp_component__WEBPACK_IMPORTED_MODULE_12__["VerifyODPComponent"], _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__["LockComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_10__["ForgotComponent"], _forgot_get_password_forgot_get_password_forgot_component__WEBPACK_IMPORTED_MODULE_11__["GetPasswordForgotComponent"], _shared_utilities_numbers_only_directive__WEBPACK_IMPORTED_MODULE_13__["NumberDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], // NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_8__["AuthenticationRoutes"]), // NgbModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          declarations: [_verify_odp_verify_odp_component__WEBPACK_IMPORTED_MODULE_12__["VerifyODPComponent"], _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__["LockComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_10__["ForgotComponent"], _forgot_get_password_forgot_get_password_forgot_component__WEBPACK_IMPORTED_MODULE_11__["GetPasswordForgotComponent"], _shared_utilities_numbers_only_directive__WEBPACK_IMPORTED_MODULE_13__["NumberDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/authentication/authentication.routing.ts":
  /*!******************************************************************!*\
    !*** ./src/app/backend/authentication/authentication.routing.ts ***!
    \******************************************************************/

  /*! exports provided: AuthenticationRoutes */

  /***/
  function srcAppBackendAuthenticationAuthenticationRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function () {
      return AuthenticationRoutes;
    });
    /* harmony import */


    var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./404/not-found.component */
    "./src/app/backend/authentication/404/not-found.component.ts");
    /* harmony import */


    var _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lock/lock.component */
    "./src/app/backend/authentication/lock/lock.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/backend/authentication/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/backend/authentication/signup/signup.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/backend/authentication/reset-password/reset-password.component.ts");
    /* harmony import */


    var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot/forgot.component */
    "./src/app/backend/authentication/forgot/forgot.component.ts");
    /* harmony import */


    var _forgot_get_password_forgot_get_password_forgot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot/get-password-forgot/get-password-forgot.component */
    "./src/app/backend/authentication/forgot/get-password-forgot/get-password-forgot.component.ts");
    /* harmony import */


    var _verify_odp_verify_odp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verify-odp/verify-odp.component */
    "./src/app/backend/authentication/verify-odp/verify-odp.component.ts");

    var AuthenticationRoutes = [{
      path: "",
      children: [{
        path: "",
        redirectTo: "login",
        pathMatch: "full"
      }, {
        path: "verify-odp",
        component: _verify_odp_verify_odp_component__WEBPACK_IMPORTED_MODULE_7__["VerifyODPComponent"]
      }, {
        path: "404",
        component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotfoundComponent"]
      }, {
        path: "lock",
        component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__["LockComponent"]
      }, {
        path: "forgot-password",
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__["ForgotComponent"]
      }, {
        path: "reset-password/:token",
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
      }, {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: "signup",
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
      }, {
        path: "get-password",
        component: _forgot_get_password_forgot_get_password_forgot_component__WEBPACK_IMPORTED_MODULE_6__["GetPasswordForgotComponent"]
      }]
    }];
    /***/
  },

  /***/
  "./src/app/backend/authentication/forgot/forgot.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/backend/authentication/forgot/forgot.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgotComponent */

  /***/
  function srcAppBackendAuthenticationForgotForgotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
      return ForgotComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
    /* harmony import */


    var _app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../app/service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../service/authorization/auth.service */
    "./src/app/service/authorization/auth.service.ts");
    /* harmony import */


    var src_app_service_store_forgot_password_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/store-forgot-password.service */
    "./src/app/service/store-forgot-password.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForgotComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" * ", ctx_r3.lableMessage, " ");
      }
    }

    var ForgotComponent =
    /*#__PURE__*/
    function () {
      function ForgotComponent(userApiService, fb, route, auth, storeForgotPasswordService) {
        _classCallCheck2(this, ForgotComponent);

        this.userApiService = userApiService;
        this.fb = fb;
        this.route = route;
        this.auth = auth;
        this.storeForgotPasswordService = storeForgotPasswordService;
        this.checkMesage = false;
        this.defaulHomepage = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["DefaulHomepage"];
      }

      _createClass2(ForgotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.auth.isLoggednIn()) {
            this.defaulHomepage();
          }

          this.onInitForm();
        }
      }, {
        key: "onForgotPassword",
        value: function onForgotPassword() {
          var _this2 = this;

          if (this.form_data.valid) {
            var form = this.form_data.value;
            this.userApiService.getIdByAccountName(form).subscribe(function (event) {
              _this2.checkMesage = false;

              if (event) {
                _this2.onSendSMS(event);
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', 'Thất bại.', 'error');
              }
            }, function (err) {
              _this2.checkMesage = false;

              if (err && err.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', err.error.message, 'error');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', 'Lỗi kết nối hệ thống server.', 'error');
              }
            });
          } else {
            this.checkMesage = true;
            this.lableMessage = 'Tài khoản không được để trống.';
          }
        }
      }, {
        key: "onSendSMS",
        value: function onSendSMS(data) {
          var _this3 = this;

          this.userApiService.sendSMS({
            u_id: data._id
          }).subscribe(function (result) {
            if (result) {
              _this3.storeForgotPasswordService.updateStore(data);

              return _this3.route.navigate(['auth', 'get-password']);
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', 'Quá trình gửi mã OTP bị lỗi.', 'error');
            }
          }, function (err) {
            if (err.error && err.error.message) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', err.error.message, 'error');
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', 'Lỗi kết nối hệ thống server.', 'error');
            }
          });
        }
      }, {
        key: "onInitForm",
        value: function onInitForm() {
          this.form_data = this.fb.group({
            account_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.route.navigate(['auth', 'login']);
        }
      }]);

      return ForgotComponent;
    }();

    ForgotComponent.ɵfac = function ForgotComponent_Factory(t) {
      return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_store_forgot_password_service__WEBPACK_IMPORTED_MODULE_7__["StoreForgotPasswordService"]));
    };

    ForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotComponent,
      selectors: [["app-forgot"]],
      inputs: {
        form_data: "form_data"
      },
      decls: 28,
      vars: 2,
      consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], ["id", "loginform"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], [1, "form-horizontal", "m-t-20", 3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-login2", 1, "input-group-text"], [1, "ti-user"], ["type", "text", "formControlName", "account_name", "name", "account_name", "id", "account_name", "placeholder", "T\xE0i kho\u1EA3n", "aria-label", "M\u1EADt kh\u1EA9u", "aria-describedby", "basic-login2", 1, "form-control", "form-control-lg"], [4, "ngIf"], [1, "text-inverse", "text-left"], [1, "col-lg-6", "col-md-6"], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-block", "btn-info"], [1, "text-danger", "text-right"]],
      template: function ForgotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "L\u1EA5y m\u1EADt kh\u1EA9u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onForgotPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nh\u1EADp t\xE0i kho\u1EA3n \u0111\u1EC3 thi\u1EBFt l\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotComponent_div_18_Template, 3, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "H\u1EC7 th\u1ED1ng s\u1EBD g\u1EEDi m\xE3 otp v\xE0o s\u1ED1 \u0111i\u1EC7n tho\u1EA1i \u0111\xE3 \u0111\u0103ng k\xFD \u1EE9ng v\u1EDBi t\xE0i kho\u1EA3n v\u1EEBa nh\u1EADp. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotComponent_Template_button_click_23_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "H\u1EE7y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "X\xE1c nh\u1EADn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form_data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkMesage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot',
          templateUrl: './forgot.component.html'
        }]
      }], function () {
        return [{
          type: _app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: src_app_service_store_forgot_password_service__WEBPACK_IMPORTED_MODULE_7__["StoreForgotPasswordService"]
        }];
      }, {
        form_data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/backend/authentication/forgot/get-password-forgot/get-password-forgot.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/backend/authentication/forgot/get-password-forgot/get-password-forgot.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: GetPasswordForgotComponent */

  /***/
  function srcAppBackendAuthenticationForgotGetPasswordForgotGetPasswordForgotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetPasswordForgotComponent", function () {
      return GetPasswordForgotComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
    /* harmony import */


    var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../service/authorization/auth.service */
    "./src/app/service/authorization/auth.service.ts");
    /* harmony import */


    var src_app_service_store_forgot_password_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/store-forgot-password.service */
    "./src/app/service/store-forgot-password.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GetPasswordForgotComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.lableMessage, " ");
      }
    }

    var GetPasswordForgotComponent =
    /*#__PURE__*/
    function () {
      function GetPasswordForgotComponent(userApiService, fb, route, auth, activatedRoute, storeForgotPasswordService) {
        _classCallCheck2(this, GetPasswordForgotComponent);

        this.userApiService = userApiService;
        this.fb = fb;
        this.route = route;
        this.auth = auth;
        this.activatedRoute = activatedRoute;
        this.storeForgotPasswordService = storeForgotPasswordService;
        this.checkMesage = false;
        this.defaulHomepage = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["DefaulHomepage"];
        this.onInitForm();
      }

      _createClass2(GetPasswordForgotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (this.auth.isLoggednIn()) {
            this.defaulHomepage();
          } // this.id = this.activatedRoute.snapshot.paramMap.get('id');


          this.storeForgotPasswordService.currentStore.subscribe(function (msg) {
            if (msg) {
              _this4.data = msg;
            }
          });
        }
      }, {
        key: "onForgotPassword",
        value: function onForgotPassword() {
          var _this5 = this;

          if (this.form_data.valid && this.data) {
            var form = this.form_data.value;
            var obj = {
              _id: this.data._id,
              newPassword: form.newPassword,
              otp: form.otp
            };
            var isAccount = this.data.scope_access !== "SALE";
            this.userApiService.forgotPassword(obj, isAccount).subscribe(function (event) {
              if (event) {
                _this5.checkMesage = false; // Swal.fire({
                //   title: 'Lấy mật khẩu thành công',
                //   text: 'Nhấn OK để đăng nhập lại vào ứng dụng.',
                //   type: 'success',
                //   confirmButtonColor: '#3085d6',
                //   cancelButtonColor: '#d33',
                //   confirmButtonClass: 'btn btn-success m-r-10',
                //   confirmButtonText: `OK`,
                //   allowOutsideClick: false
                // }).then((result) => {
                //   if (result.value) {
                //     this.auth.logout();
                //   }
                // });
              } else {
                _this5.checkMesage = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Error", "Hành động thất bại.", "error");
              }
            }, function (err) {
              _this5.checkMesage = false;

              if (err && err.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Error", err.error.message, "error");
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Error", "Lổi kết nối hệ thống serve.", "error");
              }
            });
          } else {
            this.checkMesage = true;
            this.lableMessage = "";

            if (!this.form_data.controls.otp.value) {
              return this.lableMessage = "Mã OTP không được để trống.";
            }

            if (!this.form_data.controls.newPassword.value) {
              return this.lableMessage = "Mật khẩu mới không được để trống.";
            }

            if (!this.form_data.controls.confirmNewPassword.value) {
              return this.lableMessage = "Xác nhận mật khẩu không được để trống.";
            } else if (!this.form_data.controls.confirmNewPassword.valid) {
              return this.lableMessage = "Xác nhận mật khẩu không đúng.";
            }
          }
        }
      }, {
        key: "onInitForm",
        value: function onInitForm() {
          this.form_data = this.fb.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            confirmNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]))
          }, {
            // validation method
            validator: function MatchPassword(AC) {
              var password = AC.get("newPassword").value;
              var rePassword = AC.get("confirmNewPassword").value;

              if (password !== rePassword) {
                AC.get("confirmNewPassword").setErrors({
                  MatchPassword: true
                });
              } else {
                return null;
              }
            }
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.route.navigate(["auth", "login"]);
        }
      }]);

      return GetPasswordForgotComponent;
    }();

    GetPasswordForgotComponent.ɵfac = function GetPasswordForgotComponent_Factory(t) {
      return new (t || GetPasswordForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_store_forgot_password_service__WEBPACK_IMPORTED_MODULE_7__["StoreForgotPasswordService"]));
    };

    GetPasswordForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GetPasswordForgotComponent,
      selectors: [["app-get-password-forgot"]],
      decls: 36,
      vars: 2,
      consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], ["id", "loginform"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], ["class", "col-12 bg-danger text-white", 4, "ngIf"], [1, "col-12"], [1, "form-horizontal", "m-t-20", 3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-login2", 1, "input-group-text"], [1, "fab", "fa-codepen"], ["type", "text", "formControlName", "otp", "name", "otp", "id", "otp", "placeholder", "M\xE3 otp", "aria-describedby", "basic-login2", 1, "form-control", "form-control-lg"], [1, "ti-pencil"], ["type", "password", "formControlName", "newPassword", "name", "newPassword", "id", "newPassword", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", "aria-label", "M\u1EADt kh\u1EA9u", "aria-describedby", "basic-login2", 1, "form-control", "form-control-lg"], ["type", "password", "formControlName", "confirmNewPassword", "name", "confirmNewPassword", "id", "confirmNewPassword", "placeholder", "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi", "aria-label", "M\u1EADt kh\u1EA9u", "aria-describedby", "basic-login2", 1, "form-control", "form-control-lg"], [1, "text-inverse", "text-left"], [1, "col-lg-6", "col-md-6"], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-block", "btn-info"], [1, "col-12", "bg-danger", "text-white"]],
      template: function GetPasswordForgotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "L\u1EA5y m\u1EADt kh\u1EA9u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GetPasswordForgotComponent_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GetPasswordForgotComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onForgotPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ki\u1EC3m tra tin nh\u1EAFn v\xE0 nh\u1EADp m\xE3 otp h\u1EC7 th\u1ED1ng g\u1EEDi \u0111\u1EBFn. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetPasswordForgotComponent_Template_button_click_31_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "H\u1EE7y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "X\xE1c nh\u1EADn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkMesage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form_data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetPasswordForgotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-get-password-forgot",
          templateUrl: "./get-password-forgot.component.html"
        }]
      }], function () {
        return [{
          type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_service_store_forgot_password_service__WEBPACK_IMPORTED_MODULE_7__["StoreForgotPasswordService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/authentication/lock/lock.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/backend/authentication/lock/lock.component.ts ***!
    \***************************************************************/

  /*! exports provided: LockComponent */

  /***/
  function srcAppBackendAuthenticationLockLockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LockComponent", function () {
      return LockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LockComponent = function LockComponent() {
      _classCallCheck2(this, LockComponent);
    };

    LockComponent.ɵfac = function LockComponent_Factory(t) {
      return new (t || LockComponent)();
    };

    LockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LockComponent,
      selectors: [["app-lock"]],
      decls: 18,
      vars: 0,
      consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], [1, "logo"], [1, "db"], ["alt", "thumbnail", "width", "100", "src", "assets/images/users/1.jpg", 1, "rounded-circle"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], ["action", "index.html", 1, "form-horizontal", "m-t-20"], [1, "form-group", "row"], ["type", "password", "required", "", "placeholder", "Password", 1, "form-control", "form-control-lg"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["type", "submit", 1, "btn", "btn-block", "btn-lg", "btn-info"]],
      template: function LockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Genelia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-lock',
          templateUrl: './lock.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/authentication/login/login.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/backend/authentication/login/login.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppBackendAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/constants/constant */
    "./src/app/shared/constants/constant.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../service/authorization/auth.service */
    "./src/app/service/authorization/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import { ConfigManageService } from "src/app/config-manage/config-manage.service";


    function LoginComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.lableError, " ");
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "d-none": a0
      };
    }; // import { ResourceMenuService } from "src/app/service/resource-menu.service";


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(fb, route, userApiService, auth // private configManageService: ConfigManageService, // private resourceMenuApiService: ResourceMenuService
      ) {
        _classCallCheck2(this, LoginComponent);

        this.fb = fb;
        this.route = route;
        this.userApiService = userApiService;
        this.auth = auth;
        this.lableError = "";
        this.defaulHomepage = src_app_shared_constants_constant__WEBPACK_IMPORTED_MODULE_3__["DefaulHomepage"]; // loginform = true;

        this.recoverform = false;
      }

      _createClass2(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onInitForm();

          if (this.auth.isLoggednIn()) {
            this.defaulHomepage();
          }
        }
      }, {
        key: "onInitForm",
        value: function onInitForm() {
          this.form_data = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            account_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]))
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          if (this.form_data.valid) {
            var form = this.form_data.value; // sessionStorage.setItem("MobicardNotRequireToken", "login");

            this.auth.sendToken("Tokentest");
            this.route.navigate(["auth", "verify-odp"]); // this.userApiService.login(form).subscribe(
            //   (event: any) => {
            //     if (event) {
            //       //  this.auth.logout();
            //       this.auth.sendToken(event.token);
            //       if (event.account.scope_access === "SALE") {
            //         localStorage.setItem("ScopeAccess", "SALE");
            //         this.profile = event.account;
            //         this.onCheckShift(event.account._id);
            //         // this.getResource_menu_sale(event.account._id);
            //       } else {
            //         localStorage.setItem(
            //           "UserProfile",
            //           JSON.stringify(event.account)
            //         );
            //         this.onGetConfigManage();
            //         this.defaulHomepage();
            //       }
            //     } else {
            //       this.lableError = event.message;
            //     }
            //   },
            //   (err: HttpErrorResponse) => {
            //     console.log(err);
            //     Swal.fire("Error", err.error.message, "error");
            //   }
            // );
          } else {
            if (!this.form_data.controls.account_name.value) {
              return this.lableError = "Tên đăng nhập không được để trống.";
            }

            if (!this.form_data.controls.password.value) {
              return this.lableError = "Mật khẩu không được để trống.";
            }
          }
        }
      }, {
        key: "onGetConfigManage",
        value: function onGetConfigManage() {// await this.configManageService.getAll().subscribe((event: any) => {
          //   if (event) {
          //     localStorage.setItem('config_manage', JSON.stringify(event));
          //   }
          // });
        }
      }, {
        key: "onForgotPassword",
        value: function onForgotPassword() {
          return this.route.navigate(["auth", "forgot-password"]);
        } // sale

      }, {
        key: "onCheckShift",
        value: function onCheckShift(userId) {
          var _this6 = this;

          this.lableError = "";
          this.userApiService.checkShift({
            emp_id: userId
          }).subscribe(function (result) {
            if (result) {
              _this6.onSendSMS(userId);
            } else {
              localStorage.removeItem("LoggedInUser");
              _this6.lableError = "Bạn đăng nhập không đúng ca trực. Vui lòng kiểm tra lại.";
            }
          }, function (err) {
            localStorage.removeItem("LoggedInUser");

            if (err.error && err.error.message) {
              _this6.lableError = err.error.message;
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Error", "Lổi kết nối hệ thống serve.", "error");
            }
          });
        }
      }, {
        key: "onSendSMS",
        value: function onSendSMS(userId) {
          var _this7 = this;

          this.userApiService.sendSMS({
            u_id: userId
          }).subscribe(function (result) {
            if (result.status) {
              localStorage.setItem("UserProfile", JSON.stringify(_this7.profile));
              return _this7.route.navigate(["sale", "verify-odp"]);
            } else {
              _this7.lableError = "Quá trình gửi mã OTP bị lỗi.";
            }
          }, function (err) {
            if (err.error && err.error.message) {
              _this7.lableError = err.error.message;
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Error", "Lổi kết nối hệ thống serve.", "error");
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 37,
      vars: 5,
      consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], ["id", "loginform", 3, "ngClass"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], ["class", "col-12 bg-danger text-white", 4, "ngIf"], [1, "col-12"], [1, "form-horizontal", "m-t-20", 3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-login1", 1, "input-group-text"], [1, "ti-user"], ["type", "text", "formControlName", "account_name", "name", "account_name", "id", "account_name", "placeholder", "T\xEAn \u0111\u0103ng nh\u1EADp", "aria-label", "T\xEAn \u0111\u0103ng nh\u1EADp", "aria-describedby", "basic-login1", 1, "form-control", "form-control-lg"], ["id", "basic-login2", 1, "input-group-text"], [1, "ti-pencil"], ["type", "password", "formControlName", "password", "name", "password", "id", "password", "placeholder", "M\u1EADt kh\u1EA9u", "aria-label", "M\u1EADt kh\u1EA9u", "aria-describedby", "basic-login2", 1, "form-control", "form-control-lg"], [1, "form-group", "row"], [1, "col-md-12"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-dark", "float-right", 3, "click"], [1, "fa", "fa-lock", "m-r-5"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["type", "submit", 1, "btn", "btn-block", "btn-lg", "btn-secondary"], [1, "form-group", "m-b-0", "m-t-10"], [1, "col-sm-12", "text-center"], ["routerLink", "/auth/signup", 1, "text-info", "m-l-5"], [1, "col-12", "bg-danger", "text-white"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0110\u0103ng nh\u1EADp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_24_listener() {
            return ctx.onForgotPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Qu\xEAn m\u1EADt kh\u1EA9u?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0110\u0103ng nh\u1EADp ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " B\u1EA1n ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0110\u0103ng k\xFD ngay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.recoverform));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lableError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form_data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-login",
          templateUrl: "./login.component.html"
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/backend/authentication/reset-password/reset-password.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/backend/authentication/reset-password/reset-password.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppBackendAuthenticationResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../service/authorization/auth.service */
    "./src/app/service/authorization/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResetPasswordComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" * ", ctx_r2.lableError, " ");
      }
    }

    var ResetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ResetPasswordComponent(userApiService, fb, activatedRoute, route, auth) {
        _classCallCheck2(this, ResetPasswordComponent);

        this.userApiService = userApiService;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.auth = auth;
        this.checkMesage = true;
        this.setIcon = false;
        this.token = '';
        this.onInitForm();
      }

      _createClass2(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.auth.isLoggednIn()) {
            return this.route.navigate(['auth', 'login']);
          }

          this.token = this.activatedRoute.snapshot.paramMap.get('token');
        }
      }, {
        key: "onResetPassword",
        value: function onResetPassword() {
          var _this8 = this;

          if (this.form_data.valid) {
            var form = this.form_data.value;
            this.userApiService.resetPassword(form).subscribe(function (event) {
              if (event.data.length > 0) {
                _this8.token = '';
                _this8.checkMesage = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Success', 'Đặt lại mật khẩu thành công.', 'success');
              } else {
                _this8.checkMesage = false;
                _this8.lableError = event.message;
              }
            }, function (err) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error', 'Lổi kết nối hệ thống serve.', 'error');
            });
          } else {
            this.checkMesage = false;

            if (!this.form_data.controls.new_password.value) {
              return this.lableError = 'Mật khẩu mới không được để trống.';
            }

            if (!this.form_data.controls.rePassword.value) {
              return this.lableError = 'Xác nhận mật khẩu không được để trống.';
            } else {
              return this.lableError = 'Xác nhận mật khẩu không đúng.';
            }
          }
        }
      }, {
        key: "onInitForm",
        value: function onInitForm() {
          this.form_data = this.fb.group({
            new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            rePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            token: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.token, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          }, {
            // your validation method
            validator: function MatchPassword(AC) {
              var password = AC.get('new_password').value;
              var rePassword = AC.get('rePassword').value;

              if (password !== rePassword) {
                AC.get('rePassword').setErrors({
                  MatchPassword: true
                });
              } else {
                return null;
              }
            }
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.route.navigate(['auth', 'login']);
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      inputs: {
        form_data: "form_data"
      },
      decls: 35,
      vars: 2,
      consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], ["id", "resetPasswordForm"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "row"], [1, "col-12"], [1, "form-horizontal", "m-t-20", 3, "formGroup", "ngSubmit"], [4, "ngIf"], [1, "form-group", "row"], ["for", "", 1, "col-sm-12", "text-left", "col-form-label"], [1, "text-danger"], [1, "col-sm-12"], ["type", "password", "formControlName", "new_password", "name", "new_password", "id", "new_password", "placeholder", "New Password", 1, "form-control"], ["type", "password", "formControlName", "rePassword", "name", "rePassword", "id", "rePassword", "placeholder", "Confirm Password", 1, "form-control"], [1, "col-lg-6", "col-md-6"], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-block", "btn-info"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onResetPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResetPasswordComponent_div_11_Template, 3, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "M\u1EADt kh\u1EA9u m\u1EDBi (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u ( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_30_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "H\u1EE7y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "X\xE1c nh\u1EADn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form_data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.checkMesage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html'
        }]
      }], function () {
        return [{
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, {
        form_data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/backend/authentication/signup/signup.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/backend/authentication/signup/signup.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SignupComponent, CustomValidateIDCard */

  /***/
  function srcAppBackendAuthenticationSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidateIDCard", function () {
      return CustomValidateIDCard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_utilities_validatorHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/utilities/validatorHelper */
    "./src/app/shared/utilities/validatorHelper.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_utilities_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/utilities/numbers-only.directive */
    "./src/app/shared/utilities/numbers-only.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SignupComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(fb) {
        _classCallCheck2(this, SignupComponent);

        this.fb = fb;
        this.getErrorMessage = _shared_utilities_validatorHelper__WEBPACK_IMPORTED_MODULE_1__["getErrorMessage"];
        this.errorMessage = null;
      }

      _createClass2(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formData = this.fb.group({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            id_card: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, CustomValidateIDCard])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.errorMessage = null;

          if (this.formData.valid) {} else {
            var errorMessagesConfig = [{
              key: "full_name.required",
              message: "Họ và tên không được để trống"
            }, {
              key: "phone_number.required",
              message: "Số điện thoại không được để trống"
            }, {
              key: "phone_number.maxlength",
              message: "Số điện thoại không hợp lệ"
            }, {
              key: "phone_number.minlength",
              message: "Số điện thoại không hợp lệ"
            }, {
              key: "email.required",
              message: "Email không được để trống"
            }, {
              key: "email.email",
              message: "Email không đúng định dạng (example._1@gmail.com)"
            }, {
              key: "id_card.required",
              message: "CMT/CCCD không được để trống"
            }, {
              key: "id_card.invalid",
              message: "CMT/CCCD không hợp lệ"
            }];
            this.errorMessage = Object(_shared_utilities_validatorHelper__WEBPACK_IMPORTED_MODULE_1__["getErrorMessage"])(this.formData, errorMessagesConfig);
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 53,
      vars: 2,
      consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "mt-3"], [1, "row"], [1, "col-12"], [1, "form-horizontal", "mt-3", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["class", "col-12 bg-danger text-white mb-3", 4, "ngIf"], [1, "mb-1"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ti-user"], ["type", "text", "placeholder", "H\u1ECD v\xE0 t\xEAn", "formControlName", "full_name", 1, "form-control", "form-control-lg"], [1, "ti-mobile"], ["type", "text", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", "formControlName", "phone_number", "numbersOnly", "", 1, "form-control", "form-control-lg"], [1, "ti-email"], ["placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-lg"], [1, "ti-credit-card"], ["placeholder", "S\u1ED1 CMT/CCCD", "formControlName", "id_card", "numbersOnly", "", 1, "form-control", "form-control-lg"], [1, "form-group", "text-center"], [1, "col-xs-12", "p-b-20"], ["type", "submit ", 1, "btn", "btn-block", "btn-lg", "btn-info"], [1, "form-group", "m-b-0", "m-t-10"], [1, "col-sm-12", "text-center"], ["href", "javascript:void(0)", "routerLink", "/auth/login", 1, "text-info", "m-l-5"], [1, "col-12", "bg-danger", "text-white", "mb-3"], [1, "mb-0"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0110\u0103ng k\xFD tr\u1EDF th\xE0nh \u0111\u1EA1i l\xFD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_10_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignupComponent_div_12_Template, 3, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Vui l\xF2ng cung c\u1EA5p ch\xEDnh x\xE1c c\xE1c th\xF4ng tin sau ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u0110\u0103ng k\xFD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " B\u1EA1n \u0111\xE3 c\xF3 t\xE0i kho\u1EA3n? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0110\u0103ng nh\u1EADp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage !== null);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _shared_utilities_numbers_only_directive__WEBPACK_IMPORTED_MODULE_4__["NumberDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-signup",
          templateUrl: "./signup.component.html"
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })(); // export function CustomValidateEmail(control: AbstractControl) {
    //   if (control.value === "") {
    //     return null;
    //   }
    //   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //   if (!emailRegex.test(control.value)) {
    //     return { invalidEmail: true };
    //   }
    //   return null;
    // }


    function CustomValidateIDCard(control) {
      if (control.value.length === 9 || control.value.length === 12) {
        return null;
      }

      return {
        invalid: true
      };
    }
    /***/

  },

  /***/
  "./src/app/backend/authentication/verify-odp/verify-odp.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/backend/authentication/verify-odp/verify-odp.component.ts ***!
    \***************************************************************************/

  /*! exports provided: VerifyODPComponent */

  /***/
  function srcAppBackendAuthenticationVerifyOdpVerifyOdpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyODPComponent", function () {
      return VerifyODPComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../service/authorization/auth.service */
    "./src/app/service/authorization/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VerifyODPComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.lableError, " ");
      }
    }

    var VerifyODPComponent =
    /*#__PURE__*/
    function () {
      function VerifyODPComponent(fb, route, // private userApiService: UserService,
      auth) {
        _classCallCheck2(this, VerifyODPComponent);

        this.fb = fb;
        this.route = route;
        this.auth = auth;
        this.lableError = "";
        this.onInitForm();
        this.userProfile = JSON.parse(localStorage.getItem("UserProfile"));
      }

      _createClass2(VerifyODPComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // if (
                    //   !this.auth.isLoggednIn() ||
                    //   !this.userProfile ||
                    //   this.userProfile.scope_access !== "SALE"
                    // ) {
                    //   this.route.navigate(["auth", "login"]);
                    // }
                    if (this.userProfile) {
                      this.u_id = this.userProfile._id;
                    }

                    this.getDateNow();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onInitForm",
        value: function onInitForm() {
          this.form_data = this.fb.group({
            u_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }
      }, {
        key: "getDateNow",
        value: function getDateNow() {
          var date = new Date();
          var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
          var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
          var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
          var d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
          var mm = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
          this.dateNow = "".concat(h, ":").concat(m, ":").concat(s, " ").concat(d, "/").concat(mm, "/").concat(date.getFullYear());
        }
      }, {
        key: "onVerifyOTP",
        value: function onVerifyOTP() {
          this.lableError = "";

          if (this.form_data.valid) {
            var form = this.form_data.value;
            form.u_id = this.u_id; // this.userApiService.verifyOTP(form).subscribe(
            //   async (result: any) => {
            //     if (result) {
            //       this.auth.sendODP("true");
            //       this.route.navigate(["sale", "invoice", "create"]);
            //       // if (this.resource_menu) {
            //       //   localStorage.setItem('resource_menu', JSON.stringify(this.resource_menu));
            //       //   this.route.navigate(['sale', 'invoice', 'create']);
            //       // }
            //       // this.resourceMenuApiService.getDetailByUserId(this.u_id).subscribe((res: any) => {
            //       //   if (res) {
            //       //     const array_data = res.filter((r, i) => {
            //       //       return r.checked === true && r.path.indexOf('/sale') === 0;
            //       //     });
            //       //     // loai bo phan tu trung lap
            //       //     const resource = Object.values(
            //       //       array_data.reduce((a, c) => {
            //       //         a[c.code + '|' + c.name] = c;
            //       //         return a;
            //       //       }, {}));
            //       //     localStorage.setItem('resource_menu', JSON.stringify(resource));
            //       //     this.route.navigate(['sale', 'invoice', 'create']);
            //       //   }
            //       // });
            //     } else {
            //       return (this.lableError = "Mã OTP đã quá hạn sử dụng.");
            //     }
            //   },
            //   (err: HttpErrorResponse) => {
            //     console.log(err);
            //     this.lableError = err.error.message;
            //   }
            // );
          } else {
            if (!this.form_data.controls.otp.value) {
              return this.lableError = "Mã OTP không được để trống.";
            }
          }
        }
      }, {
        key: "onGetNewODP",
        value: function onGetNewODP() {
          var id = this.u_id;
          this.form_data.controls.otp.setValue(""); // this.userApiService.sendSMS({ u_id: id }).subscribe(
          //   (result: any) => {
          //     if (result) {
          //       this.lableError =
          //         "Bạn đã lấy lại mã OTP thành công. Vui lòng kiểm tra tin nhắn SMS.";
          //     } else {
          //       this.lableError = "Quá trình lấy lại mã OTP bị lỗi.";
          //     }
          //   },
          //   (err: HttpErrorResponse) => {
          //     console.log(err);
          //     this.lableError = err.error.message;
          //   }
          // );
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.auth.logout();
        }
      }]);

      return VerifyODPComponent;
    }();

    VerifyODPComponent.ɵfac = function VerifyODPComponent_Factory(t) {
      return new (t || VerifyODPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    VerifyODPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VerifyODPComponent,
      selectors: [["app-verify-odp"]],
      decls: 39,
      vars: 4,
      consts: [[1, "auth-wrapper", "d-flex", "no-block", "justify-content-center", "align-items-center", 2, "background", "url(assets/images/big/auth-bg.jpg) no-repeat center center"], [1, "auth-box"], ["id", "loginform"], [1, "logo"], [1, "db"], ["src", "assets/images/logo-icon.png", "alt", "logo"], [1, "font-medium", "m-b-20"], [1, "font-medium", "m-b-20", 2, "color", "#31c831"], [1, "row"], ["class", "col-12 border border-danger text-white text-danger", "style", "margin-top: 5px;", 4, "ngIf"], [1, "col-12"], [1, "form-horizontal", "m-t-20", 3, "formGroup", "ngSubmit"], [1, "col-md-12", "lable", "text-left", "col-form-label"], [1, "input-group", "col-md-12", "mb-3"], [1, "input-group-prepend"], ["id", "basic-login2", 1, "input-group-text"], [1, "ti-pencil"], ["type", "text", "formControlName", "otp", "name", "otp", "id", "otp", "placeholder", "OTP", "aria-label", "ODP", "aria-describedby", "basic-login2", 1, "form-control", "form-control-lg"], [1, "form-group", "row"], [1, "col-md-12", "text-right"], ["href", "javascript:void(0)", "id", "to-recover", 1, "text-dark", 3, "click"], [1, "fa", "fa-paper-plane", "m-r-5"], [1, "form-group", "row", "text-center"], [1, "col-md-6", "col-xs-12"], ["type", "button", 1, "btn", "btn-block", "btn-outline-secondary", "m-b-10", 3, "click"], ["type", "submit", 1, "btn", "btn-block", "btn-primary", "btn-md"], [1, "col-12", "border", "border-danger", "text-white", "text-danger", 2, "margin-top", "5px"]],
      template: function VerifyODPComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "M\xE3 X\xE1c nh\u1EADn OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "OTP s\u1EBD h\u1EBFt h\u1EA1n trong v\xF2ng 1 ph\xFAt.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VerifyODPComponent_div_16_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function VerifyODPComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onVerifyOTP();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Nh\u1EADp m\xE3 OTP \u0111\u1EC3 ti\u1EBFp t\u1EE5c. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyODPComponent_Template_a_click_29_listener() {
            return ctx.onGetNewODP();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " L\u1EA5y l\u1EA1i m\xE3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyODPComponent_Template_button_click_34_listener() {
            return ctx.onCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "H\u1EE7y");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "X\xE1c nh\u1EADn");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dateNow);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("OTP \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi v\xE0o s\u1ED1 \u0111i\u1EC7n tho\u1EA1i **** **** ", ctx.userProfile == null ? null : ctx.userProfile.phone_number == null ? null : ctx.userProfile.phone_number.slice(0 - 2), ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lableError);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form_data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VerifyODPComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-verify-odp",
          templateUrl: "./verify-odp.component.html"
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _service_authorization_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/store-forgot-password.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/service/store-forgot-password.service.ts ***!
    \**********************************************************/

  /*! exports provided: StoreForgotPasswordService */

  /***/
  function srcAppServiceStoreForgotPasswordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreForgotPasswordService", function () {
      return StoreForgotPasswordService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StoreForgotPasswordService =
    /*#__PURE__*/
    function () {
      function StoreForgotPasswordService() {
        _classCallCheck2(this, StoreForgotPasswordService);

        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentStore = this.data.asObservable();
      }

      _createClass2(StoreForgotPasswordService, [{
        key: "updateStore",
        value: function updateStore(content) {
          this.data.next(content);
        }
      }]);

      return StoreForgotPasswordService;
    }();

    StoreForgotPasswordService.ɵfac = function StoreForgotPasswordService_Factory(t) {
      return new (t || StoreForgotPasswordService)();
    };

    StoreForgotPasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StoreForgotPasswordService,
      factory: StoreForgotPasswordService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreForgotPasswordService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/utilities/numbers-only.directive.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/utilities/numbers-only.directive.ts ***!
    \************************************************************/

  /*! exports provided: NumberDirective */

  /***/
  function srcAppSharedUtilitiesNumbersOnlyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberDirective", function () {
      return NumberDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NumberDirective =
    /*#__PURE__*/
    function () {
      function NumberDirective(_el, control) {
        _classCallCheck2(this, NumberDirective);

        this._el = _el;
        this.control = control;
      }

      _createClass2(NumberDirective, [{
        key: "onInputChange",
        value: function onInputChange(event) {
          var initalValue = this._el.nativeElement.value;
          this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, "");

          if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
          } else {
            this.control.control.setValue(initalValue);
          }
        }
      }]);

      return NumberDirective;
    }();

    NumberDirective.ɵfac = function NumberDirective_Factory(t) {
      return new (t || NumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]));
    };

    NumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NumberDirective,
      selectors: [["input", "numbersOnly", ""]],
      hostBindings: function NumberDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumberDirective_input_HostBindingHandler($event) {
            return ctx.onInputChange($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "input[numbersOnly]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]
        }];
      }, {
        onInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["input", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/utilities/validatorHelper.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/utilities/validatorHelper.ts ***!
    \*****************************************************/

  /*! exports provided: getErrorMessage */

  /***/
  function srcAppSharedUtilitiesValidatorHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getErrorMessage", function () {
      return getErrorMessage;
    });

    function getErrorMessage(formControl) {
      var errorMessagesConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var errorField = "";
      Object.keys(formControl.controls).every(function (item) {
        if (!formControl.controls[item].valid) {
          var errors = Object.keys(formControl.controls[item].errors);
          errorField = "".concat(item, ".").concat(errors[0]);
          return false;
        } else {
          return true;
        }
      });
      var errorConfig = errorMessagesConfig.find(function (d) {
        return d.key === errorField;
      });

      if (!errorConfig) {
        console.log(errorField);
      }

      return errorConfig ? errorConfig.message : "Lỗi validate";
    }
    /***/

  }
}]);
//# sourceMappingURL=backend-authentication-authentication-module-es5.js.map