import { MEDIA_URL } from "../../../data/dataLink";
import { useEffect, useState } from 'react';
import { getList,deleteItem,createItem } from "../../../data/dataServices";


export default function useMedia(){
    const [media,setMedia] = useState([]);

    useEffect(()=>{
      getList(MEDIA_URL).then(setMedia);
    },[]);

    function deleteMediaItem(id){
      const url = MEDIA_URL;
      deleteItem(id,url).then(()=>{
        setMedia(media.filter((item)=>item.id !== id));
      })
    }

    function createMediaItem(newMedia){
      const urlProps = MEDIA_URL;
       
          createItem({...newMedia,urlProps}).then((data)=>{
            setMedia([...media, data]);
          
          });
        }


    return {
        media,
        deleteMediaItem,
        createMediaItem,
    }
}