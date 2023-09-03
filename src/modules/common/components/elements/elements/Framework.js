import React, { useEffect, useState } from 'react';
import { FRAMEWORK_URL } from '../../../../../data/dataLink';


import {getList} from '../../../../../data/dataServices';
import CardTable from '../CardTable';

function Framework() {

  const [framework,setFrameworks] = useState([]);

  useEffect(()=>{
    getList(FRAMEWORK_URL).then(setFrameworks);
  },[]);

  return (
    <CardTable props={framework}/>
  )
}

export default Framework;