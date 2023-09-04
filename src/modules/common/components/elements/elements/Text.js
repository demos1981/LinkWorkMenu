import React,{useState, useEffect} from 'react'
import { TEXT_URL } from '../../../../../data/dataLink';
import CardTable from '../CardTable';
import { getList } from '../../../../../data/dataServices';

function Text() {

  const [text,setText] = useState([]);


  useEffect(()=>{
    getList(TEXT_URL).then(setText);
  },[]);
  return (
    <CardTable props={text}/>
  )
}

export default Text;