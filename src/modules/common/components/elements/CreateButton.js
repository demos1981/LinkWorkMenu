// import { Button } from "@mui/material";
import React from "react";

// import Popup from 'reactjs-popup';
import FormsInput from "./FormsInput";





function CreateButton(url){
    console.log(url);
//  function onCreateClick(e){
// e.preventDefault();
// <PopUps/>

// // onCreate({
// //     logo:e.target.elements.logo.value,
// //     url:e.target.elements.url.value,
  
// // })

//  }

    return(
        <>
        
                
            <div>
                {<FormsInput urls={url}/>}
            </div>
              
    
        </>
    );
}

export default CreateButton;