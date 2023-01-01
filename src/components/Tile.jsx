import React from 'react'

const Tile = ({data}) => {
    let {absolute_magnitude_h:absoluteMagnitudeH,
        close_approach_data:closeApproachData, 
        estimated_diameter:{kilometers:{estimated_diameter_min, estimated_diameter_max}},
        is_potentially_hazardous_asteroid:hazardus,
        id,
        name}= data;
        const {close_approach_date_full: closeApproachDate}= closeApproachData[0];
    hazardus = hazardus.toString()

  return (
    <>
        <div>
            <h4>{name}</h4>
            <ul>
                <li>Absolute magnitude: {absoluteMagnitudeH}</li>
                <li>Close Approach date: {closeApproachDate}</li>
                
                <li>minimum estimated diameter: {estimated_diameter_min}</li>
                <li>maximum estimated diameter {estimated_diameter_max}</li>
                <li>{hazardus}</li>
            </ul>
        </div>
    </>
    
  )
}

export default Tile