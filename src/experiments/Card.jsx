import Tile from "./Tile";

const Card = ({data}) =>{
    const {close_approach_data:closeApproachData} =data[0];
    const {close_approach_date:closeApproachDate} = closeApproachData[0];
    const cardData = []
     for(let element in data){
         cardData.push( <Tile data={data[element]}/>)
     };
    return(
        <>
            <h3>{closeApproachDate}</h3>
            {cardData}
        </>
    )
}

export default Card;