import { SOFT_URL } from "../../../data/dataLink";
import { useEffect, useState } from 'react';
import { getList,deleteItem,createItem } from "../../../data/dataServices";

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

    function createSoftItem(newSoft){
      const urlProps = SOFT_URL;
       
          createItem({...newSoft,urlProps}).then((data)=>{
            setSoft([...soft, data]);
          
          });
        }

        
    return{
        soft,
        deleteSoftItem,
        createSoftItem,
    }

}

