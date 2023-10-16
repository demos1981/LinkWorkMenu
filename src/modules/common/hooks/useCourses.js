import { COURSES_URL } from '../../../data/dataLink';
import {useState, useEffect} from 'react';
import { getList,deleteItem,createItem } from '../../../data/dataServices';


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

    function createCoursesItem(newCourses){
      const urlProps = COURSES_URL;
       
          createItem({...newCourses,urlProps}).then((data)=>{
            setCourses([...courses, data]);
          
          });
        }

        
    return{
        courses,
        deleteCoursesItem,
        createCoursesItem

    }
} 