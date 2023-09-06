import React from 'react';
import CardTable from '../CardTable';
import useSoft from '../../../hooks/useSoft';


function Soft() {
const {soft,deleteSoftItem} = useSoft();

  return (
    <CardTable props={soft} onDelete={deleteSoftItem}/>
  )
}

export default Soft