import React from 'react';
import CardTable from '../CardTable';
import useDevelop from '../../../hooks/useDevelop';
import FormsInput from '../FormsInput';


function Develop() {
const {develop,deleteDevelopItem,createDevelopItem} = useDevelop();

  
  
  return (
    <>
    <FormsInput onCreate={createDevelopItem}/>
    <CardTable props={develop} onDelete={deleteDevelopItem}/>
    </>
  )
}

export default Develop;