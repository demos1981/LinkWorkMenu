import { FRAMEWORK_URL } from "../../../data/dataLink";
import { useEffect, useState } from 'react';
import { getList,deleteItem } from "../../../data/dataServices";


export default function useFramework(){
    const [framework,setFrameworks] = useState([]);

    useEffect(()=>{
      getList(FRAMEWORK_URL).then(setFrameworks);
    },[]);

    function deleteFrameworkItem(id){
      const url = FRAMEWORK_URL;
      deleteItem(id,url).then(()=>{
         setFrameworks(framework.filter((item)=>item.id !== id));
      })
    }
 return {
    framework,
    deleteFrameworkItem,
 }
}
