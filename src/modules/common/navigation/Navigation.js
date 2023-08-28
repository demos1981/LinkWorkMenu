
import React from 'react'

import NavigationLink from './NavigationLink'


function Navigation({currentPath,navigate}) {
  return (
    <div className="navigation">

  
  <NavigationLink
  path="blogs"
  label="Blogs"
  currentPath={currentPath}
  navigate={navigate}
  />
   <NavigationLink
  path="courses"
  label="Courses"
  currentPath={currentPath}
  navigate={navigate}
  />
 <NavigationLink
  path="develop"
  label="Develop"
  currentPath={currentPath}
  navigate={navigate}
  />
    <NavigationLink
  path="framework"
  label="Framework"
  currentPath={currentPath}
  navigate={navigate}
  />
     <NavigationLink
  path="management"
  label="Management"
  currentPath={currentPath}
  navigate={navigate}
  />
     <NavigationLink
  path="media"
  label="Media"
  currentPath={currentPath}
  navigate={navigate}
  />
    <NavigationLink
  path="skills"
  label="Skills"
  currentPath={currentPath}
  navigate={navigate}
  />
    <NavigationLink
  path="soft"
  label="Soft"
  currentPath={currentPath}
  navigate={navigate}
  />
    <NavigationLink
  path="text"
  label="Text"
  currentPath={currentPath}
  navigate={navigate}
  />



    </div>
  )
}

export default Navigation