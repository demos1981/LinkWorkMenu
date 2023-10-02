import React from 'react';
import CardTable from '../CardTable';
import useDevelop from '../../../hooks/useDevelop';
import CreateButton from '../CreateButton';
import { DEVELOP_URL } from '../../../../../data/dataLink';


function Develop() {
const {develop,deleteDevelopItem} = useDevelop();
const url = DEVELOP_URL;
  
  
  return (
    <>
    <CreateButton urls={url}/>
    <CardTable props={develop} onDelete={deleteDevelopItem}/>
    </>
  )
}

export default Develop;