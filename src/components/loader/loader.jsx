import React, { useEffect } from 'react'
import { squircle } from 'ldrs'
import './loader.css'
export default function Loader() {
    squircle.register()

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.ll').classList.toggle('lll')
        },1000)
    },[])

    return (
        <>
            <div className="loader">
                <div className="ll">
                    <l-squircle
                        size="37"
                        stroke="5"
                        stroke-length="0.15"
                        bg-opacity="0.1"
                        speed="0.9"
                        color='#6c759c'
                    ></l-squircle>
                </div>
            </div>
        </>
    )
}
