import { Button, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';


function Table() {
  return (
    <div>
          <Card sx={{ maxWidth: 200,zIndex:2010}}>
      <CardActionArea>
      <CardMedia
          
       
       
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Logo
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Short Discription
          </Typography>
          <Button variant="contained" sx={{marginRight:2}}component={NavLink} to="/">EDIT</Button>
          <Button variant="outlined">DELETE</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
  )
}

export default Table