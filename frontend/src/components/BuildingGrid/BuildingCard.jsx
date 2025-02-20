import React from 'react'
import '../../index.css'

export default function BuildingCard({ name, roomsAvailable, picture }) {
    const img = `../assets/${picture}`;
    const green = roomsAvailable >= 5;
    console.log(green)
    return (
        <div className='buildingCard' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='roomsContainer'>
                <div className='buildingStatus' style={{ backgroundColor: green ? 'rgb(103, 172, 96)' : 'orange' }}>
                    {/* Green / Orange Button  */}
                </div>
                <p className='roomsTitle'>{roomsAvailable} rooms available</p>

            </div>

            <div className='cardTitleContainer'>
                <h1 className='cardTitle'>{name}</h1>
            </div>

        </div>
    )
}
