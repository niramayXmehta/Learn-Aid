import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ModuleDetails from './components/ModuleDetails';
import Login from './components/Login';
import Home from './components/Home';
import CoursePage from './components/CoursePage';
import ModulePage from './components/ModulePage';
import BusinessEmployment from './components/businessEmployment';
import BusinessForum from './components/businessForum';
import BusinessModule from './components/businessModule';
import Grades from './components/Grades';
import Employment from './components/Employement';
import Fourm from './components/Fourm';
import Module from './components/Module';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/course-page" element={<CoursePage />} />
          <Route path="/" element={<Home />} />
          <Route path="/modules/:id" element={<ModuleDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/module-page" element={<ModulePage/>}/>
          <Route path="/business-employment" element={<BusinessEmployment/>}/>
          <Route path="/business-form" element={<BusinessForum/>}/>
          <Route path="/business-module" element={<BusinessModule/>}/>
          <Route path="/grades" element={<Grades/>}/>
          <Route path="/employment" element={<Employment/>}/>
          <Route path='/forum' element={<Fourm/>}/> 
          <Route path='/module' element={<Module/>}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;