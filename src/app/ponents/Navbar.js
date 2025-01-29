'use client'
import Link from 'next/link'
import React from 'react'
import ModeToggle from '@/components/ModeToggle'

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
        <nav className="flex w-full h-10 justify-center items-center fixed mt-2">
            <ModeToggle />
            <div className='w-fit h-10 grid grid-cols-3 font-mono gap-x-10 rounded-xl border-2 border-purple-700'>
                <div className='flex justify-center items-center transform transition-all ease-in-out hover:scale-110 hover:text-green-300'>
                    <Link id={0} href="#Home" onClick={() => handleClick(0)}>Home</Link>
                </div>
                <div className='flex justify-center items-center transform transition-all ease-in-out hover:scale-110 hover:text-green-300'>
                    <Link id={1} href="#Projects" onClick={() => handleClick(1)}>Projects</Link>
                </div>
                <div className='flex justify-center items-center transform transition-all ease-in-out hover:scale-110 hover:text-green-300'>
                    <Link id={2} href="#Contact" onClick={() => handleClick(2)}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}