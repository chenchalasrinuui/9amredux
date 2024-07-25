'use client'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
export const A = () => {

    const nameRef = useRef()
    const dispatch = useDispatch();

    const handleClick = () => {
        const name = nameRef.current.value;
        alert(name)
    }
    return (
        <div>
            <h1>A</h1>
            <p>
                <b>Name:</b><input ref={nameRef} /><button onClick={handleClick}>submit</button>
            </p>
        </div>
    )
}
