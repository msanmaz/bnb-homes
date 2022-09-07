import { useRouter } from 'next/router'
import React from 'react'


const Index = () => {
    const router = useRouter()
    console.log(router)
  return (
    <div>Index</div>
  )
}

export default Index