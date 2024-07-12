import type { Unit } from "./main/transformation/index";
import type { DataDesensitization } from './main/data/index';
/**
 * 声明命名空间名称、模块
 */
declare namespace hingUtils {
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

  /**
 * 数据脱敏函数工具
 * @param des 脱敏类型()
 * @param {string} data 需要脱敏的数据
 * @param {number} begin [begin=0] - 自定义脱敏时，开始脱敏的位置（仅当 'des' 的值为 'custom' 时有效）
 * @param {number} desensitization [desensitization=0] - 自定义脱敏时，需要脱敏的字符数（仅当 'des' 的值为 'custom' 时有效）
 * @returns {string} 脱敏后的数据
 */
  export function dataDesensitization(
    des: DataDesensitization,
    data: string,
    begin,
    desensitization,
  ): string
}
declare module "hing-utils" {
  export = hingUtils;
}
