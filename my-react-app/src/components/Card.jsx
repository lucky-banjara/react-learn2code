
import profilePic from "../assets/unnamed.jpg"


function Card(){

    return(
       <div className="card">
        <img className='card-image'  src ={profilePic} alt='profile picture' style={{ width: '200px', height: '200px' }}  ></img>
        <h2 className='card-title'>Anjan Banjara</h2>
        <p className= 'card-text'>I am learning React Course and I am also learning Javascript side-by-side.</p>

       </div>
    );

}
export default Card