import React, { useState } from 'react';
import '../stylesheets/Grades.css';

function Grades() {
  const [gradesVisible, setGradesVisible] = useState({
    'CS23-4GTH': false,
    'CS23-2222': false,
    'CS23-3333': false,
  });

  const toggleGradesVisibility = (gradeId) => {
    setGradesVisible({
      ...gradesVisible,
      [gradeId]: !gradesVisible[gradeId],
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
          <h1>Grades</h1>
          <h2>Student ID: 210368867</h2>
        </div>

        <div className="blue_box box_extra">
          <div name="ModuleGrade">
            <button
              className="white_box button_style normal_text"
              id="CS23-4GTH_button"
              onClick={() => toggleGradesVisibility('CS23-4GTH')}
            >
              <div className="headline">
                <h4>Technology in Business</h4>
                <p>- CS23-4GTH</p>
              </div>
            </button>

            {gradesVisible['CS23-4GTH'] && (
              <div id="CS23-4GTH">
                <div className="white_box box_extra">
                  <div className="headline center">
                    <h4>Technology in Business</h4>
                    <p>- CS23-4GTH</p>
                  </div>

                  <br></br>
                  <br></br>

                  <table>
                    <tr>
                      <th className="center assignment">Python Assignment</th>
                      <th className="center grade">78%</th>
                      <th className="center feedback">The code has numerous errors and lacks proper organization. The concepts are not fully understood and the documentation is incomplete. Please review the requirements and seek assistance if needed to enhance your understanding and execution of the assignment.</th>
                    </tr>
                    <tr>
                      <td className="center">Java Assignment</td>
                      <td className="center">93%</td>
                      <td className="center">Great work on your assignment! You've demonstrated a solid understanding of the concepts and implemented them effectively in your code. Your documentation was thorough and your code was well-organized. Keep up the good work!</td>
                    </tr>
                    <tr>
                      <td className="center">Digital Security</td>
                      <td className="center">54%</td>
                      <td className="center">Your assignment on Probability and Matrices requires improvement. The solutions are incomplete and contain errors in calculations. Your understanding of the concepts needs further development. Please review the material thoroughly and seek additional guidance to improve your understanding and accuracy in solving problems related to Probability and Matrices.</td>
                    </tr>
                    <tr>
                      <td className="center">Climate Change</td>
                      <td className="center">98%</td>
                      <td className="center">Excellent work on your PowerPoint presentation on the intersection of climate change and computer science! Your slides were visually appealing, well-organized, and supported by thorough research. Your presentation was engaging and effectively conveyed the complex relationship between climate change and computer science. Keep up the outstanding work!</td>
                    </tr>
                    <tr>
                      <td className="center">Web-Tech</td>
                      <td className="center">78%</td>
                      <td className="center">Good effort on your web development assignment! You demonstrated a solid understanding of the concepts and implemented them effectively. However, there is room for improvement in areas such as user experience, responsive design, and code optimization. Keep refining your skills to take your web development projects to the next level!</td>
                    </tr>
                    <tr>
                      <td className="center">Robotics</td>
                      <td className="center">80%</td>
                      <td className="center">Great job on your robot building project! Your robot demonstrated impressive functionality and met the project requirements effectively. The design and construction were well-executed, and the programming was solid. Keep up the good work and continue exploring and refining your skills in robotics!</td>
                    </tr>
                  </table>

                  <br></br>
                  <br></br>

                  <button
                    className="close_box button_style"
                    onClick={() => toggleGradesVisibility('CS23-4GTH')}
                  >
                    <h3>Close</h3>
                    <p></p>
                    </button>
            </div>
          </div>
        )}
      </div>

      <br></br>

      <div name="ModuleGrade">
        <button
          className="white_box button_style normal_text"
          id="CS23-2222_button"
          onClick={() => toggleGradesVisibility('CS23-2222')}
        >
          <div className="headline">
            <h4>Business Administration</h4>
            <p>- CS23-2222</p>
          </div>
        </button>

        {gradesVisible['CS23-2222'] && (
          <div id="CS23-2222">
            <div className="white_box box_extra">
              <div className="headline center">
                <h4>Business Administration</h4>
                <p>- CS23-2222</p>
              </div>

              <br></br>
              <br></br>

              <h4 className="center">No Grades Available</h4>

              <br></br>
              <br></br>

              <button
                className="close_box button_style"
                onClick={() => toggleGradesVisibility('CS23-2222')}
              >
                <h3>Close</h3>
                <p></p>
              </button>
            </div>
          </div>
        )}
      </div>

      <br></br>

      <div name="ModuleGrade">
        <button
          className="white_box button_style normal_text"
          id="CS23-3333_button"
          onClick={() => toggleGradesVisibility('CS23-3333')}
        >
          <div className="headline">
            <h4>Fiscal Law</h4>
            <p>- CS23-3333</p>
          </div>
        </button>

        {gradesVisible['CS23-3333'] && (
          <div id="CS23-3333">
            <div className="white_box box_extra">
              <div className="headline center">
                <h4>Fiscal Law</h4>
                <p>- CS23-3333</p>
              </div>

              <br></br>
              <br></br>

              <h4 className="center">No Grades Available</h4>

              <br></br>
              <br></br>

              <button
                className="close_box button_style"
                onClick={() => toggleGradesVisibility('CS23-3333')}
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

export default Grades;
