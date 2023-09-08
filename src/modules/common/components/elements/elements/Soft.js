import React from 'react';
import CardTable from '../CardTable';
import useSoft from '../../../hooks/useSoft';
import CreateButton from '../CreateButton';


function Soft() {
const {soft,deleteSoftItem} = useSoft();

  return (
    <>
      <CreateButton/>
    <CardTable props={soft} onDelete={deleteSoftItem}/>
    </>
  )
}

export default Soft