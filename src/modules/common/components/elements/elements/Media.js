import React from 'react';
import CardTable from '../CardTable';
import useMedia from '../../../hooks/useMedia';


function Media() {
const {media} = useMedia();
  
  return (
     <CardTable props={media}/>
  )
}

export default Media;