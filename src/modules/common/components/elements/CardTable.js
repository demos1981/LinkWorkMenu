import React from 'react';
import Card from '@mui/material/Card';

import CardTableItem from './CardTableItem';







function CardTable({props}) {

  return (
   
    <Card variant="outlined" sx={{ maxWidth: 230,marginTop:10,marginRight:5}}>

 {props.map((item)=>(
  <CardTableItem key={item.id} props={item}/>
  ))} 
  
  </Card>
 
  )
}

export default CardTable;