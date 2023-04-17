import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/ModuleMenu.css';

function ModulePage(){
    return(
        <div className="main">
            <div className="information">
            <h1>Modules</h1>
            <div className="blue_box box_extra">
                <a className="white_box button_style normal_text" id="CS23-4GTH_button" href="module">
                        <div className="headline">
                            <h4>Technology in Business</h4> 
                            <p>- CS23-4GTH</p>
                        </div>
                </a>
              
                <a className="white_box button_style normal_text" id="CS23-4GTH_button" href="./business-module">
                        <div className="headline">
                            <h4>Business Administration</h4> 
                            <p>- CS23-2222</p>
                        </div>
                </a>
            
                <a className="white_box button_style normal_text" id="CS23-4GTH_button" href="#">
                        <div className="headline">
                            <h4>Fiscal Law</h4> 
                            <p>- CS23-3333</p>
                        </div>
                </a>     
                       
            </div>
            </div>

            <a  name="logout_button" className="close_box button_style normal_text" href="./../login/Login.html"><h2>Log Out</h2></a>
            </div>
        
    );
}

export default ModulePage;