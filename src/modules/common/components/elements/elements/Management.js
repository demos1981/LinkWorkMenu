import React from 'react';
import CardTable from '../CardTable';
import useManagement from '../../../hooks/useManagement';
import FormsInput from '../FormsInput';



function Management() {
const {management, deleteManagementItem,createManagementItem} = useManagement();



  return (
    <>
         <FormsInput onCreate={createManagementItem}/>
         <CardTable props={management} onDelete={ deleteManagementItem}/>
    </>
   
  )
}

export default Management