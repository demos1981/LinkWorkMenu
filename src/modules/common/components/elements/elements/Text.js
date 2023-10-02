import React from 'react'
import CardTable from '../CardTable';
import useText from '../../../hooks/useText';
import CreateButton from '../CreateButton';
import { TEXT_URL } from '../../../../../data/dataLink';



function Text() {
const {text,deleteTextItem} = useText();
const url= TEXT_URL;



  return (
    <>
    <CreateButton urls={url}/>
    <CardTable props={text} onDelete={deleteTextItem}/>
    </>
  )
}

export default Text;