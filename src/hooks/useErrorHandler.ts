import { useState, useCallback } from 'react';
import { message } from 'antd';

interface ErrorState {
  error: string | null;
  isError: boolean;
}

interface UseErrorHandlerReturn extends ErrorState {
  setError: (error: string | Error | null) => void;
  clearError: () => void;
  handleError: (error: unknown, defaultMessage?: string) => void;
  withErrorHandling: <T extends (...args: any[]) => Promise<any>>(
    fn: T
  ) => (...args: Parameters<T>) => Promise<ReturnType<T> | undefined>;
}

/**
 * 错误处理 Hook
 * 提供统一的错误处理机制
 */
export const useErrorHandler = (): UseErrorHandlerReturn => {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    isError: false,
  });

  const setError = useCallback((error: string | Error | null) => {
    if (error === null) {
      setErrorState({ error: null, isError: false });
      return;
    }

    const errorMessage = error instanceof Error ? error.message : error;
    setErrorState({ error: errorMessage, isError: true });
  }, []);

  const clearError = useCallback(() => {
    setErrorState({ error: null, isError: false });
  }, []);

  const handleError = useCallback((error: unknown, defaultMessage = '操作失败') => {
    let errorMessage = defaultMessage;

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'message' in error) {
      errorMessage = (error as any).message || defaultMessage;
    }

    setError(errorMessage);
    message.error(errorMessage);
    console.error('Error occurred:', error);
  }, [setError]);

  const withErrorHandling = useCallback(
    <T extends (...args: any[]) => Promise<any>>(fn: T) => {
      return async (...args: Parameters<T>): Promise<ReturnType<T> | undefined> => {
        try {
          clearError();
          return await fn(...args);
        } catch (error) {
          handleError(error);
          return undefined;
        }
      };
    },
    [clearError, handleError]
  );

  return {
    ...errorState,
    setError,
    clearError,
    handleError,
    withErrorHandling,
  };
};

export default useErrorHandler;
