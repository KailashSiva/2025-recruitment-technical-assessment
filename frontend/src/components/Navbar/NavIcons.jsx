import React from 'react'
import NavIcon from './NavIcon'

export default function NavIcons() {
    return (
        <div style={{ display: 'flex', gap: '0.4rem' }}>
            <NavIcon active={false} icon={'search'} classInfo={"material-symbols-outlined"} />
            <NavIcon active={true} icon={'grid_view'} classInfo={'material-symbols-rounded'} />
            <NavIcon active={false} icon={'map'} classInfo={'material-symbols-rounded'} />
            <NavIcon active={false} icon={'dark_mode'} classInfo={'material-icons'} />

        </div>
    )
}
