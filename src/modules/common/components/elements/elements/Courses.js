import React from 'react'
import useCourses from '../../../hooks/useCourses';
import CardTable from '../CardTable';


function Courses() {
 const {courses} = useCourses();


  return (
    <CardTable props={courses}/>
  )
}

export default Courses