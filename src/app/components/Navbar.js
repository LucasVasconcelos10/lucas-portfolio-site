'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const [buttonStates, setButtonStates] = React.useState(() => generateBtnStates())


    function generateBtnStates() {
        let btnStates = []
        for (let i = 0; i < 3; i++) {
            btnStates.push({
                selected: false,
                id: i
            })
        }
        return btnStates
    }

    function handleClick(clickedBtnId) {
        setButtonStates((prevBtnStates) => {
            return prevBtnStates.map((btnState) => {
                return btnState.id === clickedBtnId ? {
                    ...btnState,
                    selected: !btnState.selected
                } : {
                    ...btnState,
                    selected: false
                }
            })
        })
    }

    return (
        <nav className="flex w-full h-10 justify-center items-center fixed">
            <div className='flex gap-x-10'>
                <Link id={0} href="#Home" className="hover:text-green-300" onClick={() => handleClick(0)}>Home</Link>
                <Link id={1} href="#Projects" className='hover:text-green-300' onClick={() => handleClick(1)}>Projects</Link>
                <Link id={2} href="#Contact" className="hover:text-green-300" onClick={() => handleClick(2)}>Contact</Link>
            </div>
        </nav>
    )
}