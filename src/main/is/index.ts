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

type DeviceType = 'AppleSystem' | 'Mobile' | 'PC';

/**
 * 判断当前用户设备类型
 * @returns {DeviceType} 设备的类型，可以是“AppleSystem”、“Mobile”或“PC”。
 */
export function isDeviceType(): DeviceType {
    const userAgent = navigator.userAgent;

    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)) {
        return 'Mobile';
    } else if (/macintosh|mac os x/.test(userAgent)) {
        return 'AppleSystem';
    } else if (hasTouchScreen) {
        return 'Mobile';
    } else {
        return 'PC';
    }
}
