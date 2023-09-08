import { deleteItem, getList, createItem } from '../../../data/dataServices';
import { BLOGS_URL } from '../../../data/dataLink';
import { useEffect, useState } from 'react';

export default function useBlogs(){
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
      getList(BLOGS_URL).then(setBlogs);
    },[]);

function deleteBlogsItem(id){
  const url = BLOGS_URL;
  deleteItem(id,url).then(()=>{
    setBlogs(blogs.filter((item)=>item.id !== id));
  })
}
function createBlogsItem (newItem){
    createItem({...newItem}).then((data)=>{
      setBlogs([...blogs,data]);
    });
  }


    return{
        blogs,
        deleteBlogsItem,
        createBlogsItem,
    };
}