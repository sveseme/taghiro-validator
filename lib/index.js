"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
function isEmail(value) {
    return validator_1.isEmail(value);
}
exports.isEmail = isEmail;
