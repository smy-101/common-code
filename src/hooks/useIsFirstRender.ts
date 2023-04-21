import { useRef } from 'react'

//判断所在组件是否为第一次渲染
//只会在第一次改变属性
export function useIsFirstRender(): boolean {
  const isFirst = useRef(true)

  if (isFirst.current) {
    isFirst.current = false

    return true
  }

  return isFirst.current
}
