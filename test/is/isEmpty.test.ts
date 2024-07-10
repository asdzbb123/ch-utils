import { isEmpty } from '../../src/index';
describe('isEmpty', () => {
    test('should return true for null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('should return true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for an empty string', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('should return true for a whitespace string', () => {
        expect(isEmpty('   ')).toBe(true);
    });

    test('should return true for an empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return true for an empty object', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for a non-empty string', () => {
        expect(isEmpty('Hello')).toBe(false);
    });

    test('should return false for a non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return false for a non-empty object', () => {
        expect(isEmpty({ key: 'value' })).toBe(false);
    });

    test('should return false for zero', () => {
        expect(isEmpty(0)).toBe(false);
    });
})