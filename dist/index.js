'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MyCounter = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b;
    var _c = React.useState(value), counter = _c[0], setCounter = _c[1];
    var onMinus = function () {
        setCounter(function (prev) { return prev - 1; });
    };
    var onPlus = function () {
        setCounter(function (prev) { return prev + 1; });
    };
    return (React__default["default"].createElement("div", null,
        React__default["default"].createElement("h1", null,
            "Counter: ",
            counter),
        React__default["default"].createElement("button", { onClick: onMinus }, "-"),
        React__default["default"].createElement("button", { onClick: onPlus }, "+")));
};

exports.MyCounter = MyCounter;
