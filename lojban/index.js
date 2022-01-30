/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 546:
/***/ (function(module) {

/*!
 * Socket.IO v4.3.1
 * (c) 2014-2021 Guillermo Rauch
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	0;
  })(this, (function () { 'use strict';
  
	function _typeof(obj) {
	  "@babel/helpers - typeof";
  
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
		_typeof = function (obj) {
		  return typeof obj;
		};
	  } else {
		_typeof = function (obj) {
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
		Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
		return true;
	  } catch (e) {
		return false;
	  }
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
	  } else if (call !== void 0) {
		throw new TypeError("Derived constructors may only return object or undefined");
	  }
  
	  return _assertThisInitialized(self);
	}
  
	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  
	  return function _createSuperInternal() {
		var Super = _getPrototypeOf(Derived),
			result;
  
		if (hasNativeReflectConstruct) {
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
  
	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}
  
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
  
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  
	  return arr2;
	}
  
	function _createForOfIteratorHelper(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  
	  if (!it) {
		if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
		  if (it) o = it;
		  var i = 0;
  
		  var F = function () {};
  
		  return {
			s: F,
			n: function () {
			  if (i >= o.length) return {
				done: true
			  };
			  return {
				done: false,
				value: o[i++]
			  };
			},
			e: function (e) {
			  throw e;
			},
			f: F
		  };
		}
  
		throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
  
	  var normalCompletion = true,
		  didErr = false,
		  err;
	  return {
		s: function () {
		  it = it.call(o);
		},
		n: function () {
		  var step = it.next();
		  normalCompletion = step.done;
		  return step;
		},
		e: function (e) {
		  didErr = true;
		  err = e;
		},
		f: function () {
		  try {
			if (!normalCompletion && it.return != null) it.return();
		  } finally {
			if (didErr) throw err;
		  }
		}
	  };
	}
  
	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
  
	var parseuri = function parseuri(str) {
	  var src = str,
		  b = str.indexOf('['),
		  e = str.indexOf(']');
  
	  if (b != -1 && e != -1) {
		str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	  }
  
	  var m = re.exec(str || ''),
		  uri = {},
		  i = 14;
  
	  while (i--) {
		uri[parts[i]] = m[i] || '';
	  }
  
	  if (b != -1 && e != -1) {
		uri.source = src;
		uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
		uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
		uri.ipv6uri = true;
	  }
  
	  uri.pathNames = pathNames(uri, uri['path']);
	  uri.queryKey = queryKey(uri, uri['query']);
	  return uri;
	};
  
	function pathNames(obj, path) {
	  var regx = /\/{2,9}/g,
		  names = path.replace(regx, "/").split("/");
  
	  if (path.substr(0, 1) == '/' || path.length === 0) {
		names.splice(0, 1);
	  }
  
	  if (path.substr(path.length - 1, 1) == '/') {
		names.splice(names.length - 1, 1);
	  }
  
	  return names;
	}
  
	function queryKey(uri, query) {
	  var data = {};
	  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
		if ($1) {
		  data[$1] = $2;
		}
	  });
	  return data;
	}
  
	/**
	 * URL parser.
	 *
	 * @param uri - url
	 * @param path - the request path of the connection
	 * @param loc - An object meant to mimic window.location.
	 *        Defaults to window.location.
	 * @public
	 */
  
	function url(uri) {
	  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  var loc = arguments.length > 2 ? arguments[2] : undefined;
	  var obj = uri; // default to window.location
  
	  loc = loc || typeof location !== "undefined" && location;
	  if (null == uri) uri = loc.protocol + "//" + loc.host; // relative path support
  
	  if (typeof uri === "string") {
		if ("/" === uri.charAt(0)) {
		  if ("/" === uri.charAt(1)) {
			uri = loc.protocol + uri;
		  } else {
			uri = loc.host + uri;
		  }
		}
  
		if (!/^(https?|wss?):\/\//.test(uri)) {
		  if ("undefined" !== typeof loc) {
			uri = loc.protocol + "//" + uri;
		  } else {
			uri = "https://" + uri;
		  }
		} // parse
  
  
		obj = parseuri(uri);
	  } // make sure we treat `localhost:80` and `localhost` equally
  
  
	  if (!obj.port) {
		if (/^(http|ws)$/.test(obj.protocol)) {
		  obj.port = "80";
		} else if (/^(http|ws)s$/.test(obj.protocol)) {
		  obj.port = "443";
		}
	  }
  
	  obj.path = obj.path || "/";
	  var ipv6 = obj.host.indexOf(":") !== -1;
	  var host = ipv6 ? "[" + obj.host + "]" : obj.host; // define unique id
  
	  obj.id = obj.protocol + "://" + host + ":" + obj.port + path; // define href
  
	  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
	  return obj;
	}
  
	var hasCors = {exports: {}};
  
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */
  
	try {
	  hasCors.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  hasCors.exports = false;
	}
  
	var hasCORS = hasCors.exports;
  
	var globalThis = (function () {
	  if (typeof self !== "undefined") {
		return self;
	  } else if (typeof window !== "undefined") {
		return window;
	  } else {
		return Function("return this")();
	  }
	})();
  
	// browser shim for xmlhttprequest module
	function XMLHttpRequest$1 (opts) {
	  var xdomain = opts.xdomain; // XMLHttpRequest can be disabled on IE
  
	  try {
		if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
		  return new XMLHttpRequest();
		}
	  } catch (e) {}
  
	  if (!xdomain) {
		try {
		  return new globalThis[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
		} catch (e) {}
	  }
	}
  
	function pick(obj) {
	  for (var _len = arguments.length, attr = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		attr[_key - 1] = arguments[_key];
	  }
  
	  return attr.reduce(function (acc, k) {
		if (obj.hasOwnProperty(k)) {
		  acc[k] = obj[k];
		}
  
		return acc;
	  }, {});
	} // Keep a reference to the real timeout functions so they can be used when overridden
  
	var NATIVE_SET_TIMEOUT = setTimeout;
	var NATIVE_CLEAR_TIMEOUT = clearTimeout;
	function installTimerFunctions(obj, opts) {
	  if (opts.useNativeTimers) {
		obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThis);
		obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThis);
	  } else {
		obj.setTimeoutFn = setTimeout.bind(globalThis);
		obj.clearTimeoutFn = clearTimeout.bind(globalThis);
	  }
	}
  
	/**
	 * Expose `Emitter`.
	 */
  
	var Emitter_1 = Emitter;
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
  
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	}
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
  
  
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
		obj[key] = Emitter.prototype[key];
	  }
  
	  return obj;
	}
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
  
  
	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	  return this;
	};
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
  
  
	Emitter.prototype.once = function (event, fn) {
	  function on() {
		this.off(event, on);
		fn.apply(this, arguments);
	  }
  
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
  
  
	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {}; // all
  
	  if (0 == arguments.length) {
		this._callbacks = {};
		return this;
	  } // specific event
  
  
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this; // remove all handlers
  
	  if (1 == arguments.length) {
		delete this._callbacks['$' + event];
		return this;
	  } // remove specific handler
  
  
	  var cb;
  
	  for (var i = 0; i < callbacks.length; i++) {
		cb = callbacks[i];
  
		if (cb === fn || cb.fn === fn) {
		  callbacks.splice(i, 1);
		  break;
		}
	  } // Remove event specific arrays for event types that no
	  // one is subscribed for to avoid memory leak.
  
  
	  if (callbacks.length === 0) {
		delete this._callbacks['$' + event];
	  }
  
	  return this;
	};
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
  
  
	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = new Array(arguments.length - 1),
		  callbacks = this._callbacks['$' + event];
  
	  for (var i = 1; i < arguments.length; i++) {
		args[i - 1] = arguments[i];
	  }
  
	  if (callbacks) {
		callbacks = callbacks.slice(0);
  
		for (var i = 0, len = callbacks.length; i < len; ++i) {
		  callbacks[i].apply(this, args);
		}
	  }
  
	  return this;
	}; // alias used for reserved events (protected method)
  
  
	Emitter.prototype.emitReserved = Emitter.prototype.emit;
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
  
	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
  
  
	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};
  
	var PACKET_TYPES = Object.create(null); // no Map = no polyfill
  
	PACKET_TYPES["open"] = "0";
	PACKET_TYPES["close"] = "1";
	PACKET_TYPES["ping"] = "2";
	PACKET_TYPES["pong"] = "3";
	PACKET_TYPES["message"] = "4";
	PACKET_TYPES["upgrade"] = "5";
	PACKET_TYPES["noop"] = "6";
	var PACKET_TYPES_REVERSE = Object.create(null);
	Object.keys(PACKET_TYPES).forEach(function (key) {
	  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
	});
	var ERROR_PACKET = {
	  type: "error",
	  data: "parser error"
	};
  
	var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
	var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10
  
	var isView$1 = function isView(obj) {
	  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
	};
  
	var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
	  var type = _ref.type,
		  data = _ref.data;
  
	  if (withNativeBlob$1 && data instanceof Blob) {
		if (supportsBinary) {
		  return callback(data);
		} else {
		  return encodeBlobAsBase64(data, callback);
		}
	  } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
		if (supportsBinary) {
		  return callback(data);
		} else {
		  return encodeBlobAsBase64(new Blob([data]), callback);
		}
	  } // plain string
  
  
	  return callback(PACKET_TYPES[type] + (data || ""));
	};
  
	var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
	  var fileReader = new FileReader();
  
	  fileReader.onload = function () {
		var content = fileReader.result.split(",")[1];
		callback("b" + content);
	  };
  
	  return fileReader.readAsDataURL(data);
	};
  
	/*
	 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
	 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
	 * Released under MIT License
	 */
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.
  
	var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
  
	for (var i$1 = 0; i$1 < chars.length; i$1++) {
	  lookup$1[chars.charCodeAt(i$1)] = i$1;
	}
  
	var decode$1 = function decode(base64) {
	  var bufferLength = base64.length * 0.75,
		  len = base64.length,
		  i,
		  p = 0,
		  encoded1,
		  encoded2,
		  encoded3,
		  encoded4;
  
	  if (base64[base64.length - 1] === '=') {
		bufferLength--;
  
		if (base64[base64.length - 2] === '=') {
		  bufferLength--;
		}
	  }
  
	  var arraybuffer = new ArrayBuffer(bufferLength),
		  bytes = new Uint8Array(arraybuffer);
  
	  for (i = 0; i < len; i += 4) {
		encoded1 = lookup$1[base64.charCodeAt(i)];
		encoded2 = lookup$1[base64.charCodeAt(i + 1)];
		encoded3 = lookup$1[base64.charCodeAt(i + 2)];
		encoded4 = lookup$1[base64.charCodeAt(i + 3)];
		bytes[p++] = encoded1 << 2 | encoded2 >> 4;
		bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
		bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
	  }
  
	  return arraybuffer;
	};
  
	var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
  
	var decodePacket = function decodePacket(encodedPacket, binaryType) {
	  if (typeof encodedPacket !== "string") {
		return {
		  type: "message",
		  data: mapBinary(encodedPacket, binaryType)
		};
	  }
  
	  var type = encodedPacket.charAt(0);
  
	  if (type === "b") {
		return {
		  type: "message",
		  data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
		};
	  }
  
	  var packetType = PACKET_TYPES_REVERSE[type];
  
	  if (!packetType) {
		return ERROR_PACKET;
	  }
  
	  return encodedPacket.length > 1 ? {
		type: PACKET_TYPES_REVERSE[type],
		data: encodedPacket.substring(1)
	  } : {
		type: PACKET_TYPES_REVERSE[type]
	  };
	};
  
	var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
	  if (withNativeArrayBuffer$1) {
		var decoded = decode$1(data);
		return mapBinary(decoded, binaryType);
	  } else {
		return {
		  base64: true,
		  data: data
		}; // fallback for old browsers
	  }
	};
  
	var mapBinary = function mapBinary(data, binaryType) {
	  switch (binaryType) {
		case "blob":
		  return data instanceof ArrayBuffer ? new Blob([data]) : data;
  
		case "arraybuffer":
		default:
		  return data;
		// assuming the data is already an ArrayBuffer
	  }
	};
  
	var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
  
	var encodePayload = function encodePayload(packets, callback) {
	  // some packets may be added to the array while encoding, so the initial length must be saved
	  var length = packets.length;
	  var encodedPackets = new Array(length);
	  var count = 0;
	  packets.forEach(function (packet, i) {
		// force base64 encoding for binary packets
		encodePacket(packet, false, function (encodedPacket) {
		  encodedPackets[i] = encodedPacket;
  
		  if (++count === length) {
			callback(encodedPackets.join(SEPARATOR));
		  }
		});
	  });
	};
  
	var decodePayload = function decodePayload(encodedPayload, binaryType) {
	  var encodedPackets = encodedPayload.split(SEPARATOR);
	  var packets = [];
  
	  for (var i = 0; i < encodedPackets.length; i++) {
		var decodedPacket = decodePacket(encodedPackets[i], binaryType);
		packets.push(decodedPacket);
  
		if (decodedPacket.type === "error") {
		  break;
		}
	  }
  
	  return packets;
	};
  
	var protocol$1 = 4;
  
	var Transport = /*#__PURE__*/function (_Emitter) {
	  _inherits(Transport, _Emitter);
  
	  var _super = _createSuper(Transport);
  
	  /**
	   * Transport abstract constructor.
	   *
	   * @param {Object} options.
	   * @api private
	   */
	  function Transport(opts) {
		var _this;
  
		_classCallCheck(this, Transport);
  
		_this = _super.call(this);
		_this.writable = false;
		installTimerFunctions(_assertThisInitialized(_this), opts);
		_this.opts = opts;
		_this.query = opts.query;
		_this.readyState = "";
		_this.socket = opts.socket;
		return _this;
	  }
	  /**
	   * Emits an error.
	   *
	   * @param {String} str
	   * @return {Transport} for chaining
	   * @api protected
	   */
  
  
	  _createClass(Transport, [{
		key: "onError",
		value: function onError(msg, desc) {
		  var err = new Error(msg); // @ts-ignore
  
		  err.type = "TransportError"; // @ts-ignore
  
		  err.description = desc;
  
		  _get(_getPrototypeOf(Transport.prototype), "emit", this).call(this, "error", err);
  
		  return this;
		}
		/**
		 * Opens the transport.
		 *
		 * @api public
		 */
  
	  }, {
		key: "open",
		value: function open() {
		  if ("closed" === this.readyState || "" === this.readyState) {
			this.readyState = "opening";
			this.doOpen();
		  }
  
		  return this;
		}
		/**
		 * Closes the transport.
		 *
		 * @api public
		 */
  
	  }, {
		key: "close",
		value: function close() {
		  if ("opening" === this.readyState || "open" === this.readyState) {
			this.doClose();
			this.onClose();
		  }
  
		  return this;
		}
		/**
		 * Sends multiple packets.
		 *
		 * @param {Array} packets
		 * @api public
		 */
  
	  }, {
		key: "send",
		value: function send(packets) {
		  if ("open" === this.readyState) {
			this.write(packets);
		  }
		}
		/**
		 * Called upon open
		 *
		 * @api protected
		 */
  
	  }, {
		key: "onOpen",
		value: function onOpen() {
		  this.readyState = "open";
		  this.writable = true;
  
		  _get(_getPrototypeOf(Transport.prototype), "emit", this).call(this, "open");
		}
		/**
		 * Called with data.
		 *
		 * @param {String} data
		 * @api protected
		 */
  
	  }, {
		key: "onData",
		value: function onData(data) {
		  var packet = decodePacket(data, this.socket.binaryType);
		  this.onPacket(packet);
		}
		/**
		 * Called with a decoded packet.
		 *
		 * @api protected
		 */
  
	  }, {
		key: "onPacket",
		value: function onPacket(packet) {
		  _get(_getPrototypeOf(Transport.prototype), "emit", this).call(this, "packet", packet);
		}
		/**
		 * Called upon close.
		 *
		 * @api protected
		 */
  
	  }, {
		key: "onClose",
		value: function onClose() {
		  this.readyState = "closed";
  
		  _get(_getPrototypeOf(Transport.prototype), "emit", this).call(this, "close");
		}
	  }]);
  
	  return Transport;
	}(Emitter_1);
  
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
		length = 64,
		map = {},
		seed = 0,
		i = 0,
		prev;
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
  
	function encode(num) {
	  var encoded = '';
  
	  do {
		encoded = alphabet[num % length] + encoded;
		num = Math.floor(num / length);
	  } while (num > 0);
  
	  return encoded;
	}
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
  
  
	function decode(str) {
	  var decoded = 0;
  
	  for (i = 0; i < str.length; i++) {
		decoded = decoded * length + map[str.charAt(i)];
	  }
  
	  return decoded;
	}
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
  
  
	function yeast() {
	  var now = encode(+new Date());
	  if (now !== prev) return seed = 0, prev = now;
	  return now + '.' + encode(seed++);
	} //
	// Map each character to its index.
	//
  
  
	for (; i < length; i++) {
	  map[alphabet[i]] = i;
	} //
	// Expose the `yeast`, `encode` and `decode` functions.
	//
  
  
	yeast.encode = encode;
	yeast.decode = decode;
	var yeast_1 = yeast;
  
	var parseqs = {};
  
	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
  
	parseqs.encode = function (obj) {
	  var str = '';
  
	  for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
		  if (str.length) str += '&';
		  str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
		}
	  }
  
	  return str;
	};
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
  
  
	parseqs.decode = function (qs) {
	  var qry = {};
	  var pairs = qs.split('&');
  
	  for (var i = 0, l = pairs.length; i < l; i++) {
		var pair = pairs[i].split('=');
		qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
  
	  return qry;
	};
  
	var Polling = /*#__PURE__*/function (_Transport) {
	  _inherits(Polling, _Transport);
  
	  var _super = _createSuper(Polling);
  
	  function Polling() {
		var _this;
  
		_classCallCheck(this, Polling);
  
		_this = _super.apply(this, arguments);
		_this.polling = false;
		return _this;
	  }
	  /**
	   * Transport name.
	   */
  
  
	  _createClass(Polling, [{
		key: "name",
		get: function get() {
		  return "polling";
		}
		/**
		 * Opens the socket (triggers polling). We write a PING message to determine
		 * when the transport is open.
		 *
		 * @api private
		 */
  
	  }, {
		key: "doOpen",
		value: function doOpen() {
		  this.poll();
		}
		/**
		 * Pauses polling.
		 *
		 * @param {Function} callback upon buffers are flushed and transport is paused
		 * @api private
		 */
  
	  }, {
		key: "pause",
		value: function pause(onPause) {
		  var _this2 = this;
  
		  this.readyState = "pausing";
  
		  var pause = function pause() {
			_this2.readyState = "paused";
			onPause();
		  };
  
		  if (this.polling || !this.writable) {
			var total = 0;
  
			if (this.polling) {
			  total++;
			  this.once("pollComplete", function () {
				--total || pause();
			  });
			}
  
			if (!this.writable) {
			  total++;
			  this.once("drain", function () {
				--total || pause();
			  });
			}
		  } else {
			pause();
		  }
		}
		/**
		 * Starts polling cycle.
		 *
		 * @api public
		 */
  
	  }, {
		key: "poll",
		value: function poll() {
		  this.polling = true;
		  this.doPoll();
		  this.emit("poll");
		}
		/**
		 * Overloads onData to detect payloads.
		 *
		 * @api private
		 */
  
	  }, {
		key: "onData",
		value: function onData(data) {
		  var _this3 = this;
  
		  var callback = function callback(packet) {
			// if its the first message we consider the transport open
			if ("opening" === _this3.readyState && packet.type === "open") {
			  _this3.onOpen();
			} // if its a close packet, we close the ongoing requests
  
  
			if ("close" === packet.type) {
			  _this3.onClose();
  
			  return false;
			} // otherwise bypass onData and handle the message
  
  
			_this3.onPacket(packet);
		  }; // decode payload
  
  
		  decodePayload(data, this.socket.binaryType).forEach(callback); // if an event did not trigger closing
  
		  if ("closed" !== this.readyState) {
			// if we got data we're not polling
			this.polling = false;
			this.emit("pollComplete");
  
			if ("open" === this.readyState) {
			  this.poll();
			}
		  }
		}
		/**
		 * For polling, send a close packet.
		 *
		 * @api private
		 */
  
	  }, {
		key: "doClose",
		value: function doClose() {
		  var _this4 = this;
  
		  var close = function close() {
			_this4.write([{
			  type: "close"
			}]);
		  };
  
		  if ("open" === this.readyState) {
			close();
		  } else {
			// in case we're trying to close while
			// handshaking is in progress (GH-164)
			this.once("open", close);
		  }
		}
		/**
		 * Writes a packets payload.
		 *
		 * @param {Array} data packets
		 * @param {Function} drain callback
		 * @api private
		 */
  
	  }, {
		key: "write",
		value: function write(packets) {
		  var _this5 = this;
  
		  this.writable = false;
		  encodePayload(packets, function (data) {
			_this5.doWrite(data, function () {
			  _this5.writable = true;
  
			  _this5.emit("drain");
			});
		  });
		}
		/**
		 * Generates uri for connection.
		 *
		 * @api private
		 */
  
	  }, {
		key: "uri",
		value: function uri() {
		  var query = this.query || {};
		  var schema = this.opts.secure ? "https" : "http";
		  var port = ""; // cache busting is forced
  
		  if (false !== this.opts.timestampRequests) {
			query[this.opts.timestampParam] = yeast_1();
		  }
  
		  if (!this.supportsBinary && !query.sid) {
			query.b64 = 1;
		  } // avoid port if default for schema
  
  
		  if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
			port = ":" + this.opts.port;
		  }
  
		  var encodedQuery = parseqs.encode(query);
		  var ipv6 = this.opts.hostname.indexOf(":") !== -1;
		  return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
		}
	  }]);
  
	  return Polling;
	}(Transport);
  
	/**
	 * Empty function
	 */
  
	function empty() {}
  
	var hasXHR2 = function () {
	  var xhr = new XMLHttpRequest$1({
		xdomain: false
	  });
	  return null != xhr.responseType;
	}();
  
	var XHR = /*#__PURE__*/function (_Polling) {
	  _inherits(XHR, _Polling);
  
	  var _super = _createSuper(XHR);
  
	  /**
	   * XHR Polling constructor.
	   *
	   * @param {Object} opts
	   * @api public
	   */
	  function XHR(opts) {
		var _this;
  
		_classCallCheck(this, XHR);
  
		_this = _super.call(this, opts);
  
		if (typeof location !== "undefined") {
		  var isSSL = "https:" === location.protocol;
		  var port = location.port; // some user agents have empty `location.port`
  
		  if (!port) {
			port = isSSL ? "443" : "80";
		  }
  
		  _this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
		  _this.xs = opts.secure !== isSSL;
		}
		/**
		 * XHR supports binary
		 */
  
  
		var forceBase64 = opts && opts.forceBase64;
		_this.supportsBinary = hasXHR2 && !forceBase64;
		return _this;
	  }
	  /**
	   * Creates a request.
	   *
	   * @param {String} method
	   * @api private
	   */
  
  
	  _createClass(XHR, [{
		key: "request",
		value: function request() {
		  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
		  _extends(opts, {
			xd: this.xd,
			xs: this.xs
		  }, this.opts);
  
		  return new Request(this.uri(), opts);
		}
		/**
		 * Sends data.
		 *
		 * @param {String} data to send.
		 * @param {Function} called upon flush.
		 * @api private
		 */
  
	  }, {
		key: "doWrite",
		value: function doWrite(data, fn) {
		  var _this2 = this;
  
		  var req = this.request({
			method: "POST",
			data: data
		  });
		  req.on("success", fn);
		  req.on("error", function (err) {
			_this2.onError("xhr post error", err);
		  });
		}
		/**
		 * Starts a poll cycle.
		 *
		 * @api private
		 */
  
	  }, {
		key: "doPoll",
		value: function doPoll() {
		  var _this3 = this;
  
		  var req = this.request();
		  req.on("data", this.onData.bind(this));
		  req.on("error", function (err) {
			_this3.onError("xhr poll error", err);
		  });
		  this.pollXhr = req;
		}
	  }]);
  
	  return XHR;
	}(Polling);
	var Request = /*#__PURE__*/function (_Emitter) {
	  _inherits(Request, _Emitter);
  
	  var _super2 = _createSuper(Request);
  
	  /**
	   * Request constructor
	   *
	   * @param {Object} options
	   * @api public
	   */
	  function Request(uri, opts) {
		var _this4;
  
		_classCallCheck(this, Request);
  
		_this4 = _super2.call(this);
		installTimerFunctions(_assertThisInitialized(_this4), opts);
		_this4.opts = opts;
		_this4.method = opts.method || "GET";
		_this4.uri = uri;
		_this4.async = false !== opts.async;
		_this4.data = undefined !== opts.data ? opts.data : null;
  
		_this4.create();
  
		return _this4;
	  }
	  /**
	   * Creates the XHR object and sends the request.
	   *
	   * @api private
	   */
  
  
	  _createClass(Request, [{
		key: "create",
		value: function create() {
		  var _this5 = this;
  
		  var opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
		  opts.xdomain = !!this.opts.xd;
		  opts.xscheme = !!this.opts.xs;
		  var xhr = this.xhr = new XMLHttpRequest$1(opts);
  
		  try {
			xhr.open(this.method, this.uri, this.async);
  
			try {
			  if (this.opts.extraHeaders) {
				xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
  
				for (var i in this.opts.extraHeaders) {
				  if (this.opts.extraHeaders.hasOwnProperty(i)) {
					xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
				  }
				}
			  }
			} catch (e) {}
  
			if ("POST" === this.method) {
			  try {
				xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
			  } catch (e) {}
			}
  
			try {
			  xhr.setRequestHeader("Accept", "*/*");
			} catch (e) {} // ie6 check
  
  
			if ("withCredentials" in xhr) {
			  xhr.withCredentials = this.opts.withCredentials;
			}
  
			if (this.opts.requestTimeout) {
			  xhr.timeout = this.opts.requestTimeout;
			}
  
			xhr.onreadystatechange = function () {
			  if (4 !== xhr.readyState) return;
  
			  if (200 === xhr.status || 1223 === xhr.status) {
				_this5.onLoad();
			  } else {
				// make sure the `error` event handler that's user-set
				// does not throw in the same tick and gets caught here
				_this5.setTimeoutFn(function () {
				  _this5.onError(typeof xhr.status === "number" ? xhr.status : 0);
				}, 0);
			  }
			};
  
			xhr.send(this.data);
		  } catch (e) {
			// Need to defer since .create() is called directly from the constructor
			// and thus the 'error' event can only be only bound *after* this exception
			// occurs.  Therefore, also, we cannot throw here at all.
			this.setTimeoutFn(function () {
			  _this5.onError(e);
			}, 0);
			return;
		  }
  
		  if (typeof document !== "undefined") {
			this.index = Request.requestsCount++;
			Request.requests[this.index] = this;
		  }
		}
		/**
		 * Called upon successful response.
		 *
		 * @api private
		 */
  
	  }, {
		key: "onSuccess",
		value: function onSuccess() {
		  this.emit("success");
		  this.cleanup();
		}
		/**
		 * Called if we have data.
		 *
		 * @api private
		 */
  
	  }, {
		key: "onData",
		value: function onData(data) {
		  this.emit("data", data);
		  this.onSuccess();
		}
		/**
		 * Called upon error.
		 *
		 * @api private
		 */
  
	  }, {
		key: "onError",
		value: function onError(err) {
		  this.emit("error", err);
		  this.cleanup(true);
		}
		/**
		 * Cleans up house.
		 *
		 * @api private
		 */
  
	  }, {
		key: "cleanup",
		value: function cleanup(fromError) {
		  if ("undefined" === typeof this.xhr || null === this.xhr) {
			return;
		  }
  
		  this.xhr.onreadystatechange = empty;
  
		  if (fromError) {
			try {
			  this.xhr.abort();
			} catch (e) {}
		  }
  
		  if (typeof document !== "undefined") {
			delete Request.requests[this.index];
		  }
  
		  this.xhr = null;
		}
		/**
		 * Called upon load.
		 *
		 * @api private
		 */
  
	  }, {
		key: "onLoad",
		value: function onLoad() {
		  var data = this.xhr.responseText;
  
		  if (data !== null) {
			this.onData(data);
		  }
		}
		/**
		 * Aborts the request.
		 *
		 * @api public
		 */
  
	  }, {
		key: "abort",
		value: function abort() {
		  this.cleanup();
		}
	  }]);
  
	  return Request;
	}(Emitter_1);
	Request.requestsCount = 0;
	Request.requests = {};
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
  
	if (typeof document !== "undefined") {
	  // @ts-ignore
	  if (typeof attachEvent === "function") {
		// @ts-ignore
		attachEvent("onunload", unloadHandler);
	  } else if (typeof addEventListener === "function") {
		var terminationEvent = "onpagehide" in globalThis ? "pagehide" : "unload";
		addEventListener(terminationEvent, unloadHandler, false);
	  }
	}
  
	function unloadHandler() {
	  for (var i in Request.requests) {
		if (Request.requests.hasOwnProperty(i)) {
		  Request.requests[i].abort();
		}
	  }
	}
  
	var nextTick = function () {
	  var isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  
	  if (isPromiseAvailable) {
		return function (cb) {
		  return Promise.resolve().then(cb);
		};
	  } else {
		return function (cb, setTimeoutFn) {
		  return setTimeoutFn(cb, 0);
		};
	  }
	}();
	var WebSocket = globalThis.WebSocket || globalThis.MozWebSocket;
	var usingBrowserWebSocket = true;
	var defaultBinaryType = "arraybuffer";
  
	var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
	var WS = /*#__PURE__*/function (_Transport) {
	  _inherits(WS, _Transport);
  
	  var _super = _createSuper(WS);
  
	  /**
	   * WebSocket transport constructor.
	   *
	   * @api {Object} connection options
	   * @api public
	   */
	  function WS(opts) {
		var _this;
  
		_classCallCheck(this, WS);
  
		_this = _super.call(this, opts);
		_this.supportsBinary = !opts.forceBase64;
		return _this;
	  }
	  /**
	   * Transport name.
	   *
	   * @api public
	   */
  
  
	  _createClass(WS, [{
		key: "name",
		get: function get() {
		  return "websocket";
		}
		/**
		 * Opens socket.
		 *
		 * @api private
		 */
  
	  }, {
		key: "doOpen",
		value: function doOpen() {
		  if (!this.check()) {
			// let probe timeout
			return;
		  }
  
		  var uri = this.uri();
		  var protocols = this.opts.protocols; // React Native only supports the 'headers' option, and will print a warning if anything else is passed
  
		  var opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
  
		  if (this.opts.extraHeaders) {
			opts.headers = this.opts.extraHeaders;
		  }
  
		  try {
			this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
		  } catch (err) {
			return this.emit("error", err);
		  }
  
		  this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
		  this.addEventListeners();
		}
		/**
		 * Adds event listeners to the socket
		 *
		 * @api private
		 */
  
	  }, {
		key: "addEventListeners",
		value: function addEventListeners() {
		  var _this2 = this;
  
		  this.ws.onopen = function () {
			if (_this2.opts.autoUnref) {
			  _this2.ws._socket.unref();
			}
  
			_this2.onOpen();
		  };
  
		  this.ws.onclose = this.onClose.bind(this);
  
		  this.ws.onmessage = function (ev) {
			return _this2.onData(ev.data);
		  };
  
		  this.ws.onerror = function (e) {
			return _this2.onError("websocket error", e);
		  };
		}
		/**
		 * Writes data to socket.
		 *
		 * @param {Array} array of packets.
		 * @api private
		 */
  
	  }, {
		key: "write",
		value: function write(packets) {
		  var _this3 = this;
  
		  this.writable = false; // encodePacket efficient as it uses WS framing
		  // no need for encodePayload
  
		  var _loop = function _loop(i) {
			var packet = packets[i];
			var lastPacket = i === packets.length - 1;
			encodePacket(packet, _this3.supportsBinary, function (data) {
			  // always create a new object (GH-437)
			  var opts = {};
			  // have a chance of informing us about it yet, in that case send will
			  // throw an error
  
  
			  try {
				if (usingBrowserWebSocket) {
				  // TypeError is thrown when passing the second argument on Safari
				  _this3.ws.send(data);
				}
			  } catch (e) {}
  
			  if (lastPacket) {
				// fake drain
				// defer to next tick to allow Socket to clear writeBuffer
				nextTick(function () {
				  _this3.writable = true;
  
				  _this3.emit("drain");
				}, _this3.setTimeoutFn);
			  }
			});
		  };
  
		  for (var i = 0; i < packets.length; i++) {
			_loop(i);
		  }
		}
		/**
		 * Closes socket.
		 *
		 * @api private
		 */
  
	  }, {
		key: "doClose",
		value: function doClose() {
		  if (typeof this.ws !== "undefined") {
			this.ws.close();
			this.ws = null;
		  }
		}
		/**
		 * Generates uri for connection.
		 *
		 * @api private
		 */
  
	  }, {
		key: "uri",
		value: function uri() {
		  var query = this.query || {};
		  var schema = this.opts.secure ? "wss" : "ws";
		  var port = ""; // avoid port if default for schema
  
		  if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
			port = ":" + this.opts.port;
		  } // append timestamp to URI
  
  
		  if (this.opts.timestampRequests) {
			query[this.opts.timestampParam] = yeast_1();
		  } // communicate binary support capabilities
  
  
		  if (!this.supportsBinary) {
			query.b64 = 1;
		  }
  
		  var encodedQuery = parseqs.encode(query);
		  var ipv6 = this.opts.hostname.indexOf(":") !== -1;
		  return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
		}
		/**
		 * Feature detection for WebSocket.
		 *
		 * @return {Boolean} whether this transport is available.
		 * @api public
		 */
  
	  }, {
		key: "check",
		value: function check() {
		  return !!WebSocket && !("__initialize" in WebSocket && this.name === WS.prototype.name);
		}
	  }]);
  
	  return WS;
	}(Transport);
  
	var transports = {
	  websocket: WS,
	  polling: XHR
	};
  
	var Socket$1 = /*#__PURE__*/function (_Emitter) {
	  _inherits(Socket, _Emitter);
  
	  var _super = _createSuper(Socket);
  
	  /**
	   * Socket constructor.
	   *
	   * @param {String|Object} uri or options
	   * @param {Object} opts - options
	   * @api public
	   */
	  function Socket(uri) {
		var _this;
  
		var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
		_classCallCheck(this, Socket);
  
		_this = _super.call(this);
  
		if (uri && "object" === _typeof(uri)) {
		  opts = uri;
		  uri = null;
		}
  
		if (uri) {
		  uri = parseuri(uri);
		  opts.hostname = uri.host;
		  opts.secure = uri.protocol === "https" || uri.protocol === "wss";
		  opts.port = uri.port;
		  if (uri.query) opts.query = uri.query;
		} else if (opts.host) {
		  opts.hostname = parseuri(opts.host).host;
		}
  
		installTimerFunctions(_assertThisInitialized(_this), opts);
		_this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
  
		if (opts.hostname && !opts.port) {
		  // if no port is specified manually, use the protocol default
		  opts.port = _this.secure ? "443" : "80";
		}
  
		_this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
		_this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? "443" : "80");
		_this.transports = opts.transports || ["polling", "websocket"];
		_this.readyState = "";
		_this.writeBuffer = [];
		_this.prevBufferLen = 0;
		_this.opts = _extends({
		  path: "/engine.io",
		  agent: false,
		  withCredentials: false,
		  upgrade: true,
		  timestampParam: "t",
		  rememberUpgrade: false,
		  rejectUnauthorized: true,
		  perMessageDeflate: {
			threshold: 1024
		  },
		  transportOptions: {},
		  closeOnBeforeunload: true
		}, opts);
		_this.opts.path = _this.opts.path.replace(/\/$/, "") + "/";
  
		if (typeof _this.opts.query === "string") {
		  _this.opts.query = parseqs.decode(_this.opts.query);
		} // set on handshake
  
  
		_this.id = null;
		_this.upgrades = null;
		_this.pingInterval = null;
		_this.pingTimeout = null; // set on heartbeat
  
		_this.pingTimeoutTimer = null;
  
		if (typeof addEventListener === "function") {
		  if (_this.opts.closeOnBeforeunload) {
			// Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
			// ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
			// closed/reloaded)
			addEventListener("beforeunload", function () {
			  if (_this.transport) {
				// silently close the transport
				_this.transport.removeAllListeners();
  
				_this.transport.close();
			  }
			}, false);
		  }
  
		  if (_this.hostname !== "localhost") {
			_this.offlineEventListener = function () {
			  _this.onClose("transport close");
			};
  
			addEventListener("offline", _this.offlineEventListener, false);
		  }
		}
  
		_this.open();
  
		return _this;
	  }
	  /**
	   * Creates transport of the given type.
	   *
	   * @param {String} transport name
	   * @return {Transport}
	   * @api private
	   */
  
  
	  _createClass(Socket, [{
		key: "createTransport",
		value: function createTransport(name) {
		  var query = clone(this.opts.query); // append engine.io protocol identifier
  
		  query.EIO = protocol$1; // transport name
  
		  query.transport = name; // session id if we already have one
  
		  if (this.id) query.sid = this.id;
  
		  var opts = _extends({}, this.opts.transportOptions[name], this.opts, {
			query: query,
			socket: this,
			hostname: this.hostname,
			secure: this.secure,
			port: this.port
		  });
  
		  return new transports[name](opts);
		}
		/**
		 * Initializes transport to use and starts probe.
		 *
		 * @api private
		 */
  
	  }, {
		key: "open",
		value: function open() {
		  var _this2 = this;
  
		  var transport;
  
		  if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
			transport = "websocket";
		  } else if (0 === this.transports.length) {
			// Emit error on next tick so it can be listened to
			this.setTimeoutFn(function () {
			  _this2.emitReserved("error", "No transports available");
			}, 0);
			return;
		  } else {
			transport = this.transports[0];
		  }
  
		  this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)
  
		  try {
			transport = this.createTransport(transport);
		  } catch (e) {
			this.transports.shift();
			this.open();
			return;
		  }
  
		  transport.open();
		  this.setTransport(transport);
		}
		/**
		 * Sets the current transport. Disables the existing one (if any).
		 *
		 * @api private
		 */
  
	  }, {
		key: "setTransport",
		value: function setTransport(transport) {
		  var _this3 = this;
  
		  if (this.transport) {
			this.transport.removeAllListeners();
		  } // set up transport
  
  
		  this.transport = transport; // set up transport listeners
  
		  transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function () {
			_this3.onClose("transport close");
		  });
		}
		/**
		 * Probes a transport.
		 *
		 * @param {String} transport name
		 * @api private
		 */
  
	  }, {
		key: "probe",
		value: function probe(name) {
		  var _this4 = this;
  
		  var transport = this.createTransport(name);
		  var failed = false;
		  Socket.priorWebsocketSuccess = false;
  
		  var onTransportOpen = function onTransportOpen() {
			if (failed) return;
			transport.send([{
			  type: "ping",
			  data: "probe"
			}]);
			transport.once("packet", function (msg) {
			  if (failed) return;
  
			  if ("pong" === msg.type && "probe" === msg.data) {
				_this4.upgrading = true;
  
				_this4.emitReserved("upgrading", transport);
  
				if (!transport) return;
				Socket.priorWebsocketSuccess = "websocket" === transport.name;
  
				_this4.transport.pause(function () {
				  if (failed) return;
				  if ("closed" === _this4.readyState) return;
				  cleanup();
  
				  _this4.setTransport(transport);
  
				  transport.send([{
					type: "upgrade"
				  }]);
  
				  _this4.emitReserved("upgrade", transport);
  
				  transport = null;
				  _this4.upgrading = false;
  
				  _this4.flush();
				});
			  } else {
				var err = new Error("probe error"); // @ts-ignore
  
				err.transport = transport.name;
  
				_this4.emitReserved("upgradeError", err);
			  }
			});
		  };
  
		  function freezeTransport() {
			if (failed) return; // Any callback called by transport should be ignored since now
  
			failed = true;
			cleanup();
			transport.close();
			transport = null;
		  } // Handle any error that happens while probing
  
  
		  var onerror = function onerror(err) {
			var error = new Error("probe error: " + err); // @ts-ignore
  
			error.transport = transport.name;
			freezeTransport();
  
			_this4.emitReserved("upgradeError", error);
		  };
  
		  function onTransportClose() {
			onerror("transport closed");
		  } // When the socket is closed while we're probing
  
  
		  function onclose() {
			onerror("socket closed");
		  } // When the socket is upgraded while we're probing
  
  
		  function onupgrade(to) {
			if (transport && to.name !== transport.name) {
			  freezeTransport();
			}
		  } // Remove all listeners on the transport and on self
  
  
		  var cleanup = function cleanup() {
			transport.removeListener("open", onTransportOpen);
			transport.removeListener("error", onerror);
			transport.removeListener("close", onTransportClose);
  
			_this4.off("close", onclose);
  
			_this4.off("upgrading", onupgrade);
		  };
  
		  transport.once("open", onTransportOpen);
		  transport.once("error", onerror);
		  transport.once("close", onTransportClose);
		  this.once("close", onclose);
		  this.once("upgrading", onupgrade);
		  transport.open();
		}
		/**
		 * Called when connection is deemed open.
		 *
		 * @api private
		 */
  
	  }, {
		key: "onOpen",
		value: function onOpen() {
		  this.readyState = "open";
		  Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
		  this.emitReserved("open");
		  this.flush(); // we check for `readyState` in case an `open`
		  // listener already closed the socket
  
		  if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
			var i = 0;
			var l = this.upgrades.length;
  
			for (; i < l; i++) {
			  this.probe(this.upgrades[i]);
			}
		  }
		}
		/**
		 * Handles a packet.
		 *
		 * @api private
		 */
  
	  }, {
		key: "onPacket",
		value: function onPacket(packet) {
		  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
			this.emitReserved("packet", packet); // Socket is live - any packet counts
  
			this.emitReserved("heartbeat");
  
			switch (packet.type) {
			  case "open":
				this.onHandshake(JSON.parse(packet.data));
				break;
  
			  case "ping":
				this.resetPingTimeout();
				this.sendPacket("pong");
				this.emitReserved("ping");
				this.emitReserved("pong");
				break;
  
			  case "error":
				var err = new Error("server error"); // @ts-ignore
  
				err.code = packet.data;
				this.onError(err);
				break;
  
			  case "message":
				this.emitReserved("data", packet.data);
				this.emitReserved("message", packet.data);
				break;
			}
		  }
		}
		/**
		 * Called upon handshake completion.
		 *
		 * @param {Object} data - handshake obj
		 * @api private
		 */
  
	  }, {
		key: "onHandshake",
		value: function onHandshake(data) {
		  this.emitReserved("handshake", data);
		  this.id = data.sid;
		  this.transport.query.sid = data.sid;
		  this.upgrades = this.filterUpgrades(data.upgrades);
		  this.pingInterval = data.pingInterval;
		  this.pingTimeout = data.pingTimeout;
		  this.onOpen(); // In case open handler closes socket
  
		  if ("closed" === this.readyState) return;
		  this.resetPingTimeout();
		}
		/**
		 * Sets and resets ping timeout timer based on server pings.
		 *
		 * @api private
		 */
  
	  }, {
		key: "resetPingTimeout",
		value: function resetPingTimeout() {
		  var _this5 = this;
  
		  this.clearTimeoutFn(this.pingTimeoutTimer);
		  this.pingTimeoutTimer = this.setTimeoutFn(function () {
			_this5.onClose("ping timeout");
		  }, this.pingInterval + this.pingTimeout);
  
		  if (this.opts.autoUnref) {
			this.pingTimeoutTimer.unref();
		  }
		}
		/**
		 * Called on `drain` event
		 *
		 * @api private
		 */
  
	  }, {
		key: "onDrain",
		value: function onDrain() {
		  this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
		  // for example, when upgrading, upgrade packet is sent over,
		  // and a nonzero prevBufferLen could cause problems on `drain`
  
		  this.prevBufferLen = 0;
  
		  if (0 === this.writeBuffer.length) {
			this.emitReserved("drain");
		  } else {
			this.flush();
		  }
		}
		/**
		 * Flush write buffers.
		 *
		 * @api private
		 */
  
	  }, {
		key: "flush",
		value: function flush() {
		  if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
			this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
			// splice writeBuffer and callbackBuffer on `drain`
  
			this.prevBufferLen = this.writeBuffer.length;
			this.emitReserved("flush");
		  }
		}
		/**
		 * Sends a message.
		 *
		 * @param {String} message.
		 * @param {Function} callback function.
		 * @param {Object} options.
		 * @return {Socket} for chaining.
		 * @api public
		 */
  
	  }, {
		key: "write",
		value: function write(msg, options, fn) {
		  this.sendPacket("message", msg, options, fn);
		  return this;
		}
	  }, {
		key: "send",
		value: function send(msg, options, fn) {
		  this.sendPacket("message", msg, options, fn);
		  return this;
		}
		/**
		 * Sends a packet.
		 *
		 * @param {String} packet type.
		 * @param {String} data.
		 * @param {Object} options.
		 * @param {Function} callback function.
		 * @api private
		 */
  
	  }, {
		key: "sendPacket",
		value: function sendPacket(type, data, options, fn) {
		  if ("function" === typeof data) {
			fn = data;
			data = undefined;
		  }
  
		  if ("function" === typeof options) {
			fn = options;
			options = null;
		  }
  
		  if ("closing" === this.readyState || "closed" === this.readyState) {
			return;
		  }
  
		  options = options || {};
		  options.compress = false !== options.compress;
		  var packet = {
			type: type,
			data: data,
			options: options
		  };
		  this.emitReserved("packetCreate", packet);
		  this.writeBuffer.push(packet);
		  if (fn) this.once("flush", fn);
		  this.flush();
		}
		/**
		 * Closes the connection.
		 *
		 * @api public
		 */
  
	  }, {
		key: "close",
		value: function close() {
		  var _this6 = this;
  
		  var close = function close() {
			_this6.onClose("forced close");
  
			_this6.transport.close();
		  };
  
		  var cleanupAndClose = function cleanupAndClose() {
			_this6.off("upgrade", cleanupAndClose);
  
			_this6.off("upgradeError", cleanupAndClose);
  
			close();
		  };
  
		  var waitForUpgrade = function waitForUpgrade() {
			// wait for upgrade to finish since we can't send packets while pausing a transport
			_this6.once("upgrade", cleanupAndClose);
  
			_this6.once("upgradeError", cleanupAndClose);
		  };
  
		  if ("opening" === this.readyState || "open" === this.readyState) {
			this.readyState = "closing";
  
			if (this.writeBuffer.length) {
			  this.once("drain", function () {
				if (_this6.upgrading) {
				  waitForUpgrade();
				} else {
				  close();
				}
			  });
			} else if (this.upgrading) {
			  waitForUpgrade();
			} else {
			  close();
			}
		  }
  
		  return this;
		}
		/**
		 * Called upon transport error
		 *
		 * @api private
		 */
  
	  }, {
		key: "onError",
		value: function onError(err) {
		  Socket.priorWebsocketSuccess = false;
		  this.emitReserved("error", err);
		  this.onClose("transport error", err);
		}
		/**
		 * Called upon transport close.
		 *
		 * @api private
		 */
  
	  }, {
		key: "onClose",
		value: function onClose(reason, desc) {
		  if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
			// clear timers
			this.clearTimeoutFn(this.pingTimeoutTimer); // stop event from firing again for transport
  
			this.transport.removeAllListeners("close"); // ensure transport won't stay open
  
			this.transport.close(); // ignore further transport communication
  
			this.transport.removeAllListeners();
  
			if (typeof removeEventListener === "function") {
			  removeEventListener("offline", this.offlineEventListener, false);
			} // set ready state
  
  
			this.readyState = "closed"; // clear session id
  
			this.id = null; // emit close event
  
			this.emitReserved("close", reason, desc); // clean buffers after, so users can still
			// grab the buffers on `close` event
  
			this.writeBuffer = [];
			this.prevBufferLen = 0;
		  }
		}
		/**
		 * Filters upgrades, returning only those matching client transports.
		 *
		 * @param {Array} server upgrades
		 * @api private
		 *
		 */
  
	  }, {
		key: "filterUpgrades",
		value: function filterUpgrades(upgrades) {
		  var filteredUpgrades = [];
		  var i = 0;
		  var j = upgrades.length;
  
		  for (; i < j; i++) {
			if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
		  }
  
		  return filteredUpgrades;
		}
	  }]);
  
	  return Socket;
	}(Emitter_1);
	Socket$1.protocol = protocol$1;
  
	function clone(obj) {
	  var o = {};
  
	  for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
		  o[i] = obj[i];
		}
	  }
  
	  return o;
	}
  
	var withNativeArrayBuffer = typeof ArrayBuffer === "function";
  
	var isView = function isView(obj) {
	  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
	};
  
	var toString = Object.prototype.toString;
	var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
	var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
	/**
	 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
	 *
	 * @private
	 */
  
	function isBinary(obj) {
	  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
	}
	function hasBinary(obj, toJSON) {
	  if (!obj || _typeof(obj) !== "object") {
		return false;
	  }
  
	  if (Array.isArray(obj)) {
		for (var i = 0, l = obj.length; i < l; i++) {
		  if (hasBinary(obj[i])) {
			return true;
		  }
		}
  
		return false;
	  }
  
	  if (isBinary(obj)) {
		return true;
	  }
  
	  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
		return hasBinary(obj.toJSON(), true);
	  }
  
	  for (var key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
		  return true;
		}
	  }
  
	  return false;
	}
  
	/**
	 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @public
	 */
  
	function deconstructPacket(packet) {
	  var buffers = [];
	  var packetData = packet.data;
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData, buffers);
	  pack.attachments = buffers.length; // number of binary 'attachments'
  
	  return {
		packet: pack,
		buffers: buffers
	  };
	}
  
	function _deconstructPacket(data, buffers) {
	  if (!data) return data;
  
	  if (isBinary(data)) {
		var placeholder = {
		  _placeholder: true,
		  num: buffers.length
		};
		buffers.push(data);
		return placeholder;
	  } else if (Array.isArray(data)) {
		var newData = new Array(data.length);
  
		for (var i = 0; i < data.length; i++) {
		  newData[i] = _deconstructPacket(data[i], buffers);
		}
  
		return newData;
	  } else if (_typeof(data) === "object" && !(data instanceof Date)) {
		var _newData = {};
  
		for (var key in data) {
		  if (data.hasOwnProperty(key)) {
			_newData[key] = _deconstructPacket(data[key], buffers);
		  }
		}
  
		return _newData;
	  }
  
	  return data;
	}
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @public
	 */
  
  
	function reconstructPacket(packet, buffers) {
	  packet.data = _reconstructPacket(packet.data, buffers);
	  packet.attachments = undefined; // no longer useful
  
	  return packet;
	}
  
	function _reconstructPacket(data, buffers) {
	  if (!data) return data;
  
	  if (data && data._placeholder) {
		return buffers[data.num]; // appropriate buffer (should be natural order anyway)
	  } else if (Array.isArray(data)) {
		for (var i = 0; i < data.length; i++) {
		  data[i] = _reconstructPacket(data[i], buffers);
		}
	  } else if (_typeof(data) === "object") {
		for (var key in data) {
		  if (data.hasOwnProperty(key)) {
			data[key] = _reconstructPacket(data[key], buffers);
		  }
		}
	  }
  
	  return data;
	}
  
	/**
	 * Protocol version.
	 *
	 * @public
	 */
  
	var protocol = 5;
	var PacketType;
  
	(function (PacketType) {
	  PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
	  PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
	  PacketType[PacketType["EVENT"] = 2] = "EVENT";
	  PacketType[PacketType["ACK"] = 3] = "ACK";
	  PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
	  PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
	  PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
	})(PacketType || (PacketType = {}));
	/**
	 * A socket.io Encoder instance
	 */
  
  
	var Encoder = /*#__PURE__*/function () {
	  function Encoder() {
		_classCallCheck(this, Encoder);
	  }
  
	  _createClass(Encoder, [{
		key: "encode",
		value:
		/**
		 * Encode a packet as a single string if non-binary, or as a
		 * buffer sequence, depending on packet type.
		 *
		 * @param {Object} obj - packet object
		 */
		function encode(obj) {
		  if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
			if (hasBinary(obj)) {
			  obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
			  return this.encodeAsBinary(obj);
			}
		  }
  
		  return [this.encodeAsString(obj)];
		}
		/**
		 * Encode packet as string.
		 */
  
	  }, {
		key: "encodeAsString",
		value: function encodeAsString(obj) {
		  // first is type
		  var str = "" + obj.type; // attachments if we have them
  
		  if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
			str += obj.attachments + "-";
		  } // if we have a namespace other than `/`
		  // we append it followed by a comma `,`
  
  
		  if (obj.nsp && "/" !== obj.nsp) {
			str += obj.nsp + ",";
		  } // immediately followed by the id
  
  
		  if (null != obj.id) {
			str += obj.id;
		  } // json data
  
  
		  if (null != obj.data) {
			str += JSON.stringify(obj.data);
		  }
  
		  return str;
		}
		/**
		 * Encode packet as 'buffer sequence' by removing blobs, and
		 * deconstructing packet into object with placeholders and
		 * a list of buffers.
		 */
  
	  }, {
		key: "encodeAsBinary",
		value: function encodeAsBinary(obj) {
		  var deconstruction = deconstructPacket(obj);
		  var pack = this.encodeAsString(deconstruction.packet);
		  var buffers = deconstruction.buffers;
		  buffers.unshift(pack); // add packet info to beginning of data list
  
		  return buffers; // write all the buffers
		}
	  }]);
  
	  return Encoder;
	}();
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 */
  
	var Decoder = /*#__PURE__*/function (_Emitter) {
	  _inherits(Decoder, _Emitter);
  
	  var _super = _createSuper(Decoder);
  
	  function Decoder() {
		_classCallCheck(this, Decoder);
  
		return _super.call(this);
	  }
	  /**
	   * Decodes an encoded packet string into packet JSON.
	   *
	   * @param {String} obj - encoded packet
	   */
  
  
	  _createClass(Decoder, [{
		key: "add",
		value: function add(obj) {
		  var packet;
  
		  if (typeof obj === "string") {
			packet = this.decodeString(obj);
  
			if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
			  // binary packet's json
			  this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow
  
			  if (packet.attachments === 0) {
				_get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
			  }
			} else {
			  // non-binary full packet
			  _get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
			}
		  } else if (isBinary(obj) || obj.base64) {
			// raw binary data
			if (!this.reconstructor) {
			  throw new Error("got binary data when not reconstructing a packet");
			} else {
			  packet = this.reconstructor.takeBinaryData(obj);
  
			  if (packet) {
				// received final buffer
				this.reconstructor = null;
  
				_get(_getPrototypeOf(Decoder.prototype), "emitReserved", this).call(this, "decoded", packet);
			  }
			}
		  } else {
			throw new Error("Unknown type: " + obj);
		  }
		}
		/**
		 * Decode a packet String (JSON data)
		 *
		 * @param {String} str
		 * @return {Object} packet
		 */
  
	  }, {
		key: "decodeString",
		value: function decodeString(str) {
		  var i = 0; // look up type
  
		  var p = {
			type: Number(str.charAt(0))
		  };
  
		  if (PacketType[p.type] === undefined) {
			throw new Error("unknown packet type " + p.type);
		  } // look up attachments if type binary
  
  
		  if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
			var start = i + 1;
  
			while (str.charAt(++i) !== "-" && i != str.length) {}
  
			var buf = str.substring(start, i);
  
			if (buf != Number(buf) || str.charAt(i) !== "-") {
			  throw new Error("Illegal attachments");
			}
  
			p.attachments = Number(buf);
		  } // look up namespace (if any)
  
  
		  if ("/" === str.charAt(i + 1)) {
			var _start = i + 1;
  
			while (++i) {
			  var c = str.charAt(i);
			  if ("," === c) break;
			  if (i === str.length) break;
			}
  
			p.nsp = str.substring(_start, i);
		  } else {
			p.nsp = "/";
		  } // look up id
  
  
		  var next = str.charAt(i + 1);
  
		  if ("" !== next && Number(next) == next) {
			var _start2 = i + 1;
  
			while (++i) {
			  var _c = str.charAt(i);
  
			  if (null == _c || Number(_c) != _c) {
				--i;
				break;
			  }
  
			  if (i === str.length) break;
			}
  
			p.id = Number(str.substring(_start2, i + 1));
		  } // look up json data
  
  
		  if (str.charAt(++i)) {
			var payload = tryParse(str.substr(i));
  
			if (Decoder.isPayloadValid(p.type, payload)) {
			  p.data = payload;
			} else {
			  throw new Error("invalid payload");
			}
		  }
  
		  return p;
		}
	  }, {
		key: "destroy",
		value:
		/**
		 * Deallocates a parser's resources
		 */
		function destroy() {
		  if (this.reconstructor) {
			this.reconstructor.finishedReconstruction();
		  }
		}
	  }], [{
		key: "isPayloadValid",
		value: function isPayloadValid(type, payload) {
		  switch (type) {
			case PacketType.CONNECT:
			  return _typeof(payload) === "object";
  
			case PacketType.DISCONNECT:
			  return payload === undefined;
  
			case PacketType.CONNECT_ERROR:
			  return typeof payload === "string" || _typeof(payload) === "object";
  
			case PacketType.EVENT:
			case PacketType.BINARY_EVENT:
			  return Array.isArray(payload) && payload.length > 0;
  
			case PacketType.ACK:
			case PacketType.BINARY_ACK:
			  return Array.isArray(payload);
		  }
		}
	  }]);
  
	  return Decoder;
	}(Emitter_1);
  
	function tryParse(str) {
	  try {
		return JSON.parse(str);
	  } catch (e) {
		return false;
	  }
	}
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 */
  
  
	var BinaryReconstructor = /*#__PURE__*/function () {
	  function BinaryReconstructor(packet) {
		_classCallCheck(this, BinaryReconstructor);
  
		this.packet = packet;
		this.buffers = [];
		this.reconPack = packet;
	  }
	  /**
	   * Method to be called when binary data received from connection
	   * after a BINARY_EVENT packet.
	   *
	   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	   * @return {null | Object} returns null if more binary data is expected or
	   *   a reconstructed packet object if all buffers have been received.
	   */
  
  
	  _createClass(BinaryReconstructor, [{
		key: "takeBinaryData",
		value: function takeBinaryData(binData) {
		  this.buffers.push(binData);
  
		  if (this.buffers.length === this.reconPack.attachments) {
			// done with buffer list
			var packet = reconstructPacket(this.reconPack, this.buffers);
			this.finishedReconstruction();
			return packet;
		  }
  
		  return null;
		}
		/**
		 * Cleans up binary packet reconstruction variables.
		 */
  
	  }, {
		key: "finishedReconstruction",
		value: function finishedReconstruction() {
		  this.reconPack = null;
		  this.buffers = [];
		}
	  }]);
  
	  return BinaryReconstructor;
	}();
  
	var parser = /*#__PURE__*/Object.freeze({
	  __proto__: null,
	  protocol: protocol,
	  get PacketType () { return PacketType; },
	  Encoder: Encoder,
	  Decoder: Decoder
	});
  
	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return function subDestroy() {
		obj.off(ev, fn);
	  };
	}
  
	/**
	 * Internal events.
	 * These events can't be emitted by the user.
	 */
  
	var RESERVED_EVENTS = Object.freeze({
	  connect: 1,
	  connect_error: 1,
	  disconnect: 1,
	  disconnecting: 1,
	  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
	  newListener: 1,
	  removeListener: 1
	});
	var Socket = /*#__PURE__*/function (_Emitter) {
	  _inherits(Socket, _Emitter);
  
	  var _super = _createSuper(Socket);
  
	  /**
	   * `Socket` constructor.
	   *
	   * @public
	   */
	  function Socket(io, nsp, opts) {
		var _this;
  
		_classCallCheck(this, Socket);
  
		_this = _super.call(this);
		_this.connected = false;
		_this.disconnected = true;
		_this.receiveBuffer = [];
		_this.sendBuffer = [];
		_this.ids = 0;
		_this.acks = {};
		_this.flags = {};
		_this.io = io;
		_this.nsp = nsp;
  
		if (opts && opts.auth) {
		  _this.auth = opts.auth;
		}
  
		if (_this.io._autoConnect) _this.open();
		return _this;
	  }
	  /**
	   * Subscribe to open, close and packet events
	   *
	   * @private
	   */
  
  
	  _createClass(Socket, [{
		key: "subEvents",
		value: function subEvents() {
		  if (this.subs) return;
		  var io = this.io;
		  this.subs = [on(io, "open", this.onopen.bind(this)), on(io, "packet", this.onpacket.bind(this)), on(io, "error", this.onerror.bind(this)), on(io, "close", this.onclose.bind(this))];
		}
		/**
		 * Whether the Socket will try to reconnect when its Manager connects or reconnects
		 */
  
	  }, {
		key: "active",
		get: function get() {
		  return !!this.subs;
		}
		/**
		 * "Opens" the socket.
		 *
		 * @public
		 */
  
	  }, {
		key: "connect",
		value: function connect() {
		  if (this.connected) return this;
		  this.subEvents();
		  if (!this.io["_reconnecting"]) this.io.open(); // ensure open
  
		  if ("open" === this.io._readyState) this.onopen();
		  return this;
		}
		/**
		 * Alias for connect()
		 */
  
	  }, {
		key: "open",
		value: function open() {
		  return this.connect();
		}
		/**
		 * Sends a `message` event.
		 *
		 * @return self
		 * @public
		 */
  
	  }, {
		key: "send",
		value: function send() {
		  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		  }
  
		  args.unshift("message");
		  this.emit.apply(this, args);
		  return this;
		}
		/**
		 * Override `emit`.
		 * If the event is in `events`, it's emitted normally.
		 *
		 * @return self
		 * @public
		 */
  
	  }, {
		key: "emit",
		value: function emit(ev) {
		  if (RESERVED_EVENTS.hasOwnProperty(ev)) {
			throw new Error('"' + ev + '" is a reserved event name');
		  }
  
		  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
		  }
  
		  args.unshift(ev);
		  var packet = {
			type: PacketType.EVENT,
			data: args
		  };
		  packet.options = {};
		  packet.options.compress = this.flags.compress !== false; // event ack callback
  
		  if ("function" === typeof args[args.length - 1]) {
			this.acks[this.ids] = args.pop();
			packet.id = this.ids++;
		  }
  
		  var isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
		  var discardPacket = this.flags["volatile"] && (!isTransportWritable || !this.connected);
  
		  if (discardPacket) ; else if (this.connected) {
			this.packet(packet);
		  } else {
			this.sendBuffer.push(packet);
		  }
  
		  this.flags = {};
		  return this;
		}
		/**
		 * Sends a packet.
		 *
		 * @param packet
		 * @private
		 */
  
	  }, {
		key: "packet",
		value: function packet(_packet) {
		  _packet.nsp = this.nsp;
  
		  this.io._packet(_packet);
		}
		/**
		 * Called upon engine `open`.
		 *
		 * @private
		 */
  
	  }, {
		key: "onopen",
		value: function onopen() {
		  var _this2 = this;
  
		  if (typeof this.auth == "function") {
			this.auth(function (data) {
			  _this2.packet({
				type: PacketType.CONNECT,
				data: data
			  });
			});
		  } else {
			this.packet({
			  type: PacketType.CONNECT,
			  data: this.auth
			});
		  }
		}
		/**
		 * Called upon engine or manager `error`.
		 *
		 * @param err
		 * @private
		 */
  
	  }, {
		key: "onerror",
		value: function onerror(err) {
		  if (!this.connected) {
			this.emitReserved("connect_error", err);
		  }
		}
		/**
		 * Called upon engine `close`.
		 *
		 * @param reason
		 * @private
		 */
  
	  }, {
		key: "onclose",
		value: function onclose(reason) {
		  this.connected = false;
		  this.disconnected = true;
		  delete this.id;
		  this.emitReserved("disconnect", reason);
		}
		/**
		 * Called with socket packet.
		 *
		 * @param packet
		 * @private
		 */
  
	  }, {
		key: "onpacket",
		value: function onpacket(packet) {
		  var sameNamespace = packet.nsp === this.nsp;
		  if (!sameNamespace) return;
  
		  switch (packet.type) {
			case PacketType.CONNECT:
			  if (packet.data && packet.data.sid) {
				var id = packet.data.sid;
				this.onconnect(id);
			  } else {
				this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
			  }
  
			  break;
  
			case PacketType.EVENT:
			  this.onevent(packet);
			  break;
  
			case PacketType.BINARY_EVENT:
			  this.onevent(packet);
			  break;
  
			case PacketType.ACK:
			  this.onack(packet);
			  break;
  
			case PacketType.BINARY_ACK:
			  this.onack(packet);
			  break;
  
			case PacketType.DISCONNECT:
			  this.ondisconnect();
			  break;
  
			case PacketType.CONNECT_ERROR:
			  var err = new Error(packet.data.message); // @ts-ignore
  
			  err.data = packet.data.data;
			  this.emitReserved("connect_error", err);
			  break;
		  }
		}
		/**
		 * Called upon a server event.
		 *
		 * @param packet
		 * @private
		 */
  
	  }, {
		key: "onevent",
		value: function onevent(packet) {
		  var args = packet.data || [];
  
		  if (null != packet.id) {
			args.push(this.ack(packet.id));
		  }
  
		  if (this.connected) {
			this.emitEvent(args);
		  } else {
			this.receiveBuffer.push(Object.freeze(args));
		  }
		}
	  }, {
		key: "emitEvent",
		value: function emitEvent(args) {
		  if (this._anyListeners && this._anyListeners.length) {
			var listeners = this._anyListeners.slice();
  
			var _iterator = _createForOfIteratorHelper(listeners),
				_step;
  
			try {
			  for (_iterator.s(); !(_step = _iterator.n()).done;) {
				var listener = _step.value;
				listener.apply(this, args);
			  }
			} catch (err) {
			  _iterator.e(err);
			} finally {
			  _iterator.f();
			}
		  }
  
		  _get(_getPrototypeOf(Socket.prototype), "emit", this).apply(this, args);
		}
		/**
		 * Produces an ack callback to emit with an event.
		 *
		 * @private
		 */
  
	  }, {
		key: "ack",
		value: function ack(id) {
		  var self = this;
		  var sent = false;
		  return function () {
			// prevent double callbacks
			if (sent) return;
			sent = true;
  
			for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			  args[_key3] = arguments[_key3];
			}
  
			self.packet({
			  type: PacketType.ACK,
			  id: id,
			  data: args
			});
		  };
		}
		/**
		 * Called upon a server acknowlegement.
		 *
		 * @param packet
		 * @private
		 */
  
	  }, {
		key: "onack",
		value: function onack(packet) {
		  var ack = this.acks[packet.id];
  
		  if ("function" === typeof ack) {
			ack.apply(this, packet.data);
			delete this.acks[packet.id];
		  }
		}
		/**
		 * Called upon server connect.
		 *
		 * @private
		 */
  
	  }, {
		key: "onconnect",
		value: function onconnect(id) {
		  this.id = id;
		  this.connected = true;
		  this.disconnected = false;
		  this.emitBuffered();
		  this.emitReserved("connect");
		}
		/**
		 * Emit buffered events (received and emitted).
		 *
		 * @private
		 */
  
	  }, {
		key: "emitBuffered",
		value: function emitBuffered() {
		  var _this3 = this;
  
		  this.receiveBuffer.forEach(function (args) {
			return _this3.emitEvent(args);
		  });
		  this.receiveBuffer = [];
		  this.sendBuffer.forEach(function (packet) {
			return _this3.packet(packet);
		  });
		  this.sendBuffer = [];
		}
		/**
		 * Called upon server disconnect.
		 *
		 * @private
		 */
  
	  }, {
		key: "ondisconnect",
		value: function ondisconnect() {
		  this.destroy();
		  this.onclose("io server disconnect");
		}
		/**
		 * Called upon forced client/server side disconnections,
		 * this method ensures the manager stops tracking us and
		 * that reconnections don't get triggered for this.
		 *
		 * @private
		 */
  
	  }, {
		key: "destroy",
		value: function destroy() {
		  if (this.subs) {
			// clean subscriptions to avoid reconnections
			this.subs.forEach(function (subDestroy) {
			  return subDestroy();
			});
			this.subs = undefined;
		  }
  
		  this.io["_destroy"](this);
		}
		/**
		 * Disconnects the socket manually.
		 *
		 * @return self
		 * @public
		 */
  
	  }, {
		key: "disconnect",
		value: function disconnect() {
		  if (this.connected) {
			this.packet({
			  type: PacketType.DISCONNECT
			});
		  } // remove socket from pool
  
  
		  this.destroy();
  
		  if (this.connected) {
			// fire events
			this.onclose("io client disconnect");
		  }
  
		  return this;
		}
		/**
		 * Alias for disconnect()
		 *
		 * @return self
		 * @public
		 */
  
	  }, {
		key: "close",
		value: function close() {
		  return this.disconnect();
		}
		/**
		 * Sets the compress flag.
		 *
		 * @param compress - if `true`, compresses the sending data
		 * @return self
		 * @public
		 */
  
	  }, {
		key: "compress",
		value: function compress(_compress) {
		  this.flags.compress = _compress;
		  return this;
		}
		/**
		 * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
		 * ready to send messages.
		 *
		 * @returns self
		 * @public
		 */
  
	  }, {
		key: "volatile",
		get: function get() {
		  this.flags["volatile"] = true;
		  return this;
		}
		/**
		 * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
		 * callback.
		 *
		 * @param listener
		 * @public
		 */
  
	  }, {
		key: "onAny",
		value: function onAny(listener) {
		  this._anyListeners = this._anyListeners || [];
  
		  this._anyListeners.push(listener);
  
		  return this;
		}
		/**
		 * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
		 * callback. The listener is added to the beginning of the listeners array.
		 *
		 * @param listener
		 * @public
		 */
  
	  }, {
		key: "prependAny",
		value: function prependAny(listener) {
		  this._anyListeners = this._anyListeners || [];
  
		  this._anyListeners.unshift(listener);
  
		  return this;
		}
		/**
		 * Removes the listener that will be fired when any event is emitted.
		 *
		 * @param listener
		 * @public
		 */
  
	  }, {
		key: "offAny",
		value: function offAny(listener) {
		  if (!this._anyListeners) {
			return this;
		  }
  
		  if (listener) {
			var listeners = this._anyListeners;
  
			for (var i = 0; i < listeners.length; i++) {
			  if (listener === listeners[i]) {
				listeners.splice(i, 1);
				return this;
			  }
			}
		  } else {
			this._anyListeners = [];
		  }
  
		  return this;
		}
		/**
		 * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
		 * e.g. to remove listeners.
		 *
		 * @public
		 */
  
	  }, {
		key: "listenersAny",
		value: function listenersAny() {
		  return this._anyListeners || [];
		}
	  }]);
  
	  return Socket;
	}(Emitter_1);
  
	/**
	 * Expose `Backoff`.
	 */
  
	var backo2 = Backoff;
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
  
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
  
  
	Backoff.prototype.duration = function () {
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  
	  if (this.jitter) {
		var rand = Math.random();
		var deviation = Math.floor(rand * this.jitter * ms);
		ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
	  }
  
	  return Math.min(ms, this.max) | 0;
	};
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
  
  
	Backoff.prototype.reset = function () {
	  this.attempts = 0;
	};
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
  
  
	Backoff.prototype.setMin = function (min) {
	  this.ms = min;
	};
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
  
  
	Backoff.prototype.setMax = function (max) {
	  this.max = max;
	};
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
  
  
	Backoff.prototype.setJitter = function (jitter) {
	  this.jitter = jitter;
	};
  
	var Manager = /*#__PURE__*/function (_Emitter) {
	  _inherits(Manager, _Emitter);
  
	  var _super = _createSuper(Manager);
  
	  function Manager(uri, opts) {
		var _this;
  
		_classCallCheck(this, Manager);
  
		var _a;
  
		_this = _super.call(this);
		_this.nsps = {};
		_this.subs = [];
  
		if (uri && "object" === _typeof(uri)) {
		  opts = uri;
		  uri = undefined;
		}
  
		opts = opts || {};
		opts.path = opts.path || "/socket.io";
		_this.opts = opts;
		installTimerFunctions(_assertThisInitialized(_this), opts);
  
		_this.reconnection(opts.reconnection !== false);
  
		_this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  
		_this.reconnectionDelay(opts.reconnectionDelay || 1000);
  
		_this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  
		_this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
  
		_this.backoff = new backo2({
		  min: _this.reconnectionDelay(),
		  max: _this.reconnectionDelayMax(),
		  jitter: _this.randomizationFactor()
		});
  
		_this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  
		_this._readyState = "closed";
		_this.uri = uri;
  
		var _parser = opts.parser || parser;
  
		_this.encoder = new _parser.Encoder();
		_this.decoder = new _parser.Decoder();
		_this._autoConnect = opts.autoConnect !== false;
		if (_this._autoConnect) _this.open();
		return _this;
	  }
  
	  _createClass(Manager, [{
		key: "reconnection",
		value: function reconnection(v) {
		  if (!arguments.length) return this._reconnection;
		  this._reconnection = !!v;
		  return this;
		}
	  }, {
		key: "reconnectionAttempts",
		value: function reconnectionAttempts(v) {
		  if (v === undefined) return this._reconnectionAttempts;
		  this._reconnectionAttempts = v;
		  return this;
		}
	  }, {
		key: "reconnectionDelay",
		value: function reconnectionDelay(v) {
		  var _a;
  
		  if (v === undefined) return this._reconnectionDelay;
		  this._reconnectionDelay = v;
		  (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
		  return this;
		}
	  }, {
		key: "randomizationFactor",
		value: function randomizationFactor(v) {
		  var _a;
  
		  if (v === undefined) return this._randomizationFactor;
		  this._randomizationFactor = v;
		  (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
		  return this;
		}
	  }, {
		key: "reconnectionDelayMax",
		value: function reconnectionDelayMax(v) {
		  var _a;
  
		  if (v === undefined) return this._reconnectionDelayMax;
		  this._reconnectionDelayMax = v;
		  (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
		  return this;
		}
	  }, {
		key: "timeout",
		value: function timeout(v) {
		  if (!arguments.length) return this._timeout;
		  this._timeout = v;
		  return this;
		}
		/**
		 * Starts trying to reconnect if reconnection is enabled and we have not
		 * started reconnecting yet
		 *
		 * @private
		 */
  
	  }, {
		key: "maybeReconnectOnOpen",
		value: function maybeReconnectOnOpen() {
		  // Only try to reconnect if it's the first time we're connecting
		  if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
			// keeps reconnection from firing twice for the same reconnection loop
			this.reconnect();
		  }
		}
		/**
		 * Sets the current transport `socket`.
		 *
		 * @param {Function} fn - optional, callback
		 * @return self
		 * @public
		 */
  
	  }, {
		key: "open",
		value: function open(fn) {
		  var _this2 = this;
  
		  if (~this._readyState.indexOf("open")) return this;
		  this.engine = new Socket$1(this.uri, this.opts);
		  var socket = this.engine;
		  var self = this;
		  this._readyState = "opening";
		  this.skipReconnect = false; // emit `open`
  
		  var openSubDestroy = on(socket, "open", function () {
			self.onopen();
			fn && fn();
		  }); // emit `error`
  
		  var errorSub = on(socket, "error", function (err) {
			self.cleanup();
			self._readyState = "closed";
  
			_this2.emitReserved("error", err);
  
			if (fn) {
			  fn(err);
			} else {
			  // Only do this if there is no fn to handle the error
			  self.maybeReconnectOnOpen();
			}
		  });
  
		  if (false !== this._timeout) {
			var timeout = this._timeout;
  
			if (timeout === 0) {
			  openSubDestroy(); // prevents a race condition with the 'open' event
			} // set timer
  
  
			var timer = this.setTimeoutFn(function () {
			  openSubDestroy();
			  socket.close(); // @ts-ignore
  
			  socket.emit("error", new Error("timeout"));
			}, timeout);
  
			if (this.opts.autoUnref) {
			  timer.unref();
			}
  
			this.subs.push(function subDestroy() {
			  clearTimeout(timer);
			});
		  }
  
		  this.subs.push(openSubDestroy);
		  this.subs.push(errorSub);
		  return this;
		}
		/**
		 * Alias for open()
		 *
		 * @return self
		 * @public
		 */
  
	  }, {
		key: "connect",
		value: function connect(fn) {
		  return this.open(fn);
		}
		/**
		 * Called upon transport open.
		 *
		 * @private
		 */
  
	  }, {
		key: "onopen",
		value: function onopen() {
		  // clear old subs
		  this.cleanup(); // mark as open
  
		  this._readyState = "open";
		  this.emitReserved("open"); // add new subs
  
		  var socket = this.engine;
		  this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
		}
		/**
		 * Called upon a ping.
		 *
		 * @private
		 */
  
	  }, {
		key: "onping",
		value: function onping() {
		  this.emitReserved("ping");
		}
		/**
		 * Called with data.
		 *
		 * @private
		 */
  
	  }, {
		key: "ondata",
		value: function ondata(data) {
		  this.decoder.add(data);
		}
		/**
		 * Called when parser fully decodes a packet.
		 *
		 * @private
		 */
  
	  }, {
		key: "ondecoded",
		value: function ondecoded(packet) {
		  this.emitReserved("packet", packet);
		}
		/**
		 * Called upon socket error.
		 *
		 * @private
		 */
  
	  }, {
		key: "onerror",
		value: function onerror(err) {
		  this.emitReserved("error", err);
		}
		/**
		 * Creates a new socket for the given `nsp`.
		 *
		 * @return {Socket}
		 * @public
		 */
  
	  }, {
		key: "socket",
		value: function socket(nsp, opts) {
		  var socket = this.nsps[nsp];
  
		  if (!socket) {
			socket = new Socket(this, nsp, opts);
			this.nsps[nsp] = socket;
		  }
  
		  return socket;
		}
		/**
		 * Called upon a socket close.
		 *
		 * @param socket
		 * @private
		 */
  
	  }, {
		key: "_destroy",
		value: function _destroy(socket) {
		  var nsps = Object.keys(this.nsps);
  
		  for (var _i = 0, _nsps = nsps; _i < _nsps.length; _i++) {
			var nsp = _nsps[_i];
			var _socket = this.nsps[nsp];
  
			if (_socket.active) {
			  return;
			}
		  }
  
		  this._close();
		}
		/**
		 * Writes a packet.
		 *
		 * @param packet
		 * @private
		 */
  
	  }, {
		key: "_packet",
		value: function _packet(packet) {
		  var encodedPackets = this.encoder.encode(packet);
  
		  for (var i = 0; i < encodedPackets.length; i++) {
			this.engine.write(encodedPackets[i], packet.options);
		  }
		}
		/**
		 * Clean up transport subscriptions and packet buffer.
		 *
		 * @private
		 */
  
	  }, {
		key: "cleanup",
		value: function cleanup() {
		  this.subs.forEach(function (subDestroy) {
			return subDestroy();
		  });
		  this.subs.length = 0;
		  this.decoder.destroy();
		}
		/**
		 * Close the current socket.
		 *
		 * @private
		 */
  
	  }, {
		key: "_close",
		value: function _close() {
		  this.skipReconnect = true;
		  this._reconnecting = false;
  
		  if ("opening" === this._readyState) {
			// `onclose` will not fire because
			// an open event never happened
			this.cleanup();
		  }
  
		  this.backoff.reset();
		  this._readyState = "closed";
		  if (this.engine) this.engine.close();
		}
		/**
		 * Alias for close()
		 *
		 * @private
		 */
  
	  }, {
		key: "disconnect",
		value: function disconnect() {
		  return this._close();
		}
		/**
		 * Called upon engine close.
		 *
		 * @private
		 */
  
	  }, {
		key: "onclose",
		value: function onclose(reason) {
		  this.cleanup();
		  this.backoff.reset();
		  this._readyState = "closed";
		  this.emitReserved("close", reason);
  
		  if (this._reconnection && !this.skipReconnect) {
			this.reconnect();
		  }
		}
		/**
		 * Attempt a reconnection.
		 *
		 * @private
		 */
  
	  }, {
		key: "reconnect",
		value: function reconnect() {
		  var _this3 = this;
  
		  if (this._reconnecting || this.skipReconnect) return this;
		  var self = this;
  
		  if (this.backoff.attempts >= this._reconnectionAttempts) {
			this.backoff.reset();
			this.emitReserved("reconnect_failed");
			this._reconnecting = false;
		  } else {
			var delay = this.backoff.duration();
			this._reconnecting = true;
			var timer = this.setTimeoutFn(function () {
			  if (self.skipReconnect) return;
  
			  _this3.emitReserved("reconnect_attempt", self.backoff.attempts); // check again for the case socket closed in above events
  
  
			  if (self.skipReconnect) return;
			  self.open(function (err) {
				if (err) {
				  self._reconnecting = false;
				  self.reconnect();
  
				  _this3.emitReserved("reconnect_error", err);
				} else {
				  self.onreconnect();
				}
			  });
			}, delay);
  
			if (this.opts.autoUnref) {
			  timer.unref();
			}
  
			this.subs.push(function subDestroy() {
			  clearTimeout(timer);
			});
		  }
		}
		/**
		 * Called upon successful reconnect.
		 *
		 * @private
		 */
  
	  }, {
		key: "onreconnect",
		value: function onreconnect() {
		  var attempt = this.backoff.attempts;
		  this._reconnecting = false;
		  this.backoff.reset();
		  this.emitReserved("reconnect", attempt);
		}
	  }]);
  
	  return Manager;
	}(Emitter_1);
  
	/**
	 * Managers cache.
	 */
  
	var cache = {};
  
	function lookup(uri, opts) {
	  if (_typeof(uri) === "object") {
		opts = uri;
		uri = undefined;
	  }
  
	  opts = opts || {};
	  var parsed = url(uri, opts.path || "/socket.io");
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id]["nsps"];
	  var newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
	  var io;
  
	  if (newConnection) {
		io = new Manager(source, opts);
	  } else {
		if (!cache[id]) {
		  cache[id] = new Manager(source, opts);
		}
  
		io = cache[id];
	  }
  
	  if (parsed.query && !opts.query) {
		opts.query = parsed.queryKey;
	  }
  
	  return io.socket(parsed.path, opts);
	} // so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
	// namespace (e.g. `io.connect(...)`), for backward compatibility
  
  
	_extends(lookup, {
	  Manager: Manager,
	  Socket: Socket,
	  io: lookup,
	  connect: lookup
	});
  
	if (true) {
	  module.exports = lookup;
	}
  
	return lookup;
  
  }));
  //# sourceMappingURL=socket.io.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "la_livla:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkla_livla"] = self["webpackChunkla_livla"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ../../build/sutysisku/lojban/socket.io.js
