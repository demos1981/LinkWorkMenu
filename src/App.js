
import './App.css';
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
import { Routes, Route, Navigate, Outlet } from "react-router-dom";







function App() {

const [currentPath, setCurrentPath]=useState('blogs');


  return (
    <>
      <Header currentPath={currentPath} navigate={setCurrentPath} />
      <Routes>
        <Route path="blogs" element={<Blogs />} />
        <Route path="courses" element={<Courses />} />
        <Route path="develop" element={<Develop />} />
        <Route path="framework" element={<Framework />} />
        <Route path="management" element={<Management />} />
        <Route path="media" element={<Media />} />
        <Route path="skills" element={<Skills />} />
        <Route path="soft" element={<Soft />} />
        <Route path="text" element={<Text />} />

        <Route path="/" element={<Navigate to="blogs" />} />
      </Routes>
    
    </>
  );

}

export default App;
