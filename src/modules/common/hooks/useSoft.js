import { SOFT_URL } from "../../../data/dataLink";
import { useEffect, useState } from 'react';
import { getList } from "../../../data/dataServices";

export default function useSoft(){
    const [soft,setSoft] = useState([]);

    useEffect(()=>{
      getList( SOFT_URL ).then(setSoft);
    },[]);

    return{
        soft,
    }

}

