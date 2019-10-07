"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
function isEmail(value) {
    return validator.isEmail(value);
}
exports.isEmail = isEmail;
function isCreditCard(value) {
    return validator.isCreditCard(value);
}
exports.isCreditCard = isCreditCard;
function isCurrrency(value) {
    return validator.isCurrency(value);
}
exports.isCurrrency = isCurrrency;
function isDataUri(value) {
    return validator.isDataURI(value);
}
exports.isDataUri = isDataUri;
function isFQDN(value) {
    return validator.isFQDN(value);
}
exports.isFQDN = isFQDN;
function isHash(value, hash) {
    return validator.isHash(value, hash);
}
exports.isHash = isHash;
function isHexColor(value) {
    return validator.isHexColor(value);
}
exports.isHexColor = isHexColor;
function isIp(value) {
    return validator.isIP(value);
}
exports.isIp = isIp;
function isIsbn(value) {
    return validator.isISBN(value);
}
exports.isIsbn = isIsbn;
function isIssn(value) {
    return validator.isISSN(value);
}
exports.isIssn = isIssn;
function isIsin(value) {
    return validator.isISIN(value);
}
exports.isIsin = isIsin;
function isMimeType(value) {
    return validator.isMimeType(value);
}
exports.isMimeType = isMimeType;
