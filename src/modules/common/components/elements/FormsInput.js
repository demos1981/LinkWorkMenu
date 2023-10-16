import React from 'react';

import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Popup from 'reactjs-popup';
import "./formStyles.css";






// const validationSchema = yup.object({
//   logo: yup
//     .string('Enter your logo name'),
   
  
//   url: yup
//     .string('Enter your url')
//     .url()
//     .nullable(),
// });


 function FormsInput({onCreate}) {
  function onFormSubmit(e){
     e.preventDefault();
     onCreate({
      logo:e.target.elements.logo.value,
      urls:e.target.elements.urls.value,
     });
     e.target.reset();

  }


//   const formik = useFormik({
//     initialValues: {
//       logo: 'logo',
//       urls: 'urls',
//       id:Date.now(),
//     },

//     validationSchema: validationSchema,
//     onSubmit: (values) => {
    
//       onCreate(values,urls);
//       }
      
// });

return (
  <div className="formCard">
   <Popup  trigger={ <Button variant="contained" sx={{marginTop:10}}>Create Cards</Button>} position="right center">
          {close => (    
    <form onSubmit={onFormSubmit}>
      <input className="textField" 
       
        // id="logo"
        name="logo"
        // label="Logo"
        type="text"
    
      />
      <input className="textField"
     
        // id="urls"
        name="urls"
        // label="Urls"
        type="text"
    
      />
      <Button color="primary" variant="contained"  type="submit" sx={{height:50,width:200,marginLeft:2}}  >
        Submit
      </Button>
        
      <Button color="primary" variant="contained"   sx={{height:50,width:200,marginLeft:2}}
                        onClick={() => {
                            
                                close();
                                }}
                                >
                            Close
      </Button>
     
  </form>
  )}
          </Popup>
  </div>
  
  //   
);
};
export default FormsInput;