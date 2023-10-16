import React from 'react'
import CardTable from '../CardTable';
import useText from '../../../hooks/useText';
import FormsInput from '../FormsInput';



function Text() {
const {text,deleteTextItem,createTextItem} = useText();



  return (
    <>
    <FormsInput onCreate={createTextItem}/>
    <CardTable props={text} onDelete={deleteTextItem}/>
    </>
  )
}

export default Text;