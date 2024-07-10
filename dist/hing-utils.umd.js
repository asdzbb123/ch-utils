(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dutils = {}));
})(this, (function (exports) { 'use strict';

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
   * 转换工具函数
   */
  var CONVERSION_RATES = {
      "m2": { "m2": 1, "km2": 0.000001, "mu": 0.0015 },
      "km2": { "m2": 1000000, "km2": 1, "mu": 1500 },
      "mu": { "m2": 666.6666666666666, "km2": 0.0006666666666666666, "mu": 1 }
  };
  /**
   * 将面积在不同单位之间转换。
   * @param value - 面积的数量。
   * @param fromUnit - 源单位，可以是 "m2"、"km2" 或 "mu"。
   * @param toUnit - 目标单位，可以是 "m2"、"km2" 或 "mu"。
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

  exports.convertArea = convertArea;
  exports.isEmpty = isEmpty;
  exports.isIos = isIos;
  exports.uuid = uuid;

}));
