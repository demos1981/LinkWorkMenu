import React from 'react';
import CardTable from '../CardTable';
import useManagement from '../../../hooks/useManagement';


function Management() {
const {management} = useManagement();
  return (
    <CardTable props={management}/>
  )
}

export default Management