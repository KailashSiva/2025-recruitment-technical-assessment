import React, { useState } from 'react'
import '../../index.css'

export default function FreeroomsLogo() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <button className='logoContainer' onClick={() => (
            setIsOpen(prev => !prev)
        )}>
            <img height='70px' width='70px'
                src={isOpen ? '../../../assets/freeRoomsLogo.png' : '../../../assets/freeroomsDoorClosed.png'} />
            <div>
                <p style={{ fontFamily: 'Josefin Sans', fontSize: '2rem', color: 'rgb(223, 116, 44)' }}>Freerooms</p>
            </div>
        </button>
    )
}
