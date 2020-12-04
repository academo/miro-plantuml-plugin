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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/app/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sdk/publicSDK.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/chatmodelsbase/platform/client/models/chat/type/TimestampData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TimestampData = /** @class */ (function () {
    function TimestampData(day, hours, minutes, month, seconds, year) {
        this.day = day;
        this.hours = hours;
        this.minutes = minutes;
        this.month = month;
        this.seconds = seconds;
        this.year = year;
    }
    return TimestampData;
}());
/* harmony default export */ __webpack_exports__["default"] = (TimestampData);


/***/ }),

/***/ "./src/common/connectors2/CommandChannel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var general_utils_idGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/general/utils/idGenerator.ts");

var CommandChannel = /** @class */ (function () {
    function CommandChannel(sendHandler, findReceiverByContext) {
        this.waitingForResponseCommands = new Map(); // mapped by commandToken
        this.sendHandler = sendHandler;
        this.findReceiverByContext = findReceiverByContext;
    }
    CommandChannel.prototype.sendCommand = function (commandId, context, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var commandToken = commandId + "-" + Object(general_utils_idGenerator__WEBPACK_IMPORTED_MODULE_0__["getRandomString"])();
            var payload = { commandId: commandId, commandToken: commandToken, context: context, data: data };
            _this.waitingForResponseCommands.set(commandToken, { resolve: resolve, reject: reject });
            _this.sendHandler(payload);
        });
    };
    CommandChannel.prototype.processCommand = function (cmd) {
        var _this = this;
        if (cmd.commandId === CommandChannel.RESPONSE_COMMAND_ID) {
            var p = this.waitingForResponseCommands.get(cmd.commandToken);
            if (p) {
                this.waitingForResponseCommands.delete(cmd.commandToken); // write a test for this
                if (cmd.errorInResponse) {
                    p.reject(cmd.data);
                }
                else {
                    p.resolve(cmd.data);
                }
            }
            else {
                console.error("Response by token not found " + cmd.commandToken); // write a test for this
            }
        }
        else {
            var commandReceiver = this.findReceiverByContext(cmd.context); // this.commands.get(cmd.commandId)!
            if (commandReceiver) {
                // this is a draft, the implementation is dangerous
                var path_1 = cmd.commandId.slice(1).split('.'); // slice(1) to remove it
                var command_1;
                var receiver_1 = commandReceiver;
                path_1.forEach(function (key, index) {
                    if (index === path_1.length - 1) {
                        command_1 = receiver_1[key];
                    }
                    else {
                        receiver_1 = receiver_1[key];
                    }
                });
                if (command_1) {
                    try {
                        //if the method returns a promise, use it, otherwise, send the plain response
                        var result = command_1.apply(receiver_1, cmd.data);
                        if (this.isPromise(result)) {
                            result
                                .then(function (data) {
                                _this.sendResponse(cmd, data, true);
                            })
                                .catch(function (res) {
                                console.error(res);
                                // don't forget that errors can only be plain object
                                //todo check if this is an sdk error and decode it into a standard format
                                _this.sendResponse(cmd, 'Some error while command execution', false);
                            });
                        }
                        else {
                            // result must be a simple type to send via postMessage
                            this.sendResponse(cmd, result, true);
                        }
                    }
                    catch (e) {
                        // don't forget that errors can only be plain object
                        this.sendResponse(cmd, "Error while command execution: " + e.message, false);
                    }
                }
                else {
                    console.error("Command " + cmd.commandId + " not found. Context ='" + JSON.stringify(cmd.context) + "'"); // write a test for this
                }
            }
            else {
                console.error("CommandReceiver for '" + JSON.stringify(cmd.context) + "' not found"); // write a this for this
            }
        }
    };
    CommandChannel.prototype.isPromise = function (res) {
        return res && res.then !== undefined && res.catch !== undefined;
    };
    // возможно, формат отправки ответа надо будет переписать,
    // но пока можно пожить и на такой реализации
    // т.е. надо понять "Зачем?" его надо переписать
    CommandChannel.prototype.sendResponse = function (originMsg, responseData, success) {
        var payload = {
            commandId: CommandChannel.RESPONSE_COMMAND_ID,
            commandToken: originMsg.commandToken,
            context: originMsg.context,
            errorInResponse: !success,
            data: responseData,
        };
        this.sendHandler(payload);
    };
    CommandChannel.RESPONSE_COMMAND_ID = 'IS_RESPONSE_FOR_SOME_COMMAND';
    return CommandChannel;
}());
/* harmony default export */ __webpack_exports__["default"] = (CommandChannel);


/***/ }),

/***/ "./src/common/connectors2/ConnectorsUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remote", function() { return remote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remoteReceiver", function() { return remoteReceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildConnector", function() { return buildConnector; });
var receiverDescriptionFieldName = '__receiverDescriptionFieldName';
function createDescriptor(targetClass) {
    if (!targetClass[receiverDescriptionFieldName]) {
        targetClass[receiverDescriptionFieldName] = {
            methods: [],
            nestedReceivers: [],
        };
    }
}
/**
 * This decorator marks methods that should be generated on the other side
 */
function remote(target, propertyKey) {
    createDescriptor(target);
    target[receiverDescriptionFieldName].methods.push(propertyKey);
}
/**
 * This decorator should be used to mark fields that contain nested receivers
 */
function remoteReceiver(nestedReceiver) {
    return function (target, propertyKey) {
        createDescriptor(target);
        if (nestedReceiver.prototype[receiverDescriptionFieldName]) {
            target[receiverDescriptionFieldName].nestedReceivers.push({
                key: propertyKey,
                receiver: nestedReceiver.prototype[receiverDescriptionFieldName],
            });
        }
        else {
            throw new Error('NestedReceiver does not contain any remote methods');
        }
    };
}
function encode(commandsReceiver) {
    return commandsReceiver.prototype[receiverDescriptionFieldName];
}
/**
 * This method will modify the passed argument "connector"
 */
function buildConnector(path, connector, descriptor, sendCommandHandler) {
    descriptor.methods.forEach(function (key) {
        connector[key] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //todo wait here for handshake
            var commandId = path + '.' + key;
            return sendCommandHandler(commandId, args);
        };
    });
    descriptor.nestedReceivers.forEach(function (item) {
        connector[item.key] = {};
        buildConnector(path + '.' + item.key, connector[item.key], item.receiver, sendCommandHandler);
    });
}


/***/ }),

/***/ "./src/commons/TimeUnit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLIS", function() { return MILLIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDS", function() { return SECONDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTES", function() { return MINUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS", function() { return HOURS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS", function() { return DAYS; });
var floor = Math.floor;
var Millis = /** @class */ (function () {
    function Millis() {
    }
    Millis.prototype.toMillis = function (value) {
        return value;
    };
    Millis.prototype.toSeconds = function (value) {
        return floor(value / 1000);
    };
    Millis.prototype.toMinutes = function (value) {
        return floor(value / 60000);
    };
    Millis.prototype.toHours = function (value) {
        return floor(value / 3600000);
    };
    Millis.prototype.toDays = function (value) {
        return floor(value / 86400000);
    };
    return Millis;
}());
var Seconds = /** @class */ (function () {
    function Seconds() {
    }
    Seconds.prototype.toMillis = function (value) {
        return 1000 * value;
    };
    Seconds.prototype.toSeconds = function (value) {
        return value;
    };
    Seconds.prototype.toMinutes = function (value) {
        return floor(value / 60);
    };
    Seconds.prototype.toHours = function (value) {
        return floor(value / 3600);
    };
    Seconds.prototype.toDays = function (value) {
        return floor(value / 86400);
    };
    return Seconds;
}());
var Minutes = /** @class */ (function () {
    function Minutes() {
    }
    Minutes.prototype.toMillis = function (value) {
        return 60000 * value;
    };
    Minutes.prototype.toSeconds = function (value) {
        return 60 * value;
    };
    Minutes.prototype.toMinutes = function (value) {
        return value;
    };
    Minutes.prototype.toHours = function (value) {
        return floor(value / 60);
    };
    Minutes.prototype.toDays = function (value) {
        return floor(value / 1440);
    };
    return Minutes;
}());
var Hours = /** @class */ (function () {
    function Hours() {
    }
    Hours.prototype.toMillis = function (value) {
        return 3600000 * value;
    };
    Hours.prototype.toSeconds = function (value) {
        return 3600 * value;
    };
    Hours.prototype.toMinutes = function (value) {
        return 60 * value;
    };
    Hours.prototype.toHours = function (value) {
        return value;
    };
    Hours.prototype.toDays = function (value) {
        return floor(value / 24);
    };
    return Hours;
}());
var Days = /** @class */ (function () {
    function Days() {
    }
    Days.prototype.toMillis = function (value) {
        return 86400000 * value;
    };
    Days.prototype.toSeconds = function (value) {
        return 86400 * value;
    };
    Days.prototype.toMinutes = function (value) {
        return 1440 * value;
    };
    Days.prototype.toHours = function (value) {
        return 24 * value;
    };
    Days.prototype.toDays = function (value) {
        return value;
    };
    return Days;
}());
var MILLIS = new Millis();
var SECONDS = new Seconds();
var MINUTES = new Minutes();
var HOURS = new Hours();
var DAYS = new Days();


/***/ }),

/***/ "./src/components/web/common/forms/customscroll/CustomScroll.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initArtificialScrollForElement", function() { return initArtificialScrollForElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inScrollingMode", function() { return inScrollingMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopScrollingCurrentElement", function() { return stopScrollingCurrentElement; });
/* harmony import */ var general_utils_createComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/general/utils/createComponent.ts");
/* harmony import */ var general_utils_createNgModuleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/general/utils/createNgModuleWrapper.ts");
/* harmony import */ var general_helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/general/helpers/utils.ts");



function register() {
    Object(general_utils_createNgModuleWrapper__WEBPACK_IMPORTED_MODULE_1__["getRtbApp"])().directive('customScroll', directive);
}
/**
 * Код взят отсюда и доведен до ума:
 * https://github.com/ariya/kinetic/blob/master/2/scroll.js
 *
 * Объяснение как это работает:
 * https://ariya.io/2013/11/javascript-kinetic-scrolling-part-2
 *
 * Работает в связке с кастомизацией в тулбраре и каталоге,
 * для использования где-то еще рекомендуется особой эмоциональный настрой.
 */
