import React, { useEffect, useState } from 'react';


import {getList} from '../../../../../data/dataServices';
import CardTable from '../CardTable';





function Blogs() {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    getList().then(setBlogs);
  },[]);


  
  return (
    <CardTable blogs={blogs}/>
  )
}

export default Blogs;