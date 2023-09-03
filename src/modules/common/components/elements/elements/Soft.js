import React, { useEffect, useState } from 'react';
import { SOFT_URL } from '../../../../../data/dataLink';


import {getList} from '../../../../../data/dataServices';
import CardTable from '../CardTable';

function Soft() {

  const [soft,setSoft] = useState([]);

  useEffect(()=>{
    getList( SOFT_URL ).then(setSoft);
  },[]);
  return (
    <CardTable props={soft}/>
  )
}

export default Soft