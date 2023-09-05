import React from 'react';
import Card from '@mui/material/Card';

import CardTableItem from './CardTableItem';







function CardTable({props,onDelete}) {

  return (
   
    <Card variant="outlined" sx={{ maxWidth: 230,marginTop:10,marginRight:5}}>

 {props.map((item)=>(
  <CardTableItem key={item.id} props={item} onDelete={onDelete}/>
  ))} 
  
  </Card>
 
  )
}

export default CardTable;