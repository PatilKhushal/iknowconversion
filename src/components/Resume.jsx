import { context } from "../context/context";
import { useContext, useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const Resume = () => {
  const { experienceData, educationData, skillData } = useContext(context);
  useEffect(() => {
    document.querySelectorAll(".progress_inner").forEach(function (progress) {
      var pValue = parseInt(progress.dataset.value, 10);
      var pColor = progress.dataset.color;
      var pBarWrap = progress.querySelector(".bar");
      var pBar = progress.querySelector(".bar_in");
      var number = progress.querySelector(".number");
      var label = progress.querySelector(".label");

      number.style.right = 100 - pValue + "%";

      setTimeout(function () {
        label.classList.add("opened");
      }, 500);

      pBar.style.width = pValue + "%";
      pBar.style.backgroundColor = pColor;

      setTimeout(function () {
        pBarWrap.classList.add("open");
      });
    });
  }, [skillData]);

  

  const softwareSkills = [
    { id: 1, title: "Ms Office", value: "80" },
    { id: 2, title: "Photoshop", value: "75" },
    { id: 3, title: "Illustrator", value: "90" },
    { id: 4, title: "Figma", value: "65" },
  ];

  return (
    <div className="iknow_tm_resume">
      <div className="iknow_tm_main_title">
        <span>Resume</span>
        <h3>Combination of Skill &amp; Experience</h3>
      </div>
      <div className="resume_inner">
        <div className="left">
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Education</h3>
              <span className="shape" />
            </div>
            <ul>
              {educationData.map((education) => (
                <li key={education.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{education.subject}</h3>
                        <span>{education.university}</span>
                      </div>
                      <div className="year">
                        <span>{education.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{education.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="info_list">
            <div className="iknow_tm_resume_title">
              <h3>Experience</h3>
              <span className="shape" />
            </div>
            <ul>
              {experienceData.map((experience) => (
                <li key={experience.id}>
                  <div className="list_inner">
                    <div className="short">
                      <div className="job">
                        <h3>{experience.designation}</h3>
                        <span>{experience.company}</span>
                      </div>
                      <div className="year">
                        <span>{experience.date}</span>
                      </div>
                    </div>
                    <div className="text">
                      <p>{experience.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Personal Skills</h3>
              <span className="shape" />
            </div>
            <div className="personal">
              <div className="dodo_progress">
                {skillData.map((skill) => {
                  return (
                    <div className="progress_inner" data-value={skill.value} key={skill.id}>
                      <span>
                        <span className="label">{skill.title}</span>
                        <span className="number">
                          {skill.value}
                        </span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="skills_list">
            <div className="iknow_tm_resume_title">
              <h3>Software Skills</h3>
              <span className="shape" />
            </div>
            <div className="software">
              <div className="circular_progress_bar">
                <ul>
                  {softwareSkills.map((skill) => (
                    <li key={skill.id}>
                      <div className="list_inner">
                        <div className="myCircle" data-value="0.95">
                          <CircularProgressbar
                            value={skill.value}
                            strokeWidth={4}
                            styles={buildStyles({
                              // Colors
                              pathColor: "#ff451b",
                            })}
                          />
                          <h3 className="number">{skill.value}%</h3>
                        </div>
                        <div className="title">
                          <h3>{skill.title}</h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
