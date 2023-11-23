import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

const Home = () => {
    const navigate = useNavigate();

    function moveToUploadPage(){
        navigate(`/upload`);
    }
    return(
        <div>
            <button className="button" onClick={moveToUploadPage}>Click here to upload</button>
        </div>
    )
}

export default Home;