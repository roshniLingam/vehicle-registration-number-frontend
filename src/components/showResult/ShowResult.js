import React from "react";
import { useLocation } from "react-router-dom";
import './ShowResult.css'

const ShowResults = () => {
    const { state } = useLocation();
    return (
        <div>
            <h2 className="result">Result</h2>
            <div className="result-text">{JSON.stringify(state.response.vehicleId)}</div>
        </div>
    )
}

export default ShowResults;