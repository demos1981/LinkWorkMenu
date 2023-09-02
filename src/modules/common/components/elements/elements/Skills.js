import React,{useState, useEffect} from 'react'
import { COURSES_URL } from '../../../../../data/dataLink';
import CardTable from '../CardTable';
import { getList } from '../../../../../data/dataServices';

function Skills() {

  const [skills,setSkills] = useState([]);


  useEffect(()=>{
    getList(COURSES_URL).then(setSkills);
  },[]);
  return (
    <CardTable props={skills}/>
  )
}

export default Skills