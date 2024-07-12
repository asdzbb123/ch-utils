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

/**
 * 判断是否为 xxx 相关工具函数
 */
/**
 * 检查一个值是否为空。
 * @param value - 需要检查的值.
 * @returns 如果值为 null、undefined、空字符串、空数组或空对象，则返回 true；否则返回 false。
 */
function isEmpty(value) {
    return value == null || (typeof value === 'string' && value.trim() === '') || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0);
}
/**
 * 检查当前设备是否为IOS
 * @returns {boolean} 如果当前设备是 iOS 设备，则返回 `true`，否则返回 `false`
 */
function isIos() {
    var ua = navigator.userAgent.toLowerCase();
    // return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return /\(i[^;]+;( u;)? cpu.+mac os x/i.test(ua);
}
/**
 * 判断邮箱
 */

/**
 * 转换工具函数
 */
var CONVERSION_RATES = {
    "m2": { "m2": 1, "km2": 0.000001, "mu": 0.0015, "wmu": 0.00000015 },
    "km2": { "m2": 1000000, "km2": 1, "mu": 1500, "wmu": 0.15 },
    "mu": { "m2": 666.6666666666666, "km2": 0.0006666666666666666, "mu": 1, "wmu": 0.0001 },
    "wmu": { "m2": 6666666.666666667, "km2": 6.666666666666667, "mu": 10000, "wmu": 1 }
};
/**
 * 将面积在不同单位之间转换。
 * @param value - 面积的数量。
 * @param fromUnit - 源单位，可以是 "m2"、"km2" 、"mu"或"wmu"。
 * @param toUnit - 目标单位，可以是 "m2"、"km2" 、"mu"或"wmu"。
 * @returns 转换后的面积。
 */
function convertArea(value, fromUnit, toUnit) {
    if (!(fromUnit in CONVERSION_RATES) || !(toUnit in CONVERSION_RATES[fromUnit])) {
        throw new Error("Invalid unit provided.");
    }
    var rate = CONVERSION_RATES[fromUnit][toUnit];
    return value * rate;
}
// module.exports = riceToAcreConversion;

/**
 * 字符串操作工具函数
 */
/**
 * 生成重复字符串
 * @param str 需要重复的字符串
 * @param n 重复次数
 * @returns
 */
function repeat(str, n) {
    var res = '';
    while (n) {
        if (n % 2 === 1) {
            res += str;
        }
        if (n > 1) {
            str += str;
        }
        n >>= 1;
    }
    return res;
}
var dataDesensitizationMap = {
    idCard: function (data) {
        return data.slice(0, 6) + repeat('*', 8) + data.slice(-4);
    },
    phone: function (data) {
        return data.slice(0, 3) + '****' + data.slice(-4);
    },
    bankCard: function (data) {
        return data.slice(0, 4) + repeat('*', 10) + data.slice(-4);
    },
    address: function (data) {
        return data.slice(0, 2) + repeat('*', data.length - 2);
    },
    custom: function (data, begin, desensitization) {
        var end = data.length - begin - desensitization;
        return data.slice(0, begin) + repeat('*', desensitization) + data.slice(-end);
    },
    fixPhone: function (data) {
        return data.slice(0, 4) + repeat('*', data.length - 4);
    },
    email: function (data) {
        var atIndex = data.indexOf('@');
        var prefix = data.slice(0, 1) + repeat('*', 3) + data.slice(4, atIndex);
        return prefix + data.slice(atIndex);
    },
    username: function (data) {
        return data[0] + repeat('*', data.length - 1);
    },
};
/**
 * 数据脱敏函数工具
 * @param des 脱敏类型()
 * @param {string} data 需要脱敏的数据
 * @param {number} begin [begin=0] - 自定义脱敏时，开始脱敏的位置（仅当 'des' 的值为 'custom' 时有效）
 * @param {number} desensitization [desensitization=0] - 自定义脱敏时，需要脱敏的字符数（仅当 'des' 的值为 'custom' 时有效）
 * @returns {string} 脱敏后的数据
 */
function dataDesensitization(des, data, begin, desensitization) {
    if (begin === void 0) { begin = 0; }
    if (desensitization === void 0) { desensitization = 0; }
    if (des === 'custom') {
        return dataDesensitizationMap['custom'](data, begin, desensitization);
    }
    else if (dataDesensitizationMap[des]) {
        return dataDesensitizationMap[des](data);
    }
    else {
        throw new Error('请输入正确的脱敏类型');
    }
}
var aaa = dataDesensitization('custom', '123456789', 1, 3);
console.log(aaa);

/**
 * 统一导出所有函数
 */
// export * from './main/regexp'
var logo = "\n ________  ________  ________  _______   ________                 ___  ___  ___  ________   ________     \n|   ____|   __  |   ___ |  ___  |   __                 |  |  |  |   ___  |   ____    \n   ___|   |     _|     __/|   |    ____________   \\        \\      ___|    \n           \\      \\    _|/_    _  _|____________    __        \\        ___  \n     ____   \\     _\\    _|    \\  \\|____________|            \\      |   \n    _______ _______ _______ _______ __\\ _                __ __ __ __\\ __ _______    |_______||_______||_______||_______||__||__|               |__||__||__||__| |__||_______|\n                                                                                                         \n                                                                                                         \n                                                                                                         \n";
console.log(logo);

exports.convertArea = convertArea;
exports.dataDesensitization = dataDesensitization;
exports.isEmpty = isEmpty;
exports.isIos = isIos;
exports.repeat = repeat;
exports.uuid = uuid;
