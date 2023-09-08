import React from 'react';
import CardTable from '../CardTable';
import useFramework from '../../../hooks/useFramework';
import CreateButton from '../CreateButton';



function Framework() {
const {framework,deleteFrameworkItem} = useFramework();
 

  return (
    <>
    <CreateButton/>
    <CardTable props={framework} onDelete={deleteFrameworkItem}/>
    </>
  )
}

export default Framework;