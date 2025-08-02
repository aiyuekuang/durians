import { useState, useCallback, useRef } from 'react';
import { useErrorHandler } from './useErrorHandler';

interface UseAsyncOperationOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  showSuccessMessage?: boolean;
  successMessage?: string;
}

interface UseAsyncOperationReturn {
  loading: boolean;
  error: string | null;
  execute: <T>(
    operation: () => Promise<T>,
    options?: UseAsyncOperationOptions
  ) => Promise<T | undefined>;
  cancel: () => void;
}

/**
 * 异步操作 Hook
 * 提供加载状态、错误处理和取消功能
 */
export const useAsyncOperation = (): UseAsyncOperationReturn => {
  const [loading, setLoading] = useState(false);
  const { error, handleError, clearError } = useErrorHandler();
  const cancelTokenRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  const execute = useCallback(
    async <T>(
      operation: () => Promise<T>,
      options: UseAsyncOperationOptions = {}
    ): Promise<T | undefined> => {
      const {
        onSuccess,
        onError,
        showSuccessMessage = false,
        successMessage = '操作成功',
      } = options;

      // 重置取消标志
      cancelTokenRef.current = { cancelled: false };

      try {
        setLoading(true);
        clearError();

        const result = await operation();

        // 检查是否已被取消
        if (cancelTokenRef.current.cancelled) {
          return undefined;
        }

        if (showSuccessMessage) {
          const { message } = await import('antd');
          message.success(successMessage);
        }

        onSuccess?.(result);
        return result;
      } catch (err) {
        // 检查是否已被取消
        if (cancelTokenRef.current.cancelled) {
          return undefined;
        }

        handleError(err);
        onError?.(err);
        return undefined;
      } finally {
        if (!cancelTokenRef.current.cancelled) {
          setLoading(false);
        }
      }
    },
    [handleError, clearError]
  );

  const cancel = useCallback(() => {
    cancelTokenRef.current.cancelled = true;
    setLoading(false);
  }, []);

  return {
    loading,
    error,
    execute,
    cancel,
  };
};

export default useAsyncOperation;
