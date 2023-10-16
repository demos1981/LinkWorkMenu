import { TEXT_URL } from "../../../data/dataLink";
import {useState, useEffect} from 'react';
import { getList,deleteItem,createItem } from "../../../data/dataServices";

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

    function createTextItem(newText){
      const urlProps = TEXT_URL;
       
          createItem({...newText,urlProps}).then((data)=>{
            setText([...text, data]);
          
          });
        }

    return{
        text,
        deleteTextItem,
        createTextItem,
    }
}
