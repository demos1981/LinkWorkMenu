
import { SKILLS_URL } from "../../../data/dataLink";
import {useState, useEffect} from 'react';
import { getList,deleteItem } from "../../../data/dataServices";

export default function useSkills(){
    const [skills,setSkills] = useState([]);


    useEffect(()=>{
      getList(SKILLS_URL).then(setSkills);
    },[]);
   
    function deleteSkillsItem(id){
      const url = SKILLS_URL;
      deleteItem(id,url).then(()=>{
        setSkills(skills.filter((item)=>item.id !== id));
      })
    }
    return{
        skills,
        deleteSkillsItem,
    }
}
