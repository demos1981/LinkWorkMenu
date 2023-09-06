import { COURSES_URL } from '../../../data/dataLink';
import {useState, useEffect} from 'react';
import { getList,deleteItem } from '../../../data/dataServices';


export default function useCourses() {
    const [courses,setCourses] = useState([]);


    useEffect(()=>{
      getList(COURSES_URL).then(setCourses);
    },[]);
    
    function deleteCoursesItem(id){
      const url = COURSES_URL;
      deleteItem(id,url).then(()=>{
        setCourses(courses.filter((item)=>item.id !== id));
      })
    }

    return{
        courses,
        deleteCoursesItem

    }
} 