function directive() {
    return Object(general_utils_createComponent__WEBPACK_IMPORTED_MODULE_0__["default"])({
        restrict: 'A',
        link: function (scope, element) {
            element.attr('no-prevent-default', 'true');
            var destroyFn = initArtificialScrollForElement(element[0]);
            scope.$on('$destroy', destroyFn);
        },
    });
}
function initArtificialScrollForElement(view) {
    var timeConstantInMS = 325;
    var reference;
    var doStopPropagation = false;
    var velocity;
    var frame;
    var timestamp;
    var trackIntervalId;
    var amplitude;
    var target;
    var max = getMax();
    var min = 0;
    var offset = 0;
    var prevScrollHeight;
    var viewScrollHeightChanged = false;
    function getMax() {
        return view.scrollHeight - parseInt(getComputedStyle(view).height, 10);
    }
    function ypos(e) {
        // touch event
        if (e.targetTouches && e.targetTouches.length >= 1) {
            return e.targetTouches[0].clientY;
        }
        // mouse event
        return e.clientY;
    }
    function scroll(y) {
        if (viewScrollHeightChanged) {
            return false;
        }
        var continueAutoScroll = true;
        if (y > max) {
            offset = max;
            continueAutoScroll = false;
        }
        else if (y < min) {
            offset = min;
            continueAutoScroll = false;
        }
        else {
            offset = y;
        }
        view.scrollTop = offset;
        return continueAutoScroll;
    }
    function track() {
        var now, elapsed, delta, v;
        now = Date.now();
        elapsed = now - timestamp;
        timestamp = now;
        delta = offset - frame;
        frame = offset;
        v = (1000 * delta) / (1 + elapsed);
        velocity = 0.8 * v + 0.2 * velocity;
    }
    function autoScroll() {
        var elapsed, delta;
        if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = -amplitude * Math.exp(-elapsed / timeConstantInMS);
            if (delta > 0.5 || delta < -0.5) {
                var continueAutoScroll = scroll(target + delta);
                doStopPropagation = continueAutoScroll;
                if (continueAutoScroll) {
                    requestAnimationFrame(autoScroll);
                }
            }
            else {
                doStopPropagation = false;
                scroll(target);
            }
        }
    }
    function tap(e) {
        if (Object(general_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["checkElementAndParents"])(e.target, function (element) { return element.hasAttribute('no-custom-scroll'); })) {
            return;
        }
        document.addEventListener('touchmove', drag);
        document.addEventListener('touchend', release);
        forceStopScrollingCallback = stopTrack;
        viewScrollHeightChanged = false;
        reference = ypos(e);
        velocity = amplitude = 0;
        frame = offset;
        timestamp = Date.now();
        clearInterval(trackIntervalId);
        trackIntervalId = setInterval(track, 100);
        if (!isInputTarget(e)) {
            e.preventDefault();
        }
        if (doStopPropagation) {
            doStopPropagation = false;
            e.stopPropagation();
        }
    }
    function isInputTarget(e) {
        var targetElement = e.target;
        if (targetElement) {
            return (targetElement.tagName === 'A' ||
                targetElement.tagName === 'INPUT' ||
                targetElement.tagName === 'TEXTAREA' ||
                targetElement.tagName === 'SELECT' ||
                targetElement.tagName === 'BUTTON');
        }
        else {
            return false;
        }
    }
    function drag(e) {
        var y = ypos(e);
        var delta = reference - y;
        if (delta > 5 || delta < -5) {
            reference = y;
            currentScrollingElement = view;
            scroll(offset + delta);
        }
        e.preventDefault();
        return false;
    }
    function release(e) {
        stopTrack();
        if (velocity > 10 || velocity < -10) {
            amplitude = 0.8 * velocity;
            target = Math.round(offset + amplitude);
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
        }
    }
    function stopTrack() {
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', release);
        currentScrollingElement = undefined;
        clearInterval(trackIntervalId);
    }
    function onScrollHeightChanged() {
        max = getMax();
        currentScrollingElement = undefined;
        viewScrollHeightChanged = true;
        velocity = amplitude = 0;
    }
    function onScrollHeightCheck() {
        if (prevScrollHeight !== view.scrollHeight) {
            prevScrollHeight = view.scrollHeight;
            onScrollHeightChanged();
        }
    }
    currentScrollingElement = undefined;
    var scrollHeightCheckIntervalId = setInterval(onScrollHeightCheck, 200);
    view.addEventListener('touchstart', tap, true);
    return function destroy() {
        currentScrollingElement = undefined;
        clearInterval(scrollHeightCheckIntervalId);
        view.removeEventListener('touchstart', tap, true);
        // перестраховка, если скоп разрушится во время скрола
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', release);
        clearInterval(trackIntervalId);
    };
}
var currentScrollingElement;
var forceStopScrollingCallback;
function inScrollingMode(element) {
    return !!element && element === currentScrollingElement;
}
function stopScrollingCurrentElement() {
    if (forceStopScrollingCallback) {
        forceStopScrollingCallback();
    }
}


/***/ }),

/***/ "./src/general/events/Event.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var defaultPreventDefault = function () { return undefined; };
var Event = /** @class */ (function () {
    function Event(type, data, preventDefault) {
        this.type = type;
        this.data = data;
        this.preventDefault = preventDefault || defaultPreventDefault;
    }
    return Event;
}());
/* harmony default export */ __webpack_exports__["default"] = (Event);


/***/ }),

/***/ "./src/general/events/EventDispatcher.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this._listeners = {};
        this._removedListenersCount = 0;
    }
    EventDispatcher.prototype.addEventListener = function (type, listener, thisArg) {
        if (thisArg === void 0) { thisArg = null; }
        return this.addListenerWrapper(type, { thisArg: thisArg, listener: listener, removed: false });
    };
    EventDispatcher.prototype.addEventListenerOnce = function (type, listener, thisArg) {
        if (thisArg === void 0) { thisArg = null; }
        return this.addListenerWrapper(type, { thisArg: thisArg, listener: listener, removed: false, once: true });
    };
    EventDispatcher.prototype.addListenerWrapper = function (type, listenerWrapper) {
        if (!this._listeners[type]) {
            this._listeners[type] = [];
        }
        if (!this.findListenerWrapper(type, listenerWrapper.listener, listenerWrapper.thisArg)) {
            this._listeners[type].push(listenerWrapper);
            return true;
        }
        return false;
    };
    EventDispatcher.prototype.hasEventListener = function (type, listener, thisArg) {
        if (thisArg === void 0) { thisArg = null; }
        return !!(this._listeners[type] && this.findListenerWrapper(type, listener, thisArg));
    };
    EventDispatcher.prototype.findListenerWrapper = function (type, listener, thisArg) {
        return this._listeners[type].find(function (el) { return el.thisArg === thisArg && el.listener === listener && el.removed === false; });
    };
    EventDispatcher.prototype.removeEventListener = function (type, listener, thisArg) {
        if (thisArg === void 0) { thisArg = null; }
        var listeners = this._listeners[type];
        var listenerHasBeenRemoved = false;
        if (listeners) {
            var index = this._listeners[type].findIndex(function (el) { return el.thisArg === thisArg && el.listener === listener && el.removed === false; });
            if (index !== -1) {
                if (this._inDispatch) {
                    this._removedListenersCount++;
                    listeners[index].removed = true;
                }
                else {
                    listeners.splice(index, 1);
                }
                listenerHasBeenRemoved = true;
            }
        }
        return listenerHasBeenRemoved;
    };
    EventDispatcher.prototype.dispatchEvent = function (event) {
        var _this = this;
        var listenerWrappers = this._listeners[event.type];
        this._inDispatch = true;
        if (listenerWrappers) {
            event.target = this;
            listenerWrappers.some(function (listenerWrapper) {
                var needStopEvent = false;
                if (!listenerWrapper.removed) {
                    var result = listenerWrapper.listener.call(listenerWrapper.thisArg, event);
                    if (result === false) {
                        needStopEvent = true;
                    }
                    if (listenerWrapper.once) {
                        _this.removeEventListener(event.type, listenerWrapper.listener, listenerWrapper.thisArg);
                    }
                }
                return needStopEvent;
            });
            if (this._removedListenersCount > 0) {
                this._removedListenersCount = 0;
                this._listeners[event.type] = listenerWrappers.filter(function (wrapper) { return !wrapper.removed; });
            }
        }
        this._inDispatch = false;
    };
    return EventDispatcher;
}());
/* harmony default export */ __webpack_exports__["default"] = (EventDispatcher);


/***/ }),

/***/ "./src/general/helpers/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHTMLColor", function() { return getHTMLColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvasColor", function() { return getCanvasColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToTimestamp", function() { return dateToTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translatePosition", function() { return translatePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberFromRange", function() { return getNumberFromRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDomain", function() { return validateDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkElementAndParents", function() { return checkElementAndParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return arrayBufferToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64toBlob", function() { return b64toBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omitUnsetParameters", function() { return omitUnsetParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round100", function() { return round100; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceCtrlOrCmd", function() { return replaceCtrlOrCmd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelRatio", function() { return pixelRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverToLocalMs", function() { return serverToLocalMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localToServerMs", function() { return localToServerMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostName", function() { return getHostName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestValue", function() { return getClosestValue; });
/* harmony import */ var chatmodelsbase_platform_client_models_chat_type_TimestampData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/chatmodelsbase/platform/client/models/chat/type/TimestampData.ts");
/* harmony import */ var commons_TimeUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/commons/TimeUnit.ts");
/* harmony import */ var general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/general/utils/OSName.ts");



function getHTMLColor(intColor, withHash) {
    if (withHash === void 0) { withHash = true; }
    var color = 'transparent';
    if (intColor !== -1) {
        var hexColor = (intColor || 0).toString(16);
        while (hexColor.length < 6) {
            hexColor = '0' + hexColor;
        }
        color = withHash ? '#' + hexColor : hexColor;
    }
    return color;
}
function getCanvasColor(hexColor) {
    var color = 'transparent';
    var re = /^#([0-9a-f]{6})$/i;
    if (hexColor && re.test(hexColor)) {
        color = parseInt(hexColor.substr(1), 16);
    }
    return color;
}
function getDate(timestamp, UTC) {
    if (UTC === void 0) { UTC = true; }
    if (UTC) {
        return new Date(Date.UTC(timestamp.year, timestamp.month - 1, timestamp.day, timestamp.hours, timestamp.minutes, timestamp.seconds));
    }
    else {
        return new Date(timestamp.year, timestamp.month - 1, timestamp.day, timestamp.hours, timestamp.minutes, timestamp.seconds);
    }
}
function dateToTimestamp(date) {
    if (date === void 0) { date = new Date(); }
    return new chatmodelsbase_platform_client_models_chat_type_TimestampData__WEBPACK_IMPORTED_MODULE_0__["default"](date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCMonth() + 1, date.getUTCSeconds(), date.getUTCFullYear());
}
function translatePosition($element, position) {
    var x = Math.floor(position.x);
    var y = Math.floor(position.y);
    var translateVal = 'translate(' + x + 'px,' + y + 'px)';
    if ($element) {
        $element.css('transform', translateVal);
    }
}
function getNumberFromRange(value, min, max) {
    if (value < min) {
        return min;
    }
    else if (value > max) {
        return max;
    }
    else {
        return value;
    }
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validateDomain(domainName) {
    var re = /^(?!\S*@)([\w\-]+\.)+\w+$/;
    return re.test(domainName);
}
function checkElementAndParents(element, condition) {
    var body = document.body;
    var res;
    do {
        res = condition(element);
        element = element.parentElement;
    } while (!(res || element == null || element == body));
    return !!res;
}
function arrayBufferToBase64(buffer) {
    //todo косяк с киррилицей, возможно проблема не здесь
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}
function b64toBlob(b64Data, contentType, sliceSize) {
    if (contentType === void 0) { contentType = ''; }
    if (sliceSize === void 0) { sliceSize = 512; }
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
}
function omitUnsetParameters(obj) {
    if (obj === void 0) { obj = {}; }
    var res = {};
    for (var p in obj) {
        if (obj[p] !== undefined && obj[p] !== null) {
            res[p] = obj[p];
        }
    }
    return res;
}
function round100(val) {
    return Math.round(val * 100) / 100;
}
var ctrlOrCmd = general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["CURRENT_OS_NAME"] === general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["OS_NAME"].MAC ? '⌘' : 'Ctrl';
var altOrOpt = general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["CURRENT_OS_NAME"] === general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["OS_NAME"].MAC ? '⌥' : 'Alt';
var ctrlOrCmdWithText = general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["CURRENT_OS_NAME"] === general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["OS_NAME"].MAC ? 'Cmd ⌘' : 'Ctrl';
var pageUp = general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["CURRENT_OS_NAME"] === general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["OS_NAME"].MAC ? 'fn + ↑' : 'PgUp';
var pageDown = general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["CURRENT_OS_NAME"] === general_utils_OSName__WEBPACK_IMPORTED_MODULE_2__["OS_NAME"].MAC ? 'fn + ↓' : 'PgDn';
function replaceCtrlOrCmd(str) {
    return str
        .replace(/%pageUp%/g, pageUp)
        .replace(/%pageDown%/g, pageDown)
        .replace(/%altOrOpt%/g, altOrOpt)
        .replace(/%ctrlOrCmd%/g, ctrlOrCmd)
        .replace(/%ctrlOrCmdWithText%/g, ctrlOrCmdWithText);
}
var pixelRatio = window.devicePixelRatio || 1;
function serverToLocalMs(serverTime) {
    return serverTime + commons_TimeUnit__WEBPACK_IMPORTED_MODULE_1__["MINUTES"].toMillis(new Date().getTimezoneOffset());
}
function localToServerMs(localTime) {
    return localTime - commons_TimeUnit__WEBPACK_IMPORTED_MODULE_1__["MINUTES"].toMillis(new Date().getTimezoneOffset());
}
function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    }
    return null;
}
function getClosestValue(v, vals) {
    var closestValue = v;
    var minDist = Number.MAX_VALUE;
    for (var i = 0; i < vals.length; i++) {
        var dist = Math.abs(vals[i] - v);
        if (dist < minDist) {
            minDist = dist;
            closestValue = vals[i];
        }
    }
    return closestValue;
}


/***/ }),

/***/ "./src/general/shared-modules/sdk/SuperCommand.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SuperCommand;
(function (SuperCommand) {
    SuperCommand["HELLO_APP_FROM_IFRAME"] = "HELLO_APP_FROM_IFRAME";
    SuperCommand["HELLO_IFRAME_FROM_APP"] = "HELLO_IFRAME_FROM_APP";
    SuperCommand["IFRAME_CHANNEL_COMMAND"] = "IFRAME_CHANNEL_COMMAND";
})(SuperCommand || (SuperCommand = {}));
/* harmony default export */ __webpack_exports__["default"] = (SuperCommand);


/***/ }),

/***/ "./src/general/shared-modules/sdk/logChannelCommand.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logChannelCommand; });
/* harmony import */ var general_shared_modules_sdk_SuperCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/general/shared-modules/sdk/SuperCommand.ts");

function logChannelCommand(who, color, e, showResponses) {
    if (showResponses === void 0) { showResponses = false; }
    if (e.data.rtbSuperCommandID) {
        if (e.data.rtbSuperCommandID === general_shared_modules_sdk_SuperCommand__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_CHANNEL_COMMAND) {
            if (e.data.data.commandId === 'IS_RESPONSE_FOR_SOME_COMMAND' && !showResponses) {
                return;
            }
            console.info("%c" + who, "color: " + color + ";", e.data.data.commandId, e.data);
        }
        else {
            console.info("%c" + who, "color: " + color + ";", e.data);
        }
    }
}


/***/ }),

/***/ "./src/general/shared-modules/sdk/remote/IFramePluginCommandsReceiver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/common/connectors2/ConnectorsUtils.ts");
/* harmony import */ var general_events_Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/general/events/Event.ts");



