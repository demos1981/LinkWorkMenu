import React from 'react'
import useCourses from '../../../hooks/useCourses';
import CardTable from '../CardTable';


function Courses() {
 const {courses,deleteCoursesItem} = useCourses();


  return (
    <CardTable props={courses} onDelete={deleteCoursesItem}/>
  )
}

export default Courses