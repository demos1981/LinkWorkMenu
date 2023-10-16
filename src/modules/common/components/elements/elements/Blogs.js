import React from 'react';
import CardTable from '../CardTable';
import useBlogs from '../../../hooks/useBlogs';

import FormsInput from '../FormsInput';




function Blogs() {
 const {blogs,deleteBlogsItem,createBlogsItem} = useBlogs();



  
  return (
    <>
    <FormsInput  onCreate={createBlogsItem}/>
    <CardTable props={blogs} onDelete={deleteBlogsItem} />

  
    </>
  )
}

export default Blogs;