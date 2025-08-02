import { arrHasKey, encrypted, decrypted } from '../common';

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
