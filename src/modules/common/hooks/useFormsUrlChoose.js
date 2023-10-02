import React from 'react';

function useFormsUrlChoose(url) {
    console.log(url);
    const chooseUrl = url;
    
    switch(chooseUrl){
        case 'BASE_URL':
            return 'BASE_URL';
            
        case 'COURSES_URL':
            return 'COURSES_URL';
      
        case 'DEVELOP_URL':
            return 'DEVELOP_URL';

        default:
            alert('unknown url');
    }

}

export default useFormsUrlChoose