import React from 'react'
import CardTable from '../CardTable';
import useText from '../../../hooks/useText';



function Text() {
const {text,deleteTextItem} = useText();



  return (
    <CardTable props={text} onDelete={deleteTextItem}/>
  )
}

export default Text;