var resolvedTruePromise = Promise.resolve(true);
function isMenuItemValid(item) {
    if (typeof item !== 'object') {
        console.warn("WidgetMenuItem is '" + typeof item + "', but have to be 'object'");
        return false;
    }
    if (!item.hasOwnProperty('tooltip') || typeof item.tooltip !== 'string') {
        console.warn("WidgetMenuItem.tooltip is '" + typeof item.tooltip + "', but have to be 'string'");
        return false;
    }
    if (!item.hasOwnProperty('svgIcon') || typeof item.svgIcon !== 'string') {
        console.warn("WidgetMenuItem.svgIcon is '" + typeof item.svgIcon + "', but have to be 'string'");
        return false;
    }
    if (!item.hasOwnProperty('onClick') || typeof item.onClick !== 'function') {
        console.warn("WidgetMenuItem.onClick is '" + typeof item.onClick + "', but have to be 'function'");
        return false;
    }
    return true;
}
/**
 * This class is used to allow plugins to receive commands
 */
var IFramePluginCommandsReceiver = /** @class */ (function () {
    function IFramePluginCommandsReceiver(eventDispatcher) {
        this.buttonsClickListeners = {};
        this.menuItemsClickListeners = {};
        this.currentDraggableItemOptions = {};
        this.eventDispatcher = eventDispatcher;
    }
    IFramePluginCommandsReceiver.prototype.setDraggableItemOption = function (containerId, options) {
        this.currentDraggableItemOptions[containerId] = options;
    };
    IFramePluginCommandsReceiver.prototype.setDraggableItem = function (element) {
        this.currentDraggableItem = element;
    };
    IFramePluginCommandsReceiver.prototype.addOnWidgetSelectedListener = function (listener) {
        if (typeof listener !== 'function') {
            console.warn("getWidgetMenuItems but have to be 'function'");
        }
        else {
            this.getMenuItems = listener;
        }
    };
    IFramePluginCommandsReceiver.prototype.addButtonClickListener = function (epName, onClick) {
        this.buttonsClickListeners[epName] = onClick;
    };
    IFramePluginCommandsReceiver.prototype.onWidgetsSelected = function (widgets, editMode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var items;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMenuItems(widgets, editMode)];
                    case 1:
                        items = _a.sent();
                        if (!Array.isArray(items)) {
                            items = [items];
                        }
                        if (items.every(isMenuItemValid)) {
                            items.forEach(function (item, index) {
                                if (item.onClick) {
                                    _this.menuItemsClickListeners["widgetMenuItems_" + index] = item.onClick;
                                }
                            });
                            return [2 /*return*/, items.map(function (m) { return ({
                                    tooltip: m.tooltip,
                                    svgIcon: m.svgIcon,
                                }); })];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IFramePluginCommandsReceiver.prototype.callMenuItemClickListener = function (index) {
        this.menuItemsClickListeners["widgetMenuItems_" + index]();
    };
    IFramePluginCommandsReceiver.prototype.dispatchEvent = function (event) {
        var preventDefaultBehaviour = false;
        this.eventDispatcher.dispatchEvent(new general_events_Event__WEBPACK_IMPORTED_MODULE_2__["default"](event.type, event.data, function () {
            preventDefaultBehaviour = true;
        }));
        return Promise.resolve(preventDefaultBehaviour);
    };
    // Main iframe only
    IFramePluginCommandsReceiver.prototype.callExtensionPointClickListener = function (extensionPointName) {
        this.buttonsClickListeners[extensionPointName]();
    };
    // Temp iframe only
    IFramePluginCommandsReceiver.prototype.areYouAlive = function () {
        return resolvedTruePromise;
    };
    ///////////////////////////////////////////////////////////////////////////
    // drag-and-drop methods
    ///////////////////////////////////////////////////////////////////////////
    IFramePluginCommandsReceiver.prototype.currentDraggableItemDropped = function (id, canvasX, canvasY) {
        if (this.currentDraggableItemOptions[id] && this.currentDraggableItem) {
            this.currentDraggableItemOptions[id].onDrop(canvasX, canvasY, this.currentDraggableItem);
        }
    };
    IFramePluginCommandsReceiver.prototype.currentDraggableItemCanceled = function (id) {
        var _a;
        var onCancel = (_a = this.currentDraggableItemOptions[id]) === null || _a === void 0 ? void 0 : _a.onCancel;
        if (onCancel) {
            onCancel();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_1__["remote"]
    ], IFramePluginCommandsReceiver.prototype, "onWidgetsSelected", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_1__["remote"]
    ], IFramePluginCommandsReceiver.prototype, "callMenuItemClickListener", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_1__["remote"]
    ], IFramePluginCommandsReceiver.prototype, "dispatchEvent", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_1__["remote"]
    ], IFramePluginCommandsReceiver.prototype, "callExtensionPointClickListener", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_1__["remote"]
    ], IFramePluginCommandsReceiver.prototype, "areYouAlive", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_1__["remote"]
    ], IFramePluginCommandsReceiver.prototype, "currentDraggableItemDropped", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_1__["remote"]
    ], IFramePluginCommandsReceiver.prototype, "currentDraggableItemCanceled", null);
    return IFramePluginCommandsReceiver;
}());
/* harmony default export */ __webpack_exports__["default"] = (IFramePluginCommandsReceiver);


/***/ }),

/***/ "./src/general/utils/OSName.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_NAME", function() { return OS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_OS_NAME", function() { return CURRENT_OS_NAME; });
var OS_NAME = {
    UNKNOWN: 'Unknown OS',
    WIN: 'Windows',
    MAC: 'MacOS',
    UNIX: 'UNIX',
    LINUX: 'Linux',
    ANDROID: 'android',
    IOS: 'ios',
};
var currentOSName = OS_NAME.UNKNOWN;
if (navigator.appVersion.indexOf('Win') != -1) {
    currentOSName = OS_NAME.WIN;
}
if (navigator.appVersion.indexOf('Mac') != -1) {
    currentOSName = OS_NAME.MAC;
}
if (navigator.appVersion.indexOf('X11') != -1) {
    currentOSName = OS_NAME.UNIX;
}
if (navigator.appVersion.indexOf('Linux') != -1) {
    currentOSName = OS_NAME.LINUX;
}
if (navigator.appVersion.indexOf('Android') != -1) {
    currentOSName = OS_NAME.ANDROID;
}
if (/iPad|iPhone|iPod/.test(navigator.platform)) {
    currentOSName = OS_NAME.IOS;
}
var CURRENT_OS_NAME = currentOSName;


/***/ }),

/***/ "./src/general/utils/createComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (config) {
    return Object.assign({}, {
        replace: true,
        restrict: 'E',
        scope: {},
    }, config);
});


/***/ }),

/***/ "./src/general/utils/createNgModuleWrapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createNgModuleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getOriginalRtbApp", function() { return __getOriginalRtbApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtbApp", function() { return getRtbApp; });
var registeredComponents = {};
var rtbAppInstance;
var origRtbAppInstance;
/**
 * Ангуляр ругается, если попытаться зарегать в нем две директивы с изолированным скопом с одинаковым названием (Error: $compile:multidir).
 * Это прослойка уберегает нас от этого.
 */
function createNgModuleWrapper(rtbApp, clear) {
    if (clear === void 0) { clear = false; }
    if (clear) {
        registeredComponents = {};
    }
    origRtbAppInstance = rtbApp;
    rtbAppInstance = {
        directive: function (name, directiveFactory) {
            if (!registeredComponents[name]) {
                rtbApp.directive(name, directiveFactory);
                registeredComponents[name] = true;
            }
            return rtbApp;
        },
        controller: function (name, constructor) { return rtbApp.controller(name, constructor); },
        component: function (name, componentOptions) {
            if (!registeredComponents[name]) {
                rtbApp.component(name, componentOptions);
                registeredComponents[name] = true;
            }
            return rtbApp;
        },
    };
    return rtbAppInstance;
}
function __getOriginalRtbApp() {
    return origRtbAppInstance;
}
function getRtbApp() {
    if (rtbAppInstance) {
        return rtbAppInstance;
    }
    else {
        throw new Error('rtbApp wrapper does not created yet');
    }
}


/***/ }),

