

function List(props){

    // const fruits = [
    //     {id:1, name:'apple', calories:95},
    //     {id:2, name:'orange', calories:45},
    //     {id:3, name:'banana', calories:105}, 
    //     {id:4, name:'coconut', calories:159}, 
    //     {id:5, name:'pineapple', calories:37}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Alphabetical Order
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)); //reverse alphabetical

    // fruits.sort((a,b) => a.calories - b.calories); //numeric
    // fruits.sort((a,b) => b.calories - a.calories); //reverse numeric


    // const lowCalFruits = fruits.filter((fruit)=> fruit.calories < 100)
    // // const lowCalFruits = fruits.filter((fruit)=> fruit.calories >= 100)

    // const listItems = lowCalFruits.map((lowCalFruits) => <li key={lowCalFruits.id}>
    //                                        {lowCalFruits.name}: &nbsp; 
    //                                       <b> {lowCalFruits.calories}</b></li>)



    // const listItems = fruits.map((fruit) => <li key={fruit.id}>
    //                                        {fruit.name}: &nbsp; 
    //                                       <b> {fruit.calories}</b></li>)



    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map((fruit) => <li key={fruit.id}>
                                         {fruit.name}: &nbsp; 
                                        <b> {fruit.calories}</b></li>)



    return(
       <>
       <h3 className="list-category">{category}</h3>
       <ol className="list-item">{listItems}</ol>
       </> );


}


export default  List