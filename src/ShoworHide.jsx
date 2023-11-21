import React from "react";
import { useState } from "react";
import './assets/index.css'

export default function ShowHide(){
    const [show,setshow]=useState(false)

  const changeshow=()=>{
    if (show){
        setshow(false)
    }
    else{
        setshow(true)
    }
  }

 return(
<div className="app-div">
<button onClick={changeshow} className="button">{show?"Hide":"Show"}</button>

{show&&<h2>This Content Is Visible</h2>}

</div>)
}