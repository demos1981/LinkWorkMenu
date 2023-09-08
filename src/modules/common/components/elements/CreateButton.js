import { Button } from "@mui/material";
import React from "react";

function CreateButton({onCreate}){
function onCreateClick(e){
e.preventDefault();


onCreate({
    logo:e.target.elements.logo.value,
    url:e.target.elements.url.value,
})

}

    return(
        <Button variant="contained" sx={{marginTop:10}} onClick={onCreateClick}>Create Cards</Button>
    )
}

export default CreateButton;