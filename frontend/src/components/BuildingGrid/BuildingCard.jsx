import React from 'react'
import '../../index.css'


export default function BuildingCard({ name, roomsAvailable, picture }) {
    return (
        <div className='buildingCard' style={{ backgroundImage: `url(../assets/${picture})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div>
                <div>
                    <div>
                        {/* Green / Orange Button  */}
                    </div>
                    <p>{roomsAvailable} rooms available</p>
                </div>
            </div>

            <div>
                <h1>{name}</h1>
            </div>

        </div>
    )
}
