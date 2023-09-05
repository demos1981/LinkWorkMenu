import React from 'react'
import CardTable from '../CardTable';
import useText from '../../../hooks/useText';



function Text() {
const {text} = useText();



  return (
    <CardTable props={text}/>
  )
}

export default Text;