import React from 'react';
import Card from '@mui/material/Card';

import CardTableItem from './CardTableItem';







function CardTable({blogs}) {

  return (
   
    <Card variant="outlined" sx={{ maxWidth: 230,marginTop:10,marginRight:5}}>

 {blogs.map((item)=>(
  <CardTableItem key={item.id} blog={item}/>
  ))} 
  
  </Card>
 
  )
}

export default CardTable;