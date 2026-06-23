import {useState} from "react"
import List from "./List";

function MyObject(){


    // Update Objects 
    
//     const [country, setCountry] = useState({year: 2026, 
//                                             made: "Germany", 
//                                           rating: "Impressive"});
   
//     function handleYearChange(event){
//         setCountry(c => ({...c,year:event.target.value}))
//     }

//     function handleMakeChange(event){
//         setCountry(c => ({...c,made:event.target.value}))
//     }

//     function handleRatingChange(event){
//         setCountry(c => ({...country,rating:event.target.value}))
//     }


//  return (
//     <div>
//         <p>Your Team is: {country.year} {country.made} {country.rating} </p>
//         <input type="number" value={country.year} onChange={handleYearChange}/> <br />
//         <input type="text" value={country.made} onChange={handleMakeChange}/> <br />
//         <input type="text" value={country.rating} onChange={handleRatingChange} /> <br />
//     </div>
//  );
// }




//  update Arrays in React

const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);


function handleAddFood(){
    
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods (f => ([...f,newFood])) ;

}

function handleRemoveFood(index){
 setFoods(foods.filter((_, i) => i !== index ));

}

return( <div>
        <h2>List of Food</h2>
        <ul>
        {foods.map((food, index)=> <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={handleAddFood}>Add Food</button>
        </div>

);}


export default MyObject