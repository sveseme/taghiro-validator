"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("./validator");
const taghiro_1 = require("taghiro");
function vNotEmpty(value) {
    return validator_1.validate(value, taghiro_1.isNotEmpty);
}
exports.vNotEmpty = vNotEmpty;
