import { useCallback, useState } from 'react'

export function useCounter() {
  const [count, setCount] = useState(0)
  const [sumParam, setSumParam] = useState(0)
  const increment = useCallback((a:number) =>{ setCount(x => x + a) ;setSumParam(count)}, [count])
  return { count, increment, sumParam, }
}
