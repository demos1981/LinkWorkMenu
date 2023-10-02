import React from 'react'
import useCourses from '../../../hooks/useCourses';
import CardTable from '../CardTable';
import CreateButton from '../CreateButton';
import { COURSES_URL } from '../../../../../data/dataLink';



function Courses() {
 const {courses,deleteCoursesItem} = useCourses();
 const url = COURSES_URL;


  return (
    <>
     <CreateButton urls={url}/>
    <CardTable props={courses} onDelete={deleteCoursesItem}/>
    </>
  )
}

export default Courses