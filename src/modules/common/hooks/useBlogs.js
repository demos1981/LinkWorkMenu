import { deleteItem, getList,} from '../../../data/dataServices';
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




// function createBlogsItem(newBlogs){
 
//   const url = BLOGS_URL;
//     createItem({...newBlogs,url}).then((data)=>{
//       setBlogs([...blogs, data]);
//       console.log(setBlogs);
//     });
//   }


    return{
        blogs,
        deleteBlogsItem,
        // createBlogsItem,
    };
}