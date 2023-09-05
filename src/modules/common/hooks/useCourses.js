import { COURSES_URL } from '../../../data/dataLink';
import {useState, useEffect} from 'react';
import { getList } from '../../../data/dataServices';


export default function useCourses() {
    const [courses,setCourses] = useState([]);


    useEffect(()=>{
      getList(COURSES_URL).then(setCourses);
    },[]);

    return{
        courses,
    }
} 