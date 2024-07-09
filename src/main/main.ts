/**
 * 基本常用函数
 */

/**
  *  生成一个随机UUID字符串。
  *  @param {boolean} [secure=false]  是否使用安全的随机数生成器。
  *  @returns {string}  生成的UUID的字符串。
  */
export function uuid(secure: boolean = false): string {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  const getRandom = (secure: boolean) => {
    if (secure) {
      if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        const array = new Uint32Array(1);
        crypto.getRandomValues(array);
        return array[0] / (0xffffffff + 1);
      }
      throw new Error('Secure random number generator is not available.');
    }
    return Math.random();
  };
  return pattern.replace(/[xy]/g, function (c) {
    const r = getRandom(secure) * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}