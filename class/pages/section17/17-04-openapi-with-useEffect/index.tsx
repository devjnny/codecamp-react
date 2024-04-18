import axios from 'axios'
import { useEffect, useState } from 'react'

export default function RestGetPage() {
  const [dog, setDog] = useState<any>('')

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const { data } = await axios.get(
        'https://dog.ceo/api/breeds/image/random',
      )
      console.log(data.message)
      if (data) setDog(data.message)
    }
    void onClickSync()
  }, [])

  return (
    <div>
      <img src={dog} alt="" />
      {/* <button>REST-API(동기) 요청</button> */}
    </div>
  )
}
