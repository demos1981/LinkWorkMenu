import { DEVELOP_URL } from "../../../data/dataLink";
import { getList,deleteItem } from "../../../data/dataServices";
import {useEffect,useState} from 'react';


export default function useDevelop(){
    const [develop,setDevelop] = useState([]);
  
    useEffect(()=>{
      getList(DEVELOP_URL).then(setDevelop);
    },[]);

    function deleteDevelopItem(id){
      const url = DEVELOP_URL;
      deleteItem(id,url).then(()=>{
        setDevelop(develop.filter((item)=>item.id !== id));
      })
    }
    return {
        develop,
        deleteDevelopItem,

    }
}

