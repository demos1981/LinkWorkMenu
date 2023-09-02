import React, { useEffect, useState } from 'react';
import { BLOGS_URL } from '../../../../../data/dataLink';


import {getList} from '../../../../../data/dataServices';
import CardTable from '../CardTable';





function Blogs() {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    getList(BLOGS_URL).then(setBlogs);
  },[]);


  
  return (
    <CardTable props={blogs}/>
  )
}

export default Blogs;