import React from 'react'
import CardTable from '../CardTable';
import useSkills from '../../../hooks/useSkills';


function Skills() {
const {skills} = useSkills(); 

  return (
    <CardTable props={skills}/>
  )
}

export default Skills