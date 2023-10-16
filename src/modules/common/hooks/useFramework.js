import { FRAMEWORK_URL } from "../../../data/dataLink";
import { useEffect, useState } from 'react';
import { getList,deleteItem,createItem } from "../../../data/dataServices";


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

    function createFrameworkItem(newFramework){
      const urlProps = FRAMEWORK_URL;
       
          createItem({...newFramework,urlProps}).then((data)=>{
            setFrameworks([...framework, data]);
          
          });
        }

 return {
    framework,
    deleteFrameworkItem,
    createFrameworkItem,
   
 }
}
