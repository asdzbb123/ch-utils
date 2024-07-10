import { isIos } from '../../src/index';
describe('isIos', () => {
    test('IOS ✓', () => {
        const iOSUserAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';
        Object.defineProperty(navigator, 'userAgent', {
            value: iOSUserAgent,
            configurable: true,
        });
        expect(isIos()).toBe(true);
    });

    test('IOS No', () => {
        const noniOSUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
        Object.defineProperty(navigator, 'userAgent', {
            value: noniOSUserAgent,
            configurable: true,
        });
        expect(isIos()).toBe(false);
    });
});