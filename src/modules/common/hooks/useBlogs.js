import { getList } from '../../../data/dataServices';
import { BLOGS_URL } from '../../../data/dataLink';
import  { useEffect, useState } from 'react';

export default function useBlogs(){
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
      getList(BLOGS_URL).then(setBlogs);
    },[]);

    return{
        blogs,
    }
}