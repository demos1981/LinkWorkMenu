import { MEDIA_URL } from "../../../data/dataLink";
import { useEffect, useState } from 'react';
import { getList } from "../../../data/dataServices";


export default function useMedia(){
    const [media,setMedia] = useState([]);

    useEffect(()=>{
      getList(MEDIA_URL).then(setMedia);
    },[]);

    return {
        media,
    }
}