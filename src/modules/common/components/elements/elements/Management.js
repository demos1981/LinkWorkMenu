import React from 'react';
import CardTable from '../CardTable';
import useManagement from '../../../hooks/useManagement';


function Management() {
const {management, deleteManagementItem} = useManagement();
  return (
    <CardTable props={management} onDelete={ deleteManagementItem}/>
  )
}

export default Management