var socket_io = __webpack_require__(546);
var socket_io_default = /*#__PURE__*/__webpack_require__.n(socket_io);
;// CONCATENATED MODULE: ../../build/sutysisku/lojban/asql/indexeddb-main-thread.js
// The reason for this strange abstraction is because we can't rely on
// nested worker support (Safari doesn't support it). We need to proxy
// creating a child worker through the main thread, and this requires
// a bit of glue code. We don't want to duplicate this code in each
// backend that needs it, so this module abstracts it out. It has to
// have a strange shape because we don't want to eagerly bundle the
// backend code, so users of this code need to pass an `() =>
// import('worker.js')` expression to get the worker module to run.

function isWorker() {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope
  );
}

function makeStartWorkerFromMain(getModule) {
  return (argBuffer, resultBuffer, parentWorker) => {
    if (isWorker()) {
      throw new Error(
        '`startWorkerFromMain` should only be called from the main thread'
      );
    }

    if (typeof Worker === 'undefined') {
      // We're on the main thread? Weird: it doesn't have workers
      throw new Error(
        'Web workers not available. sqlite3 requires web workers to work.'
      );
    }

    getModule().then(({ default: BackendWorker }) => {
      let worker = new BackendWorker();

      worker.postMessage({ type: 'init', buffers: [argBuffer, resultBuffer] });

      worker.addEventListener('message', msg => {
        // Forward any messages to the worker that's supposed
        // to be the parent
        parentWorker.postMessage(msg.data);
      });
    });
  };
}

