

function Button (){
    
    // const handleClick = () => console.log("Ouch You Clicked !") ;


    // passing arguments

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);



    // onClick + conditional

    // let count = 0;

    // const handleclick2 = (name) => {
    //     if (count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`)
    //     }
    //     else {
    //         console.log(`${name} stop clicking me ! `)
    //     }

    //     }


    // using events

    const handleClick = (e) => e.target.textContent = "Hola Mami";
    
    // return(<button onClick={(e)=>handleClick(e)}>Click Me </button>);

    return(<button onDoubleClick={(e)=>handleClick(e)}>Click Me </button>);

}

export default Button