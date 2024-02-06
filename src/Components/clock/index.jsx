import React, { useEffect } from 'react'
import { useState } from 'react'

const Clock = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTimer(time => time + 1)
        }, 1000);
    },[])
  return (
    <>
        <div>Clock</div>
        <p>{timer} since last refresh</p>
    </>
  )
}

export default Clock