function makeInitBackend(spawnEventName, getModule) {
  const startWorkerFromMain = makeStartWorkerFromMain(getModule);

  return worker => {
    worker.addEventListener('message', e => {
      switch (e.data.type) {
        case spawnEventName:
          startWorkerFromMain(e.data.argBuffer, e.data.resultBuffer, worker);
          break;
      }
    });
  };
}

// Use the generic main thread module to create our indexeddb worker
// proxy
const initBackend = makeInitBackend('__absurd:spawn-idb-worker', () =>
  __webpack_require__.e(/* import() */ 920).then(__webpack_require__.bind(__webpack_require__, 695))
);



;// CONCATENATED MODULE: ../../build/sutysisku/lojban/index.js
//imports:



//queue

class Queue {
  constructor() {
    this._items = []
  }
  enqueue(item) {
    this._items.push(item)
  }
  dequeue() {
    const withVlaste = this._items.filter((i) => i.name === 'vlaste').slice(-1)
    const notWithVlaste = this._items.filter((i) => i.name !== 'vlaste')
    this._items = withVlaste.concat(notWithVlaste)
    return this._items.shift()
  }
  get size() {
    return this._items.length
  }
}

class AutoQueue extends Queue {
  constructor() {
    super()
    this._pendingPromise = false
  }

