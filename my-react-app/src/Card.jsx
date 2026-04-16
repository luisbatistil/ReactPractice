import profilePic from './assets/profile.png'
import Footer from "./Footer"

function Card() {
    return(
        <div className="card">
            <img src={profilePic} alt="Profile Picture" />
            <h2>LuisBatistil</h2>
            <p>I like Coding, I Consume Knowledge</p>
        </div>
    );
}

export default Card;