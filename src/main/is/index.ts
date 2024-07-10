/**
 * 判断是否为 xxx 相关工具函数
 */

/**
 * 检查一个值是否为空。
 * @param value - 需要检查的值.
 * @returns 如果值为 null、undefined、空字符串、空数组或空对象，则返回 true；否则返回 false。
 */
export function isEmpty(value: any): boolean {
    return value == null || (typeof value === 'string' && value.trim() === '') || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0);
}

/**
 * 检查当前设备是否为IOS
 * @returns {boolean} 如果当前设备是 iOS 设备，则返回 `true`，否则返回 `false`
 */
export function isIos(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    // return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return /\(i[^;]+;( u;)? cpu.+mac os x/i.test(ua);
}