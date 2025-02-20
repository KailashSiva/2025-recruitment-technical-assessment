import React from 'react'
import '../../index.css'


export default function BuildingCard({ name, roomsAvailable, picture }) {
    return (
        <div className='buildingCard'>
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
