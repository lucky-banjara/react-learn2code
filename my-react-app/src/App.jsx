import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Food from "./components/Food.jsx"
import Card from "./components/Card.jsx"
import Student from "./components/Student.jsx"
import UserGreeting from "./components/UserGreeting.jsx"
import List from "./components/List.jsx"
import Button from "./components/Button.jsx"
import MyComponent from "./components/MyComponent.jsx"
import Counter from "./components/Counter.jsx"
import MyCompo from "./components/MyCompo.jsx"
import ColorPicker from "./components/ColorPicker.jsx"
import MyObject from "./components/MyObject.jsx"
import ToDoList from "./components/ToDoList.jsx"

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
     < Card style="center"/>
     {/* < Student name= "Spongebob" age={30} isStudent={true}/> */}
     < UserGreeting isLoggedIn={true} username="Anjan" />
     {/* <Food /> */}
     {/* <Button/> */}

     {/* {fruits.length > 0 ? <List items = {fruits} category="Fruits With Calories Details"/>: null} */}
     {/* {vegetables.length > 0 && <List items = {vegetables} category="Vegetables With Calories Detail"/>} */}
     {/* < MyComponent/> */}
     {/* <Counter /> */}
     {/* <MyCompo/> */}
     {/* <MyObject/> */}
     {/* <ToDoList /> */}
     <ColorPicker />
     <Footer />
     
     
    </>
  );

}
export default App
