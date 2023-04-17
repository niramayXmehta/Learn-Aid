import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../stylesheets/coursepage.css';
import blue from '../images/blue.png';
import grey from '../images/grey.png';
import pink from '../images/pinkf.png';
import yellow from '../images/yellow.png';
import Navbar from './NavBar';
import Footer from './Footer';
function CoursePage() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch('/api/modules')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Add this line to check the response
        setModules(data);
      });
  }, []);

  const handleClick = (id) => {
    window.location.href = `/modules/${id}`;
  };

  return (
      <div>
      {/*  Navbar */}
        <Navbar />
      {/* Main Content */} 
      {modules && modules.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="item">
              <img 
                src={blue} 
                alt={"blue"}
                width={'273px'}
                height={'200px'}
              />
              <div className="module-details">
              <button className={"moduleBtn"} onClick={() => handleClick(modules[0].id) }>
                <h3>{modules[0].title}</h3>
              </button>
              </div>
            </div>
            <div className="item">
              <img 
                src={grey} 
                alt={"grey"}
                width={'273px'}
                height={'200px'}
              />
              <div className="module-details">
                <button className={"moduleBtn"} onClick={() => handleClick(modules[1].id) } > <h3>{modules[1].title}</h3> </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="item">
              <img 
                src={pink} 
                alt={"pink"}
                width={'273px'}
                height={'200px'}
              />
              <div className="module-details">
                <button className={"moduleBtn"} onClick={() => handleClick(modules[2].id) }> <h3>{modules[2].title}</h3> </button>
              </div>
            </div>
            <div className="item">
              <img 
                src={yellow} 
                alt={"yellow"}
                width={'273px'}
                height={'200px'}
              />
              <div className="module-details">
                <button className={"moduleBtn"} onClick={() => handleClick(modules[3].id) }> <h3>{modules[3].title}</h3> </button>
              </div>
            </div>
          </div>
      </div>
        
      )}  
      {/* Bottom Navbar */}
      </div>
    
  );
}

export default CoursePage;