import React,{useEffect,useState}from 'react';
import { BLOGS_URL } from '../../../../../data/dataLink';
import { getList } from '../../../../../data/dataServices';
import CardTable from '../CardTable';

function Develop() {

    const [develop,setDevelop] = useState([]);
  
    useEffect(()=>{
      getList(BLOGS_URL).then(setDevelop);
    },[]);
  
  return (
    <CardTable props={develop}/>
  )
}

export default Develop;