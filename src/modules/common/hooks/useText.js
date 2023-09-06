import { TEXT_URL } from "../../../data/dataLink";
import {useState, useEffect} from 'react';
import { getList,deleteItem } from "../../../data/dataServices";

export default function useText(){
    const [text,setText] = useState([]);


    useEffect(()=>{
      getList(TEXT_URL).then(setText);
    },[]);

    function deleteTextItem(id){
      const url = TEXT_URL;
      deleteItem(id,url).then(()=>{
        setText(text.filter((item)=>item.id !== id));
      })
    }

    return{
        text,
        deleteTextItem,
    }
}
