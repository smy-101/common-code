import { useEffect, useRef } from 'react'

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  //记录回调函数
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  //设置interval
  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

