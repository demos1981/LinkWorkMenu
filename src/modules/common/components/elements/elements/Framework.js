import React from 'react';
import CardTable from '../CardTable';
import useFramework from '../../../hooks/useFramework';
import CreateButton from '../CreateButton';
import { FRAMEWORK_URL } from '../../../../../data/dataLink';



function Framework() {
const {framework,deleteFrameworkItem} = useFramework();
const url = FRAMEWORK_URL;
 

  return (
    <>
    <CreateButton urls={url}/>
    <CardTable props={framework} onDelete={deleteFrameworkItem}/>
    </>
  )
}

export default Framework;