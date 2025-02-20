import React from 'react'
import '../../index.css'

export default function NavIcon({ icon, classInfo, active }) {
    return (
        <button className='navIconContainer' style={{ backgroundColor: active ? "rgb(223, 116, 44)" : 'transparent' }}>
            <span className={`${classInfo} navIcon`} style={{ margin: 'auto', color: active ? 'white' : 'rgb(223, 116, 44)', backgroundColor: active ? 'rgb(223, 116, 44)' : 'transparent' }}>
                {icon}
            </span>
        </button>
    )
}
