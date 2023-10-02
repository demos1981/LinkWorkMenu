import React from 'react';
import CardTable from '../CardTable';
import useManagement from '../../../hooks/useManagement';
import CreateButton from '../CreateButton';
import { MANAGEMENT_URL } from '../../../../../data/dataLink';



function Management() {
const {management, deleteManagementItem} = useManagement();
const url = MANAGEMENT_URL;


  return (
    <>
         <CreateButton urls={url}/>
         <CardTable props={management} onDelete={ deleteManagementItem}/>
    </>
   
  )
}

export default Management