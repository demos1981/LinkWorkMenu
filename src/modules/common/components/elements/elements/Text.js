import React from 'react'
import CardTable from '../CardTable';
import useText from '../../../hooks/useText';
import CreateButton from '../CreateButton';



function Text() {
const {text,deleteTextItem} = useText();



  return (
    <>
    <CreateButton/>
    <CardTable props={text} onDelete={deleteTextItem}/>
    </>
  )
}

export default Text;