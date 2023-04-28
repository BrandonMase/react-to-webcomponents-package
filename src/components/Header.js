"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Header = function (props) {
    console.log('this is the props', props);
    return (0, jsx_runtime_1.jsxs)("div", { children: ["hi ", props.text.name] });
};
exprts.Header = Header;o
