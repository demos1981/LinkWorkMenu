import React from 'react';
import CardTable from '../CardTable';
import useFramework from '../../../hooks/useFramework';

function Framework() {
const {framework,deleteFrameworkItem} = useFramework();
 

  return (
    <CardTable props={framework} onDelete={deleteFrameworkItem}/>
  )
}

export default Framework;