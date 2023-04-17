import React, { useState } from 'react';
import '../stylesheets/Employment.css';

function Employment() {
  const [opportunityVisible, setOpportunityVisible] = useState({
    opportunity1: false,
    opportunity2: false,
    opportunity3: false,
  });

  const toggleOpportunityVisibility = (opportunityId) => {
    setOpportunityVisible({
      ...opportunityVisible,
      [opportunityId]: !opportunityVisible[opportunityId],
    });
  };

  return (
    <div>
      <a href="./..">
        <img
          className="image"
          src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
          alt="Return"
        ></img>
      </a>

      <div className="main">
        <div className="information">
          <h1>Employment Opportunities</h1>
          <a className="module_link" href="./../viewModule/viewModule.html">
            <h2>Module: CS23-4GTH</h2>
          </a>
        </div>

        <div className="blue_box blue_details">
          <button
            className={`white_box button_employment anchor_opportunity ${
              opportunityVisible.opportunity1 ? 'hidden' : ''
            }`}
            id="opportunity1_button"
            onClick={() => toggleOpportunityVisibility('opportunity1')}
          >
            <h3>Excel Spreadsheet Manager</h3>
          </button>

          {opportunityVisible.opportunity1 && (
            <div className="white_box white_details">
              <h4>Description</h4>
                <p>As an Excel Spreadsheet Manager, you will be responsible for overseeing and managing all aspects of Excel spreadsheet operations within the organization. This includes creating, maintaining, and updating spreadsheets, analyzing data, and providing accurate and timely reports to support decision-making processes. You will collaborate with various departments to ensure data integrity, consistency, and compliance with established standards and guidelines.</p>
                <h4>Responsibilities:</h4>
                <p>Spreadsheet Creation and Maintenance: Create and manage complex Excel spreadsheets, including designing templates, inputting data, organizing information, and updating as needed. Ensure data accuracy and consistency across spreadsheets.</p>
                <p>Data Analysis: Analyze data within spreadsheets to identify trends, patterns, and anomalies. Generate reports and insights to support data-driven decision making by stakeholders.</p>
                <p>Quality Assurance: Ensure data integrity and consistency by conducting regular audits, verifying data accuracy, and resolving discrepancies. Implement and enforce established standards and guidelines for spreadsheet usage and data management.</p>
                <p>Collaboration and Communication: Collaborate with various departments and stakeholders to understand their spreadsheet requirements, provide technical support, and deliver accurate and timely reports. Communicate effectively to provide guidance, training, and support on spreadsheet-related matters.</p>
                    
                <h4>Requirements for Job</h4>
                <ul>
                    <li>Advanced Excel Skills: Strong proficiency in Excel, including advanced formulas, functions, and data manipulation techniques. Ability to create and manage complex spreadsheets with accuracy and efficiency.</li>
                    <li>Analytical Skills: Ability to analyze data within Excel spreadsheets, interpret results, and generate meaningful insights. Strong attention to detail and ability to spot data discrepancies and anomalies.</li>
                    <li>Data Management: Knowledge of data management best practices, including data integrity, consistency, and quality assurance. Experience in managing large datasets and complex spreadsheets.</li>
                    <li>Communication and Collaboration: Excellent communication skills, both written and verbal, with the ability to collaborate with various departments and stakeholders. Ability to provide guidance, training, and support to users with different levels of Excel proficiency.</li>
                </ul>
             
                <div className="headline">
                    <h4>Contact Email:</h4> 
                    <p>example1@gmail.com</p>
                  
                </div>
                <div className="headline">
                    <h4>Application Deadline:</h4>
                    <p>DD/MM/YYYY</p>
                </div>
              <button
                className="pink_box button_employment"
                onClick={() => toggleOpportunityVisibility('opportunity1')}
              >
                <h3>Close</h3>
              </button>
              <br></br>
              <br></br>
            </div>
          )}

          <br></br>
          <br></br>

          <button
            className={`white_box button_employment anchor_opportunity ${
              opportunityVisible.opportunity2 ? 'hidden' : ''
            }`}
            id="opportunity2_button"
            onClick={() => toggleOpportunityVisibility('opportunity2')}
          >
            <h3>Business Name 2</h3>
          </button>

          {opportunityVisible.opportunity2 && (
            <div className="white_box white_details">
               <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, lorem id posuere pulvinar,
                 ipsum mi iaculis nisl, non ullamcorper urna nisl id est. Vestibulum varius neque neque, id fringilla lectus
                 rhoncus et. Phasellus ut suscipit justo, at tristique quam. In orci metus, pellentesque sit amet nisi sit
                 amet, maximus ullamcorper sapien. Nulla ante felis, tristique ac turpis non, sodales malesuada felis. 
                 Ut volutpat orci varius nisi placerat mattis. Morbi suscipit orci quis felis viverra, sit amet auctor leo 
                 luctus.</p>
                <h4>Requirements for Job</h4>
                <ul>
                    <li>Requirement 1</li>
                    <li>Requirement 2</li>
                    <li>Requirement 3</li>
                    <li>Requirement 4</li>
                </ul>
        
                <div className="headline">
                    <h4>Contact Email:</h4> 
                    <p>example2@gmail.com</p>
        
                </div>
                <div className="headline">
                    <h4>Application Deadline:</h4>
                    <p>DD/MM/YYYY</p>
         
                </div>
              <button
                className="pink_box button_employment"
                onClick={() => toggleOpportunityVisibility('opportunity2')}
              >
                <h3>Close</h3>
              </button>
              <br></br>
              <br></br>
            </div>
          )}

          <br></br>
          <br></br>

          <button
            className={`white_box button_employment anchor_opportunity ${
              opportunityVisible.opportunity3 ? 'hidden' : ''
            }`}
            id="opportunity3_button"
            onClick={() => toggleOpportunityVisibility('opportunity3')}
          >
            <h3>Business Name 3</h3>
          </button>

          {opportunityVisible.opportunity3 && (
            <div className="white_box white_details">
              <h3>Business Name 3</h3>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque imperdiet, lorem id posuere pulvinar,
                 ipsum mi iaculis nisl, non ullamcorper urna nisl id est. Vestibulum varius neque neque, id fringilla lectus
                 rhoncus et. Phasellus ut suscipit justo, at tristique quam. In orci metus, pellentesque sit amet nisi sit
                 amet, maximus ullamcorper sapien. Nulla ante felis, tristique ac turpis non, sodales malesuada felis. 
                 Ut volutpat orci varius nisi placerat mattis. Morbi suscipit orci quis felis viverra, sit amet auctor leo 
                 luctus.</p>
                <h4>Requirements for Job</h4>
                <ul>
                    <li>Requirement 1</li>
                    <li>Requirement 2</li>
                    <li>Requirement 3</li>
                    <li>Requirement 4</li>
                </ul>

                <div className="headline">
                    <h4>Contact Email:</h4> 
                    <p>example3@gmail.com</p>
          
                </div>
                <div className="headline">
                    <h4>Application Deadline:</h4>
                    <p>DD/MM/YYYY</p>
      
                </div>
              <button
                className="pink_box button_employment"
                onClick={() =>
                    toggleOpportunityVisibility('opportunity3')}
                    >
                      <h3>Close</h3>
                    </button>
                    <br></br>
                    <br></br>
                  </div>
                )}
              </div>
            </div>
          </div>
          );
        }
        export default Employment;