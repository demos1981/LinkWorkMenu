import React from 'react';
import CardTable from '../CardTable';
import useBlogs from '../../../hooks/useBlogs';





function Blogs() {
 const {blogs,deleteBlogsItem} = useBlogs();


  
  return (
    <CardTable props={blogs} onDelete = {deleteBlogsItem}/>
  )
}

export default Blogs;