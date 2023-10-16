import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


function NavigationLink({path,label,currentPath,navigate}) {
  return (
   
    // <Button onClick={()=>navigate(path)} to={path} color={(currentPath === path ? "error": "inherit")} variant='outlined' component={NavLink} sx={{marginRight:2,borderRadius:2}}>
    // {label}
    // </Button>
   
   
    <Button>
      <NavLink
     className="button" to={path}> {label}
     </NavLink>
    </Button>
  
 
  
  )
}

export default NavigationLink