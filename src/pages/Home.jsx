import React from 'react'
import { useEffect, useState } from 'react';
import api from '../api/posts'
import Card from '../components/Card';

function Home() {

    const [nearEarthData, setNearEarthData] = useState([])
   
    useEffect(()=>{
        // FETCHING DATA 
        const fetchRecent = async () =>{
            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();

            try {
                const response = await api.get(`feed?start date=${year}-${month}-${date}/`);
                const {near_earth_objects:nearEarthObjects} = response.data
                const asteroiddata = Object.values(nearEarthObjects)
                setNearEarthData(prev => ([...prev, ...asteroiddata]))
            } catch (error) {
                console.log(error)
            }
        }
        fetchRecent();
    },[])
    const preprocessData = () =>{
        const cards = []
        for(let data of nearEarthData){
            cards.push(<Card data={data} />)
         }
         return cards
    }

  return (
    <>
        <div>
            <h3>Asteroids</h3>
            {preprocessData()}
        </div>
    </>
  )
}

export default Home