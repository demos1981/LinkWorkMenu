import React from 'react';

import CardTable from '../CardTable';
import useFramework from '../../../hooks/useFramework';

function Framework() {
const {framework} = useFramework();
 

  return (
    <CardTable props={framework}/>
  )
}

export default Framework;