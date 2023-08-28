
import './App.css';
import CreateButton from '../src/modules/common/components/elements/CreateButton';
import Header from '../src/modules/common/components/elements/topMenu/Header';

import { useState } from 'react';
import Blogs from './modules/common/components/elements/elements/Blogs';
import Courses from './modules/common/components/elements/elements/Courses';
import Develop from './modules/common/components/elements/elements/Develop';
import Framework from './modules/common/components/elements/elements/Framework';
import Management from './modules/common/components/elements/elements/Management';
import Media from './modules/common/components/elements/elements/Media';
import Skills from './modules/common/components/elements/elements/Skills';
import Soft from './modules/common/components/elements/elements/Soft';
import Text from './modules/common/components/elements/elements/Text';





function App() {

const [currentPath, setCurrentPath]=useState('blogs');


  return (
<>
<Header currentPath = {currentPath} navigate = {setCurrentPath}/>

<CreateButton/>
{currentPath === "blogs" ? <Blogs/> :null}
{currentPath === "courses" ? <Courses/> :null}
{currentPath === "develop" ? <Develop/> :null}
{currentPath === "framework" ? <Framework/> :null}
{currentPath === "management" ? <Management/> :null}
{currentPath === "media" ? <Media/> :null}
{currentPath === "skills" ? <Skills/> :null}
{currentPath === "soft" ? <Soft/> :null}
{currentPath === "text" ? <Text/> :null}
  </>
  );

}

export default App;
