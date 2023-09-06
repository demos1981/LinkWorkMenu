import React from 'react'
import CardTable from '../CardTable';
import useSkills from '../../../hooks/useSkills';


function Skills() {
const {skills,deleteSkillsItem} = useSkills(); 

  return (
    <CardTable props={skills} onDelete={deleteSkillsItem}/>
  )
}

export default Skills