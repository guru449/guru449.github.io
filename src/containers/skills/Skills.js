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

            <p> Programming Languages - Python, Java, C++, SQL, HTML, CSS, NoSQL, JavaScript, C#, .NET</p>
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
            <p> Tools and Frameworks - AWS, Azure, SpringBoot, Hibernate, Docker, CI/CD, Git, NumPy, TensorFlow, PySpark, Pandas, SaaS, Jira, Kafka, MongoDB, Couchbase </p>
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
            <p> Software Engineering Practices: Agile methodologies, software lifecycle management, microservices, design patterns, Code review,
Troubleshooting, Debugging, Scrum, Root Cause Analysis, SEO, Project management, Create LLDs HLDs </p>
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
