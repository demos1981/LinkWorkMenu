import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createItem } from '../../../../data/dataServices';
import Popup from 'reactjs-popup';
import "./formStyles.css";




const validationSchema = yup.object({
  logo: yup
    .string('Enter your logo name'),
  
  url: yup
    .string('Enter your url')
    .url()
    .nullable(),
});


 function FormsInput(urls) {
  const formik = useFormik({
    initialValues: {
      logo: 'logo',
      url: 'url',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      createItem(values,urls);
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
     
        id="url"
        name="url"
        label="Url"
        type="url"
        value={formik.values.url}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.url && Boolean(formik.errors.url)}
        helperText={formik.touched.url && formik.errors.url}
      />
      <Button color="primary" variant="contained"  type="submit" sx={{height:50,width:200,marginLeft:2}}>
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
