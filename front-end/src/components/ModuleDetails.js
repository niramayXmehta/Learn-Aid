import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';
import '../stylesheets/coursepage.css';

function ModuleDetails() {
  const { id } = useParams();
  const [moduleData, setModuleData] = useState(null);
  const [description, setDescription] = useState(null);
  const [moduleContent, setModuleContent] = useState(null);

  useEffect(() => {
    fetch(`/api/modules/${id}`)
      .then((response) => response.json())
      .then((data) => setModuleData(data))
      .catch((error) => {
        console.error('Error fetching module data:', error);
      });
  }, [id]);

  useEffect(() => {
    fetch(`/api/module-descriptions/${id}`)
      .then((response) => response.json())
      .then((data) => setDescription(data.description))
      .catch((error) => {
        console.error('Error fetching module description:', error);
      });
  }, [id]);

  useEffect(() => {
    fetch(`/api/module-content/${id}`)
      .then((response) => response.json())
      .then((data) => setModuleContent(data.content));
  }, [id]);

  if (!moduleData || !description) return <div>Loading...</div>;

  return (
    <div className="module-page">
      <Navbar />
      <h1 className="module-title">{moduleData.title}</h1>
      <h2 className="lecturer">Lecturer: {moduleData.lecturer}</h2>
      <div className="progress-bar">Progress: 55%</div>
      <div className="submissions">
        <h3>Submissions</h3>
        <ul>
          <li>Assignment 1: 80%</li>
          <li>Assignment 2: 90%</li>
          <li>Final Project: In Progress</li>
        </ul>
      </div>
      <p>{description}</p>
      <p>{moduleContent}</p>
    </div>
  );
}

export default ModuleDetails;
