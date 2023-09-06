import React from 'react';
import CardTable from '../CardTable';
import useMedia from '../../../hooks/useMedia';


function Media() {
const {media,deleteMediaItem} = useMedia();
  
  return (
     <CardTable props={media} onDelete={deleteMediaItem}/>
  )
}

export default Media;