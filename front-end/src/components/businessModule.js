import React, { useState } from 'react';
import '../stylesheets/ModuleMenu.css';

function BusinessModule() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
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
          <h1>Business Administration</h1>
          <h2>Module: CS23-2222</h2>
        </div>

        <div className="blue_box box_extra">
          {!menuVisible && (
            <button
              className="white_box button_style normal_text"
              id="menu_button"
              onClick={toggleMenuVisibility}
            >
              <h3>Main Menu</h3>
            </button>
          )}

          {menuVisible && (
            <div id="menu" className="information">
              <div className="white_box box_extra">
                <h2>Main Menu</h2>
                <br></br>
                <a className="blue_box button_style normal_text" href="./business-form">
                  <h4>Question Forum</h4>
                </a>
                <br></br>
                <a className="blue_box button_style normal_text" href="./business-employment">
                  <h4>Employment Opportunities</h4>
                </a>
                <br></br>
                <a className="blue_box button_style normal_text" href="./grades">
                  <h4>Grades</h4>
                </a>
                <br></br>
                <button
                  className="close_box button_style"
                  onClick={toggleMenuVisibility}
                >
                  <h3>Close</h3>
                  <p></p>
                </button>
              </div>
            </div>
          )}

          <br></br>

          <div id="topic1" className="blue_box box_extra">
            <div className="white_box box_extra">
              <h4 style={{ marginBottom: '0%', marginTop: '0%' }}>
                No Material Available
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessModule;
