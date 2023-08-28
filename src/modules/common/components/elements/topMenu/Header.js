import React from 'react';
import { AppBar, Toolbar,Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LeftMenu from '../brandTable/LeftMenu';
import Navigation from '../../../navigation/Navigation';




function Header({currentPath,navigate}) {
  return (
  
    <AppBar position="fixed">
       <Toolbar>
       <LeftMenu/>
        <Button to="/" variant="text" component={NavLink} color="inherit" sx={{flexGrow:1, fontSize:25, width:200}}>

            Work Menu
         
        </Button>
        
        <Navigation currentPath={currentPath} navigate={navigate} />
    

      
        
      


       </Toolbar>

    </AppBar>
     
  )
}

export default Header;