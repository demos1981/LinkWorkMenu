import { MANAGEMENT_URL } from "../../../data/dataLink";
import { getList } from "../../../data/dataServices";
import { useEffect, useState } from 'react';

export default function useManagement(){
    const [management,setManagement] = useState([]);

    useEffect(()=>{
      getList( MANAGEMENT_URL).then(setManagement);
    },[]);

    return{
        management,
    }

}