  enqueue(action, name) {
    return new Promise((resolve, reject) => {
      super.enqueue({ name, action, resolve, reject })
      this.dequeue()
    })
  }

  async dequeue() {
    if (this._pendingPromise) return false

    const item = super.dequeue()

    if (!item) return false

    try {
      this._pendingPromise = true

      const payload = await item.action(this)

      this._pendingPromise = false
      item.resolve(payload)
    } catch (e) {
      this._pendingPromise = false
      item.reject(e)
    } finally {
      this.dequeue()
    }

    return true
  }
}

const aQueue = new AutoQueue()

//DOM element vars:
const content = document.getElementById('content')
const ciska = document.getElementById('ciska')
const clear = document.getElementById('clear')
const outp = document.getElementById('outp')
const descr = document.getElementById('descr')
const drata = document.getElementById('drata')
const citri = document.getElementById('citri')
const sidju = document.getElementById('sidju')
const pb = document.getElementById('kernelo_lo_cpacu')
let SiteTitleFull = document.querySelector('#site-title')
const dasri = document.getElementById('galtu-dasri')
const catni = document.getElementById('catni')
const cnano = document.getElementById('cnano')
const rimni = document.getElementById('rimni')
// var arxivo = document.getElementById("arxivo");
const SiteImage = document.querySelectorAll('#title > img')
const btnScrollToTop = document.getElementById('scrollToTop')
const audio = document.querySelector('#audio')
const loading = document.getElementById('loading')
const modalWindow = document.getElementById('jsModal')

// generic vars:

const CACHE_NAME = 'sutysisku'

window.leijufra = { custom_links: [] }
const supportedLangs = {
  en: { n: 'English', p: 'selsku_lanci_eng' },
  muplis: { n: 'la muplis' },
  'en-cll': { n: 'The Book', p: 'cukta' },
  'en-ll': { n: 'Learn Lojban', p: 'cukta' },
  jbo: { n: 'lojbo', p: 'lanci_jbo' },
  ru: { n: 'русский', p: 'selsku_lanci_rus' },
  eo: { n: 'esperanto', p: 'lanci_epo' },
  es: { n: 'español', p: 'selsku_lanci_spa' },
  'fr-facile': { n: 'français', p: 'selsku_lanci_fra' },
  ja: { n: '日本語', p: 'selsku_lanci_jpn' },
  zh: { n: '中文', p: 'selsku_lanci_zho' },
  loglan: { n: 'Loglan', p: 'loglan' },
}

const listFamymaho = {
  GA: "gi",
  GUhA: "gi",
  BE: "bei be'o",
  BEI: "be'o",
  BY: 'boi',
  COI: "do'u",
  DOI: "do'u",
  FIhO: "fe'u",
  FUhE: "fu'o",
  GIhA: 'vau',
  GOI: "ge'u",
  JOhI: "te'u",
  KE: "ke'e",
  LAhE: "lu'u",
  LA: 'ku',
  LE: 'ku',
  LI: "lo'o",
  LOhU: "le'u",
  LU: "li'u",
  ME: "me'u",
  'NAhE+BO': "lu'u",
  NOI: "ku'o",
  NUhI: "nu'u",
  NU: 'kei',
  PA: 'boi',
  PEhO: "ku'e",
  SEI: "se'u",
  SOI: "se'u",
  TO: 'toi',
  TUhE: "tu'u",
  VEI: "ve'o",
  LOhAI: "sa'ai",
  SAhAI: "le'ai",
  LOhOI: "ku'au",
  NAhU: "te'u",
  NIhE: "te'u",
  MOhE: "te'u",
}
let resultCount
let results = []

//search after timeout
let typingTimer
//prepare:
let state = {
  searching: {
    seskari: 'cnano',
    versio: 'masno',
    query: '',
    bangu: 'en',
  },
  displaying: {
    seskari: 'cnano',
    versio: 'masno',
    query: '',
    bangu: 'en',
  },
  citri: [],
  jvoPlumbsOn: true
}
const loadingState = {
  loading: true,
  firstRun: true,
  mathRendered: false,
  localesLoaded: false,
}

try {
  const jvoPlumbsOn = localStorage.getItem('jvoPlumbsOn')
  if (jvoPlumbsOn === 'false') state.jvoPlumbsOn = false

} catch (error) { }

try {
  const tcini = JSON.parse(localStorage.getItem('tcini'))
  if (tcini && tcini.seskari) state.searching.seskari = tcini.seskari
  if (tcini && tcini.versio) state.searching.versio = tcini.versio
  // if (tcini.query) state.searching.query = tcini.query
  if (tcini && tcini.bangu) state.searching.bangu = tcini.bangu
} catch (error) { }

state.citri = macitri()

const timers = {
  vh: null,
  typing: null,
}

let scrollTimer = null
let scrollJvoTimer = null

