import React from 'react';
import CardTable from '../CardTable';
import useSoft from '../../../hooks/useSoft';
import CreateButton from '../CreateButton';
import { SOFT_URL } from '../../../../../data/dataLink';


function Soft() {
const {soft,deleteSoftItem} = useSoft();
const url = SOFT_URL;

  return (
    <>
      <CreateButton urls={url}/>
    <CardTable props={soft} onDelete={deleteSoftItem}/>
    </>
  )
}

export default Soft