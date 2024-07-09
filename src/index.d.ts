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
}
declare module 'ch-utils' {
    export = chUtils
}