import React, { useEffect, useState } from 'react';
import { MEDIA_URL } from '../../../../../data/dataLink';


import {getList} from '../../../../../data/dataServices';
import CardTable from '../CardTable';

function Media() {

   const [media,setMedia] = useState([]);

  useEffect(()=>{
    getList(MEDIA_URL).then(setMedia);
  },[]);
  return (
     <CardTable props={media}/>
  )
}

export default Media