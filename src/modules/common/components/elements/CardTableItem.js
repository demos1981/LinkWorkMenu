import { Button, CardActions, CardContent, Link, Typography } from '@mui/material'
import React from 'react'



function CardTableItem({props:{id,logo,urls},onDelete}) {
  function onDeleteClick(e){
    e.stopPropagation();
    onDelete(id);
  }
  return (
    <>
    <CardContent >

    <Typography gutterBottom variant="h5" color="primary" component="div">{logo}
  
    </Typography>
    <Typography variant="body3" color="primary">{urls}
   
    </Typography>
  
  </CardContent>
  
  <CardActions>
    <Button className="buttonLink" color='secondary' size="small" variant="contained"><Link   href={urls} target="_blank" rel='noopener'>Link</Link></Button>
    <Button className="buttonEdit" variant="contained" size="small">Edit</Button> 
    <Button className="buttonDelete" variant="contained" size="small" onClick={onDeleteClick}>Delete</Button> 
  
  </CardActions>

  </>
  )
}

export default CardTableItem