const UNICODE_START = 0xed80
const lerfu_index = "ptkflscmx.' 1234bdgvrzjn`-,~    aeiouy    qw    AEIOUY"


//pronunciation guide
const rows = [
  ['p', 't', 'k', 'f', 's', 'c'],
  ['b', 'd', 'g', 'v', 'z', 'j'],
  ['m', 'l', 'n', 'r', , 'x', "'"],
  ['a', 'e', 'i', 'o', 'u', 'y'],
  [],
  ['aia', 'aua'],
  ['au', 'ai', 'ei', 'oi'],
]

let socket, socket1Chat, socket1Chat_connected
ciska.focus()

const pollyParams = {
  IdentityPoolId: 'us-east-1:35da84f8-d67e-4977-b07d-37650808ea00',
  region: 'us-east-1',
  VoiceId: 'Vicki',
  LanguageCode: 'de-DE',
  Engine: 'neural',
  lojban2IPAMapping: {
    '«': '',
    '-': '.',
    '»': '',
    '\\?': '',
    ',': '',
    '\\.': 'ʔ',
    ' ': ' ',
    ˈ: 'ˈ',
    a: 'aː',
    "a\\b(?!')": 'aː',
    e: 'ɛ:',
    "e\\b(?!')": 'ɛ:ʔ',
    i: 'i:',
    o: 'ɔ:',
    u: 'u:',
    y: 'ə',
    ą: 'aj',
    ę: 'ɛj',
    "ę\\b(?!')": 'ɛjʔ',
    ǫ: 'ɔj',
    ḁ: 'aʊ',
    ɩa: 'jaː',
    ɩe: 'jɛ:',
    ɩi: 'ji:',
    ɩo: 'jɔ:',
    ɩu: 'ju:',
    ɩy: 'jə',
    ɩ: 'j',
    wa: 'waː',
    we: 'wɛ:',
    wi: 'wi:',
    wo: 'wɔ:',
    wu: 'wu:',
    wy: 'wə',
    w: 'w',
    c: 'ʃ',
    j: 'ʒ',
    s: 's',
    z: 'z',
    f: 'f',
    ev: 'ɛ:ʔv',
    v: 'v',
    x: 'x',
    "'": 'h',
    dj: 'dʒ',
    tc: 'tʃ',
    dz: 'ʣ',
    ts: 'ʦ',
    'r(?=[^aeiouyḁąęǫ])': 'rr.',
    'r(?=[aeiouyḁąęǫ])': 'ɹ',
    n: 'n',
    m: 'm',
    l: 'l',
    b: 'b',
    d: 'd',
    g: 'g',
    k: 'k',
    p: 'p',
    t: 't',
    h: 'h'
  },
}
window.pollyParams = pollyParams

let audioParams
try {
  audioParams = JSON.parse(localStorage.getItem(`audioParams`))
} catch (error) { }


if (audioParams && audioParams.IdentityPoolId) {
  window.pollyParams = audioParams
} else {
  localStorage.setItem(`audioParams`, JSON.stringify(window.pollyParams))
}

window.delay = (() => (callback, ms, timer) => {
  clearTimeout(timers[timer])
  timers[timer] = setTimeout(callback, ms)
})()

//commands:

const worker = new Worker('worker.js?sisku=1643538368446')
initBackend(worker)

try {
  setStateFromUrl({
    replace: true,
  })
} catch (error) { }

RenderCitri()
calcVH()
let polly = PollyPlayer(window.pollyParams)
//listeners:
document.addEventListener('animationstart', listenToSearchRendered, false)
citri.addEventListener('click', clicked)//clicked link > push it
window.addEventListener('popstate', setStateFromUrl)//typed, stopped typing > push
ciska.addEventListener('paste', typing(0))
ciska.addEventListener('keyup', () => {
  typing()
})
ciska.addEventListener('keydown', () => {
  clearTimeout(typingTimer)
})
ciska.addEventListener('input', typing())
ciska.addEventListener('textInput', typing())
ciska.addEventListener('focus', focusSearch)//focus > push
clear.addEventListener('click', window.EmptyState)

rimni.addEventListener('click', () => {//change seskari
  setState({
    searching: {
      ...state.displaying,
      seskari: 'rimni',
      versio: 'masno',
      query: plukaquery(ciska.value),
    }
  });

  DispatchState({
    replace: false,
  })
})

document.getElementById('cnano').addEventListener('click', () => {
  setState({
    searching: {
      ...state.displaying,
      seskari: 'cnano',
      versio: 'masno',
      query: plukaquery(ciska.value),
    }
  });

  DispatchState({
    replace: false,
  })
})

document.getElementById('catni').addEventListener('click', () => {
  setState({
    searching: {
      ...state.displaying,
      seskari: 'catni',
      versio: 'masno',
      query: plukaquery(ciska.value),
    }
  });

  DispatchState({
    replace: false,
  })
})

window.addEventListener('resize', calcVH, true)
content.addEventListener('scroll', checkScrolledNearBottom)

if (document.attachEvent) {
  document.attachEvent('onkeyup', handler)
} else {
  document.addEventListener('keyup', handler)
}

window.applyNewPollyParams = function (input) {
  try {
    const json = {
      ...pollyParams,
      ...window.pollyParams,
      ...JSON.parse(input.value),
    }
    localStorage.setItem('audioParams', JSON.stringify(json))
    polly = PollyPlayer(json)
    localStorage.setItem('cachedAudio', null)
  } catch (error) { }
}

document.addEventListener('keyup', function (event) {
  if (event.ctrlKey && event.key === 'ArrowDown') {
    openModal({
      innerHTML: `
    <textarea id="modal__textarea" class="modal__textarea" name="textarea" rows="10" onkeyup = "window.applyNewPollyParams(this)">${JSON.stringify(
        window.pollyParams,
        null,
        2
      )
        }</textarea>
    <button onclick="resetAudioParams(document.getElementById('modal__textarea'))">Reset</button>
  `})
  }
}, false)

window.addEventListener('load', async () => {
  await getCache({ mode: "co'a" })
  // if (!cacheIsFine) return

  // if (window.crossOriginIsolated) {
  console.log({ crossOriginIsolated: window.crossOriginIsolated })
  //check if our db is filled
  worker.postMessage({
    kind: 'fancu',
    cmene: 'ningau_lesorcu',
    ...state.searching,
  })
  updateLocales()
  // }

  // jimpe fi le jei su'o cnino sorcu ka'e se pilno ca lo nu jai gau akti fai le cnino papri
  if ('serviceWorker' in navigator) {
    // navigator.serviceWorker.addEventListener('controllerchange',
    //   function () {
    //     if (window.refreshing) return;
    //     window.refreshing = true;
    //     setTimeout(() => {
    //       window.location.reload();
    //     }, 2000)
    //   }
    // );
    // navigator.serviceWorker.addEventListener('message', event => {
    //   if (event.data.event === 'loading cache') {
    //     console.log(event.data);

    //   }

    // });

    // navigator.serviceWorker.onmessage = function ({ data }) {
    //   console.log(data);

    // if (data && data.teminde && data.teminde === "co'a jmina le vreji") {
    //   console.log('updating cache started')
    // } else if (data && data.teminde && data.teminde === "mo'u jmina le vreji") {
    //   console.log('updating cache done')
    //   window.location.reload()
    //   // worker.postMessage({
    //   //   kind: 'fancu',
    //   //   cmene: 'ningau_lerosorcu',
    //   //   ...state.searching,
    //   // })
    // }
    // }
    //   navigator.serviceWorker.register('./sw.js', {
    //     scope: './'
    //   }).then(
    //     function (registration) {
    //       // console.log("COOP/COEP Service Worker registered", registration.scope);
    //       // // If the registration is active, but it's not controlling the page
    //       // if (registration.active && !navigator.serviceWorker.controller) {
    //       //   window.location.reload();
    //       // }
    //     },
    //     (err) => {
    //       console.log('ServiceWorker registration failed: ', err)
    //     }
    //   )
  } else if (location.protocol === 'https:') {
    alert(
      'Your browser is not supported. Please, upgrade to the latest Chrome / Firefox / Safari and don\'t use the app in incognito / private browsing mode (it needs to save dictionary data to disk to work successfully).'
    )
  } else {
    alert("HTTP protocol, la sutysisku won't work.")
    console.log("http protocol, service worker won't work")
  }
})

//functions:
function showLoaded() {
  loadingState.loading = false
  addAudioLinks()
  delete loadingState.resultsHash
  loading.style.display = 'none'
  document.getElementById('contentWrapper').style.paddingBottom = '0'
}

function showLoading({ completedRows, totalRows, bangu, hideProgress }) {
  loading.style.display = 'inline-flex'
  document.getElementById('contentWrapper').style.paddingBottom = '28px'
  const cpacu = document.getElementById('cpacu')
  if (hideProgress) {
    cpacu.style.display = 'none'
  } else {
    const percent = Math.min(
      100,
      Math.max(
        10,
        (parseFloat(completedRows) * 100) / parseFloat(totalRows)
      )
    )
    cpacu.style.display = 'block'
    pb.style.width = `${percent}%`
  }
  document.getElementById('bangu_loading').innerHTML = bangu
}

async function getCache({ mode }) {
  const cacheStorage = await caches.open(CACHE_NAME);
  const cachedList = await getCachedList();
  const initialCacheListLength = cachedList.length

  const response = await fetch(`/sutysisku/data/tcini.json?sisku=${new Date().getTime()}`)
  if (!response.ok) {
    if (initialCacheListLength === 0) alert("Are you offline? We can't fetch the source.")
    return false
  }
  const vreji = (await response.json()).vreji.map(v => new URL(v, window.location.origin + window.location.pathname).href)
  let cacheUpdated = false
  for (let i = 0; i < vreji.length; i++) {
    const url = vreji[i]
    if (mode === "co'a" && !/((\.(js|wasm|html|css))|\/)$/.test(url)) continue
    const cachedResponse = await cacheStorage.match(url);
    if (!cachedResponse) {
      await cacheStorage.add(url);
      cacheUpdated = true
      if (mode === "co'a") showLoading({ completedRows: i, totalRows: vreji.length, bangu: `📦 💾 📁 🛠️` })
    }
  }

  for (const key of cachedList) {
    if (!vreji.includes(key.url)) {
      await cacheStorage.delete(key.url, { ignoreMethod: true, ignoreVary: true });
      console.log({ event: 'removing cache', url: key.url });
    }
  }
  if (cacheUpdated) {
    for (const url of [new URL('', window.location.origin + window.location.pathname).href, new URL('index.html', window.location.origin + window.location.pathname).href]) {
      await cacheStorage.delete(url, { ignoreMethod: true, ignoreVary: true });
      await cacheStorage.add(url);
      console.log({ event: 'adding cache', url });
    }
  }
  showLoaded()
  if (mode === "co'a" && cacheUpdated) {
    window.location.reload()
  }
  //  else if (!window.crossOriginIsolated) {
  //   alert("la sutysisku will likely not work. Please, use Chrome/Chromium browser.")
  //   return false
  // }
  return true
}

async function getCachedList() {
  const cacheStorage = await caches.open(CACHE_NAME);
  return await cacheStorage.keys()
}


content.onscroll = () => {
  if (content.scrollTop > 200) {
    btnScrollToTop.style.display = 'block'
    btnScrollToTop.classList.remove('dizlo')
  } else {
    // btnScrollToTop.style.display = "none";
    btnScrollToTop.classList.add('dizlo')
  }
}

window.switchBorderScroll = () => {
  if (content.scrollTop > 200) {
    content.scrollTop = 0
  } else {
    content.scrollTop = content.scrollHeight
  }
}


function macitri() {
  let citri = []
  try {
    return JSON.parse(localStorage.getItem('citri')) || citri
  } catch (error) { }
  return citri
}

function RenderCitri() {
  if (state.citri.length > 0)
    citri.innerHTML = ` <span class="romoi_lehiseciska" data-jufra="window.purc">${window.purc || ''
      }</span>${state.citri
        .filter(({ seskari }) => seskari !== 'velcusku')
        .map(
          ({ seskari, versio, query, bangu }) =>
            `<a class="a-${versio !== 'masno' ? versio : seskari}" href="#seskari=${seskari}&versio=${versio}&sisku=${encodeUrl(
              query
            )}&bangu=${bangu}">${escHtml(query)}</a>`
        )
        .join(', ')}`
}

function RenderDasri({ seskari, sepia }) {
  const colors = ['velcusku', 'arxivo', 'cnano', 'rimni', 'catni', 'fanva']
  if (state.displaying.bangu === 'muplis') {
    document.getElementById('leitutci').style.display = 'none'
    document.body.className = "body-muplis"
  } else {
    document.getElementById('leitutci').style.display = 'flex'
    document.body.className = "body-sutysisku"
  }
  if (!colors.includes(seskari)) seskari = 'cnano'
  dasri.className = `kampu-dasri ${seskari}-dasri noselect`
  SiteTitleFull.classList.add(`${seskari}-search-mode-title-color`)
  SiteTitleFull.classList.remove('desktop-mode-title-color')
  if (document.getElementById(seskari))
    document
      .getElementById(seskari)
      .classList.add(`${seskari}-tutci-hover`, 'tutci-hover')
  colors.map((c) => {
    if (c !== seskari) {
      SiteTitleFull.classList.remove(`${c}-search-mode-title-color`)
      if (document.getElementById(c))
        document
          .getElementById(c)
          .classList.remove(`${c}-tutci-hover`, 'tutci-hover')
    }
  })
  if (sepia)
    for (let i = 0; i < SiteImage.length; i++) {
      SiteImage[i].style.filter = sepia
    }
}

function listenToSearchRendered(event) {
  if (event.animationName == 'nodeInserted') {
    if (loadingState.loading !== true) addAudioLinks()
    SwitchRotation({
      action: 'stop',
    })
  }
}

function SwitchRotation({ action, quick }) {
  if (document.readyState !== 'complete') return
  const els = ['logo']
  if (action === 'start') {
    els.map((el) => {
      document.getElementById(el).classList.remove('stopRotate')
      document.getElementById(el).classList.add('rotate')
    })
    clear.classList.add('pulsate-css')
    setTimeout(
      () => {
        if (clear.classList.contains('pulsate-css'))
          ciska.classList.add('granim-css')
      },
      quick ? 100 : 500
    )
  } else {
    els.map((el) => {
      document.getElementById(el).classList.add('stopRotate')
    })
    ciska.classList.remove('granim-css')
    clear.classList.remove('pulsate-css')
  }
}

function EmitVelcusku() {
  // if (socket1Chat) socket1Chat.open()
}

function renderMathAndPlumbs() {
  MathJax.typesetPromise().then(() => {
    addJvoPlumbs(true)
  })
}

const hashResults = ({ query, seskari, bangu, len }) =>
  `${query}${seskari}${bangu}${len}`

function RenderResults({ query, seskari, bangu, versio }) {
  if (loadingState.loading) {
    const currentHash = hashResults({
      query,
      seskari,
      bangu,
      len: results.length,
    })
    if (
      state.displaying.query !== '' &&
      loadingState.resultsHash === currentHash
    )
      return
    loadingState.resultsHash = currentHash
  }
  removePlumbs()
  window.jimte = seskari === 'velcusku' ? 201 : 30
  resultCount = 0
  outp.innerHTML = ''
  skicu_rolodovalsi({
    query,
    seskari,
    bangu,
    versio,
  })
  if (results.length === 0)
    SwitchRotation({
      action: 'stop',
    })
  setState({
    displaying: {
      ...state.displaying,
      query, versio, seskari, bangu
    }
  })
  outp.style.display = 'block'
  descr.style.display = 'none'
  drata.style.display = 'none'
  sidju.style.display = 'flex'
  content.scrollTop = 0
  switch (state.displaying.seskari) {
    case 'rimni':
      renderMathAndPlumbs()
      RenderDasri({ seskari: 'rimni', sepia: 'sepia(}1.0)' })
      break
    case 'arxivo':
      RenderDasri({ seskari: 'arxivo', sepia: 'none' })
      break
    case 'velcusku':
      RenderDasri({ seskari: 'velcusku', sepia: 'none' })
      break
    case 'catni':
      renderMathAndPlumbs()
      RenderDasri({ seskari: 'catni', sepia: 'none' })
      break
    case 'fanva':
      renderMathAndPlumbs()
      RenderDasri({ seskari: 'fanva', sepia: 'none' })
      break
    case 'cnano':
    default:
      renderMathAndPlumbs()
      RenderDasri({ seskari: 'cnano', sepia: 'none' })
  }


  //todo: arrpurc or state.history
  DispatchCitri()

  gtag('event', 'page_view'
    , {
      page_title: state.displaying.query,
      page_location: `#sisku/${state.displaying.query}`,
      page_path: `#sisku/${state.displaying.query}`,
      send_to: `UA-45171210-6`
    }
  )
  const pageViewData = {
    dl: window.location.href,
    dt: document.title,
    dr: document.referrer,
    dp: `#sisku/${state.displaying.query}`,
    dh: `${window.location.protocol}//${window.location.hostname}`,
    z: Math.round(Math.random() * 1e12),
  }
  if (socket) socket.emit('sisku', pageViewData)

}

function removePlumbs() {
  ;[].forEach.call(document.querySelectorAll('.leader-line'), function (element) {
    element.parentNode.removeChild(element)
  })
}

function appendPlumbs() {
  ;[].forEach.call(document.querySelectorAll('.leader-line'), function (element) {
    content.appendChild(element)
  })
}

function setNewState(key, value) {
  state[key] = value
  localStorage.setItem(key, value)
}

function addJvoPlumbs(force) {
  scrollJvoTimer = setTimeout(
    () => {
      removePlumbs()
      addPlumbs()
      if (force !== true) {
        setNewState("jvoPlumbsOn", !state.jvoPlumbsOn)
        const plumbers = document.getElementsByClassName('jvo_plumber')
        for (const plumber of plumbers) {
          state.jvoPlumbsOn
            ? plumber.classList.add('tutci-hover')
            : plumber.classList.remove('tutci-hover')
        }
      }
      if (!state.jvoPlumbsOn) return
      const targetedEls = Array.from(document.querySelectorAll('[data-arr]'))
      for (let targetedElIndex = 0; targetedElIndex < targetedEls.length; targetedElIndex++) {
        const target = targetedEls[targetedElIndex]
        const target_id = target.id
        const targetVeljvoElements = target.attributes['data-arr'].nodeValue.split(',')
        const targetIdComponents = target.id.split('_')
        const targetFinalIndex = targetIdComponents.slice(0, -1)
        const WeCanSeeThisElement = kahe_sezgana(target)
        targetedEls.filter((startElement) => {
          const startElIdComponents = startElement.id.split('_')
          const startElFinalIndexes = startElIdComponents.slice(0, -2)
          const startElVeljvoElements = startElement.attributes['data-arr'].nodeValue.split(',')
          const startVeljvoElementComponents = startElVeljvoElements[0].split(/(?=[0-9]+)/)
          if (
            startElVeljvoElements.length === 1 &&
            startElFinalIndexes.length === targetFinalIndex.length &&
            startElFinalIndexes.join('_') === targetFinalIndex.join('_') &&
            targetVeljvoElements.filter((targetVeljvoElement) => {
              const targetVeljvoElementComponents = targetVeljvoElement.split(/(?=[0-9])/)
              return startVeljvoElementComponents[0].indexOf(targetVeljvoElementComponents[0]) === 0 && startVeljvoElementComponents[1] === targetVeljvoElementComponents[1]
            }).length > 0 &&
            (WeCanSeeThisElement || kahe_sezgana(startElement))
          ) {
            let color = startElement.attributes['data-color'].nodeValue
            color = `hsla(${color},100%,70%,0.62)`
              ; new LeaderLine(
                document.getElementById(startElement.id),
                document.getElementById(target_id),
                {
                  endPlugColor: color,
                  color: color,
                  dash: { animation: true },
                  startSocketGravity: [50, -67],
                  endSocketGravity: [0, 67],
                  endPlug: 'arrow2',
                  endSocket: 'bottom',
                  size: 3,
                }
              )
          }
        })

        appendPlumbs()
      }
    },
    force === true ? 450 : 0
  )
}

function addPlumbs() {
  //plumbs for in-terbri interactions
  const targetedEls = document.querySelectorAll('[data-target]')
  for (let i = 0; i < targetedEls.length; i++) {
    const target = targetedEls[i]
    if (kahe_sezgana(target)) {
      const target_id = target.id
      const start = target.attributes['data-target'].nodeValue
      let color = document.getElementById(start).attributes['data-color'].nodeValue
      color = `hsla(${color},100%,70%,0.62)`
        ; new LeaderLine(
          document.getElementById(start),
          document.getElementById(target_id),
          {
            // gradient: {
            //   startColor: 'rgba(135, 0, 0, 0.4)',
            //   endColor: 'rgba(255, 120, 0, 0.4)',
            // },
            endPlugColor: color,
            color: color,
            dash: { animation: true },
            // outlineColor: '#111',
            // outline: true,
            startSocketGravity: [50, -67],
            endSocketGravity: [0, 67],
            endPlug: 'arrow2',
            // startSocket: 'top',
            endSocket: 'bottom',
            size: 3,
          }
        )
    }
  }
  appendPlumbs()
}

function kahe_sezgana(el) {
  const rect = el.getBoundingClientRect()
  return rect.top >= 42 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}

