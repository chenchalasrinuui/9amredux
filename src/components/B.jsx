"use client"
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
export const B = () => {
    const dispatch = useDispatch();
    const [loc, setLoc] = useState()
    const handleChange = (eve) => {
        setLoc(eve.target.value)
    }
    const handleClick = () => {
        dispatch({ type: "LOC_UPDATE", payload: loc })

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
