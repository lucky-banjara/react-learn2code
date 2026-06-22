import {useState} from 'react';

// onChange = Event handler used primarily with form elements.
//Triggers a function every time the value of the input changes.

function MyCompo(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment]= useState("");
    const [shipping, setshipping] = useState("");


    // an arrow function assigned to a variable.

    // const handleNameChange = (event) => {
    //     setName(event.target.value)
    // }
    
    // function declarations: Function declarations are hoisted. 
    // You can call them before they appear in the code. Arrow functions are not hoisted.

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setshipping(event.target.value)
    }


    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
            
            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity:{quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'/>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={handlePaymentChange}> 
                
                <option value="" >Select an Option</option>
                <option value="Visa" >Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>

            </select>
            <p>Payment: {payment}</p>

            <label >
                <input type="radio" value="Pick Up"
                  checked = {shipping === "Pick Up"}
                  onChange = {handleShippingChange} />

                Pick Up
            </label>
            <label >
                <input type="radio" value="Delivery"
                  checked = {shipping === "Delivery"}
                  onChange = {handleShippingChange} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    );




}


export default MyCompo 