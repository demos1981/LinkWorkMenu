import { TEXT_URL } from "../../../data/dataLink";
import {useState, useEffect} from 'react';
import { getList } from "../../../data/dataServices";

export default function useText(){
    const [text,setText] = useState([]);


    useEffect(()=>{
      getList(TEXT_URL).then(setText);
    },[]);

    return{
        text,
    }
}
