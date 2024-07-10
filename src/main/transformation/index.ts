/**
 * 转换工具函数
 */

/**
 * 将面积在不同单位之间转换。
 * @param value - 面积的数量。
 * @param fromUnit - 源单位，可以是 "m2"、"km2" 或 "mu"。
 * @param toUnit - 目标单位，可以是 "m2"、"km2" 或 "mu"。
 * @returns 转换后的面积。
 */
const CONVERSION_RATES = {
    "m2": { "m2": 1, "km2": 0.000001, "mu": 0.0015 },
    "km2": { "m2": 1000000, "km2": 1, "mu": 1500 },
    "mu": { "m2": 666.6666666666666, "km2": 0.0006666666666666666, "mu": 1 }
} as const;
// as const 对象只读
export type Unit = keyof typeof CONVERSION_RATES;
export function convertArea(value: number, fromUnit: Unit, toUnit: Unit): number {
    if (!(fromUnit in CONVERSION_RATES) || !(toUnit in CONVERSION_RATES[fromUnit])) {
        throw new Error("Invalid unit provided.");
    }

    const rate = CONVERSION_RATES[fromUnit][toUnit];
    return value * rate;
}

// module.exports = riceToAcreConversion;