function twoJsonsAreEqual(obj1 = {}, obj2 = {}) {
  let flag = true

  if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (const key in obj1) {
      if (obj1[key] == obj2[key]) {
        continue
      } else {
        flag = false
        break
      }
    }
  } else {
    flag = false
  }
  return flag
}
//listeners
worker.onmessage = (ev) => {
  const { data } = ev
  const { kind, cmene } = data
  if (kind == 'searchResults') {
    delete loadingState.searching
    if (!data.force && !twoJsonsAreEqual(data.req, state.searching)) return
    results = data.results || []
    if (data.lei_jufra_absent) {
      updateDOMWithLocales({ window: data.leijufra }, {
        ...state.searching,
        ...data.datni,
      })
    }
    RenderResults({
      ...data.req,
    })
  } else if (kind == 'parse' && data.req && data.req.operation == 'audioLink') {
    let word = (data.req.tegerna || '').replace(/"/g, '')
    if (!word) return
    const encodedWord = encodeValsiForWeb(word)
    data.results = data.results.map((i) => [i[0], i[1].replace(/-/g, '')])
    const isReliableText = allAreSafeWords(data.results, {
      queryLanguage: data.req.queryLanguage,
      allowCmavo: true,
      allowCmevla: true,
    })

    if (!isReliableText) return
    word = data.results.map((i) => i[1]).join(' ')

    const hd = Array.from(
      document.querySelectorAll(`[data-valsi="${encodedWord}"]`)
    )[0]
    const hd2 = Array.from(
      document.querySelectorAll(`[data-valsi-play="${encodedWord}"]`)
    )[0]
    if (hd && !hd2) {
      try {
        const gotAudio = window.runSpeakableAudio(word, true, data.req.queryLanguage)
        if (gotAudio) hd.insertAdjacentHTML(
          'afterend',
          `<button class="tutci sance" data-valsi-play="${encodedWord}" onclick="window.runSpeakableAudio(&quot;${word}&quot;)">▶</button>`
        )
      } catch (error) {

      }
    }
  } else if (kind == 'loader') {
    if (cmene === 'loading') {
      if (
        data.banguRaw === state.searching.bangu ||
        data.completedRows === 0 ||
        data.completedRows === data.totalRows
      ) {
        if (
          data.completedRows === data.totalRows ||
          !twoJsonsAreEqual(loadingState.searching, state.searching)
        ) {
          loadingState.searching = state.searching
          loadingState.loading = true
          worker.postMessage({
            kind: 'newSearch',
            versio: 'masno',
            ...state.searching,
            leijufra: window.leijufra,
            loadingState,
          })
        }
      }
      showLoading({ completedRows: data.completedRows, totalRows: data.totalRows, bangu: "🗃️ " + data.bangu })
    } else if (cmene === 'loaded') {
      showLoaded()
      getCache({ mode: "ca'o" })
    } else if (cmene === 'booting') {
      showLoading({ completedRows: 1, totalRows: 3, bangu: "🗃️ " + (window.booting || '') })
    }
    calcVH()
  } else if (kind == 'fancu') {
    switch (cmene) {
      case 'sanji_letejufra':
        updateDOMWithLocales(data.results, {
          ...state.searching,
          ...data.datni,
        })
        break
    }
  }
}
if (socket)
  socket.on('la_arxivo_cu_cusku', ({ seskari, query, message }) => {
    if (
      state.searching.seskari === seskari &&
      state.searching.query === query
    ) {
      results = message || []
      RenderResults({
        query: query,
        seskari: seskari,
      })
    }
  })

//loaded doc > from url > push new seskari/query, update url
//get events:
function parseQuery(queryString) {
  if (queryString === '') return
  const query = {}
  let pairs = ''
  //legacy support:
  if (queryString.search(/^#sisku\//) === 0) {
    pairs = [queryString.replace(/#sisku\/(.*)/, 'sisku=$1')]
  } else {
    pairs = (
      queryString[0] === '#' ? queryString.substr(1) : queryString
    ).split('&')
  }
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=')
    if (pair[1])
      query[decodeURIComponent(pair[0])] = decodeURIComponent(
        pair[1].replace(/[\+]/g, ' ') || ''
      )
  }
  return query
}

function setStateFromUrl({ href, replace }) {
  if (href) {
    href = href.substring(href.indexOf('#') + 1)
    localStorage.setItem('url', `#${href}`)
  }
  let params = parseQuery(href || window.location.hash) || {}
  let newSearch
  if (params && params['sisku']) {
    newSearch = decodeUrl(params['sisku'])
  } else {
    href = href || window.location.search
    href = href.substring(href.indexOf('?') + 1)
    const search = new URLSearchParams(href)
    newSearch = decodeUrl(search.get('focus') || '')
    if (newSearch) {
      params = { sisku: newSearch, seskari: 'cnano' }
    }
  }
  const stateToUpdate = { ...state.searching }
  if (
    params['seskari'] &&
    ['velcusku', 'cnano', 'catni', 'rimni', 'arxivo', 'fanva'].includes(
      params['seskari']
    )
  ) {
    stateToUpdate.seskari = params['seskari']
  }
  stateToUpdate.versio = 'masno'
  if (params['versio'] && ['selmaho'].includes(params['versio'])) {
    stateToUpdate.versio = params['versio']
  }
  if (
    params['bangu'] &&
    Object.keys(supportedLangs).includes(params['bangu'])
  ) {
    stateToUpdate.bangu = params['bangu']
  }
  if (params['sisku']) {
    stateToUpdate.query = newSearch
  }
  if (!twoJsonsAreEqual(stateToUpdate, state.searching)) {
    state.searching = { ...state.searching, ...stateToUpdate }
    DispatchState({
      replace,
    })
  }
}

function clicked({ target }) {
  if (target.nodeName === 'A') {
    const el = target
    if (el.ctrlKey || el.metaKey) return
    setStateFromUrl({
      replace: false,
      href: el.getAttribute('href'),
    })
  }
  return
}

function setUrlFromState({ replace }) {
  let versio = ''
  if (state.searching.versio) {
    versio = `&versio=${state.searching.versio}`
  }
  let url = `${window.location.href.split('?')[0].split('#')[0]}#seskari=${state.searching.seskari
    }&sisku=${encodeUrl(state.searching.query)}&bangu=${state.searching.bangu
    }${versio}`
  if (state.searching.query === '') {
    url = ''
    document.title = 'la sutysisku'
  } else {
    document.title = `${state.searching.query} - la sutysisku`
  }
  const lastUrl = localStorage.getItem('url') || ''
  if (replace === true) {
    window.history.replaceState({}, null, url)
  } else if (window.location.hash !== url && lastUrl !== url) {
    window.history.pushState({}, null, url)
  }
  localStorage.setItem('url', url)
}

function GetCiskaAndDispatch() {
  state.searching.query = plukaquery(ciska.value)
  // state.searching.versio = 'masno'
  DispatchState({
    caller: 'GetCiskaAndDispatch',
  })
}

function typing(timeout) {
  clearTimeout(typingTimer)
  const defaultTimeout = 250
  if (state.searching.bangu === 'muplis') timeout = 500
  if (state.searching.versio === 'selmaho') state.searching = { ...state.searching, seskari: 'catni', versio: 'masno' }
  typingTimer = setTimeout(GetCiskaAndDispatch, timeout ? timeout : defaultTimeout)
}


function focusSearch() {
  // if (loadingState.firstRun) {
  //   loadingState.firstRun = false
  //   return
  // }
  state.searching.query = plukaquery(ciska.value)
  DispatchState({ quickRotation: true })
}

window.EmptyState = (bangu) => {
  ciska.blur();
  if (typeof bangu === 'string') {
    state.searching.bangu = bangu
    updateLocales()
  }
  DispatchState({
    empty: true,
  })
  if (state.ninynaha) {
    try { document.getElementById("pyro").remove(); } catch (error) { }
    if (Math.random() > 0.618) {
      SiteTitleFull.insertAdjacentHTML('afterend', '<div id="pyro" class="pyro"></div>');
      setTimeout(() => {
        try { document.getElementById("pyro").remove(); } catch (error) { }
      }, 3000)
    }
  }
}

document.getElementById("report_feedback_main").addEventListener("click", function () {
  window.tmp_value = state.displaying;
  openModal({
    innerHTML: `
        <h2>${window.report_feedback}</h2>
        <h3 class="valsi">${state.displaying.query}</h3>
        <h4 class="valsi">${supportedLangs[state.displaying.bangu].n}</h4>
        <textarea id="modal__textarea" class="modal__textarea" row="10" placeholder="${window.report_feedback_description}"></textarea>
        <button class="tutci feedback" onclick="this.firstElementChild.classList.remove('d-none');window.send_feedback({state: window.tmp_value, comment: document.getElementById('modal__textarea').value})"><div class="spinner d-none"></div>${window.report_feedback}</button>
  `})
})
// document.getElementById("arxivo").addEventListener("click", function () {
//   state.searching = {
//     seskari: "arxivo",
//     query: plukaquery(ciska.value)
//   };
//   DispatchState({
//     replace: false
//   });
// });

// document.getElementById("velcusku").addEventListener("click", function () {
//   state.searching = {
//     seskari: "velcusku",
//     query: plukaquery(ciska.value)
//   };
//   DispatchState({
//     replace: false
//   });
// });

function DispatchCitri() {
  if (
    ['fanva', 'velcusku'].includes(state.displaying.seskari) ||
    state.displaying.query === ''
  )
    return
  let i = 0
  for (i = 0; i < state.citri.length; i++) {
    if (
      state.citri[i].query === state.displaying.query &&
      state.citri[i].seskari === state.displaying.seskari
    ) {
      state.citri.splice(i, 1)
      break
    }
  }
  state.citri.unshift({ ...state.displaying })
  if (state.citri.length > 10) state.citri.length = 10
  localStorage.setItem('citri', JSON.stringify(state.citri))
  RenderCitri()
}
//Dispatch State
function mergeJSONs(a, b) {
  return Object.entries(b).reduce((o, [k, v]) => {
    o[k] = v && typeof v === 'object'
      ? mergeJSONs(o[k] = o[k] || (Array.isArray(v) ? [] : {}), v)
      : v;
    return o;
  }, a);
}

function setState(newState) {
  state = mergeJSONs(state, newState)
}

function DispatchState({ replace, caller, empty, quickRotation }) {
  updateLocales()
  // if (socket1Chat) socket1Chat.close()
  state.searching.query = state.searching.query
  setUrlFromState({
    replace,
  })
  localStorage.setItem('tcini', JSON.stringify(state.searching))
  if (empty == true) {
    state.searching.query = ''
    return RenderDesktop()
  } else if (state.searching.seskari !== 'velcusku') {
    if (state.searching.query === '') return RenderDesktop()
    if (twoJsonsAreEqual(state.searching, state.displaying)) return
  }
  //emit search
  ciska.value = state.searching.query

  SwitchRotation({
    action: 'start',
    quick: quickRotation,
  })
  if (
    caller === 'GetCiskaAndDispatch' &&
    state.searching.seskari === 'velcusku'
  )
    state.searching.seskari = 'cnano'
  switch (state.searching.seskari) {
    case 'arxivo':
      const json = { ...state.searching }
      if (
        state.searching.query.charAt(0) !== '^' &&
        state.searching.query.slice(-1)[0] !== '$'
      )
        json.query = `\\b${state.searching.query}\\b`
      json.max = 20
      if (socket) socket.emit('cpedu_fi_la_arxivo', json)
      break
    case 'velcusku':
      EmitVelcusku()
      break
    default:
      if (loadingState.loading)
        worker.postMessage({
          kind: 'fancu',
          cmene: 'cnino_bangu',
          ...state.searching,
        })
      worker.postMessage({
        kind: 'newSearch',
        versio: 'masno',
        ...state.searching,
        leijufra: window.leijufra,
        loadingState,
      })
  }
}

function updateDOMWithLocales(jufra, miniState) {
  if (!jufra.window) return
  loadingState.localesLoaded = true
  for (const key in jufra.window) {
    const subKey = key.replace('window.', '')
    window.leijufra[subKey] = window[subKey] = jufra.window[key]
  }

  Array.from(document.querySelectorAll('[data-jufra]')).forEach((node) => {
    const key = node.attributes['data-jufra'].nodeValue
    let val = jufra[key]
    if (key.indexOf('window.') === 0) {
      val = jufra.window[key]
      const subKey = key.replace('window.', '')
      window[subKey] = jufra.window[key]
    }
    switch (node.nodeName) {
      case 'INPUT':
        node.placeholder = val || node.placeholder
        break
      default:
        node.innerHTML = val || node.innerHTML
    }
  })
  SiteTitleFull = document.querySelector('#site-title')
  // RenderDasri({ ...miniState, sepia: 'none' })
  if (state.displaying.query === '') RenderDesktop(miniState)
  const velsku = document.getElementById('velsku_sebenji')
  if (velsku)
    velsku.href = `#seskari=cnano&sisku=lai jbosnu&bangu=${getStateBangu()}&versio=masno`
}

function updateLocales(force) {
  if ((state.searching.bangu && state.searching.bangu !== state.displaying.bangu) || !loadingState.localesLoaded || force)
    worker.postMessage({ kind: 'fancu', cmene: 'sanji_letejufra', ...state.searching })
}

//rendering
function RenderDesktop(tempState) {
  if (!tempState)
    SwitchRotation({
      action: 'stop',
    })
  tempState = tempState || state.displaying
  removePlumbs()
  content.scrollTop = 0
  const lastQuery = tempState.query
  setState({ displaying: { query: '' } })
  // ciska.value = "";
  SiteTitleFull.classList.add('desktop-mode-title-color')
  SiteTitleFull.classList.remove(
    'catni-search-mode-title-color',
    'cnano-search-mode-title-color',
    'velcusku-search-mode-title-color',
    'rimni-search-mode-title-color',
    'fanva-search-mode-title-color',
    'arxivo-search-mode-title-color'
  )
  try {
    catni.classList.remove('catni-tutci-hover', 'tutci-hover')
  } catch (error) { }
  try {
    cnano.classList.remove('cnano-tutci-hover', 'tutci-hover')
  } catch (error) { }
  try {
    rimni.classList.remove('rimni-tutci-hover', 'tutci-hover')
  } catch (error) { }
  // velcusku.classList.remove("velcusku-tutci-hover", "tutci-hover");
  // arxivo.classList.remove("arxivo-tutci-hover", "tutci-hover");
  dasri.className = 'kampu-dasri cnano-dasri'
  outp.style.display = 'none'
  descr.style.display = 'block'
  const cisn_default = 100
  const links = window.leijufra.custom_links.concat([
    'hr',
    { en: { title: 'English-Lojban', picture: '../pixra/selsku_lanci_eng.svg' } },
    { jbo: { title: "fanva fi le'e lojbo ri", picture: '../pixra/lanci_jbo.svg' } },
    {
      ja: {
        title: '日本 - <span style="white-space:pre;">ロジバン</span>',
        picture: '../pixra/selsku_lanci_jpn.svg',
      }
    },
    {
      'fr-facile': {
        title: 'français facile - lojban',
        picture: '../pixra/selsku_lanci_fra.svg',
      }
    },
    { ru: { title: 'русский - ложбан', picture: '../pixra/selsku_lanci_rus.svg' } },
    { eo: { title: 'Esperanto - Loĵbano', picture: '../pixra/lanci_epo.svg' } },
    { es: { title: 'español - lojban', picture: '../pixra/selsku_lanci_spa.svg' } },
    { zh: { title: '中文 - 逻辑语', picture: '../pixra/selsku_lanci_zho.svg' } },
    { loglan: { title: 'Loglan', picture: '../pixra/loglan.png' } }
  ])
    .map(elem => {
      if (typeof elem === 'string') return '<div></div>'
      const name = Object.keys(elem)[0]
      if (!elem[name].url) {
        elem[name].url = `#seskari=${(tempState.seskari !== 'fanva' && name.indexOf("muplis") !== 0) ? tempState.seskari : 'catni'
          }&sisku=${encodeUrl(lastQuery)}&bangu=${name}&versio=masno`
      }
      else {
        elem[name].url = elem[name].url.replace(/{lastQuery}/g, encodeUrl(lastQuery));
      }
      elem.name = name
      elem = elem[name]
      //
      let { title, picture, url, width, height } = elem
      if (!width) width = 1
      height = (height || 1) * cisn_default
      return `
      <div class='DIV_1' style='height:${height}px;width:${width * cisn_default
        }px;'>
        <div class='DIV_2' style='height:${height}px;width:${width * cisn_default
        }px;'>
          <span class='SPAN_3' style='width:auto;'>
            <b class='B_4'>${title}</b>
          </span>
          <a${(url || '').indexOf('http') === 0
          ? " rel='noreferrer' target='_blank'"
          : ''
        } aria-label="${title.replace(/<[^>]+?>/g, '')}" onclick="window.ningau_lepasorcu('${url}','${name}')" href="${url}" class='A_7'>
          <div class='DIV_8' style='background-image:url(${picture})'>
          </div>
          </a>
        </div>
      </div>`
    });
  drata.innerHTML = links.filter(Boolean).join("")
  drata.style.display = 'block'
}

function handler({ keyCode }) {
  if (keyCode && keyCode === 191) ciska.focus()
}
if (document.readyState === 'loading') {
  pb.style.width = '37%'
  document.title = 'la sutysisku'
}

function calcVH() {
  const { clientHeight: dasriHeight } =
    document.getElementById('galtu-dasri')
  const { clientHeight: loadingHeight } = document.getElementById('loading')
  const { clientHeight: velskuHeight } = document.getElementById('velsku')
  content.setAttribute(
    'style',
    `height:${Math.max(
      document.documentElement.clientHeight -
      dasriHeight -
      loadingHeight -
      velskuHeight,
      window.innerHeight - dasriHeight - loadingHeight - velskuHeight,
      50
    )}px;`
  )

}


// function getCLLSections(te_gerna) {
//   let a = window.arrcll[te_gerna]
//   if (!a) {
//     te_gerna = te_gerna.replace(/[^A-Z]+$/, '')
//     if (te_gerna === '') return
//     a = window.arrcll[te_gerna]
//   }
//   return a
// }

// function CLL({ pre, valsi }) {
//   if (!window.cll_url | ((window.arrcll || []).length === 0)) return {}
//   if (pre && !valsi.match(/^[A-Zh]+[\+A-Zh0-9]*$/)) return {}
//   const secs = getCLLSections(valsi)
//   if (!secs) return {}
//   const cllHtmlLinksString = `${
//     window.cllnotci
//   }<ul class='uoldeliste'>${Object.keys(secs)
//     .map(
//       (sec) =>
//         `<li><a rel='noreferrer' target='_blank' href="${
//           window.cll_url
//         }${sec}">${escHtml(secs[sec])}</a></li>`
//     )
//     .join('')}</ul>`
//   const div = document.createElement('div')
//   div.className = `${pre ? 'sidju' : 'definition'} cll noselect`
//   div.innerHTML = cllHtmlLinksString
//   return { secs, div }
// }



function checkScrolledNearBottom({ target }) {
  removePlumbs()
  if (scrollTimer !== null) {
    clearTimeout(scrollTimer)
  }
  if (scrollJvoTimer !== null) {
    clearTimeout(scrollJvoTimer)
  }
  if (
    state.displaying.seskari !== 'velcusku' &&
    target.scrollTop + window.innerHeight >= outp.clientHeight - 700
  ) {
    window.jimte += 10
    skicu_rolodovalsi(state.displaying)
    MathJax.typesetPromise().then(() => {
      addJvoPlumbs(true)
    })
  } else {
    addJvoPlumbs(true)
  }
  addAudioLinks()
}

const number2ColorHue = (number) => Math.floor((number * 360 / 7.618) % 360);

const bgString2Int = (number, { s = '90%', l = '80%' }) => `hsl(${number2ColorHue(number)},${s},${l})`

function placeTagHasExpansion(v) {
  v = v.substr(1, v.length - 2).split('=')
  const jalge = v.map((i) => i.replace(/[^A-Za-z']/g, ''))
  return v.length > 1 || (jalge[0] && jalge[0] !== 'x')
}

function getVeljvoString({ placeTag, fullDef, isHead, dataArrAdded, clearedPlaceTag }) {
  if (isHead && fullDef.t !== 'lujvo') return { dataArr: false, replacement: placeTag, stringifiedPlaceTag: placeTag }
  const rfsWords = (fullDef.rfs || []).map(i => i.w)
  const arrayPlaceTags = placeTag
    .substr(1, placeTag.length - 2)
    .split('=')
    .map((i) => {
      const arrayTag = i.split(/(?=[_0-9].*)/)
      const candidateWord = rfsWords.filter(word => word.indexOf(arrayTag[0]) === 0)[0]
      return {
        full: isHead ? candidateWord || arrayTag[0] : fullDef.w,
        number: arrayTag.slice(1).join(""),
        short: isHead ? arrayTag[0] : fullDef.w,
        hasMatchInRFS: !!candidateWord
      }
    })
  const stringifiedPlaceTag = arrayPlaceTags.filter(i => i.hasMatchInRFS || !isHead).map(i => i.full + i.number.replace(/[_\{\}]/g, '')).join(',') || clearedPlaceTag
  const replacingPlaceTag = arrayPlaceTags.map(i => i.full + i.number).join("=")
  return { stringifiedPlaceTag, dataArr: !dataArrAdded.includes(clearedPlaceTag), replacement: `$${replacingPlaceTag}$` }
}

function melbi_uenzi({ def, fullDef, query, seskari, versio, bangu, type, index, stringifiedPlaceTags }) {
  if (fullDef) {
    if (fullDef.bangu.indexOf('-cll') >= 0) {
      const url = window?.leijufra?.custom_links?.filter(i => !!i.uncll)?.[0]?.uncll?.url || '/';
      const d = Object.keys(def)
        .map((address) => {
          const velcki = def[address]
          return `<li><a rel='noreferrer' target='_blank' href="${url}${address}">${velcki}</a></li>`
        })
        .join('')
      return {
        tergeha: `<ul class='uoldeliste' style="list-style-image: url(../pixra/cukta.svg);">${d}</ul>`,
        hasExpansion: false,
      }
    } else if (fullDef.bangu.indexOf('-ll') >= 0) {
      const url = window?.leijufra?.custom_links?.filter(i => !!i.introbook)?.[0]?.introbook?.url || '/';
      const d = Object.keys(def)
        .map((address) => {
          const velcki = def[address]
          return `<li><a rel='noreferrer' target='_blank' href="${url}${address}">${velcki}</a></li>`
        })
        .join('')
      return {
        tergeha: `<ul class='uoldeliste' style="list-style-image: url(../pixra/certu.svg);">${d}</ul>`,
        hasExpansion: false,
      }
    }
  }

  const hasHtml = /<\/?a [\s\S]*>/i.test(def)
  let iterTerbricmiId = 0
  const jsonIds = []
  const dataArrAdded = []
  let hasExpansion = false
  if (!['cnano', 'catni', 'rimni'].includes(seskari)) seskari = 'cnano'

  const placeTags = def.match(/\$.*?\$/g) || []
  for (const placeTag of placeTags)
    if (type === 'd' && typeof index !== 'undefined' && placeTagHasExpansion(placeTag)) hasExpansion = true

  let jalge = def
    .replace(/\$=\$/g, `$<span class="veljvocmiterjonmaho">=</span>$`)
    .replace(/\$.*?\$/g, (placeTag) => {
      iterTerbricmiId++
      const combInd = `${index}_${iterTerbricmiId}`

      if (type === 'd') jsonIds.push({ [placeTag]: combInd })
      const clearedPlaceTag = placeTag.replace(/[^a-zA-Z0-9]/g, '')
      const isHead = fullDef && (fullDef.rfs || []).length > 0 ? true : false

      const objectVeljvoReplacement = getVeljvoString({
        isHead,
        placeTag,
        fullDef,
        dataArrAdded,
        clearedPlaceTag,
      })
      const stringifiedPlaceTag = objectVeljvoReplacement.stringifiedPlaceTag
      if (!stringifiedPlaceTags.includes(stringifiedPlaceTag)) stringifiedPlaceTags.push(stringifiedPlaceTag)
      const number = stringifiedPlaceTags.indexOf(stringifiedPlaceTag)
      const replacementTag = isHead ? objectVeljvoReplacement.replacement : placeTag;
      const gradient = bgString2Int(number, { s: '90%', l: '100%' });
      const gradientBorder = bgString2Int(number, { s: '100%', l: '40%' });
      // dataArrAdded.push(clearedPlaceTag)
      const span = document.createElement('span')
      if (type === 'd') span.id = combInd
      span.classList.add("terbricmi")
      const background = `repeating-linear-gradient(to right,${gradient},${gradient} 100%) content-box content-box, linear-gradient(90deg, ${gradientBorder},${gradientBorder} 100%) padding-box padding-box`
      span.setAttribute("style", `background: ${background};`)
      if (objectVeljvoReplacement.dataArr && (type === 'd')) span.setAttribute("data-arr", stringifiedPlaceTag)
      if (!isHead) span.setAttribute("data-color", number2ColorHue(number, 256, 32))
      span.innerHTML = replacementTag.replace(/\{/g, '\\curlyleft').replace(/\}/g, '\\curlyright').replace(/^<span /, `<span `)
      return span.outerHTML
    })
    .replace(
      /(<span [^<>]+?>[^\(\)<>]+?<\/span>) \([^\(\)<>]*?\bproperty of <span id="([^\(\)<>]+?)"[^<>]+?>([^\(\)<>]+?)<\/span>\)/g,
      (c, _, id, t) => {
        if (type === 'd') {
          const a = jsonIds.filter((e) => e[t] !== id && e[t])
          if (a[0] && a[0][t])
            c = c.replace(/^<span /, `<span data-target="${a[0][t]}" `)
        }
        return c
      }
    )
  if (!hasHtml)
    jalge = jalge.replace(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
      (c) => {
        let res = `</span><a href="${c}" rel="noreferrer" target="_blank">${basna(
          {
            def: c,
            query,
          }
        )}</a><span>`
        if (c.match(/^https?:\/\/.*\.(jpg|png)$/))
          res += `<img class='se-tcidu-pixra' alt='secusku' src="${c}"/>\n`
        return res
      }
    )
  jalge = jalge
    .replace(/\{.*?\}/g, (c) => {
      c = c.substring(1, c.length - 1)
      return `</span><a class="a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
        c
      )}&bangu=${bangu}&versio=masno">${basna({
        def: escHtml(c, true),
        query,
      })}</a><span>`
    })
    .replace(/\$.*?\$/g, (c) =>
      c.replace(/\\curlyleft/g, '{').replace(/\\curlyright/g, '}')
    )
  jalge = `<span>${jalge}</span>`
  jalge = jalge
    .replace(/<span><\/span>/g, '')
    .replace(/(>[^<>$]+<|>[^<>$]+\$|\$[^<>$]+<)/g, (c) =>
      basna({
        def: c,
        query,
      })
    )
    .replace(/\n/g, '<br/>')
  //todo: list of placetags
  return { tergeha: jalge, hasExpansion, stringifiedPlaceTags }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function basna({ def, query }) {
  if (!query || query.length <= 2) return def
  query = query.trim().replace(/[\|\(\)\{\}<>]/g, '.')
  let wordsToHilite = escapeRegExp(query).split(" ").filter(i => i.length > 2).concat(escapeRegExp(query.replace(/'/g, 'h')).split(" ").filter(i => i.length > 2))
  if (wordsToHilite.length === 0) return def;

  const regexpToHilite = `(${wordsToHilite.join("|")})`
  return def.replace(new RegExp(regexpToHilite, 'igm'), "<span class='basna'>$1</span>")
}


function krulermorna(text) {
  return text
    .replace(/\./g, '')
    .replace(/^/, '.')
    .toLowerCase()
    .replace(/([aeiou\.])u([aeiou])/g, '$1w$2')
    .replace(/([aeiou\.])i([aeiou])/g, '$1ɩ$2')
    .replace(/au/g, 'ḁ')
    .replace(/ai/g, 'ą')
    .replace(/ei/g, 'ę')
    .replace(/oi/g, 'ǫ')
    .replace(/\./g, '')
}
function cohukrulermorna(text) {
  return text
    .replace(/w/g, 'u')
    .replace(/ɩ/g, 'i')
    .replace(/ḁ/g, 'au')
    .replace(/ą/g, 'ai')
    .replace(/ę/g, 'ei')
    .replace(/ǫ/g, 'oi')
}

function zbalermornaize({ w, ot, rfs }) {
  let word = krulermorna(w)
  word = word
    .split(/(?=[ɩw])/)
    .map((spisa) =>
      cohukrulermorna(spisa)
        .split('')
        .map((lerfu) => latinToZbalermorna(lerfu))
        .join('')
    )
    .join('')
  return word.replace(/,/g, '')
}

function latinToZbalermorna(c) {
  if (c.codePointAt(0) >= 0xed80) {
    return c
  }
  if (c == ' ') return ' '
  if (c == 'h' || c == 'H') c = "'"
  if (lerfu_index.includes(c))
    return String.fromCodePoint(UNICODE_START + lerfu_index.indexOf(c))
  else if (lerfu_index.includes(c.toLowerCase()))
    return String.fromCodePoint(
      UNICODE_START + lerfu_index.indexOf(c.toLowerCase())
    )
  if (c == '\n') return '\n'
  if (c == '\t') return '\t'
  return c
}


function getMatchIndices(query, d) {
  const regex = new RegExp(query, 'g')
  const result = []
  let match
  while ((match = regex.exec(d))) result.push(match.index)
  return result
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

function ConstructArxivoValsiExtract(d, query, range) {
  let locs = getMatchIndices(query, d)
  locs = locs.map((i) => {
    i = [i - range, i + range]
    if (i[0] < 0) i[0] = 0
    if (i[0] >= d.length) i[0] = d.length - 1
    return i
  })
  for (let i = 0; i < locs.length - 1; i++) {
    if (locs[i][1] > locs[i + 1][0]) {
      locs[i][1] = locs[i + 1][1]
      locs[i + 1][0] = locs[i][0]
    }
  }
  locs = locs.map((i) => JSON.stringify(i))
  if (locs.length > 0) {
    locs = locs.filter(onlyUnique).map((i) => {
      i = JSON.parse(i)
      let n = d.substr(i[0], i[1] - i[0])
      n = basna({
        def: n,
        query,
      })
      if (i[0] > 3) n = `...${n}`
      if (i[1] < d.length - 4) n = `${n}...`
      return n
    })
    locs = locs.join('<br/>')
  } else {
    let n = d.substr(0, Math.min(100, d.length))
    if (n.length < d.length) n = `${n}...`
    n = basna({
      def: n,
      query,
    })
    locs = n
  }
  return locs
}

window.ningau_lepasorcu = (url, bangu) => {
  if (url.indexOf('http') === 0) return
  setState({
    searching: {
      bangu
    },
    displaying: {
      bangu
    }
  });
  updateLocales(true)

  worker.postMessage({
    kind: 'fancu',
    cmene: 'ningau_lepasorcu',
    ...state.searching,
    bangu,
  })
}

window.runSearch = (seskari, selmaho, bangu) => {
  state.searching = {
    seskari,
    versio: 'selmaho',
    query: selmaho,
    bangu,
  }
  DispatchState({
    replace: false,
  })
}

function skicu_palodovalsi({ def, inner, query, seskari, versio, bangu, index, stringifiedPlaceTags = [] }) {
  if (!query) query = state.searching.query
  if (!seskari) seskari = state.searching.seskari
  bangu = def.bangu || bangu || state.searching.bangu
  bangu = bangu.replace(/-cll/, '')
  if (!def) def = []
  const out = document.createElement('div')
  out.className = inner ? 'terminner' : 'termouter'
  out.classList.add('term')
  if (!inner && def.d && def.d.nasezvafahi && (def.rfs || []).length === 0) {
    out.className = 'sidju sidju-normal cll noselect'
  }
  if (index === 0) out.classList.add('searchRendered')

  let selms
  if (def.s) {
    const selmahos = typeof def.s === 'string' ? def.s.split(' ') : def.s
    if (selmahos.length > 0) {
      selms = document.createElement('div')
      for (const selmaho of selmahos) {
        const inDefSelmahoElement = document.createElement('button')
        inDefSelmahoElement.className = 'tutci klesi klesi-tutci'
        inDefSelmahoElement.innerHTML = basna({
          def: escHtml(selmaho),
          query,
        })
        inDefSelmahoElement.setAttribute(
          'onclick',
          `window.runSearch("${seskari}","${selmaho}","${bangu}")`
        )
        selms.appendChild(inDefSelmahoElement)
      }
    }
  }
  if (def.from) {
    const inDefElement = document.createElement('div')
    inDefElement.className = 'tutci klesi klesi-tutci'
    inDefElement.innerHTML = def.from
  }
  let hasTranslateButton = false
  const word = document.createElement('h4')
  word.classList.add('valsi')
  if (def.d && !def.d.nasezvafahi)
    word.setAttribute('data-valsi', encodeValsiForWeb(def.w))
  if (def.l) word.classList.add('nalojbo')
  if (
    window.lojbo &&
    def.t !== window.bangudecomp &&
    seskari !== 'fanva' &&
    (plukaquery(def.w) == query || seskari == 'velcusku')
  ) {
    hasTranslateButton = true
    word.innerHTML = `${basna({
      def: def.q || def.w,
      query,
    })} `
  } else {
    let seskari2 = seskari
    if (seskari === 'fanva') seskari2 = 'catni'
    word.innerHTML = `<a class="valsi${def.l ? '' : ' nalojbo'
      }" href="#seskari=${seskari2}&sisku=${encodeUrl(
        def.w
      )}&bangu=${bangu}&versio=masno">${basna({
        def: escHtml(def.w, true),
        query,
      })}</a> `
  }

  let jvs
  if (def.t && !def.t.type) {
    def.t = def.t === 'bangudecomp' ? window.bangudecomp : def.t
    jvs = document.createElement('a')
    jvs.className = 'klesi link'
    let text = def.t
    const txt = encodeUrl(def.w).replace(/_/g, '%20')
    jvs.href = window.judri
      ? window.judri + txt
      : `#seskari=${seskari === 'catni' ? 'catni' : 'cnano'
      }&sisku=${txt}&bangu=${bangu}&versio=masno`
    if (window.judri) {
      jvs.setAttribute('target', '_blank')
      jvs.setAttribute('rel', 'noreferrer')
    }
    if (window.xuzganalojudri && !def.l) {
      text = `${escHtml(def.t)}# `
      if (def.d && def.d.nasezvafahi) text = `➕ ${text}`
    }
    jvs.innerHTML = text
  }
  if (def.t && def.t.type) {
    jvs = document.createElement('a')
    jvs.href = 'javascript:;'
    jvs.className = 'klesi'
    jvs.innerHTML = def.t.type

    if (def.t.bangu && def.t.bangu !== "lojbo") word.classList.add('na_eisesance')
  }
  if (def.date) {
    jvs = document.createElement('div')
    jvs.className = 'tutci klesi klesi-tutci'
    jvs.style.whiteSpace = 'nowrap'
    jvs.innerHTML = def.date
  }

  let prettifiedDefinition = {}
  if (def.d && !def.d.nasezvafahi)
    prettifiedDefinition = melbi_uenzi({
      def: def.d,
      fullDef: def,
      query,
      seskari,
      versio,
      bangu,
      type: 'd',
      index,
      stringifiedPlaceTags
    })
  stringifiedPlaceTags = prettifiedDefinition.stringifiedPlaceTags

  
  let zbalermorna
  if (window.lojbo && !(def.t && def.t.k === 0) && (seskari !== 'fanva' || index === 0)) {
    zbalermorna = document.createElement('h4')
    zbalermorna.classList.add('valsi', 'zbalermorna', 'segerna', 'sampu')
    zbalermorna.textContent = zbalermornaize(def)
  }
  

  const heading = document.createElement('heading')
  heading.classList.add('heading')

  let arrRenderedFamymaho = []
  for (const key in listFamymaho) {
    if (listFamymaho[key].split(' ').includes(def.w))
      arrRenderedFamymaho.push(
        `<a href="#seskari=${seskari}&versio=selmaho&sisku=${encodeUrl(
          key
        )}&bangu=${bangu}">${escHtml(key)}</a>`
      )
  }
  if (arrRenderedFamymaho.length !== 0) {
    const inDefElement = document.createElement('div')
    inDefElement.classList.add('valsi')
    if (def.l) inDefElement.classList.add('nalojbo')
    inDefElement.innerHTML = `<i><sup>[${arrRenderedFamymaho.join(
      ', '
    )}&nbsp;&nbsp;&nbsp;...&nbsp;]</sup></i>&nbsp;&nbsp;`
    if (inDefElement) heading.appendChild(inDefElement)
  }

  heading.appendChild(word)

  let translateButton
  if (hasTranslateButton) {
    translateButton = document.createElement('button')
    translateButton.className = 'fanva-tutci tutci klesi klesi-tutci'
    translateButton.onclick = function () {
      state.searching = {
        ...state.searching,
        seskari: 'fanva',
        query: plukaquery(def.w),
      }
      DispatchState({
        replace: false,
      })
    }
    // translateButton.innerHTML = `<img src="../pixra/fanva.svg" class="cukta"/>`
    translateButton.innerHTML = `🌍`
  }

  const banguEl = document.createElement('div')
  banguEl.classList.add('segerna', 'sampu', 'noselect')
  // if (supportedLangs[bangu]) {
  //   banguEl.innerHTML = `<div style='background-size:cover;background-image: url("../pixra/${supportedLangs[bangu].p}.svg");width:40px;height:21px'></div>`
  // } else
  const ban =
    def.bangu && supportedLangs[def.bangu].n
      ? supportedLangs[def.bangu].n
      : def.bangu || ''
  banguEl.innerHTML = ban
  // banguEl.onclick = function () {
  //   EmptyState(def.bangu);
  //   window.location = `#seskari=catni&sisku=&bangu=${def.bangu.replace(/-(cll)/, '')}`
  // }

  const famymahos =
    typeof def.s === 'string' && listFamymaho[def.s]
      ? listFamymaho[def.s].split(' ')
      : undefined
  if (typeof famymahos !== 'undefined') {
    let innerHTML = ''
    const inDefElement = document.createElement('h4')
    inDefElement.className = 'tfm'
    for (const famymaho of famymahos) {
      innerHTML += `&nbsp;&nbsp;<i><sup>[&nbsp;...&nbsp;&nbsp;&nbsp;<a href="#seskari=${seskari}&sisku=${encodeUrl(
        famymaho
      )}&bangu=${bangu}&versio=masno">${escHtml(famymaho)}</a>]</sup></i>`
    }
    inDefElement.innerHTML = innerHTML
    heading.appendChild(inDefElement)
  }


  if (jvs) {
    const inDefElement = document.createElement('div')
    inDefElement.classList.add('sampu', 'noselect')
    inDefElement.appendChild(jvs)
    jvs = inDefElement
  }

  
  let jvo
  if (def.t === 'lujvo' && (def.rfs || []).length > 0 && prettifiedDefinition.hasExpansion) {
    jvo = document.createElement('button')
    jvo.style = "background-image: url(../pixra/shuffle.svg); background-size:100% 100%;width:25px;"
    jvo.classList.add('tutci', 'sance', 'jvo_plumber')
    state.jvoPlumbsOn
      ? jvo.classList.add('tutci-hover')
      : jvo.classList.remove('tutci-hover')
    jvo.onclick = addJvoPlumbs
  }

  

  let whoIsFirstLine = []

  if (zbalermorna && !selms && def.w.length < 10 && !jvo) {
    whoIsFirstLine.push('zbalermorna')
    heading.appendChild(zbalermorna)
  }

  const flex = document.createElement('heading')
  flex.style.flex = 1
  heading.appendChild(flex)

  if (!selms) {
    heading.appendChild(banguEl)
    whoIsFirstLine.push('banguEl')
    if (jvs) {
      heading.appendChild(jvs)
      whoIsFirstLine.push('jvs')
    }
  }

  if (hasTranslateButton && def.w.length < 20) {
    heading.appendChild(translateButton)
    whoIsFirstLine.push('translateButton')
  }

  
  if (jvo) heading.appendChild(jvo)
  

  if (selms) heading.appendChild(selms)

  const copy = document.createElement('input')
  copy.type = 'button'
  copy.classList.add('tutci', 'sance', 'klesi-tutci')
  copy.value = "📋"
  copy.addEventListener('click', function () {
    copyToClipboard([def.w, def.d, def.n].filter(Boolean).join("\r\n"))
  });
  heading.appendChild(copy)

  out.appendChild(heading)
  //new line buttons
  const heading2 = document.createElement('heading')
  heading2.classList.add('heading', 'heading2')
  
  if (zbalermorna && !whoIsFirstLine.includes('zbalermorna'))
    heading2.appendChild(zbalermorna)
  
  const flex2 = document.createElement('heading')
  flex2.style.flex = 1
  heading2.appendChild(flex2)
  if (!whoIsFirstLine.includes('banguEl')) heading2.appendChild(banguEl)
  if (jvs && !whoIsFirstLine.includes('jvs')) heading2.appendChild(jvs)
  if (translateButton && !whoIsFirstLine.includes('translateButton'))
    heading2.appendChild(translateButton)
  out.appendChild(heading2)
  // }

  if (bangu.indexOf("muplis") === 0) {
    //add feedback button
    const row = document.createElement('button')
    row.className = 'tutci klesi klesi-tutci align-right'
    row.onclick = () => window.send_muplis_feedback(def);
    row.setAttribute("data-jufra", `window.report_feedback`)
    row.innerText = window.report_feedback
    out.appendChild(row)
  }

  if (seskari !== 'arxivo' && def.d) {
    const inDefElement = document.createElement('div')
    inDefElement.classList.add('definition', 'valsi')
    if (def.d && def.d.nasezvafahi) {
      if (!def.t && (def.rfs || []).length === 0) return
      inDefElement.classList.add('nasezvafahi', 'noselect')
      inDefElement.innerHTML = window.nasezvafahi
    } else {
      // if (seskari !== 'velcusku') prettifiedDefinition.tergeha = `${prettifiedDefinition.tergeha.replace(/\n/g, '<br/>')} `
      inDefElement.innerHTML = prettifiedDefinition.tergeha
    }
    out.appendChild(inDefElement)
  }
  if (seskari === 'arxivo') {
    let inDefElement = document.createElement('div')
    inDefElement.classList.add('definition', 'valsi', 'pointer')
    inDefElement.innerHTML = ConstructArxivoValsiExtract(def.d, query, 50)
    inDefElement.addEventListener('click', () => {
      inDefElement.style.display = 'none'
      inDefElement.nextElementSibling.style.display = 'block'
    })
    out.appendChild(inDefElement)

    inDefElement = document.createElement('div')
    inDefElement.classList.add('definition', 'valsi')
    inDefElement.style.display = 'none'
    if (def.d && def.d.nasezvafahi) {
      inDefElement.classList.add('nasezvafahi', 'noselect')
      inDefElement.innerHTML = window.nasezvafahi
    } else {
      inDefElement.innerHTML = `${basna({
        def: def.d,
        query,
      })} `
      inDefElement.addEventListener('click', () => {
        inDefElement.style.display = 'none'
        inDefElement.previousElementSibling.style.display = 'block'
        inDefElement.parentElement.scrollIntoView()
      })
    }
    out.appendChild(inDefElement)
    //add two divs. first is hidden. on click hide and display the other
  }
  if (def.n) {
    const inDefElement = document.createElement('div')
    inDefElement.classList.add('notes', 'valsi')
    inDefElement.innerHTML = `${melbi_uenzi({
      def: def.n,
      fullDef: def,
      query,
      seskari,
      versio,
      type: 'n',
      index,
      bangu,
      stringifiedPlaceTags
    }).tergeha
      } `
    out.appendChild(inDefElement)
  }
  
  // if (index == 0 && seskari !== 'velcusku') {
  //   const { secs, div } = CLL({ valsi: def.w })
  //   if (secs && secs !== state.cll) out.appendChild(div)
  // }
  
  if ((def.r || []).length > 0 && !def.l && window.xuzganalojudri) {
    const tanxe_leirafsi = document.createElement('div')
    tanxe_leirafsi.className = 'rafsi noselect'

    const rafcme = document.createElement('div')
    rafcme.className = 'tanxe zunle_tanxe'
    rafcme.innerHTML = window.rafsi || 'rafsi'
    tanxe_leirafsi.appendChild(rafcme)

    const rafsi = document.createElement('div')
    rafsi.className = 'tanxe pritu_tanxe'
    for (let i = 0; i < def.r.length; i++) {
      const rafElem = document.createElement('span')
      rafElem.className = 'pamei'
      const raf = def.r[i]
      // if ((def.t || '').match(/lujvo/)) {
      //   const a = document.createElement('a')
      //   a.setAttribute(
      //     'href',
      //     `#seskari=${seskari}&sisku=${encodeUrl(raf)}&bangu=${bangu}`
      //   )
      //   a.text = raf
      //   rafElem.appendChild(a)
      // } else {
      rafElem.innerHTML = basna({
        def: raf,
        query,
      })
      // }
      rafsi.appendChild(rafElem)
    }
    tanxe_leirafsi.appendChild(rafsi)
    out.appendChild(tanxe_leirafsi)
  }
  if ((def.b || []).length > 0 && !def.l && window.xuzganalojudri) {
    const tanxe_leirafsi = document.createElement('div')
    tanxe_leirafsi.className = 'rafsi noselect hue_rotate'

    const rafcme = document.createElement('div')
    rafcme.className = 'tanxe zunle_tanxe kurfa_tanxe'
    rafcme.innerHTML = 'BAI'
    tanxe_leirafsi.appendChild(rafcme)

    const rafsi = document.createElement('div')
    rafsi.className = 'tanxe pritu_tanxe kurfa_tanxe'
    for (let i = 0; i < def.b.length; i++) {
      const rafElem = document.createElement('span')
      rafElem.className = 'pamei'
      const raf = def.b[i]
      rafElem.innerHTML = `</span><a class="hue_rotate_back a-${seskari}" href="#seskari=${seskari}&sisku=${encodeUrl(
        raf
      )}&bangu=${bangu}&versio=masno">${basna({
        def: escHtml(raf, true),
        query,
      })}</a><span>`
      rafsi.appendChild(rafElem)
    }
    tanxe_leirafsi.appendChild(rafsi)
    out.appendChild(tanxe_leirafsi)
  }
  if ((def.rfs || []).length > 0) {
    const subDefs = document.createElement('div')
    subDefs.classList.add('definition', 'subdefinitions')
    for (let i = 0; i < def.rfs.length; i++) {
      const html = skicu_palodovalsi({
        def: def.rfs[i],
        inner: true,
        index: `${index}_${i}`,
        query,
        seskari,
        versio,
        bangu,
        stringifiedPlaceTags
      })
      if (html) subDefs.appendChild(html)
    }
    out.appendChild(subDefs)
  }

  out.addEventListener('click', clicked)
  return out
}

function encodeValsiForWeb(v) {
  return encodeURIComponent(v).replace(/'/g, 'h')
}
function plukaquery(a) {
  if (a.charAt(0) !== '^' && a.slice(-1) !== '$')
    return a.replace(/\./g, ' ').replace(/ {2,}/g, ' ').replace(/’/g, "'")
  return a
}

function encodeUrl(uenzi) {
  //for bookmarkable urls
  return encodeURIComponent((uenzi || '').replace(/ /g, '_')).replace(
    /'/g,
    '%27'
  )
}

function decodeUrl(urli) {
  return decodeURIComponent(
    urli.replace(/&amp;/g, '&').replace(/%27/g, "'")
  ).replace(/[_]/g, ' ')
}

function escHtml(a, apos) {
  //for displaying text
  a = (a || '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\(/g, '&#40;')
    .replace(/\)/g, '&#41;')
  if (!apos) a = a.replace(/'/g, '&#039;')
  return a
}

function skicu_rolodovalsi({ query, seskari, bangu, versio }) {
  const displayUpTo = Math.min(window.jimte, results.length)
  state.cll = undefined
  // if (resultCount === 0) {
  //   const { secs, div } = CLL({ pre: true, valsi: state.searching.query })
  //   state.cll = secs
  //   if (div) outp.appendChild(div)
  // }
  for (; resultCount < displayUpTo; resultCount++) {
    const a = skicu_palodovalsi({
      def: results[resultCount],
      query,
      seskari,
      versio,
      bangu,
      length: results.length,
      index: resultCount,
    })
    if (a) outp.appendChild(a)
  }
}

async function addAudioLinkForExternalSpeaker(word) {
  worker.postMessage({
    kind: 'parse',
    operation: 'audioLink',
    tegerna: word.replace(/"/g, ''),
    queryLanguage: window.leijufra.queryLanguage
  })
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function addAudioLinks() {
  
  //audio
  const els = Array.from(document.querySelectorAll(':not(.na_eisesance)[data-valsi]'))
  for (let el of els) {
    if (!kahe_sezgana(el)) continue
    el = el.textContent.trim()
    addAudioLinkForExternalSpeaker(el)
    await sleep(500)

    // await new Promise(resolve => {
    //   try {
    //     const urli = `/sutysisku/sance/vreji/${encodeValsiForWeb(el)}.mp3`
    //     var http = new XMLHttpRequest()
    //     http.open('HEAD', urli, true)
    //     http.send()
    //     http.onload = function () {
    //       if (this.status == 200) {
    //         const sance = new Audio(urli)
    //         sance.id = `sance_${encodeValsiForWeb(el)}`
    //         sance.addEventListener('canplaythrough', (event) => {
    //           const hd = Array.from(
    //             document.querySelectorAll(
    //               `[data-valsi="${encodeValsiForWeb(el)}"]`
    //             )
    //           )[0]
    //           if (
    //             hd &&
    //             !document.getElementById(`sance_${encodeValsiForWeb(el)}`)
    //           ) {
    //             hd.insertAdjacentHTML('afterend', `<button class="tutci sance" onclick="document.getElementById('sance_${encodeValsiForWeb(
    //               el
    //             )}').play()">▶</button>`)
    //             hd.appendChild(sance)
    //           }
    //         })
    //       } else {
    //         addAudioLinkForExternalSpeaker(el)
    //       }
    //       resolve()
    //     }
    //     http.onerror = () => {
    //       addAudioLinkForExternalSpeaker(el)
    //       resolve()
    //     }
    //   } catch (error) {
    //     addAudioLinkForExternalSpeaker(el)
    //     resolve()
    //   }
    // })
  }
  
}



//pronunciation guide
function lojban_text(name, text, style) {
  const el = document.createElement(name)
  el.textContent = text
  if (style) el.className = style
  return el
}

function elem(name, contents, style) {
  const el = document.createElement(name)
  if (style) el.className = style
  if (Array.isArray(contents))
    contents.forEach((sub) => {
      el.appendChild(sub)
    })
  else if (contents) el.appendChild(contents)
  return el
}

function play(url) {
  audio.src = url
  audio.play()
}
document.querySelector('#table').appendChild(
  elem(
    'table',
    rows.map((row) =>
      elem(
        'tr',
        row.map((col) => {
          const button = lojban_text('button', col, 'bangu')
          button.onclick = () => {
            play(`/sutysisku/sance/lerfu/${encodeURIComponent(col)}.ogg`)
          }
          return elem('td', button)
        })
      )
    ),
    'centero'
  )
)



function getStateBangu() {
  const citri = macitri()[0]
  if (citri && citri.bangu) return state.searching.bangu
  return 'en'
}

//sockets
// socket = io ? io.connect("https://jbotcan.org:3020"):undefined;
// if (socket) socket.on("connect", function () {
//   document.getElementById("arxivo").style.display = "inline-block";
// });
// if (socket) socket.on("connect_error", function () {
//   document.getElementById("arxivo").style.display = "none";
// });
// if (socket) socket.on("disconnect", function () {
//   document.getElementById("arxivo").style.display = "none";
// });
socket1Chat = socket_io_default()('wss://jbotcan.org:9091', {
  transports: ['polling', 'websocket'],
})
if (socket1Chat) {
  socket1Chat.on('connect', function () {
    socket1Chat_connected = true
  })
  socket1Chat.on('connect_error', function () {
    console.log('1chat connection error')
    // document.getElementById("velcusku").style.display = "none";
  })
  // socket1Chat.on("disconnect", function() {
  //   document.getElementById("velcusku").style.display = "none";
  // });
  function trimSocketChunk(text) {
    return text.replace(/[\n\r]+$/gims, ' ').split('<')[0]
  }
  socket1Chat.on('sentFrom', function (data) {
    if (loadingState.loading || !socket1Chat_connected) return
    const i = data.data
    const msg = {
      d: trimSocketChunk(i.chunk),
      s: i.channelId,
      w: i.author,
    }

    const velsku = document.getElementById('velsku_sebenji')
    velsku.innerHTML = `<img src='../pixra/nunsku.svg' class="velsku_pixra"/> <span class="velsku_pamei">[${msg.s}] ${msg.w}: ${msg.d}</span>`
    velsku.style.display = 'flex'
    velsku.href = `#seskari=cnano&sisku=lai jbosnu&bangu=${getStateBangu()}&versio=masno`

    // if (msg.s === channel)
    // outp.appendChild(
    //   skicu_palodovalsi({
    //     def: msg,
    //     query: state.searching.query,
    //     seskari: "velcusku"
    //   })
    // );
    // outp.childNodes.length = Math.min(outp.childNodes.length, 201);
    // content.scrollTop = content.scrollHeight;
  })
  socket1Chat.on('history', function (data) {
    if (loadingState.loading || !socket1Chat_connected) return
    const velsku = document.getElementById('velsku_sebenji')
    const i = data.slice(-1)[0]
    if (!i) return
    const msg = {
      d: trimSocketChunk(i.chunk),
      s: i.channelId,
      w: i.author,
    }
    velsku.innerHTML = `<img src='../pixra/nunsku.svg' class="velsku_pixra"/> <span class="velsku_pamei">[${msg.s}] ${msg.w}: ${msg.d}</span>`
    velsku.style.display = 'flex'
    velsku.href = `#seskari=cnano&sisku=lai jbosnu&bangu=${getStateBangu()}&versio=masno`
  })
}

function getPhonemeClasses() {
  const C = '[bdgjvzcfkpstxlmnr]'
  const V = '(a|e|i|o|u)'
  const I = '(ai|ei|oi|au|ḁ|ą|ę|ǫ)'
  const D =
    '(pl|pr|fl|fr|bl|br|vl|vr|cp|cf|ct|ck|cm|cn|cl|cr|jb|jv|jd|jg|jm|sp|sf|st|sk|sm|sn|sl|sr|zb|zv|zd|zg|zm|tc|tr|ts|kl|kr|dj|dr|dz|gl|gr|ml|mr|xl|xr)'
  const T =
    '(cfr|cfl|sfr|sfl|jvr|jvl|zvr|zvl|cpr|cpl|spr|spl|jbr|jbl|zbr|zbl|ckr|ckl|skr|skl|jgr|jgl|zgr|zgl|ctr|str|jdr|zdr|cmr|cml|smr|sml|jmr|jml|zmr|zml)'
  const R = `((?!${D})${C}${C})`
  const J = '(i|u)(?=[aeiouyḁąęǫ])'
  const h = "[h']"
  return { C, V, I, D, T, R, J, h }
}
function allAreSafeWords(array, { allowCmevla = false, allowCmavo = false, queryLanguage = 'lojban' }) {
  if (queryLanguage === 'loglan') return true;
  const { C, V, I, D, T, R, J, h } = getPhonemeClasses()
  //this is the complete regular expression matching any possible gismu and only them
  const gismu = RegExp(`^(${D}${V}${C}${V}|${C}${V}${C}${C}${V})$`)
  const nornau = RegExp(`^${C}${V}${C}${C}${I}$`)
  const ismu = RegExp(`^${V}${C}${C}${V}$`)
  const iismu = RegExp(`^${J}${V}${C}${C}${V}$`)
  const strelka = RegExp(`^${T}${V}${R}${V}$`)
  const flokati = RegExp(`^${D}${V}${C}${V}${C}${V}$`)
  const prulamdei = RegExp(`^${D}${V}${C}${V}${C}${C}${V}$`)
  const cinjikca = RegExp(`^${C}${V}${R}${V}${C}${C}${V}$`)
  const sorpeka = RegExp(`^${C}${V}${R}${V}${C}${V}$`)
  const snazga = RegExp(`^${D}${V}${C}${C}${V}$`)
  const kaltahu = RegExp(`^${C}${V}${C}${C}${V}${h}${V}$`)
  const cmalahu = RegExp(`^${C}${C}${V}${C}${V}${h}${V}$`)
  return array.every(
    (el) =>
      el[0] === 'gismu' ||
      gismu.test(el[1]) ||
      ismu.test(el[1]) ||
      iismu.test(el[1]) ||
      strelka.test(el[1]) ||
      flokati.test(el[1]) ||
      sorpeka.test(el[1]) ||
      nornau.test(el[1]) ||
      kaltahu.test(el[1]) ||
      cmalahu.test(el[1]) ||
      snazga.test(el[1]) ||
      prulamdei.test(el[1]) ||
      cinjikca.test(el[1]) ||
      (allowCmevla && el[0] === 'cmevla') ||
      (allowCmavo && el[0] === 'cmavo')
  )
}

function PollyPlayer(params) {
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: params.IdentityPoolId,
  })
  AWS.config.region = params.region

  function matchForm(word, form) {
    let regex = '^'
    const working = word.replace(/[\.\?»«]/g, '')
    for (let f = 0; f < form.length; f++) {
      if (form[f] == '?') regex += '.'
      else if (form[f] == '*') regex += '.*'
      else if (form[f] == 'C') regex += '[^aeiouyḁąęǫ]'
      else if (form[f] == 'V') regex += '[aeiouyḁąęǫ]'
      else if (form[f] == 'I') regex += '[iu]'
    }
    regex += '$'
    const re = new RegExp(regex)
    return re.test(working)
  }

  // function isBrivla(word) {
  //   return allAreSafeWords([["", word]], { allowCmavo: false })
  // }

  function getValByKeyRegex(json, testedString) {
    const match =
      Object.keys(json)
        .filter((key) => RegExp(`^${key}`).test(testedString))
        .sort((a, b) => b.length - a.length)[0] ?? '-'
    return { match, value: json[match] }
  }

  function text2SSML(textToSpeak) {
    const famymaho = ['kei', 'vau', "ku'o", "li'u", "le'u", "ge'u", "zo'u"]
    // const stresslessWords = ["lo","le","lei","loi","ku"]
    const words = textToSpeak.replace(/(?:\r\n|\r|\n)/g, ' ').split(' ')
    let output = [`<speak><prosody rate="slow">`, '<s>']
    for (let w = 0; w < words.length; w++) {
      const currentWord = krulermorna(words[w])
      // const nextWord = words[w + 1]
      if (['i', '.i', "ni'o"].includes(currentWord)) {
        output.push('</s>\n<s>')
      } else if (currentWord[0] == '.') {
        output.push('<break time="20ms" strength="x-weak" />')
      }

      let ph = []
      for (let i = 0; i < [...currentWord].length; i++) {
        // if (matchForm(currentWord, "CV") && (i == 0) && nextWord && !isBrivla(nextWord) && !stresslessWords.includes(currentWord))
        //   ph.push('ˈ');
        if (matchForm(currentWord, 'VCV') && i == 0) ph.push('ˈ')
        else if (matchForm(currentWord, 'CVCV') && i == 0) ph.push('ˈ')
        else if (matchForm(currentWord, 'VCCV') && i == 0) ph.push('ˈ')
        else if (
          matchForm(currentWord, 'CVCCI') ||
          matchForm(currentWord, 'CVCCV') ||
          matchForm(currentWord, 'IVCCV') ||
          matchForm(currentWord, 'CCVCV')
        ) {
          if (i == 0) ph.push('ˈ')
          if (i == 3) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCCV')) {
          if (i == 0) ph.push('ˈ')
          if (i == 4) ph.push('.')
        } else if (matchForm(currentWord, 'CCCVCCV')) {
          if (i == 0) ph.push('ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCVCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CVCCVCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 5) ph.push('.')
        } else if (matchForm(currentWord, 'CCVCVCCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 6) ph.push('.')
        } else if (matchForm(currentWord, 'CVCCVCCV')) {
          if (i == 3) ph.push('.ˈ')
          if (i == 6) ph.push('.')
        }
        const { match, value } = getValByKeyRegex(
          params.lojban2IPAMapping,
          currentWord.slice(i) +
          ' ' +
          words
            .concat('')
            .slice(w + 1)
            .join(' ')
        )
        ph.push(value)
        i = i - 1 + match.replace(/\\/g, '').replace(/\(\?.*\)/g, '').length
      }

      const { C, V, I } = getPhonemeClasses()
      if (RegExp(`(${C})$`).test(currentWord)) {
        ph.unshift("ʔ")
      }
      if (RegExp(`^(${V}|${I})`).test(currentWord)) {
        ph.unshift("ʔ")
      }
      // if (["mo", "ma", "xu", "xo"].includes(currentWord)) {
      //   output.push(`<prosody volume="loud">`);
      //   output.push(`<phoneme alphabet="ipa" ph="${ph.join("")}">${currentWord}</phoneme>`);
      //   output.push(`</prosody>`);
      // }else{
      const compiledWord = ph.join("").replace(/ʔ+/g, 'ʔ').replace(/\.+/g, '.')
      output.push(`<phoneme alphabet="ipa" ph="${compiledWord}">${currentWord}</phoneme>`)
      // }
      if (
        currentWord[currentWord.length - 1] == '.' ||
        famymaho.includes(currentWord) ||
        RegExp(`(${C})$`).test(currentWord)
      ) {
        output.push(`<break time="1ms" strength="x-weak" />`)
      }
    }

    output.push('</s>', '</prosody></speak>')
    return output.join('\n')
  }

  async function getAndPlayAudio(textToSpeak, dontSpeak, queryLanguage) {
    const text = text2SSML(textToSpeak)
    const sance_datni =
      getLocalAudio(text, queryLanguage) || (await downloadAudio(text, dontSpeak, queryLanguage))
    if (dontSpeak) return true
    return new Promise((resolve) => {
      audio.src = URL.createObjectURL(new Blob([new Uint8Array(sance_datni).buffer]))
      audio.addEventListener('ended', () => resolve(true))
      audio.pause()
      audio.play()
    })
  }

  function downloadAudio(Text, dontSpeak) {
    return new Promise(function (resolve, reject) {
      const polly = new AWS.Polly()
      polly.synthesizeSpeech(
        {
          Text,
          VoiceId: params.VoiceId,
          LanguageCode: params.LanguageCode,
          Engine: params.Engine,
          OutputFormat: 'mp3',
          TextType: 'ssml',
          SampleRate: '24000',
        },
        (error, data) => {
          if (error) {
            reject()
          } else {
            cacheAudio(Text, data.AudioStream, dontSpeak)
            resolve(data.AudioStream)
          }
        }
      )
    })
  }

  function cacheAudio(text, audio, dontSpeak) {
    let cache = JSON.parse(localStorage.getItem('cachedAudio')) || []
    cache = cache.slice(dontSpeak ? -20 : -10)
    cache.push({
      text,
      audio: JSON.stringify(audio),
    })
    localStorage.setItem('cachedAudio', JSON.stringify(cache))
  }

  function getLocalAudio(text) {
    const audioStreamArray =
      JSON.parse(localStorage.getItem('cachedAudio')) || []
    const sance_datni = audioStreamArray.filter(
      (record) => record.text === text
    )[0]
    if (!sance_datni) return
    return JSON.parse(sance_datni.audio).data
  }

  return function (text, dontSpeak, queryLanguage) {
    return getAndPlayAudio(text, dontSpeak)
  }
}

window.runSpeakableAudio = function (textToSpeak, dontSpeak = false, queryLanguage) {
  return polly(textToSpeak, dontSpeak, queryLanguage)
}

function zgana_sihesle() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  if (day >= 340 || day < 10) {
    state.ninynaha = true
    const elemDiv = document.createElement('div');
    const rnd = (max, min = 1) => (Math.random() * max / min).toFixed(2)
    elemDiv.innerHTML = `<div class="leisihesle" aria-hidden="true">${Array(3).fill(["❅", "❆"]).flat()
      .map(_ => {
        const rnd40 = rnd(30)
        const rnd3 = rnd(3)
        return `<div class="sihesle" style="left: ${rnd(100)}%;-webkit-animation-delay: ${rnd40}s, ${rnd3}s;animation-delay: ${rnd40}s, ${rnd3}s;">${_}</div>`
      })
      .join("")
      }</div>`
    //<div class="sihesle"><img src="../pixra/snime.svg" height='13' width='13' alt='sihesle'/></div>
    document.body.appendChild(elemDiv);
  }
}


; (function () {
  function closeModal() {
    zgana_sihesle();
    /* Get close button */
    const closeButton = document.getElementsByClassName('jsModalClose')
    const closeOverlay = document.getElementsByClassName('jsOverlay')

    /* Set onclick event handler for close buttons */
    for (let i = 0; i < closeButton.length; i++) {
      closeButton[i].onclick = function () {
        const modalWindow = this.parentNode.parentNode

        modalWindow.classList
          ? modalWindow.classList.remove('open')
          : (modalWindow.className = modalWindow.className.replace(
            new RegExp(
              '(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)',
              'gi'
            ),
            ' '
          ))
      }
    }

    /* Set onclick event handler for modal overlay */
    for (let i = 0; i < closeOverlay.length; i++) {
      closeOverlay[i].onclick = function () {
        const modalWindow = this.parentNode

        modalWindow.classList
          ? modalWindow.classList.remove('open')
          : (modalWindow.className = modalWindow.className.replace(
            new RegExp(
              '(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)',
              'gi'
            ),
            ' '
          ))
      }
    }
  }

  /* Handling domready event IE9+ */
  function ready(fn) {
    if (document.readyState != 'loading') {
      fn()
    } else {
      document.addEventListener('DOMContentLoaded', fn)
    }
  }

  /* Triggering modal window function after dom ready */
  ready(closeModal)
})()

window.resetAudioParams = (input) => {
  const json = pollyParams
  localStorage.setItem('audioParams', JSON.stringify(json))
  input.value = JSON.stringify(json, null, 2)
  polly = PollyPlayer(json)
  localStorage.setItem('cachedAudio', null)
}

window.send_feedback = async function ({ def = {}, state = {}, comment }) {
  let defCompiled = '', queryCompiled = ''
  if (def.w) {
    defCompiled = `**${def.w}**\n*${def.d}*`
  }
  if (state.query) {
    queryCompiled = `**${state.query}**\n*${supportedLangs[state.bangu].n}*`
  }
  const url = "https://sutysisku-report.herokuapp.com/";
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ body: `${[defCompiled, queryCompiled].join("\n\n")}\n\n----\n\n${comment}`, title: def.w || state.query }) // body data type must match "Content-Type" header
  });

  if (response.status < 400) {
    modalWindow.classList.remove('open')
    openModal({
      innerHTML: `
          <h2>${window.report_feedback_thankyou}</h2>
          <button class="tutci feedback" onclick="document.getElementById('jsModal').classList.remove('open')">${window.report_feedback_has_been_submitted}</button>
          <a href="https://github.com/La-Lojban/pinka/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc" target="_blank">${window.report_feedback_issues_repo}</a>
    `}
    )
  } else {
    modalWindow.classList.remove('open')
    openModal({
      innerHTML: `
          <div>${window.report_feedback_problem}</div>
          <button class="tutci feedback" onclick="document.getElementById('jsModal').classList.remove('open')">✔️</button>
          <a href="https://github.com/La-Lojban/pinka/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc" target="_blank">${window.report_feedback_issues_repo}</a>
    `}
    )

  }
}

window.send_muplis_feedback = function (def) {
  window.tmp_value = def;
  openModal({
    innerHTML: `
        <h2>${window.report_feedback}</h2>
        <h3 class="valsi">${def.w}</h3>
        <div class="definition valsi">${def.d}</div>
        <textarea id="modal__textarea" class="modal__textarea" row="10" placeholder="${window.report_feedback_description}"></textarea>
        <button class="tutci feedback" onclick="this.firstElementChild.classList.remove('d-none');window.send_feedback({def: window.tmp_value, comment: document.getElementById('modal__textarea').value})"><div class="spinner d-none"></div>${window.report_feedback}</button>
  `})
}

function openModal({ innerHTML }) {
  const modal__container = document.getElementById('modal__container')
  modal__container.innerHTML = innerHTML
  modalWindow.classList
    ? modalWindow.classList.add('open')
    : (modalWindow.className += ' ' + 'open')
}

function copyToClipboard(text) {
  const myTemporaryInputElement = document.createElement("textarea");
  myTemporaryInputElement.value = text;

  document.body.appendChild(myTemporaryInputElement);

  myTemporaryInputElement.select();
  document.execCommand("Copy");

  document.body.removeChild(myTemporaryInputElement);
  showLoading({ bangu: window.copied || '📋', hideProgress: true })
  setTimeout(() => {
    showLoaded()
  }, 2000)
}
})();

/******/ })()
;