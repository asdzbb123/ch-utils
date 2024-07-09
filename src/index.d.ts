/**
 * 声明命名空间名称、模块
 */
declare namespace chUtils {
    /**
   * 生成uuid
   * @param {boolean} [secure=false] - 是否使用安全的随机数生成器。
   * @returns {string}  生成的UUID的字符串。
   */
    export function uuid(secure?: boolean): string

    /**
     * 检查一个值是否为空。
     * @param value - 要检查的值。
     * @returns 如果值为 null、undefined、空字符串、空数组或空对象，则返回 true；否则返回 false。
     */
    export function isEmpty(value: any): boolean;
}
declare module 'ch-utils' {
    export = chUtils
}