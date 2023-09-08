import React from 'react'
import useCourses from '../../../hooks/useCourses';
import CardTable from '../CardTable';
import CreateButton from '../CreateButton';



function Courses() {
 const {courses,deleteCoursesItem} = useCourses();


  return (
    <>
     <CreateButton/>
    <CardTable props={courses} onDelete={deleteCoursesItem}/>
    </>
  )
}

export default Courses