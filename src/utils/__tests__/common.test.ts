import { arrHasKey, safeJsonParse, debounce, throttle, encrypted, decrypted } from '../common';

describe('common utils', () => {
  describe('arrHasKey', () => {
    it('should find element that matches predicate', () => {
      const arr = [{ id: 1, name: 'test1' }, { id: 2, name: 'test2' }];
      const result = arrHasKey((item) => item.id === 2, arr);
      expect(result).toEqual({ id: 2, name: 'test2' });
    });

    it('should return undefined if no element matches', () => {
      const arr = [{ id: 1, name: 'test1' }];
      const result = arrHasKey((item) => item.id === 3, arr);
      expect(result).toBeUndefined();
    });

    it('should handle empty array', () => {
      const result = arrHasKey((item) => item.id === 1, []);
      expect(result).toBeUndefined();
    });

    it('should handle non-array input', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      const result = arrHasKey((item) => item.id === 1, null as any);
      expect(result).toBeUndefined();
      expect(consoleSpy).toHaveBeenCalledWith('arrHasKey: arr should be an array');
      consoleSpy.mockRestore();
    });
  });

  describe('safeJsonParse', () => {
    it('should parse valid JSON', () => {
      const result = safeJsonParse('{"name": "test"}', {});
      expect(result).toEqual({ name: 'test' });
    });

    it('should return default value for invalid JSON', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
      const result = safeJsonParse('invalid json', { default: true });
      expect(result).toEqual({ default: true });
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('debounce', () => {
    jest.useFakeTimers();

    it('should debounce function calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn('test1');
      debouncedFn('test2');
      debouncedFn('test3');

      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('test3');
    });

    afterEach(() => {
      jest.clearAllTimers();
    });
  });

  describe('throttle', () => {
    jest.useFakeTimers();

    it('should throttle function calls', () => {
      const mockFn = jest.fn();
      const throttledFn = throttle(mockFn, 100);

      throttledFn('test1');
      throttledFn('test2');
      throttledFn('test3');

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('test1');

      jest.advanceTimersByTime(100);

      throttledFn('test4');
      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(mockFn).toHaveBeenCalledWith('test4');
    });

    afterEach(() => {
      jest.clearAllTimers();
    });
  });

  describe('encryption', () => {
    const testValue = 'test password';
    const secretKey = 'test-secret-key';

    it('should encrypt and decrypt correctly', () => {
      const encryptedValue = encrypted(testValue, secretKey);
      expect(encryptedValue).toBeTruthy();
      expect(encryptedValue).not.toBe(testValue);

      const decryptedValue = decrypted(encryptedValue, secretKey);
      expect(decryptedValue).toBe(testValue);
    });

    it('should handle encryption errors', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      expect(() => {
        encrypted(testValue, '');
      }).toThrow('加密失败');
      
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });

    it('should handle decryption errors', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      expect(() => {
        decrypted('invalid-encrypted-value', secretKey);
      }).toThrow('解密失败');
      
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });
});
