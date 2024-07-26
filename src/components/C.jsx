"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export const C = () => {
    const { name, loc } = useSelector((state) => {
        const { name, loc } = state.appReducer
        return { name, loc }
    })
    return (
        <div>
            <h1>C</h1>
            <h3>Name:{name}</h3>
            <h3>Locaiton:{loc}</h3>
        </div>
    )
}
