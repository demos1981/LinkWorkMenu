

 


     export async function getList(props){

        const res = await fetch(props);
         return await res.json();
        
    }
    
    export async function createItem(item){
        const res = await fetch(item, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json',
            }
        });
        return await res.json();
    
    }
    export async function updateItem(item){
        const res = await fetch(item + item.id, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json',
            }
        });
        return await res.json();
    
    }
    export async function deleteItem(item){
        const res = await fetch(item + item.id, {
            method: "DELETE",
        });
        return await res.json();
    
    }



