import React, { useEffect, useState } from 'react';
import { COURSES_URL } from '../../../../../data/dataLink';


import {getList} from '../../../../../data/dataServices';
import CardTable from '../CardTable';

function Management() {
  const [management,setManagement] = useState([]);

  useEffect(()=>{
    getList(COURSES_URL).then(setManagement);
  },[]);
  return (
    <CardTable props={management}/>
  )
}

export default Management