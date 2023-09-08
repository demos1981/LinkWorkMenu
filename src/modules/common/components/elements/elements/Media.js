import React from 'react';
import CardTable from '../CardTable';
import useMedia from '../../../hooks/useMedia';
import CreateButton from '../CreateButton';



function Media() {
const {media,deleteMediaItem} = useMedia();
  
  return (
    <>
     <CreateButton/>
     <CardTable props={media} onDelete={deleteMediaItem}/>
     </>
  )
}

export default Media;