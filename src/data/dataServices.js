
import { BLOGS_URL } from './dataLink';
 


     export async function getList(props){

        const res = await fetch(props);
         return await res.json();
        
    }
    
    export function createItem(item){
        return fetch(BLOGS_URL,{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-type':'application/json',
            }
        }).then((res)=>res.json());
    
    }
    export function updateItem(item){
        return fetch(BLOGS_URL + item.id,{
            method:'PUT',
            body:JSON.stringify(item),
            headers:{
                'Content-type':'application/json',
            }
        }).then((res)=>res.json());
    
    }
    export function deleteItem(id){
        return fetch (BLOGS_URL + id,{
            method:"DELETE",
        }).then((res)=>res.json());
    
    }



