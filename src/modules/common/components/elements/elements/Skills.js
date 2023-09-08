import React from 'react'
import CardTable from '../CardTable';
import useSkills from '../../../hooks/useSkills';
import CreateButton from '../CreateButton';



function Skills() {
const {skills,deleteSkillsItem} = useSkills(); 

  return (
    <>
     <CreateButton/>
    <CardTable props={skills} onDelete={deleteSkillsItem}/>
    </>
  )
}

export default Skills