/***/ "./src/general/utils/idGenerator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueNumberId", function() { return getUniqueNumberId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomString", function() { return getRandomString; });
var currentId = 0;
function getUniqueNumberId() {
    return ++currentId;
}
function getRandomString(length, chars) {
    if (length === void 0) { length = 20; }
    var text = '';
    if (!chars) {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
    for (var i = 0; i < length; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}


/***/ }),

/***/ "./src/general/utils/mouseUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTriggers", function() { return getTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMouseAndTouchTriggers", function() { return getMouseAndTouchTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTarget", function() { return getEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginalEvent", function() { return getOriginalEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactPointInfo", function() { return getContactPointInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientXY", function() { return getClientXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFakeMouseEvent", function() { return createFakeMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetStartOffset", function() { return getTargetStartOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needToOpenInNewTab", function() { return needToOpenInNewTab; });
function getTriggers() {
    if (bowser.isTouchSupportedAndNotDesktop) {
        return {
            //todo touchend != click
            click: 'touchend',
            down: 'touchstart',
            up: 'touchend',
            move: 'touchmove',
        };
    }
    else {
        return {
            click: 'click',
            down: 'mousedown',
            up: 'mouseup',
            move: 'mousemove',
        };
    }
}
function getMouseAndTouchTriggers() {
    return {
        click: 'click touchend',
        down: 'mousedown touchstart',
        up: 'mouseup touchend',
        move: 'mousemove touchmove',
    };
}
function getEventTarget(e) {
    var originalEvent = getOriginalEvent(e);
    if (originalEvent.touches) {
        var pos = getClientXY(e);
        return document.elementFromPoint(pos.x, pos.y);
    }
    else {
        return originalEvent.target;
    }
}
function getOriginalEvent(e) {
    return e.originalEvent ? e.originalEvent : e;
}
function getContactPointInfo(e) {
    var originalEvent = getOriginalEvent(e);
    if (originalEvent.touches) {
        return originalEvent.touches[0];
    }
    else {
        return originalEvent;
    }
}
function getClientXY(e) {
    var contactPoint = getContactPointInfo(e);
    return { x: contactPoint.clientX, y: contactPoint.clientY };
}
var fakePreventDefault = function () { return undefined; };
var fakeStopPropagation = function () { return undefined; };
function createFakeMouseEvent(x, y) {
    return {
        clientX: x,
        clientY: y,
        preventDefault: fakePreventDefault,
        stopPropagation: fakeStopPropagation,
    };
}
function getTargetStartOffset(e) {
    var target = getEventTarget(e);
    var pos = getClientXY(e);
    var targetOffset = target.getBoundingClientRect();
    return {
        x: pos.x - targetOffset.left,
        y: pos.y - targetOffset.top,
    };
}
function needToOpenInNewTab(e) {
    return !!e && (e.button == 1 || e.shiftKey || e.ctrlKey || e.metaKey);
}


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/BorderStyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BorderStyle;
(function (BorderStyle) {
    BorderStyle[BorderStyle["DOTTED"] = 0] = "DOTTED";
    BorderStyle[BorderStyle["DASHED"] = 1] = "DASHED";
    BorderStyle[BorderStyle["NORMAL"] = 2] = "NORMAL";
})(BorderStyle || (BorderStyle = {}));
/* harmony default export */ __webpack_exports__["default"] = (BorderStyle);


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/FontFamily.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFamily", function() { return FontFamily; });
var FontFamily;
(function (FontFamily) {
    // Dont change the order, fonts effected
    FontFamily[FontFamily["ARIAL"] = 0] = "ARIAL";
    FontFamily[FontFamily["CURSIVE"] = 1] = "CURSIVE";
    FontFamily[FontFamily["ABRIL_FATFACE"] = 2] = "ABRIL_FATFACE";
    FontFamily[FontFamily["BANGERS"] = 3] = "BANGERS";
    FontFamily[FontFamily["EB_GARAMOND"] = 4] = "EB_GARAMOND";
    FontFamily[FontFamily["GEORGIA"] = 5] = "GEORGIA";
    FontFamily[FontFamily["GRADUATE"] = 6] = "GRADUATE";
    FontFamily[FontFamily["GRAVITAS_ONE"] = 7] = "GRAVITAS_ONE";
    FontFamily[FontFamily["FREDOKA_ONE"] = 8] = "FREDOKA_ONE";
    FontFamily[FontFamily["NIXIE_ONE"] = 9] = "NIXIE_ONE";
    FontFamily[FontFamily["OPEN_SANS"] = 10] = "OPEN_SANS";
    FontFamily[FontFamily["PERMANENT_MARKER"] = 11] = "PERMANENT_MARKER";
    FontFamily[FontFamily["PT_SANS"] = 12] = "PT_SANS";
    FontFamily[FontFamily["PT_SANS_NARROW"] = 13] = "PT_SANS_NARROW";
    FontFamily[FontFamily["PT_SERIF"] = 14] = "PT_SERIF";
    FontFamily[FontFamily["RAMMETTO_ONE"] = 15] = "RAMMETTO_ONE";
    FontFamily[FontFamily["ROBOTO"] = 16] = "ROBOTO";
    FontFamily[FontFamily["ROBOTO_CONDENSED"] = 17] = "ROBOTO_CONDENSED";
    FontFamily[FontFamily["ROBOTO_SLAB"] = 18] = "ROBOTO_SLAB";
    FontFamily[FontFamily["CAVEAT"] = 19] = "CAVEAT";
    FontFamily[FontFamily["TIMES_NEW_ROMAN"] = 20] = "TIMES_NEW_ROMAN";
    FontFamily[FontFamily["TITAN_ONE"] = 21] = "TITAN_ONE";
    FontFamily[FontFamily["LEMON_TUESDAY"] = 22] = "LEMON_TUESDAY";
    FontFamily[FontFamily["ROBOTO_MONO"] = 23] = "ROBOTO_MONO";
    FontFamily[FontFamily["NOTO_SANS"] = 24] = "NOTO_SANS";
    FontFamily[FontFamily["PLEX_SANS"] = 25] = "PLEX_SANS";
    FontFamily[FontFamily["PLEX_SERIF"] = 26] = "PLEX_SERIF";
    FontFamily[FontFamily["PLEX_MONO"] = 27] = "PLEX_MONO";
})(FontFamily || (FontFamily = {}));
/* harmony default export */ __webpack_exports__["default"] = (FontFamily);


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/LineStyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LineStyle;
(function (LineStyle) {
    LineStyle[LineStyle["DASHED"] = 1] = "DASHED";
    LineStyle[LineStyle["NORMAL"] = 2] = "NORMAL";
    LineStyle[LineStyle["STRONG"] = 3] = "STRONG";
    LineStyle[LineStyle["DOTTED"] = 4] = "DOTTED";
})(LineStyle || (LineStyle = {}));
/* harmony default export */ __webpack_exports__["default"] = (LineStyle);


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/LineTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LineTypes;
(function (LineTypes) {
    LineTypes[LineTypes["LINE"] = 1] = "LINE";
    LineTypes[LineTypes["ARROW"] = 2] = "ARROW";
    LineTypes[LineTypes["ARROW_SKETCH"] = 9] = "ARROW_SKETCH";
})(LineTypes || (LineTypes = {}));
/* harmony default export */ __webpack_exports__["default"] = (LineTypes);


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/LinkArrowhead.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LinkArrowhead;
(function (LinkArrowhead) {
    LinkArrowhead[LinkArrowhead["NONE"] = 0] = "NONE";
    LinkArrowhead[LinkArrowhead["ARC_ARROW"] = 1] = "ARC_ARROW";
    LinkArrowhead[LinkArrowhead["RHOMBUS"] = 2] = "RHOMBUS";
    LinkArrowhead[LinkArrowhead["FILLED_RHOMBUS"] = 3] = "FILLED_RHOMBUS";
    LinkArrowhead[LinkArrowhead["CIRCLE"] = 4] = "CIRCLE";
    LinkArrowhead[LinkArrowhead["FILLED_CIRCLE"] = 5] = "FILLED_CIRCLE";
    LinkArrowhead[LinkArrowhead["ARROW"] = 6] = "ARROW";
    LinkArrowhead[LinkArrowhead["OPEN_ARROW"] = 7] = "OPEN_ARROW";
    LinkArrowhead[LinkArrowhead["FILLED_ARROW"] = 8] = "FILLED_ARROW";
})(LinkArrowhead || (LinkArrowhead = {}));
/* harmony default export */ __webpack_exports__["default"] = (LinkArrowhead);


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/ShapeTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Новые типы шейпов нужно добавлять на сервер
var ShapeType;
(function (ShapeType) {
    // LINE = 1,
    // ARROW = 2,
    ShapeType[ShapeType["RECTANGLE"] = 3] = "RECTANGLE";
    ShapeType[ShapeType["CIRCLE"] = 4] = "CIRCLE";
    ShapeType[ShapeType["TRIANGLE"] = 5] = "TRIANGLE";
    ShapeType[ShapeType["BUBBLE"] = 6] = "BUBBLE";
    ShapeType[ShapeType["ROUNDER"] = 7] = "ROUNDER";
    ShapeType[ShapeType["RHOMBUS"] = 8] = "RHOMBUS";
    // ARROW_SKETCH = 9,
    ShapeType[ShapeType["PARALL"] = 10] = "PARALL";
    ShapeType[ShapeType["STAR"] = 11] = "STAR";
    ShapeType[ShapeType["ARROW_RIGHT"] = 12] = "ARROW_RIGHT";
    ShapeType[ShapeType["ARROW_LEFT"] = 13] = "ARROW_LEFT";
    ShapeType[ShapeType["TEXT_RECT"] = 14] = "TEXT_RECT";
    ShapeType[ShapeType["PILL"] = 15] = "PILL";
    ShapeType[ShapeType["PENTAGON"] = 16] = "PENTAGON";
    ShapeType[ShapeType["HEXAGON"] = 17] = "HEXAGON";
    ShapeType[ShapeType["OCTAGON"] = 18] = "OCTAGON";
    ShapeType[ShapeType["TRAPEZE"] = 19] = "TRAPEZE";
    ShapeType[ShapeType["PREDEFINED_PROCESS"] = 20] = "PREDEFINED_PROCESS";
    ShapeType[ShapeType["ARROW_LEFT_RIGHT"] = 21] = "ARROW_LEFT_RIGHT";
    ShapeType[ShapeType["CLOUD"] = 22] = "CLOUD";
    ShapeType[ShapeType["BRACE_LEFT"] = 23] = "BRACE_LEFT";
    ShapeType[ShapeType["BRACE_RIGHT"] = 24] = "BRACE_RIGHT";
    ShapeType[ShapeType["CROSS"] = 25] = "CROSS";
    ShapeType[ShapeType["BARREL"] = 26] = "BARREL";
})(ShapeType || (ShapeType = {}));
/* harmony default export */ __webpack_exports__["default"] = (ShapeType);


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/StickerTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var StickerTypes;
(function (StickerTypes) {
    StickerTypes[StickerTypes["SQUARE"] = 0] = "SQUARE";
    StickerTypes[StickerTypes["RECTANGLE"] = 1] = "RECTANGLE";
})(StickerTypes || (StickerTypes = {}));
/* harmony default export */ __webpack_exports__["default"] = (StickerTypes);


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/TextAlign.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TextAlign;
(function (TextAlign) {
    TextAlign["LEFT"] = "l";
    TextAlign["CENTER"] = "c";
    TextAlign["RIGHT"] = "r";
})(TextAlign || (TextAlign = {}));
/* harmony default export */ __webpack_exports__["default"] = (TextAlign);


/***/ }),

/***/ "./src/lazy-modules/board/canvas/commons/enums/TextAlignVertical.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TextAlignVertical;
(function (TextAlignVertical) {
    TextAlignVertical["TOP"] = "t";
    TextAlignVertical["MIDDLE"] = "m";
    TextAlignVertical["BOTTOM"] = "b";
})(TextAlignVertical || (TextAlignVertical = {}));
/* harmony default export */ __webpack_exports__["default"] = (TextAlignVertical);


/***/ }),

/***/ "./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/SDKEnums.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return attachEnums; });
/* harmony import */ var lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_SDKEventType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/SDKEventType.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_ShapeTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/ShapeTypes.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_StickerTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/StickerTypes.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_BorderStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/BorderStyle.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_FontFamily__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/FontFamily.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_LineStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/LineStyle.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_LinkArrowhead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/LinkArrowhead.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_TextAlign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/TextAlign.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_LineTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/LineTypes.ts");
/* harmony import */ var lazy_modules_board_canvas_commons_enums_TextAlignVertical__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/lazy-modules/board/canvas/commons/enums/TextAlignVertical.ts");










