import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function FuntionalCounterPage() {
  const [count, setCount] = useState(0)
  const router = useRouter()

  // componentDidMount()
  useEffect(() => {
    console.log('그려지고 나서 실행')
  }, [])

  // componentDidMount() + componentDidUpdate()
  useEffect(() => {
    console.log('상태 변경 후 실행')
  }) // 배열이 없으면 어떤 값이든 변하면 다 실행됨
  useEffect(() => {
    console.log('counter 상태 변경 후 실행')
  }, [count]) // []: 의존성 배열(dependency Array)

  useEffect(() => {
    // componentWillUnmount()
    return () => {
      console.log('사라지기 전 실행')
    }
  }, [])

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log('그려지고 나서 실행')
    return () => {
      console.log('사라지기 전 실행')
    }
  })

  // 2. useEffect의 잘못된 사용법 => 주의!!
  useEffect(() => {
    // setWriter() 1. 추가렌더링
    // setCount(prev => prev + 1) 2. 무한루프
  }, [count])

  const onClickCountUp = (): void => {
    console.log(count)
    setCount((prev) => prev + 1)
  }

  const onClickMove = (): void => {
    void router.push('/')
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 UP</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  )
}
