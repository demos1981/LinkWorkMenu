
import { SKILLS_URL } from "../../../data/dataLink";
import {useState, useEffect} from 'react';
import { getList } from "../../../data/dataServices";

export default function useSkills(){
    const [skills,setSkills] = useState([]);


    useEffect(()=>{
      getList(SKILLS_URL).then(setSkills);
    },[]);

    return{
        skills,
    }
}
