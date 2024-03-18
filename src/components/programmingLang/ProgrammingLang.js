import React from "react";
import "./ProgrammingLang.scss";
import {skillsSection} from "../../portfolio";

export default function ProgrammingLang() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {skillsSection.programmingLang.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }