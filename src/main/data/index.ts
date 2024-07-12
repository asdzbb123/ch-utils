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

const dataDesensitizationMap = {
    idCard: (data: string): string => {
        return data.slice(0, 6) + repeat('*', 8) + data.slice(-4);
    },
    phone: (data: string): string => {
        return data.slice(0, 3) + '****' + data.slice(-4);
    },
    bankCard: (data: string): string => {
        return data.slice(0, 4) + repeat('*', 10) + data.slice(-4);
    },
    address: (data: string): string => {
        return data.slice(0, 2) + repeat('*', data.length - 2);
    },
    custom: (data: string, begin: number, desensitization: number): string => {
        const end = data.length - begin - desensitization;
        return data.slice(0, begin) + repeat('*', desensitization) + data.slice(-end);
    },
    fixPhone: (data: string): string => {
        return data.slice(0, 4) + repeat('*', data.length - 4);
    },
    email: (data: string): string => {
        const atIndex = data.indexOf('@');
        const prefix = data.slice(0, 1) + repeat('*', 3) + data.slice(4, atIndex);
        return prefix + data.slice(atIndex);
    },
    username: (data: string): string => {
        return data[0] + repeat('*', data.length - 1);
    },
};

export type DataDesensitization =
    | 'idCard'
    | 'bankCard'
    | 'phone'
    | 'address'
    | 'custom'
    | 'fixPhone'
    | 'email'
    | 'username';
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
    begin = 0,
    desensitization = 0,
): string {
    if (des === 'custom') {
        return dataDesensitizationMap['custom'](data, begin, desensitization);
    } else if (dataDesensitizationMap[des]) {
        return dataDesensitizationMap[des](data);
    } else {
        throw new Error('请输入正确的脱敏类型');
    }
};

const aaa = dataDesensitization('custom', '123456789', 1, 3)
console.log(aaa);
