
import { MOCAPI_URL } from './dataLink';
 


     export function getList(){

        return fetch (MOCAPI_URL).then((res)=>res.json());
        
    }
    
    export function createItem(item){
        return fetch(MOCAPI_URL,{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-type':'application/json',
            }
        }).then((res)=>res.json());
    
    }
    export function updateItem(item){
        return fetch(MOCAPI_URL + item.id,{
            method:'PUT',
            body:JSON.stringify(item),
            headers:{
                'Content-type':'application/json',
            }
        }).then((res)=>res.json());
    
    }
    export function deleteItem(id){
        return fetch (MOCAPI_URL + id,{
            method:"DELETE",
        }).then((res)=>res.json());
    
    }



