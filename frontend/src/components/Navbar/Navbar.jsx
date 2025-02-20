import React from 'react'
import FreeroomsLogo from './FreeroomsLogo'
import NavIcons from './NavIcons'
import '../../index.css'

export default function Navbar() {
    return (
        <nav className='nav'>
            <FreeroomsLogo />
            <NavIcons />
        </nav>
    )
}
