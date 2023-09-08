import React from 'react';
import CardTable from '../CardTable';
import useManagement from '../../../hooks/useManagement';
import CreateButton from '../CreateButton';



function Management() {
const {management, deleteManagementItem} = useManagement();


  return (
    <>
         <CreateButton/>
         <CardTable props={management} onDelete={ deleteManagementItem}/>
    </>
   
  )
}

export default Management