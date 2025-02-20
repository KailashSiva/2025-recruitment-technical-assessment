import React from 'react'
import '../../index.css'

export default function SearchbarIcon({ title, icon }) {
    return (
        <button className='searchBarButton'>
            <span class="material-icons" style={{ color: 'rgb(223, 116, 44)' }}>
                {icon}
            </span>
            <p>{title}</p>
        </button>
    )
}
