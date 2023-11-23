import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './ImageSelect.css'


const ImageSelect = ()=> {
  const [image, setImage] = useState(``);
  const navigate = useNavigate();
  
  // set image when user uploads an image
  const handleChange = (e)=>{
    setImage(e.target.files[0]);
  }

  // send post request when submit button is clicked
  // with image file as parameter
  const handleSubmit = ()=> {
    const url = 'http://127.0.0.1:2040/registration_number';
    const formData = new FormData();
    formData.append(`image`, image);
    axios.post(url, formData).then((res)=>{
      console.log(res);
      // navigate to show-result
      // to display the response
      navigate('/show-result', {state: {response: res.data}})
    })
  }
  return (
    <div className="content-area">
      <p>The image should be PNG format to get better results.</p><br/>
      <input type="file" accept="image/png" onChange={handleChange} required /><br/>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ImageSelect;