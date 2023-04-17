import React, { useState } from 'react';
import '../stylesheets/Fourm.css';

function BusinessForum() {
  const [textInputVisible, setTextInputVisible] = useState(false);

  const toggleTextInputVisibility = () => {
    setTextInputVisible(!textInputVisible);
  };

  return (
    <div>
      <a href="./business-module">
        <img
          className="image"
          src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
          alt="Return"
        ></img>
      </a>

      <div className="main">
        <div className="information">
          <h1>Question Forum</h1>
          <a className="module_link" href="./../viewModule/viewModule.html">
            <h2>Module: CS23-4GTH</h2>
          </a>

          <button
            className="blue_box button_make_post"
            id="blog_post_button"
            onClick={toggleTextInputVisibility}
          >
            <h4>Make Post</h4>
          </button>
        </div>

        {textInputVisible && (
          <div id="text_input" className="blue_box">
            <form>
              <div className="input_box">
                <h4>Subject</h4>
                <input
                  className="white_box separation"
                  type="text"
                  name="subject"
                  id="subject"
                  required
                ></input>
                <h4>Post</h4>
                <textarea
                  className="white_box separation"
                  id="questionPost"
                  rows="15"
                  required
                ></textarea>

                <br></br>

                <button className="white_box button_post" type="submit">
                  <h4>Submit</h4>
                </button>
                <button
                  className="close_box button_post"
                  onClick={toggleTextInputVisibility}
                >
                  <h4>Close</h4>
                </button>
              </div>
            </form>
          </div>
        )}

        <div id="data_display" className="blue_box posts_group">
          <div className="post_box">
            <div id="post" className="white_box first_post_box">
              <h4 style={{ marginLeft: '5%' }}>No Posts Made</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessForum;
