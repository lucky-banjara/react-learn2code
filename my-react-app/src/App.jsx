import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import Button from "./Button.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"

function App() {

   const fruits = [
        {id:1, name:'apple', calories:95},
        {id:2, name:'orange', calories:45},
        {id:3, name:'banana', calories:105}, 
        {id:4, name:'coconut', calories:159}, 
        {id:5, name:'pineapple', calories:37}];


    const vegetables = [
        {id:6, name:'potatoes', calories:110},
        {id:7, name:'celery', calories:45},
        {id:8, name:'carrots', calories:223}, 
        {id:9, name:'corn', calories:78}, 
        {id:10, name:'broccoli', calories:70}];


  return (
    <>
     <Header />
     < Card />
     {/* < Student name= "Spongebob" age={30} isStudent={true}/> */}
     < UserGreeting isLoggedIn={true} username="Anjan" />
     {/* <Food /> */}
     {/* <Button/> */}

     {/* {fruits.length > 0 ? <List items = {fruits} category="Fruits With Calories Details"/>: null} */}
     {/* {vegetables.length > 0 && <List items = {vegetables} category="Vegetables With Calories Detail"/>} */}
     < MyComponent/>
     <Counter />
     <Footer />
     
     
    </>
  );

}
export default App
