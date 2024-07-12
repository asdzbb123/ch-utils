import type { Unit } from "./main/transformation/index";
/**
 * 声明命名空间名称、模块
 */
declare namespace chUtils {
  /**
   * 生成uuid
   * @param {boolean} [secure=false] - 是否使用安全的随机数生成器。
   * @returns {string}  生成的UUID的字符串。
   */
  export function uuid(secure?: boolean): string;

  /**
   * 将面积在不同单位之间转换。
   * @param value - 面积的数量。
   * @param fromUnit - 源单位，可以是 "m2"、"km2" 或 "mu"。
   * @param toUnit - 目标单位，可以是 "m2"、"km2" 或 "mu"。
   * @returns 转换后的面积。
   */
  export function convertArea(value: number, fromUnit: Unit, toUnit: Unit): number;

  /**
   * 检查当前设备是否为IOS
   * @returns {boolean} 如果当前设备是 iOS 设备，则返回 `true`，否则返回 `false`
   */
  export function isIos(): boolean;

  /**
 * 生成重复字符串
 * @param str 需要重复的字符串
 * @param n 重复次数
 * @returns
 */
  export function repeat(str: string, n: number): string
}
declare module "ch-utils" {
  export = chUtils;
}
