import React from 'react';
import CardTable from '../CardTable';
import useSoft from '../../../hooks/useSoft';


function Soft() {
const {soft} = useSoft();

  return (
    <CardTable props={soft}/>
  )
}

export default Soft