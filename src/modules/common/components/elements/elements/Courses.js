import React from 'react'
import useCourses from '../../../hooks/useCourses';
import CardTable from '../CardTable';


import FormsInput from '../FormsInput';



function Courses() {
 const {courses,deleteCoursesItem,createCoursesItem }= useCourses();
 


  return (
    <>
     <FormsInput onCreate={createCoursesItem}/>
    <CardTable props={courses} onDelete={deleteCoursesItem}/>
    </>
  )
}

export default Courses