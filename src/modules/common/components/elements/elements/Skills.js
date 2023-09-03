import React,{useState, useEffect} from 'react'
import { SKILLS_URL } from '../../../../../data/dataLink';
import CardTable from '../CardTable';
import { getList } from '../../../../../data/dataServices';

function Skills() {

  const [skills,setSkills] = useState([]);


  useEffect(()=>{
    getList(SKILLS_URL).then(setSkills);
  },[]);
  return (
    <CardTable props={skills}/>
  )
}

export default Skills