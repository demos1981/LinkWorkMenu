import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Popup from 'reactjs-popup';
import "./formStyles.css";
import { createItem } from '../../../../data/dataServices';
// import { BLOGS_URL } from '../../../../data/dataLink';




const validationSchema = yup.object({
  logo: yup
    .string('Enter your logo name'),
   
  
  url: yup
    .string('Enter your url')
    .url()
    .nullable(),
});


 function FormsInput({urls:{urls}}) {

  const url=urls;
  console.log(url);

  const formik = useFormik({
    initialValues: {
      logo: 'logo',
      urls: 'urls',
      id:Date.now(),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createItem(values,url);
      
    },


    
});

return (
  <div className="formCard">
   <Popup  trigger={ <Button variant="contained" sx={{marginTop:10}}>Create Cards</Button>} position="right center">
          {close => (    
    <form onSubmit={formik.handleSubmit}>
      <TextField className="textField" 
       
        id="logo"
        name="logo"
        label="Logo"
        value={formik.values.logo}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.logo && Boolean(formik.errors.logo)}
        helperText={formik.touched.logo && formik.errors.logo}
      />
      <TextField className="textField"
     
        id="urls"
        name="urls"
        label="Urls"
        type="urls"
        value={formik.values.urls}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.urls && Boolean(formik.errors.urls)}
        helperText={formik.touched.urls && formik.errors.urls}
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
