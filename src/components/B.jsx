"use client"
import React, { useRef, useState } from 'react'

export const B = () => {
    const [loc, setLoc] = useState()
    const handleChange = (eve) => {
        setLoc(eve.target.value)
    }
    const handleClick = () => {
        alert(loc)
    }
    return (
        <div>
            <h1>B</h1>
            <p>
                <b>Location:</b><input onChange={handleChange} /><button onClick={handleClick}>submit</button>
            </p>
        </div>
    )
}
