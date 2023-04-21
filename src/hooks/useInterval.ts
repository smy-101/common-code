import {useCallback, useEffect, useRef} from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const callbackRef = useRef(callback);
  const intervalRef = useRef<number>();

  //记录回调函数
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  //设置interval
  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    intervalRef.current = setInterval(() => callbackRef.current(), delay)

    return () => clearInterval(intervalRef.current)
  }, [delay]);

  // 返回一个清除定时器的函数
  const clear = useCallback(() => {
    clearTimeout(intervalRef.current);
  }, []);

  //重置定时器
  const reset = useCallback(() => {
    clear();
    intervalRef.current = setTimeout(() => callbackRef.current(), delay!);
  }, [delay, clear]);

  return {reset,clear}
}