function attachEnums(sdkInstance) {
    sdkInstance.enums = {
        event: lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_SDKEventType__WEBPACK_IMPORTED_MODULE_0__["default"],
        shapeType: lazy_modules_board_canvas_commons_enums_ShapeTypes__WEBPACK_IMPORTED_MODULE_1__["default"],
        stickerType: lazy_modules_board_canvas_commons_enums_StickerTypes__WEBPACK_IMPORTED_MODULE_2__["default"],
        borderStyle: lazy_modules_board_canvas_commons_enums_BorderStyle__WEBPACK_IMPORTED_MODULE_3__["default"],
        fontFamily: lazy_modules_board_canvas_commons_enums_FontFamily__WEBPACK_IMPORTED_MODULE_4__["default"],
        textAlign: lazy_modules_board_canvas_commons_enums_TextAlign__WEBPACK_IMPORTED_MODULE_7__["default"],
        textAlignVertical: lazy_modules_board_canvas_commons_enums_TextAlignVertical__WEBPACK_IMPORTED_MODULE_9__["default"],
        lineStyle: lazy_modules_board_canvas_commons_enums_LineStyle__WEBPACK_IMPORTED_MODULE_5__["default"],
        lineType: lazy_modules_board_canvas_commons_enums_LineTypes__WEBPACK_IMPORTED_MODULE_8__["default"],
        lineArrowheadStyle: lazy_modules_board_canvas_commons_enums_LinkArrowhead__WEBPACK_IMPORTED_MODULE_6__["default"],
    };
}


/***/ }),

/***/ "./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/SDKEventType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SDKEventType;
(function (SDKEventType) {
    SDKEventType["SELECTION_UPDATED"] = "SELECTION_UPDATED";
    SDKEventType["WIDGETS_CREATED"] = "WIDGETS_CREATED";
    SDKEventType["WIDGETS_DELETED"] = "WIDGETS_DELETED";
    SDKEventType["WIDGETS_TRANSFORMATION_UPDATED"] = "WIDGETS_TRANSFORMATION_UPDATED";
    SDKEventType["COMMENT_CREATED"] = "COMMENT_CREATED";
    SDKEventType["ESC_PRESSED"] = "ESC_PRESSED";
    SDKEventType["CANVAS_CLICKED"] = "CANVAS_CLICKED";
    SDKEventType["ALL_WIDGETS_LOADED"] = "ALL_WIDGETS_LOADED";
    SDKEventType["DATA_BROADCASTED"] = "DATA_BROADCASTED";
    SDKEventType["METADATA_CHANGED"] = "METADATA_CHANGED";
    SDKEventType["ONLINE_USERS_CHANGED"] = "ONLINE_USERS_CHANGED";
})(SDKEventType || (SDKEventType = {}));
/* harmony default export */ __webpack_exports__["default"] = (SDKEventType);


/***/ }),

/***/ "./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/helpers/SDKEventDispatcher.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return attachListenerMethods; });
function attachListenerMethods(dispatcher, sdkInstance) {
    var sdkInstance0 = sdkInstance;
    sdkInstance0.addListener = function (eventName, listener) {
        dispatcher.addEventListener(eventName, listener);
        return sdkInstance.startListenEvent(eventName);
    };
    sdkInstance0.removeListener = function (eventName, listener) {
        dispatcher.removeEventListener(eventName, listener);
        return Promise.resolve();
    };
    sdkInstance0.broadcastData = function (data) {
        return sdkInstance.broadcastEventInner({ type: 'BROADCAST_DATA', data: data });
    };
    window.addEventListener('keyup', function (e) {
        if (e.key === 'Escape') {
            sdkInstance.broadcastEventInner({ type: 'ESC_PRESSED' });
        }
    });
}


/***/ }),

/***/ "./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/helpers/boardUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachBoardUtils", function() { return attachBoardUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionWidgetBounds", function() { return unionWidgetBounds; });
function attachBoardUtils(sdk) {
    sdk['board']['utils'] = { unionWidgetBounds: unionWidgetBounds() };
}
function unionWidgetBounds() {
    return function (widgets) {
        if (widgets.length < 1) {
            return { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0, x: 0, y: 0 };
        }
        var item = widgets[0].bounds;
        var minX = item.left, minY = item.top, maxX = item.right, maxY = item.bottom;
        for (var i = 1; i < widgets.length; i++) {
            item = widgets[i].bounds;
            if (item.left < minX) {
                minX = item.left;
            }
            if (item.top < minY) {
                minY = item.top;
            }
            if (item.right > maxX) {
                maxX = item.right;
            }
            if (item.bottom > maxY) {
                maxY = item.bottom;
            }
        }
        var width = maxX - minX;
        var height = maxY - minY;
        return {
            left: minX,
            top: minY,
            right: maxX,
            bottom: maxY,
            width: width,
            height: height,
            x: minX + width / 2,
            y: minY + height / 2,
        };
    };
}


/***/ }),

/***/ "./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/helpers/viewportUtils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachViewportUtils", function() { return attachViewportUtils; });
function attachViewportUtils(sdk) {
    sdk['board']['viewport']['getBoardUIPadding'] = getBoardUIPadding();
}
function getBoardUIPadding() {
    return function () {
        return { left: 60, top: 60, bottom: 60, right: 0 };
    };
}


/***/ }),

/***/ "./src/sdk/helpers/PublicSDKHelpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_web_common_forms_customscroll_CustomScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/web/common/forms/customscroll/CustomScroll.ts");
/* harmony import */ var sdk_helpers_SDKDragAndDropController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sdk/helpers/SDKDragAndDropController.ts");


////////////////////////////////////////////////////////////////////////
// Deprecated API
////////////////////////////////////////////////////////////////////////
var globalContainerId = 0;
var PublicSDKHelpers = /** @class */ (function () {
    function PublicSDKHelpers(rootSdkInstance) {
        this.root = rootSdkInstance;
    }
    PublicSDKHelpers.prototype.initScrollableContainerWithDraggableImages = function (container, options) {
        var containerId = ++globalContainerId;
        Object(components_web_common_forms_customscroll_CustomScroll__WEBPACK_IMPORTED_MODULE_0__["initArtificialScrollForElement"])(container);
        var root = this.root;
        function onDown(e) {
            e.preventDefault();
            var imageURL = findDraggableImageURL(e.target, container, options.draggableImageSelector);
            if (imageURL) {
                var isTouchEvent_1 = e.type === 'touchstart';
                Object(sdk_helpers_SDKDragAndDropController__WEBPACK_IMPORTED_MODULE_1__["onImageDown"])(e, container, function () {
                    root.onDraggableImageClick({ url: imageURL });
                }, function () {
                    var dragOptions = {
                        isTouchEvent: isTouchEvent_1,
                        preview: { url: imageURL },
                        image: { url: imageURL },
                    };
                    root.onDraggableImageStartDrag(containerId, dragOptions);
                }, 'horizontal');
                var onTouchMove_1 = function (touchEvent) {
                    var touch = touchEvent.touches[0];
                    root.onDraggableItemTouchMove(containerId, touch.clientX, touch.clientY);
                };
                var onTouchEnd_1 = function () {
                    root.onDraggableItemTouchEnd(containerId);
                    unbindTouchEvents_1();
                };
                var onTouchCancel_1 = function () {
                    root.onDraggableItemTouchCancel(containerId);
                    unbindTouchEvents_1();
                };
                var unbindTouchEvents_1 = function () {
                    container.removeEventListener('touchmove', onTouchMove_1);
                    container.removeEventListener('touchcancel', onTouchCancel_1);
                    container.removeEventListener('touchend', onTouchEnd_1);
                };
                container.addEventListener('touchmove', onTouchMove_1);
                container.addEventListener('touchcancel', onTouchCancel_1);
                container.addEventListener('touchend', onTouchEnd_1);
                e.stopPropagation();
            }
        }
        container.addEventListener('mousedown', onDown);
        container.addEventListener('touchstart', onDown);
        container.addEventListener('dragstart', function (e) {
            e.stopPropagation();
            e.preventDefault();
        });
    };
    return PublicSDKHelpers;
}());
/* harmony default export */ __webpack_exports__["default"] = (PublicSDKHelpers);
function findDraggableImageURL(target, container, draggableImageSelector) {
    var allDraggableItems = Array.from(container.querySelectorAll(draggableImageSelector));
    var draggableItem = allDraggableItems.find(function (item) { return item.contains(target); });
    return draggableItem ? draggableItem.attributes.getNamedItem('data-image-url').value : undefined;
}


/***/ }),

/***/ "./src/sdk/helpers/SDKDragAndDropController.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onImageDown", function() { return onImageDown; });
/* harmony import */ var general_utils_mouseUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/general/utils/mouseUtils.ts");
/* harmony import */ var components_web_common_forms_customscroll_CustomScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/web/common/forms/customscroll/CustomScroll.ts");


var startPos;
var mousePos;
var wasScrolled = false;
var parentElementContainer;
var dragStartListener;
var clickListener;
var direction;
function onMove(e) {
    mousePos = general_utils_mouseUtils__WEBPACK_IMPORTED_MODULE_0__["getClientXY"](e);
    var absDeltaY = Math.abs(mousePos.y - startPos.y);
    if (components_web_common_forms_customscroll_CustomScroll__WEBPACK_IMPORTED_MODULE_1__["inScrollingMode"](parentElementContainer)) {
        wasScrolled = true;
    }
    else {
        if (direction === 'horizontal') {
            var deltaX = Math.abs(mousePos.x - startPos.x);
            if (deltaX > 4 || absDeltaY > 20) {
                components_web_common_forms_customscroll_CustomScroll__WEBPACK_IMPORTED_MODULE_1__["stopScrollingCurrentElement"]();
                dragStartListener();
                unbind();
            }
        }
        else {
            var deltaY = Math.abs(mousePos.y - startPos.y);
            if (deltaY > 4) {
                components_web_common_forms_customscroll_CustomScroll__WEBPACK_IMPORTED_MODULE_1__["stopScrollingCurrentElement"]();
                dragStartListener();
                unbind();
            }
        }
    }
}
function onImageDown(e, parentElement, onClick, onDragStart, _direction) {
    direction = _direction;
    wasScrolled = false;
    parentElementContainer = parentElement;
    dragStartListener = onDragStart;
    clickListener = onClick;
    startPos = general_utils_mouseUtils__WEBPACK_IMPORTED_MODULE_0__["getClientXY"](e);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchend', onUp);
    document.addEventListener('touchcancel', onCancel);
}
function onUp() {
    if (!wasScrolled) {
        clickListener();
    }
    unbind();
}
function onCancel() {
    unbind();
}
function unbind() {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('mouseup', onUp);
    document.removeEventListener('touchend', onUp);
    document.removeEventListener('touchcancel', onCancel);
}


/***/ }),

/***/ "./src/sdk/helpers/attachGetClientId.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return attachGetClientId; });
function attachGetClientId(sdkInstance, clientId) {
    sdkInstance.getClientId = function () { return clientId; };
}


/***/ }),

/***/ "./src/sdk/helpers/initDraggableItemsContainer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getInitDraggableItemsContainerFn; });
/* harmony import */ var components_web_common_forms_customscroll_CustomScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/web/common/forms/customscroll/CustomScroll.ts");
/* harmony import */ var sdk_helpers_SDKDragAndDropController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sdk/helpers/SDKDragAndDropController.ts");
/* harmony import */ var sdk_publicSDK__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/sdk/publicSDK.ts");



