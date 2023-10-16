import React from 'react'
import CardTable from '../CardTable';
import useSkills from '../../../hooks/useSkills';


import FormsInput from '../FormsInput';



function Skills() {
const {skills,deleteSkillsItem,createSkillsItem} = useSkills(); 


  return (
    <>
     <FormsInput onCreate={createSkillsItem}/>
    <CardTable props={skills} onDelete={deleteSkillsItem}/>
    </>
  )
}

export default Skills