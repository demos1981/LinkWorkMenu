import { SOFT_URL } from "../../../data/dataLink";
import { useEffect, useState } from 'react';
import { getList,deleteItem } from "../../../data/dataServices";

export default function useSoft(){
    const [soft,setSoft] = useState([]);

    useEffect(()=>{
      getList( SOFT_URL ).then(setSoft);
    },[]);

    function deleteSoftItem(id){
      const url = SOFT_URL;
      deleteItem(id,url).then(()=>{
        setSoft(soft.filter((item)=>item.id !== id));
      })
    }
    return{
        soft,
        deleteSoftItem
    }

}

