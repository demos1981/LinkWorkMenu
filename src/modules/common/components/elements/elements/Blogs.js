import React from 'react';
import CardTable from '../CardTable';
import useBlogs from '../../../hooks/useBlogs';
import CreateButton from '../CreateButton';
import { BLOGS_URL } from '../../../../../data/dataLink';



function Blogs() {
 const {blogs,deleteBlogsItem,} = useBlogs();
 const url = BLOGS_URL


  
  return (
    <>
    <CreateButton props={url}/>
    <CardTable props={blogs} onDelete={deleteBlogsItem} />

  
    </>
  )
}

export default Blogs;