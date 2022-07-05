import { useState, useEffect } from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'

function Home() {
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    let cb = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', cb)

    return () => {
      window.removeEventListener('resize', cb)
    }
  }, [])

  return (
    <div>
      <Veggie />
      <Popular />
    </div>
  )
}

export default Home
