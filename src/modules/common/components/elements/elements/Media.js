import React from 'react';
import CardTable from '../CardTable';
import useMedia from '../../../hooks/useMedia';
import CreateButton from '../CreateButton';
import { MEDIA_URL } from '../../../../../data/dataLink';




function Media() {
const {media,deleteMediaItem} = useMedia();
const url = MEDIA_URL;
  
  return (
    <>
     <CreateButton urls={url}/>
     <CardTable props={media} onDelete={deleteMediaItem}/>
     </>
  )
}

export default Media;