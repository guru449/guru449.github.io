import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import ProgrammingLang from "../../components/programmingLang/ProgrammingLang";
import FrontEnd from "../../components/frontEnd/FrontEnd";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      {/* <div className="skills-main-div"> */}
        {/* <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade> */}
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>

            <p> Languages & Frameworks - C++, Python, Java, SQL, Spring Boot, Hibernate, J2EE, Servlet, JDBC, JavaScript, ReactJS, JUnit, XML, Shell scripting, Node, Selenium, HTML, CSS</p>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            {/* <ProgrammingLang />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div> */}
          </div>

          <div className="skills-text-div">
            <p> Cloud, Version Control & DevOps - AWS, GitHub, Bitbucket, Docker, Docker compose, Kubernetes, Jenkins, CI/CD</p>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
          </div>

          <div className="skills-text-div">
            <p> Machine Learning & Data Analysis: Pandas, NumPy, Matplotlib, Seaborn, Jupyter, Vocareum, PyTorch, TensorFlow, Scikit-Learn </p>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
          </div>
          <div className="skills-text-div">
            <p> Software Engineering: 	Agile, SDLC, MVC, Jira, Data Structures and Algorithms, Microservices, Networking protocols (IP, TCP, TLS/SSL, UDP), Design Patterns, OOP, RDBMS, Linux, Troubleshooting, Code Reviews</p>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
          </div>


        </Fade>
      {/* </div> */}
    </div>
  );
}
