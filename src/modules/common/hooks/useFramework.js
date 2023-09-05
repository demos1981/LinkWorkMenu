import { FRAMEWORK_URL } from "../../../data/dataLink";
import { useEffect, useState } from 'react';
import { getList } from "../../../data/dataServices";


export default function useFramework(){
    const [framework,setFrameworks] = useState([]);

    useEffect(()=>{
      getList(FRAMEWORK_URL).then(setFrameworks);
    },[]);
 return {
    framework,
 }
}
