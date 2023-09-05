import React from 'react';
import CardTable from '../CardTable';
import useDevelop from '../../../hooks/useDevelop';

function Develop() {
const {develop} = useDevelop();
  
  
  return (
    <CardTable props={develop}/>
  )
}

export default Develop;