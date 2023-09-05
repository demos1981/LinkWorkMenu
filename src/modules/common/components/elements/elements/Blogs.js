import React from 'react';
import CardTable from '../CardTable';
import useBlogs from '../../../hooks/useBlogs';





function Blogs() {
 const {blogs} = useBlogs();


  
  return (
    <CardTable props={blogs}/>
  )
}

export default Blogs;