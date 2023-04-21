import { useCallback, useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, delay: number | null) {
  //用ref存储回调函数和setTimeout函数
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<number>();

  // 存储最后放入的回调函数
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // 设置setTimeout
  useEffect(() => {
    if (delay === null) {
      return;
    }

    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);

    //组件卸载和变化时移除定时器
    return () => clearTimeout(timeoutRef.current);
  }, [delay]);

  // 返回一个清除定时器的函数
  const clear = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  //重置定时器
  const reset = useCallback(() => {
    clear();
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay!);
  }, [delay, clear]);

  return { reset, clear };
}
