import React, { useEffect, useState } from 'react';
import Homedata from '../HomeData/Homedata';

const Home = () => {

const[foods,setFoods]=useState([])

useEffect(()=>{
const url="https://www.themealdb.com/api/json/v1/1/search.php?s="
fetch(url)
.then(res=>res.json())
.then(data=>setFoods(data.meals))
},[])
    return (
        <div>
            {
                foods.map((food)=><Homedata key={food.idMeal} food={food}></Homedata>)
            }
        </div>
    );
};

export default Home;