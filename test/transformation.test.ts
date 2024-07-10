import { convertArea } from '../src';
describe('convertArea', () => {
    test('converts m2 to mu', () => {
        expect(convertArea(1000, 'm2', 'mu')).toBeCloseTo(1.5);
    });

    test('converts m2 to km2', () => {
        expect(convertArea(1000000, 'm2', 'km2')).toBeCloseTo(1);
    });

    test('converts km2 to m2', () => {
        expect(convertArea(1, 'km2', 'm2')).toBeCloseTo(1000000);
    });

    test('converts km2 to mu', () => {
        expect(convertArea(1, 'km2', 'mu')).toBeCloseTo(1500);
    });

    test('converts mu to m2', () => {
        expect(convertArea(1, 'mu', 'm2')).toBeCloseTo(666.6666666666666);
    });

    test('converts mu to km2', () => {
        expect(convertArea(1500, 'mu', 'km2')).toBeCloseTo(1);
    });

    test('throws error for invalid units', () => {
        expect(() => convertArea(1, 'invalid' as any, 'm2')).toThrow('Invalid unit provided.');
        expect(() => convertArea(1, 'm2', 'invalid' as any)).toThrow('Invalid unit provided.');
    });
});