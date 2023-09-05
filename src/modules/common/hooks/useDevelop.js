import { DEVELOP_URL } from "../../../data/dataLink";
import { getList } from "../../../data/dataServices";
import {useEffect,useState} from 'react';


export default function useDevelop(){
    const [develop,setDevelop] = useState([]);
  
    useEffect(()=>{
      getList(DEVELOP_URL).then(setDevelop);
    },[]);
    return {
        develop,
    }
}

