import React,{useState, useEffect} from 'react'
import { COURSES_URL } from '../../../../../data/dataLink';
import CardTable from '../CardTable';
import { getList } from '../../../../../data/dataServices';

function Courses() {
  const [courses,setCourses] = useState([]);


  useEffect(()=>{
    getList(COURSES_URL).then(setCourses);
  },[]);


  return (
    <CardTable props={courses}/>
  )
}

export default Courses