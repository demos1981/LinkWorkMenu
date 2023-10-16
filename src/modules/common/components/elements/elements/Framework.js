import React from 'react';
import CardTable from '../CardTable';
import useFramework from '../../../hooks/useFramework';
import FormsInput from '../FormsInput';



function Framework() {
const {framework,deleteFrameworkItem,createFrameworkItem} = useFramework();

 

  return (
    <>
    <FormsInput onCreate={createFrameworkItem}/>
    <CardTable props={framework} onDelete={deleteFrameworkItem}/>
    </>
  )
}

export default Framework;