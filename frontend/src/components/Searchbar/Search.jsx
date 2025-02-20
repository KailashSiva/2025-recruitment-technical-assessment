import React from 'react'
import '../../index.css'

export default function Search() {
    return (
        <div className='search'>
            <span className={`material-symbols-outlined`} style={{ color: 'grey' }}>
                search
            </span>
            <input className='searchInput' type="search" placeholder="Search for a building..."></input>
        </div>
    )
}
