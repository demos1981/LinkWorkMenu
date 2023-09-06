import React from 'react';
import CardTable from '../CardTable';
import useDevelop from '../../../hooks/useDevelop';

function Develop() {
const {develop,deleteDevelopItem} = useDevelop();
  
  
  return (
    <CardTable props={develop} onDelete={deleteDevelopItem}/>
  )
}

export default Develop;