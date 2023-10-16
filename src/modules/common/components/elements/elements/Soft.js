import React from 'react';
import CardTable from '../CardTable';
import useSoft from '../../../hooks/useSoft';
import FormsInput from '../FormsInput';


function Soft() {
const {soft,deleteSoftItem,createSoftItem} = useSoft();


  return (
    <>
    <FormsInput onCreate={createSoftItem}/>
    <CardTable props={soft} onDelete={deleteSoftItem}/>
    </>
  )
}

export default Soft