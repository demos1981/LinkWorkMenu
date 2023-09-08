import React from 'react';
import CardTable from '../CardTable';
import useDevelop from '../../../hooks/useDevelop';
import CreateButton from '../CreateButton';


function Develop() {
const {develop,deleteDevelopItem} = useDevelop();
  
  
  return (
    <>
    <CreateButton/>
    <CardTable props={develop} onDelete={deleteDevelopItem}/>
    </>
  )
}

export default Develop;