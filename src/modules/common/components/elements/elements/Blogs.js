import React from 'react';
import CardTable from '../CardTable';
import useBlogs from '../../../hooks/useBlogs';
import CreateButton from '../CreateButton';










function Blogs() {
 const {blogs,deleteBlogsItem,createBlogsItem} = useBlogs();


  
  return (
    <>
    <CreateButton onCreate={createBlogsItem}/>
    <CardTable props={blogs} onDelete={deleteBlogsItem} />

  
    </>
  )
}

export default Blogs;