var globalContainerId = 0;
function getInitDraggableItemsContainerFn(sdkInner) {
    return function (container, options) {
        var containerId = ++globalContainerId;
        //todo check input params
        Object(components_web_common_forms_customscroll_CustomScroll__WEBPACK_IMPORTED_MODULE_0__["initArtificialScrollForElement"])(container);
        Object(sdk_publicSDK__WEBPACK_IMPORTED_MODULE_2__["getReceiver"])().setDraggableItemOption(containerId, options);
        var onDown = function (e) {
            e.preventDefault();
            var draggableItem = findDraggableItem(e.target, container, options.draggableItemSelector);
            if (draggableItem) {
                Object(sdk_publicSDK__WEBPACK_IMPORTED_MODULE_2__["getReceiver"])().setDraggableItem(draggableItem);
                var isTouchEvent_1 = e.type === 'touchstart';
                Object(sdk_helpers_SDKDragAndDropController__WEBPACK_IMPORTED_MODULE_1__["onImageDown"])(e, container, function () {
                    if (options.onClick) {
                        options.onClick(draggableItem);
                    }
                }, function () {
                    if (!options.getDraggableItemPreview) {
                        throw new Error('getDraggableItemPreview callback should be provided');
                    }
                    var preview = options.getDraggableItemPreview(draggableItem);
                    sdkInner.onDraggableItemStartDrag(containerId, {
                        isTouchEvent: isTouchEvent_1,
                        preview: preview,
                    });
                }, options.dragDirection || 'horizontal');
                var onTouchMove_1 = function (touchEvent) {
                    var touch = touchEvent.touches[0];
                    sdkInner.onDraggableItemTouchMove(containerId, touch.clientX, touch.clientY);
                };
                var onTouchEnd_1 = function () {
                    sdkInner.onDraggableItemTouchEnd(containerId);
                    unbindTouchEvents_1();
                };
                var onTouchCancel_1 = function () {
                    sdkInner.onDraggableItemTouchCancel(containerId);
                    unbindTouchEvents_1();
                    if (options.onCancel) {
                        options.onCancel();
                    }
                };
                var unbindTouchEvents_1 = function () {
                    container.removeEventListener('touchmove', onTouchMove_1);
                    container.removeEventListener('touchcancel', onTouchCancel_1);
                    container.removeEventListener('touchend', onTouchEnd_1);
                };
                container.addEventListener('touchmove', onTouchMove_1);
                container.addEventListener('touchcancel', onTouchCancel_1);
                container.addEventListener('touchend', onTouchEnd_1);
                e.stopPropagation();
            }
        };
        container.addEventListener('mousedown', onDown);
        container.addEventListener('touchstart', onDown);
        container.addEventListener('dragstart', function (e) {
            e.stopPropagation();
            e.preventDefault();
        });
    };
}
function findDraggableItem(target, container, draggableImageSelector) {
    var allDraggableItems = Array.from(container.querySelectorAll(draggableImageSelector));
    return allDraggableItems.find(function (item) { return item.contains(target); });
}


/***/ }),

/***/ "./src/sdk/helpers/parseExtensionPoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseExtensionPoint; });
/* harmony import */ var sdk_publicSDK__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sdk/publicSDK.ts");

var epWidgetMenuItems = 'getWidgetMenuItems';
var encodedEpWidgetMenuItems = 'hasWidgetMenuItems';
function parseExtensionPoint(sdk, config) {
    if (config.extensionPoints) {
        for (var extensionPointKey in config.extensionPoints) {
            var epOrPromise = config.extensionPoints[extensionPointKey];
            if (extensionPointKey === epWidgetMenuItems) {
                sendMenuItemsEP(sdk, epOrPromise);
            }
            else {
                processSingleEP(sdk, extensionPointKey, epOrPromise);
            }
        }
    }
}
function processSingleEP(sdk, extensionPointKey, epOrPromise) {
    if (typeof epOrPromise === 'function') {
        epOrPromise()
            .catch(function (e) {
            if (typeof e !== 'undefined') {
                throw new Error(e);
            }
        })
            .then(function (ep) {
            if (ep) {
                sendEP(sdk, extensionPointKey, ep);
            }
        });
    }
    else {
        sendEP(sdk, extensionPointKey, epOrPromise);
    }
}
function sendMenuItemsEP(sdk, ep) {
    var _a;
    Object(sdk_publicSDK__WEBPACK_IMPORTED_MODULE_0__["getReceiver"])().addOnWidgetSelectedListener(ep);
    sdk.addButtonExtensionPoint((_a = {},
        _a[encodedEpWidgetMenuItems] = true,
        _a));
}
function sendEP(sdk, extensionPointKey, ep) {
    var _a;
    sdk.addButtonExtensionPoint((_a = {},
        _a[extensionPointKey] = encodeExtensionPoint(extensionPointKey, ep),
        _a));
}
function encodeExtensionPoint(extensionPointKey, ePoint) {
    validateExtensionPoint(extensionPointKey, ePoint);
    var encodedEP = {};
    for (var key in ePoint) {
        if (key !== 'onClick') {
            encodedEP[key] = ePoint[key];
        }
        else {
            Object(sdk_publicSDK__WEBPACK_IMPORTED_MODULE_0__["getReceiver"])().addButtonClickListener(extensionPointKey, ePoint[key]);
        }
    }
    return encodedEP;
}
function validateExtensionPoint(extensionPointKey, ep) {
    var validator = validators[extensionPointKey];
    if (validator) {
        validator(ep);
    }
    else {
        throw new Error("Unknown extension point: " + extensionPointKey);
    }
}
var validators = {
    toolbar: function (epDescriptor) {
        checkRequiredParam(epDescriptor, 'toolbar', 'title', 'string');
        checkRequiredParam(epDescriptor, 'toolbar', 'toolbarSvgIcon', 'string');
        checkRequiredParam(epDescriptor, 'toolbar', 'librarySvgIcon', 'string');
        checkRequiredParam(epDescriptor, 'toolbar', 'onClick', 'function');
    },
    bottomBar: function (epDescriptor) {
        checkRequiredParam(epDescriptor, 'bottomBar', 'title', 'string');
        checkRequiredParam(epDescriptor, 'bottomBar', 'svgIcon', 'string');
        checkRequiredParam(epDescriptor, 'bottomBar', 'onClick', 'function');
    },
    exportMenu: function (epDescriptor) {
        checkRequiredParam(epDescriptor, 'exportMenu', 'title', 'string');
        checkRequiredParam(epDescriptor, 'exportMenu', 'svgIcon', 'string');
        checkRequiredParam(epDescriptor, 'exportMenu', 'onClick', 'function');
    },
    getWidgetMenuItems: function (epDescriptor) { return true; },
    hasWidgetMenuItems: function (epDescriptor) { return true; },
};
function checkRequiredParam(descriptor, epName, param, paramType) {
    if (typeof descriptor[param] !== paramType) {
        throw new Error(param + ":" + paramType + " is required for 'extensionPoints." + epName + "'");
    }
}


/***/ }),

/***/ "./src/sdk/helpers/resizeTo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getResizeToCallback; });
function getResizeToCallback(sdkInner) {
    var resizeToElement = function (el) {
        sdkInner.board.ui.resizeToInner({
            width: el.clientWidth,
            height: el.clientHeight,
        });
    };
    return function (value) {
        if (typeof value === 'string') {
            var el = document.querySelector(value);
            if (el) {
                resizeToElement(el);
            }
        }
        else if ('attributes' in value) {
            resizeToElement(value);
        }
        else {
            sdkInner.board.ui.resizeToInner(value);
        }
    };
}


/***/ }),

/***/ "./src/sdk/publicSDK.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReceiver", function() { return getReceiver; });
/* harmony import */ var common_connectors2_CommandChannel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/common/connectors2/CommandChannel.ts");
/* harmony import */ var general_shared_modules_sdk_SuperCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/general/shared-modules/sdk/SuperCommand.ts");
/* harmony import */ var general_shared_modules_sdk_remote_IFramePluginCommandsReceiver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/general/shared-modules/sdk/remote/IFramePluginCommandsReceiver.ts");
/* harmony import */ var common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/common/connectors2/ConnectorsUtils.ts");
/* harmony import */ var general_shared_modules_sdk_logChannelCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/general/shared-modules/sdk/logChannelCommand.ts");
/* harmony import */ var sdk_helpers_PublicSDKHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/sdk/helpers/PublicSDKHelpers.ts");
/* harmony import */ var general_events_EventDispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/general/events/EventDispatcher.ts");
/* harmony import */ var lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_helpers_SDKEventDispatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/helpers/SDKEventDispatcher.ts");
/* harmony import */ var lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_SDKEnums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/SDKEnums.ts");
/* harmony import */ var sdk_helpers_parseExtensionPoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/sdk/helpers/parseExtensionPoint.ts");
/* harmony import */ var sdk_helpers_initDraggableItemsContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/sdk/helpers/initDraggableItemsContainer.ts");
/* harmony import */ var sdk_helpers_resizeTo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/sdk/helpers/resizeTo.ts");
/* harmony import */ var lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_helpers_viewportUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/helpers/viewportUtils.ts");
/* harmony import */ var lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_helpers_boardUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/lazy-modules/board/lazy-modules/board-ui/lazy-modules/board-sdk/impl/helpers/boardUtils.ts");
/* harmony import */ var sdk_helpers_attachGetClientId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/sdk/helpers/attachGetClientId.ts");
__webpack_require__("./static/scripts/general/polyfills/es6-collections.js");
__webpack_require__("./static/scripts/general/polyfills/es6-promise.min.js");
__webpack_require__("./static/scripts/general/polyfills/array.js");
__webpack_require__("./static/scripts/general/polyfills/url-polyfill.min.js");
__webpack_require__("./static/scripts/general/polyfills/html-element.js");















