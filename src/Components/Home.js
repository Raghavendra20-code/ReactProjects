import React from "react";
import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <Link to='/create'>
                <button className='HomeButton1'>Create</button>
            </Link>
            <Link to='/read' >
                <button className='HomeButton1'>Read</button>
            </Link>
        </div>
    )
}

export default Home;