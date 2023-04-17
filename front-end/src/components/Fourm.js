import React, { useState } from 'react';
import '../stylesheets/Fourm.css';

function Fourm() {
  const [textInputVisible, setTextInputVisible] = useState(false);

  return (
    <div>
      <a href="./..">
        <img className="image" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="Return"></img>
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
            onClick={() => {
              setTextInputVisible(true);
            }}
          >
            <h4>Make Post</h4>
          </button>
        </div>

        {textInputVisible && (
          <div id="text_input" className="blue_box">
            <form>
              <div className="input_box">
                <h4>Subject</h4>
                <input className="white_box separation" type="text" name="subject" id="subjectIn" required></input>
                <h4>Post</h4>
                <textarea className="white_box separation" id="questionPostIn" rows="15" required></textarea>

                <br></br>

                <button className="white_box button_post" type="submit">
                  <h4>Submit</h4>
                </button>

                <button
                  className="close_box button_post"
                  onClick={() => {
                    setTextInputVisible(false);
                  }}
                >
                  <h4>Close</h4>
                </button>
              </div>
            </form>
          </div>
        )}

        <div id="data_display" className="blue_box posts_group">
        <div class="post_box">

<div id="post" class="white_box first_post_box">
    <p class="all_text email bold" id="email">From: email1@gmail.com</p>
    <p class="all_text date bold" id="date">Date: DD/MM/YYYY</p>
    
    <p class="all_text bold" id="subject">Random Subject 1</p>
    <p class="all_text post" id="post">Random post 1</p>
</div>

<div id="post" class="white_box intermediate_post_box">
    <p class="all_text email bold" id="email">From: email2@gmail.com</p>
    <p class="all_text date bold" id="date">Date: DD/MM/YYYY</p>
  
    <p class="all_text bold" id="subject">Random Subject 2</p>
    <p class="all_text post" id="post">Random post 2</p>
</div>

<div id="post" class="white_box intermediate_post_box">
    <p class="all_text email bold" id="email">From: email3@gmail.com</p>
    <p class="all_text date bold" id="date">Date: DD/MM/YYYY</p>

    <p class="all_text subject bold" id="subject">Random Subject 3</p>
    <p class="all_text post" id="post">Random post 3</p>
</div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Fourm;