var eventDispatcher = new general_events_EventDispatcher__WEBPACK_IMPORTED_MODULE_6__["default"]();
var receiver = new general_shared_modules_sdk_remote_IFramePluginCommandsReceiver__WEBPACK_IMPORTED_MODULE_2__["default"](eventDispatcher);
function getReceiver() {
    return receiver;
}
function sendSuperCommandToApp(superCommandID, data) {
    window.parent.postMessage({ rtbSuperCommandID: superCommandID, data: data }, '*');
}
function createCommandChannel() {
    var sendHandler = function (data) {
        sendSuperCommandToApp(general_shared_modules_sdk_SuperCommand__WEBPACK_IMPORTED_MODULE_1__["default"].IFRAME_CHANNEL_COMMAND, data);
    };
    var findReceiverHandler = function (context) { return receiver; };
    return new common_connectors2_CommandChannel__WEBPACK_IMPORTED_MODULE_0__["default"](sendHandler, findReceiverHandler);
}
var commandChannel = createCommandChannel();
// set after the handshake
var pluginContext;
var sendCommandToChannelHandler = function (commandId, args) {
    return commandChannel.sendCommand(commandId, pluginContext, args);
};
var resolveSDKInitPromise;
var waitForSDKInitialized = new Promise(function (resolve) {
    resolveSDKInitPromise = resolve;
});
window.addEventListener('message', function (e) {
    if (e.data.rtbEnableCommandsLog) {
        Object(general_shared_modules_sdk_logChannelCommand__WEBPACK_IMPORTED_MODULE_4__["default"])('APP → PLUGIN', 'blue', e, e.data.rtbEnableCommandsLog === 'showResponses');
    }
    switch (e.data.rtbSuperCommandID) {
        case general_shared_modules_sdk_SuperCommand__WEBPACK_IMPORTED_MODULE_1__["default"].HELLO_IFRAME_FROM_APP:
            console.log('here we are');
            debugger;
            var data = e.data.data;
            pluginContext = data;
            common_connectors2_ConnectorsUtils__WEBPACK_IMPORTED_MODULE_3__["buildConnector"]('', sdk, data.descriptor, sendCommandToChannelHandler);
            //there is no 'board' in settings sdk
            if (sdk['board']) {
                sdk['board']['ui']['initDraggableItemsContainer'] = Object(sdk_helpers_initDraggableItemsContainer__WEBPACK_IMPORTED_MODULE_10__["default"])(sdk);
                sdk['board']['ui']['resizeTo'] = Object(sdk_helpers_resizeTo__WEBPACK_IMPORTED_MODULE_11__["default"])(sdk);
                sdk.helpers = new sdk_helpers_PublicSDKHelpers__WEBPACK_IMPORTED_MODULE_5__["default"](sdk);
                Object(lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_helpers_boardUtils__WEBPACK_IMPORTED_MODULE_13__["attachBoardUtils"])(sdk);
                Object(lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_helpers_viewportUtils__WEBPACK_IMPORTED_MODULE_12__["attachViewportUtils"])(sdk);
                Object(lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_SDKEnums__WEBPACK_IMPORTED_MODULE_8__["default"])(sdk);
                Object(lazy_modules_board_lazy_modules_board_ui_lazy_modules_board_sdk_impl_helpers_SDKEventDispatcher__WEBPACK_IMPORTED_MODULE_7__["default"])(eventDispatcher, sdk);
            }
            Object(sdk_helpers_attachGetClientId__WEBPACK_IMPORTED_MODULE_14__["default"])(sdk, data.pluginId);
            resolveSDKInitPromise();
            break;
        case general_shared_modules_sdk_SuperCommand__WEBPACK_IMPORTED_MODULE_1__["default"].IFRAME_CHANNEL_COMMAND:
            waitForSDKInitialized.then(function () {
                commandChannel.processCommand(e.data.data);
            });
            break;
    }
});
var sdk = {
    onReady: function (cb) {
        //todo check cb type
        waitForSDKInitialized.then(cb);
    },
    // Available only when Web-plugin is run on a settings page
    initializeSettings: function (config) {
        return sendCommandToChannelHandler('.initializeSettingsInner', [
            {
                iframeHeight: config ? parseInt(config.iframeHeight, 10) : undefined,
            },
        ]);
    },
    // Available only in main.js on a board page
    initialize: function (config) {
        if (config === void 0) { config = { extensionPoints: {} }; }
        if (!sendCommandToChannelHandler) {
            throw new Error('Call sdk methods inside onReady() callback');
        }
        return sdk.initializeInner().then(function () {
            Object(sdk_helpers_parseExtensionPoint__WEBPACK_IMPORTED_MODULE_9__["default"])(sdk, config);
        });
    },
    //For extension point iframe only
    authorize: function (options) {
        return new Promise(function (resolve, reject) {
            if (!options.response_type) {
                throw new Error("Please specify 'response_type' as 'code' or 'token'");
            }
            // eslint-disable-next-line no-restricted-properties
            var authWinnow = window.open(pluginContext.locationOrigin +
                '/oauth/authorize' +
                ("?response_type=" + options.response_type) +
                ("&client_id=" + pluginContext.pluginId) +
                ("&account_id=" + pluginContext.accountId) +
                ("&scope=" + (options.scope || '')) +
                ("&state=" + (options.state || '')) +
                ("&redirect_uri=" + (options.redirect_uri || window.location.href)));
            window.miroAuthorized = function () {
                sdk
                    .__invalidateAuthorization()
                    .then(function () { return sdk.getToken(); })
                    .then(function (token) {
                    authWinnow.close();
                    resolve(token);
                })
                    .catch(function () {
                    authWinnow.close();
                    reject('Not authorized');
                });
            };
        });
    },
};
// TODO: SDK should be in separate ts project with its own typings.
// window.rtb doesn't exist here, but typings now say that it does
var _window = window;
_window['miro'] = _window['rtb'] = sdk;
// init
sendSuperCommandToApp(general_shared_modules_sdk_SuperCommand__WEBPACK_IMPORTED_MODULE_1__["default"].HELLO_APP_FROM_IFRAME, {});


/***/ }),

/***/ "./static/scripts/general/polyfills/array.js":
/***/ (function(module, exports) {

if (!Array.prototype.includes) {
	Object.defineProperty(Array.prototype, 'includes', {
		enumerable: false,
		configurable: false,
		writable: false,
		value: function (searchElement /*, fromIndex*/) {
			'use strict';
			var O = Object(this);
			var len = parseInt(O.length) || 0;
			if (len === 0) {
				return false;
			}
			var n = parseInt(arguments[1]) || 0;
			var k;
			if (n >= 0) {
				k = n;
			} else {
				k = len + n;
				if (k < 0) {
					k = 0;
				}
			}
			var currentElement;
			while (k < len) {
				currentElement = O[k];
				if (searchElement === currentElement ||
					(searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
					return true;
				}
				k++;
			}
			return false;
		}
	});
}

if (!Array.prototype.find) {
	Object.defineProperty(Array.prototype, 'find', {
		enumerable: false,
		configurable: false,
		writable: false,
		value: function (predicate) {
			if (this === null) {
				throw new TypeError('Array.prototype.find called on null or undefined');
			}
			if (typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}
			var list = Object(this);
			var length = list.length >>> 0;
			var thisArg = arguments[1];
			var value;

			for (var i = 0; i < length; i++) {
				value = list[i];
				if (predicate.call(thisArg, value, i, list)) {
					return value;
				}
			}
			return undefined;
		}
	});
}

if (!Array.prototype.findIndex) {
	Object.defineProperty(Array.prototype, 'findIndex', {
		enumerable: false,
		configurable: false,
		writable: false,
		value: function (predicate) {
			if (this == null) {
				throw new TypeError('Array.prototype.findIndex called on null or undefined');
			}
			if (typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}
			var list = Object(this);
			var length = list.length >>> 0;
			var thisArg = arguments[1];
			var value;

			for (var i = 0; i < length; i++) {
				value = list[i];
				if (predicate.call(thisArg, value, i, list)) {
					return i;
				}
			}
			return -1;
		}
	})
}

if (!Array.from) {
	Object.defineProperty(Array, 'from', {
		enumerable: false,
		configurable: false,
		writable: false,
		value: (function () {
			function parseIterable(arraylike) {
				var done = false;
				var iterableResponse;
				var tempArray = [];

				// if the iterable doesn't have next;
				// it is an iterable if 'next' is a function but it has not been defined on
				// the object itself.
				if (typeof arraylike.next === 'function') {
					while (!done) {
						iterableResponse = arraylike.next();
						if (
							iterableResponse.hasOwnProperty('value') &&
							iterableResponse.hasOwnProperty('done')
						) {
							if (iterableResponse.done === true) {
								done = true;
								break;

								// handle the case where the done value is not Boolean
							} else if (iterableResponse.done !== false) {
								break;
							}

							tempArray.push(iterableResponse.value);
						} else {

							// it does not conform to the iterable pattern
							break;
						}
					}
				}

				if (done) {
					return tempArray;
				} else {

					// something went wrong return false;
					return false;
				}

			}

			return function (source) {
				// handle non-objects
				if (source === undefined || source === null) {
					throw new TypeError(source + ' is not an object');
				}

				// handle maps that are not functions
				if (1 in arguments && !(arguments[1] instanceof Function)) {
					throw new TypeError(arguments[1] + ' is not a function');
				}

				var arraylike = typeof source === 'string' ? source.split('') : Object(source);
				var map = arguments[1];
				var scope = arguments[2];
				var array = [];
				var index = -1;
				var length = Math.min(Math.max(Number(arraylike.length) || 0, 0), 9007199254740991);
				var value;

				// variables for rebuilding array from iterator
				var arrayFromIterable;

				// if it is an iterable treat like one
				arrayFromIterable = parseIterable(arraylike);

				//if it is a Map or a Set then handle them appropriately
				if (
					typeof arraylike.entries === 'function' &&
					typeof arraylike.values === 'function'
				) {
					if (arraylike.constructor.name === 'Set' && 'values' in Set.prototype) {
						arrayFromIterable = parseIterable(arraylike.values());
					}
					if (arraylike.constructor.name === 'Map' && 'entries' in Map.prototype) {
						arrayFromIterable = parseIterable(arraylike.entries());
					}
				}

				if (arrayFromIterable) {
					arraylike = arrayFromIterable;
					length = arrayFromIterable.length;
				}

				while (++index < length) {
					value = arraylike[index];

					array[index] = map ? map.call(scope, value, index) : value;
				}

				array.length = length;

				return array;
			}
		})()
	})
}

if (!Array.prototype.fill) {
	Object.defineProperty(Array.prototype, 'fill', {
		enumerable: false,
		configurable: false,
		writable: true,
		value: function (value) {
			if (this == null) {
				throw new TypeError('this is null or not defined');
			}

			var O = Object(this);
			var len = O.length >>> 0;

			var start = arguments[1];
			var relativeStart = start >> 0;

			var k = relativeStart < 0 ?
				Math.max(len + relativeStart, 0) :
				Math.min(relativeStart, len);

			var end = arguments[2];
			var relativeEnd = end === undefined ?
				len : end >> 0;

			var final = relativeEnd < 0 ?
				Math.max(len + relativeEnd, 0) :
				Math.min(relativeEnd, len);

			while (k < final) {
				O[k] = value;
				k++;
			}

			return O;
		}
	})
}

/***/ }),

/***/ "./static/scripts/general/polyfills/es6-collections.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(e){function f(a,c){function b(a){if(!this)return new b(a);this._keys=[];this._values=[];this._itp=[];this.objectOnly=c;a&&v.call(this,a)}c||w(a,"size",{get:x});a.constructor=b;b.prototype=a;return b}function v(a){this.add?a.forEach(this.add,this):a.forEach(function(a){this.set(a[0],a[1])},this)}function d(a){this.has(a)&&(this._keys.splice(b,1),this._values.splice(b,1),this._itp.forEach(function(a){b<a[0]&&a[0]--}));return-1<b}function m(a){return this.has(a)?this._values[b]:
void 0}function n(a,c){if(this.objectOnly&&c!==Object(c))throw new TypeError("Invalid value used as weak collection key");if(c!=c||0===c)for(b=a.length;b--&&!y(a[b],c););else b=a.indexOf(c);return-1<b}function p(a){return n.call(this,this._values,a)}function q(a){return n.call(this,this._keys,a)}function r(a,c){this.has(a)?this._values[b]=c:this._values[this._keys.push(a)-1]=c;return this}function t(a){this.has(a)||this._values.push(a);return this}function h(){(this._keys||0).length=this._values.length=
0}function z(){return k(this._itp,this._keys)}function l(){return k(this._itp,this._values)}function A(){return k(this._itp,this._keys,this._values)}function B(){return k(this._itp,this._values,this._values)}function k(a,c,b){var g=[0],e=!1;a.push(g);return{next:function(){var f,d=g[0];!e&&d<c.length?(f=b?[c[d],b[d]]:c[d],g[0]++):(e=!0,a.splice(a.indexOf(g),1));return{done:e,value:f}}}}function x(){return this._values.length}function u(a,c){for(var b=this.entries();;){var d=b.next();if(d.done)break;
a.call(c,d.value[1],d.value[0],this)}}var b,w=Object.defineProperty,y=function(a,b){return isNaN(a)?isNaN(b):a===b};"undefined"==typeof WeakMap&&(e.WeakMap=f({"delete":d,clear:h,get:m,has:q,set:r},!0));"undefined"!=typeof Map&&"function"===typeof(new Map).values&&(new Map).values().next||(e.Map=f({"delete":d,has:q,get:m,set:r,keys:z,values:l,entries:A,forEach:u,clear:h}));"undefined"!=typeof Set&&"function"===typeof(new Set).values&&(new Set).values().next||(e.Set=f({has:p,add:t,"delete":d,clear:h,
keys:l,values:l,entries:B,forEach:u}));"undefined"==typeof WeakSet&&(e.WeakSet=f({"delete":d,add:t,clear:h,has:p},!0))})( true&&"undefined"!=typeof global?global:window);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./static/scripts/general/polyfills/es6-promise.min.js":
/***/ (function(module, exports) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.1.2
 */

(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){H=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){U(a)}}function s(){var t=0,e=new Q(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;G>t;t+=2){var e=X[t],n=X[t+1];e(n),X[t]=void 0,X[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return U=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=n._state;if(r===et&&!t||r===nt&&!e)return this;var o=new this.constructor(p),i=n._result;if(r){var s=arguments[r-1];H(function(){C(r,o,s,i)})}else j(n,o,t,e);return o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return rt.error=e,rt}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){H(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):E(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function w(t,e){e._state===et?E(t,e._result):e._state===nt?S(t,e._result):j(e,void 0,function(e){g(t,e)},function(e){S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===Z&&constructor.resolve===$?w(t,n):r===rt?S(t,rt.error):void 0===r?E(t,n):e(r)?m(t,n,r):E(t,n)}function g(e,n){e===n?S(e,_()):t(n)?b(e,n,v(n)):E(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function E(t,e){t._state===tt&&(t._result=e,t._state=et,0!==t._subscribers.length&&H(T,t))}function S(t,e){t._state===tt&&(t._state=nt,t._result=e,H(A,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+et]=n,o[i+nt]=r,0===i&&t._state&&H(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?C(n,r,o,i):o(i);t._subscribers.length=0}}function P(){this.error=null}function x(t,e){try{return t(e)}catch(n){return ot.error=n,ot}}function C(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=x(r,o),i===ot?(c=!0,s=i.error,i=null):u=!0,n===i)return void S(n,d())}else i=o,u=!0;n._state!==tt||(a&&u?g(n,i):c?S(n,s):t===et?E(n,i):t===nt&&S(n,i))}function M(t,e){try{e(function(e){g(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function O(t){return new ft(this,t).promise}function k(t){function e(t){g(o,t)}function n(t){S(o,t)}var r=this,o=new r(p);if(!B(t))return S(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,s=0;o._state===tt&&i>s;s++)j(r.resolve(t[s]),void 0,e,n);return o}function Y(t){var e=this,n=new e(p);return S(n,t),n}function q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function F(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(t){this._id=ct++,this._state=void 0,this._result=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&q(),this instanceof D?M(this,t):F())}function K(t,e){this._instanceConstructor=t,this.promise=new t(p),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?E(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&E(this.promise,this._result))):S(this.promise,this._validationError())}function L(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=at)}var N;N=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var U,W,z,B=N,G=0,H=function(t,e){X[G]=t,X[G+1]=e,G+=2,2===G&&(W?W(a):z())},I="undefined"!=typeof window?window:void 0,J=I||{},Q=J.MutationObserver||J.WebKitMutationObserver,R="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),V="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,X=new Array(1e3);z=R?o():Q?s():V?u():void 0===I&&"function"==typeof require?f():c();var Z=l,$=h,tt=void 0,et=1,nt=2,rt=new P,ot=new P,it=O,st=k,ut=Y,ct=0,at=D;D.all=it,D.race=st,D.resolve=$,D.reject=ut,D._setScheduler=n,D._setAsap=r,D._asap=H,D.prototype={constructor:D,then:Z,"catch":function(t){return this.then(null,t)}};var ft=K;K.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},K.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===tt&&t>n;n++)this._eachEntry(e[n],n)},K.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===$){var o=v(t);if(o===Z&&t._state!==tt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===at){var i=new n(p);b(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},K.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===tt&&(this._remaining--,t===nt?S(r,n):this._result[e]=n),0===this._remaining&&E(r,this._result)},K.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){n._settledAt(et,e,t)},function(t){n._settledAt(nt,e,t)})};var lt=L,ht={Promise:at,polyfill:lt};"function"==typeof define&&define.amd?define(function(){return ht}):"undefined"!=typeof module&&module.exports?module.exports=ht:"undefined"!=typeof this&&(this.ES6Promise=ht),lt()}).call(this);

/***/ }),

