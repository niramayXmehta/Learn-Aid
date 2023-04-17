import React, { useState } from 'react';
import '../stylesheets/Employment.css';

function BusinessEmployment  () {
    
    return (
    <div>
        <a href="./business-module"><img class="image" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="Return"></img></a>

        <div class="main">
            <div class="information">
                <h1>Business Administration</h1>
                <a class="module_link" href="./../viewModule/viewModule.html"><h2>Module: CS23-2222</h2></a>
            </div>

            <div class="blue_box blue_details">
                <div id="opportunity1" class="white_box white_details">
                    <h4>No Opportunitiues Yet</h4>
                </div>
            </div>
        </div>
    </div>
    );
};



export default BusinessEmployment;