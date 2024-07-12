/**
 * 字符串操作工具函数
 */

/**
 * 生成重复字符串
 * @param str 需要重复的字符串
 * @param n 重复次数
 * @returns
 */
export function repeat(str: string, n: number): string {
    let res = '';
    while (n) {
        if (n > 1) {
            str += str;
        }
        if (n & 1) {
            res += str;
        }
        n >>= 1;
    }
    return res;
}