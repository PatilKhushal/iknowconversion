import { context } from "../context/context";
import { useContext, useEffect } from "react";

const AboutMe = () => {
  const { aboutData } = useContext(context);
  return (
    <div className="iknow_tm_about">
      <div className="left">
        <div className="left_inner">
          <div className="image">
            <img src="/img/thumbs/35-44.jpg" alt="image" />
            <div className="main" data-img-url={aboutData.img} />
          </div>
          <div className="details">
            <ul>
              <li>
                <h3>Name</h3>
                <span>{aboutData.name}</span>
              </li>
              <li>
                <h3>Birthday</h3>
                <span>{aboutData.birthday}</span>
              </li>
              <li>
                <h3>Mail</h3>
                <span>{aboutData.email}</span>
              </li>
              <li>
                <h3>Phone</h3>
                <span>{aboutData.phone}</span>
              </li>
              <li>
                <h3>Address</h3>
                <span>{aboutData.address}</span>
              </li>
              <li>
                <h3>Nationality</h3>
                <span>{aboutData.nationality}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="iknow_tm_main_title">
          <span>About Me</span>
          <h3>{aboutData.title}</h3>
        </div>
        <div className="bigger_text">
          <p>{aboutData.subTitle}</p>
        </div>
        <div className="text">
          <p>{aboutData.bio}</p>
        </div>
        <div className="iknow_tm_button">
          <a href="img/cv/1.jpg" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
