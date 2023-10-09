import { act, renderHook } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment(10)
    })
    expect(result.current.count).toBe(10)
  })
})
