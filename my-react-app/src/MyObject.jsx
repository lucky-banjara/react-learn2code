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

// const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);


// function handleAddFood(){
    
//     const newFood = document.getElementById("foodInput").value;
//     document.getElementById("foodInput").value = "";

//     setFoods (f => ([...f,newFood])) ;

// }

// function handleRemoveFood(index){
//  setFoods(foods.filter((_, i) => i !== index ));

// }

// return( <div>
//         <h2>List of Food</h2>
//         <ul>
//         {foods.map((food, index)=> <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
//         </ul>
//         <input type="text" id="foodInput" placeholder="Enter food name"/>
//         <button onClick={handleAddFood}>Add Food</button>
//         </div>

// );}




// update array of objects

const [cars, setCars] = useState([]);
const [carYear, setcarYear] = useState(new Date().getFullYear());
const [carMake, setcarMake] = useState("");
const [carModel, setcarModel] =useState("");

function handleAddCar(){
   const newCar = {year: carYear,
                   make: carMake,
                   model:carModel};
    setCars(c => [...c, newCar]);

    setcarYear(new Date().getFullYear());
    setcarMake("");
    setcarModel("");
}

function handleRemoveCar(index){
    setCars(c => c.filter((_, i) => i!==index));

}
function handleYearChange(event){
    setcarYear(event.target.value);

}
function handleMakeChange(event){
    setcarMake(event.target.value);
}
function handleModelChange(event){
    setcarModel(event.target.value);
}


return (
      <div>
       <h2>List of Car Objects</h2>
       <ul>
        {cars.map((car, index) => 
        <li key={index} onClick={()=> handleRemoveCar(index)}>
         {car.year} {car.make} {car.model}
        </li> )}
       </ul>
       <input type="number" value={carYear} onChange={handleYearChange}/> <br />
       <input type="text"  value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/> <br />
       <input type="text"  value={carModel} onChange={handleModelChange} placeholder="Enter car model"/> <br />
       <button onClick={handleAddCar}>Add Car</button>
      </div>
);}


export default MyObject