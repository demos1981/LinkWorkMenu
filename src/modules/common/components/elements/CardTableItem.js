import { Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'


function CardTableItem({props:{logo,urls}}) {
  return (
    <>
    <CardContent >

    <Typography gutterBottom variant="h5" color="primary" component="div">{logo}
  
    </Typography>
    <Typography variant="body3" color="primary">{urls}
   
    </Typography>
  
  </CardContent>
  
  <CardActions>
    <Button className="buttonLink" variant="contained" size="small">Link</Button>
    <Button className="buttonEdit" variant="contained" size="small">Edit</Button> 
    <Button className="buttonDelete" variant="contained" size="small">Delete</Button> 
  </CardActions>
  </>
  )
}

export default CardTableItem