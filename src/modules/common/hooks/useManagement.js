import { MANAGEMENT_URL } from "../../../data/dataLink";
import { getList,deleteItem,createItem } from "../../../data/dataServices";
import { useEffect, useState } from 'react';

export default function useManagement(){
    const [management,setManagement] = useState([]);

    useEffect(()=>{
      getList( MANAGEMENT_URL).then(setManagement);
    },[]);

    function deleteManagementItem(id){
      const url = MANAGEMENT_URL;
      deleteItem(id,url).then(()=>{
        setManagement(management.filter((item)=>item.id !== id));
      })
    }

    function createManagementItem(newManagement){
      const urlProps = MANAGEMENT_URL;
       
          createItem({...newManagement,urlProps}).then((data)=>{
            setManagement([...management, data]);
          
          });
        }

    return{
        management,
        deleteManagementItem,
        createManagementItem,
    }

}