/***/ "./static/scripts/general/polyfills/html-element.js":
/***/ (function(module, exports) {

if (!("classList" in SVGElement.prototype)) {
	function addClass(element, className) {
		element.setAttribute('class', element.getAttribute('class') + ' ' + className);
	}

	function removeClass(element, className) {
		const removedClass = element.getAttribute('class').replace(new RegExp('(\\s|^)' + className + '(\\s|$)', 'g'), '$2');
		element.setAttribute('class', removedClass);
	}

	function createClassListObj(thisArg) {
		const classList = {
			contains: function(className) {
				return thisArg.className.baseVal.split(" ").indexOf(className) !== -1;
			},
			add: function(className) {
				if (!thisArg.classList.contains(className)) {
					addClass(thisArg, className)
				}
			},
			remove: function(className) {
				if (thisArg.classList.contains(className)) {
					removeClass(thisArg, className)
				}
			},
			toggle: function(className) {
				if (thisArg.classList.contains(className)) {
					removeClass(thisArg, className)
				} else {
					addClass(thisArg, className)
				}
			},
		};

		Object.defineProperty(thisArg, '_classList', {
			value: classList,
			writable: false,
			enumerable: false
		});
	}

	Object.defineProperty(SVGElement.prototype, "classList", {
		get: function () {
			if (!this._classList) {
				createClassListObj(this)
			}
			return this._classList;
		},
		enumerable: true,
	});
}

// Create Element.remove() function if not exist
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}


/***/ }),

/***/ "./static/scripts/general/polyfills/url-polyfill.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(t){var e=function(){try{return!!Symbol.iterator}catch(e){return false}};var r=e();var n=function(t){var e={next:function(){var e=t.shift();return{done:e===void 0,value:e}}};if(r){e[Symbol.iterator]=function(){return e}}return e};var i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")};var o=function(e){return decodeURIComponent(e).replace(/\+/g," ")};var a=function(){var a=function(e){Object.defineProperty(this,"_entries",{writable:true,value:{}});var t=typeof e;if(t==="undefined"){}else if(t==="string"){if(e!==""){this._fromString(e)}}else if(e instanceof a){var r=this;e.forEach(function(e,t){r.append(t,e)})}else if(e!==null&&t==="object"){if(Object.prototype.toString.call(e)==="[object Array]"){for(var n=0;n<e.length;n++){var i=e[n];if(Object.prototype.toString.call(i)==="[object Array]"||i.length!==2){this.append(i[0],i[1])}else{throw new TypeError("Expected [string, any] as entry at index "+n+" of URLSearchParams's input")}}}else{for(var o in e){if(e.hasOwnProperty(o)){this.append(o,e[o])}}}}else{throw new TypeError("Unsupported input's type for URLSearchParams")}};var e=a.prototype;e.append=function(e,t){if(e in this._entries){this._entries[e].push(String(t))}else{this._entries[e]=[String(t)]}};e.delete=function(e){delete this._entries[e]};e.get=function(e){return e in this._entries?this._entries[e][0]:null};e.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]};e.has=function(e){return e in this._entries};e.set=function(e,t){this._entries[e]=[String(t)]};e.forEach=function(e,t){var r;for(var n in this._entries){if(this._entries.hasOwnProperty(n)){r=this._entries[n];for(var i=0;i<r.length;i++){e.call(t,r[i],n,this)}}}};e.keys=function(){var r=[];this.forEach(function(e,t){r.push(t)});return n(r)};e.values=function(){var t=[];this.forEach(function(e){t.push(e)});return n(t)};e.entries=function(){var r=[];this.forEach(function(e,t){r.push([t,e])});return n(r)};if(r){e[Symbol.iterator]=e.entries}e.toString=function(){var r=[];this.forEach(function(e,t){r.push(i(t)+"="+i(e))});return r.join("&")};t.URLSearchParams=a};if(!("URLSearchParams"in t)||new URLSearchParams("?a=1").toString()!=="a=1"){a()}var s=URLSearchParams.prototype;if(typeof s.sort!=="function"){s.sort=function(){var r=this;var n=[];this.forEach(function(e,t){n.push([t,e]);if(!r._entries){r.delete(t)}});n.sort(function(e,t){if(e[0]<t[0]){return-1}else if(e[0]>t[0]){return+1}else{return 0}});if(r._entries){r._entries={}}for(var e=0;e<n.length;e++){this.append(n[e][0],n[e][1])}}}if(typeof s._fromString!=="function"){Object.defineProperty(s,"_fromString",{enumerable:false,configurable:false,writable:false,value:function(e){if(this._entries){this._entries={}}else{var r=[];this.forEach(function(e,t){r.push(t)});for(var t=0;t<r.length;t++){this.delete(r[t])}}e=e.replace(/^\?/,"");var n=e.split("&");var i;for(var t=0;t<n.length;t++){i=n[t].split("=");this.append(o(i[0]),i.length>1?o(i[1]):"")}}})}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);(function(h){var e=function(){try{var e=new URL("b","http://a");e.pathname="c%20d";return e.href==="http://a/c%20d"&&e.searchParams}catch(e){return false}};var t=function(){var t=h.URL;var e=function(e,t){if(typeof e!=="string")e=String(e);var r=document,n;if(t&&(h.location===void 0||t!==h.location.href)){r=document.implementation.createHTMLDocument("");n=r.createElement("base");n.href=t;r.head.appendChild(n);try{if(n.href.indexOf(t)!==0)throw new Error(n.href)}catch(e){throw new Error("URL unable to set base "+t+" due to "+e)}}var i=r.createElement("a");i.href=e;if(n){r.body.appendChild(i);i.href=i.href}if(i.protocol===":"||!/:/.test(i.href)){throw new TypeError("Invalid URL")}Object.defineProperty(this,"_anchorElement",{value:i});var o=new URLSearchParams(this.search);var a=true;var s=true;var c=this;["append","delete","set"].forEach(function(e){var t=o[e];o[e]=function(){t.apply(o,arguments);if(a){s=false;c.search=o.toString();s=true}}});Object.defineProperty(this,"searchParams",{value:o,enumerable:true});var f=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:false,configurable:false,writable:false,value:function(){if(this.search!==f){f=this.search;if(s){a=false;this.searchParams._fromString(this.search);a=true}}}})};var r=e.prototype;var n=function(t){Object.defineProperty(r,t,{get:function(){return this._anchorElement[t]},set:function(e){this._anchorElement[t]=e},enumerable:true})};["hash","host","hostname","port","protocol"].forEach(function(e){n(e)});Object.defineProperty(r,"search",{get:function(){return this._anchorElement["search"]},set:function(e){this._anchorElement["search"]=e;this._updateSearchParams()},enumerable:true});Object.defineProperties(r,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e;this._updateSearchParams()},enumerable:true},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:true},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol];var t=this._anchorElement.port!=e&&this._anchorElement.port!=="";return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:true},password:{get:function(){return""},set:function(e){},enumerable:true},username:{get:function(){return""},set:function(e){},enumerable:true}});e.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)};e.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)};h.URL=e};if(!e()){t()}if(h.location!==void 0&&!("origin"in h.location)){var r=function(){return h.location.protocol+"//"+h.location.hostname+(h.location.port?":"+h.location.port:"")};try{Object.defineProperty(h.location,"origin",{get:r,enumerable:true})}catch(e){setInterval(function(){h.location.origin=r()},100)}}})(typeof global!=="undefined"?global:typeof window!=="undefined"?window:typeof self!=="undefined"?self:this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });