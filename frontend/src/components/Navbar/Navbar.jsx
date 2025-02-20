import React from 'react'
import FreeroomsLogo from './FreeroomsLogo'
import NavIcons from './NavIcons'

export default function Navbar() {
    return (
        <nav style={{ border: '5px black solid' }}>
            <FreeroomsLogo />
            <NavIcons />
        </nav>
    )
}
