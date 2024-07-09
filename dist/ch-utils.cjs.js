'use strict';

/**
 * 基本常用函数
 */
/**
  *  生成一个随机UUID字符串。
  *  @param {boolean} [secure=false]  是否使用安全的随机数生成器。
  *  @returns {string}  生成的UUID的字符串。
  */
function uuid(secure) {
    if (secure === void 0) { secure = false; }
    var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    var getRandom = function (secure) {
        if (secure) {
            if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
                var array = new Uint32Array(1);
                crypto.getRandomValues(array);
                return array[0] / (0xffffffff + 1);
            }
            throw new Error('Secure random number generator is not available.');
        }
        return Math.random();
    };
    return pattern.replace(/[xy]/g, function (c) {
        var r = getRandom(secure) * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

exports.uuid = uuid;
