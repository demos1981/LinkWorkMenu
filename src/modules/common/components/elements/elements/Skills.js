import React from 'react'
import CardTable from '../CardTable';
import useSkills from '../../../hooks/useSkills';
import CreateButton from '../CreateButton';
import { SKILLS_URL } from '../../../../../data/dataLink';



function Skills() {
const {skills,deleteSkillsItem} = useSkills(); 
const url = SKILLS_URL

  return (
    <>
     <CreateButton urls={url}/>
    <CardTable props={skills} onDelete={deleteSkillsItem}/>
    </>
  )
}

export default Skills