

function Student(props){
    
    return(
        <div classNmae="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes":"No"}</p>
        </div>
    );



}

export default Student