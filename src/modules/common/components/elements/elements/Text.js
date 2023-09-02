import React,{useState, useEffect} from 'react'
import { COURSES_URL } from '../../../../../data/dataLink';
import CardTable from '../CardTable';
import { getList } from '../../../../../data/dataServices';

function Text() {

  const [text,setText] = useState([]);


  useEffect(()=>{
    getList(COURSES_URL).then(setText);
  },[]);
  return (
    <CardTable props={text}/>
  )
}

export default Text