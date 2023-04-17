import React, { useState } from 'react';
import '../stylesheets/Module.css';

function Module() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [topic1Visible, setTopic1Visible] = useState(false);
  const [topic2Visible, setTopic2Visible] = useState(false);
  const [topic3Visible, setTopic3Visible] = useState(false);

  return (
    <div>
      <a href="./../..">
        <img
          className="image"
          src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
          alt="Return"
        ></img>
      </a>

      <div className="main">
        <div className="information">
          <h1>Technology in Business</h1>
          <h2>Module: CS23-4GTH</h2>
        </div>

        <div className="blue_box box_extra">
          {!menuVisible && (
            <button
              className="white_box button_style normal_text"
              id="menu_button"
              onClick={() => setMenuVisible(true)}
            >
              <h3>Main Menu</h3>
            </button>
          )}

          {menuVisible && (
            <div id="menu" className="information" style={{ display: 'block' }}>
              <div className="white_box box_extra">
                <h2>Main Menu</h2>
                <br></br>
                <a
                  className="blue_box button_style normal_text"
                  href="/forum"
                >
                  <h4>Question Forum</h4>
                </a>
                <br></br>
                <a
                  className="blue_box button_style normal_text"
                  href="employment"
                >
                  <h4>Employment Opportunities</h4>
                </a>
                <br></br>
                <a
                  className="blue_box button_style normal_text"
                  href="grades"
                >
                  <h4>Grades</h4>
                </a>
                <br></br>
                <button
                  className="close_box button_style"
                  onClick={() => setMenuVisible(false)}
                >
                  <h3>Close</h3>
                  <p></p>
                </button>
              </div>
            </div>
          )}

          <br></br>

          <div name="topic1_everything">
            {!topic1Visible && (
              <button
                className="white_box button_style normal_text"
                id="topic1_button"
                onClick={() => setTopic1Visible(true)}
              >
                <p>
                  <div className="headline">
                    <h4>Topic 1</h4>
                    <p>- Networks</p>
                  </div>
                </p>
              </button>
            )}

            {topic1Visible && (
              <div
                id="topic1"
                className="blue_box box_extra"
                style={{ display: 'block' }}
              >
                <div className="white_box box_extra">
                  <p>
                    <div className="headline center">
                      <h4>Topic 1</h4>
                      <p>- Networks</p>
                    </div>
                  </p>

                  <h4>Class Material</h4>
                  <a href="">
                    <img
                      className="image"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png"
                      alt="power point"
                      ></img>
                      </a>
                      <a href="">
                      <img
                                         className="image"
                                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png"
                                         alt="pdf"
                            ></img>
                      </a>
                      <h4>Assignment Instruction</h4>
              <a href="">
                <img
                  className="image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/833px-PDF_file_icon.svg.png"
                  alt="pdf"
                ></img>
              </a>

              <h4>Assignment Submission</h4>

              <input
                name="userfile"
                type="file"
                accept="application/pdf, application/vnd.ms-excel"
              />

              <br></br>
              <br></br>
              <br></br>

              <button
                className="close_box button_style"
                onClick={() => setTopic1Visible(false)}
              >
                <h3>Close</h3>
                <p></p>
              </button>
            </div>
          </div>
        )}
      </div>

      <br></br>

      <div name="topic2_everything">
        {!topic2Visible && (
          <button
            className="white_box button_style normal_text"
            id="topic2_button"
            onClick={() => setTopic2Visible(true)}
          >
            <p>
              <div className="headline">
                <h4>Topic 2</h4>
                <p>- Clients</p>
              </div>
            </p>
          </button>
        )}

        {topic2Visible && (
          <div
            id="topic2"
            className="blue_box box_extra"
            style={{ display: 'block' }}
          >
            <div className="white_box box_extra">
              <p>
                <div className="headline center">
                  <h4>Topic 2</h4>
                  <p>- Clients</p>
                </div>
              </p>

              <br></br>

              <h4 className="center">No Material Added</h4>

              <br></br>

              <button
                className="close_box button_style"
                onClick={() => setTopic2Visible(false)}
              >
                <h3>Close</h3>
                <p></p>
              </button>
            </div>
          </div>
        )}
      </div>

      <br></br>

      <div name="topic3_everything">
        {!topic3Visible && (
          <button
            className="white_box button_style normal_text"
            id="topic3_button"
            onClick={() => setTopic3Visible(true)}
          >
            <p>
              <div className="headline">
                <h4>Topic 3</h4>
                <p>- Servers</p>
              </div>
            </p>
          </button>
        )}

        {topic3Visible && (
          <div
            id="topic3"
            className="blue_box box_extra"
            style={{ display: 'block' }}
          >
            <div className="white_box box_extra">
              <p>
                <div className="headline center">
                  <h4>Topic 3</h4>
                  <p>- Servers</p>
                </div>
              </p>

              <br></br>

              <h4 className="center">No Material Added</h4>
              <br></br>

              <button
                className="close_box button_style"
                onClick={() => setTopic3Visible(false)}
              >
                <h3>Close</h3>
                <p></p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
);
}

export default Module;