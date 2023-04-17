import React, { useState, useEffect } from 'react';
import '../stylesheets/Home.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div>
            <nav>
                <a className="active" href="/">Home</a>
                <a href="/grades">Grades</a>
                <a href="/module-page">Modules</a>
                <a href="/forum">Forum</a>
                <a href="/login">Profile</a>
                <a href="/employment">Employment Opportunities</a>
            </nav>              
            <div className="section">
                <h2>Welcome to Learn Aid</h2>
                <p>This website is designed to provide you with resources and information on various coruses and emplyoment Opportunities.</p>
            </div>     

            <div className="section">
                <h2>Courses</h2>
                <p>View Courses Available in LearnAid</p>
                <a className="button">
                    <Link to="/course-page">View Courses</Link>
                </a>
            </div>  


            <div className="section">
                <h2>Grades</h2>
                <p>View your Grades for you selected modules</p>
                <a className="button">
                    <Link to="/grades">View Grades</Link>
                </a>
            </div>
                
            <div className="section">
                <h2>Modules</h2>
                <p>Explore our modules and start learning today!</p>
                <a className="button">
                    <Link to="/module-page">View Modules</Link>
                </a>
            </div>
                
            <div className="section">
                <h2>Forum</h2>
                <p>Join our forum and engage with the community.</p>
                <a className='button'>
                    <Link to="/forum">Join Forum</Link>
                </a>
            </div>
                
            <div className="section">
                <h2>Profile</h2>
                <p>Create and manage your profile to access exclusive content.</p>
                <a className='button'>
                    <Link to="/login"> Create Profile</Link>
                </a>
            </div>
                
            <div className="section">
                <h2>Employment Opportunities</h2>
                <p>Check out our latest job openings.</p>
                <a className='button'>
                    <Link to="/employment"> View Jobs</Link>
                </a>
                
            </div>
        </div>
        
    );

}

export default Home;