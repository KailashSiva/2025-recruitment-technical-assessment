import React from 'react'
import BuildingCard from './BuildingCard'
import buildingData from '../../../data.json'
import { v4 as uuidv4 } from 'uuid';
import '../../index.css'


export default function BuildingGrid() {

    console.log(buildingData)

    return (
        <div className={'buildingGrid'}>
            {buildingData.map((building) => (
                <BuildingCard key={uuidv4()} name={building?.name}
                    roomsAvailable={building?.rooms_available}
                    picture={building?.building_picture || building?.building_file} />
            ))}
        </div>
    )
}
