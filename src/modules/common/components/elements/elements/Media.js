import React from 'react';
import CardTable from '../CardTable';
import useMedia from '../../../hooks/useMedia';


import FormsInput from '../FormsInput';




function Media() {
const {media,deleteMediaItem,createMediaItem} = useMedia();

  
  return (
    <>
     <FormsInput onCreate={createMediaItem}/>
     <CardTable props={media} onDelete={deleteMediaItem}/>
     </>
  )
}

export default Media;