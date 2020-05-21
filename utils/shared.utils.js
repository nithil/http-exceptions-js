exports.isUndefined = (obj) => typeof obj === 'undefined';
exports.isObject = (obj) => !exports.isNil(obj) && typeof obj === 'object';
exports.isFunction = (fn) => typeof fn === 'function';
exports.isString = (string) => typeof string === 'string';
exports.isNil = (obj) => exports.isUndefined(obj) || obj === null;
exports.isArray = (array) => Array.isArray(array);
