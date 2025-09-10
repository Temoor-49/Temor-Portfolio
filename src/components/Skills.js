import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;

      var skills = this.props.sharedSkills.icons.map(function (skill, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                {/* If "class" exists → use <i>, otherwise use <img> */}
                {skill.class ? (
                  <i className={skill.class} style={{ fontSize: "220%" }}></i>
                ) : (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    style={{ width: "40px", height: "40px" }}
                  />
                )}

                <p
                  className="text-center"
                  style={{ fontSize: "60%", marginTop: "6px" }}
                >
                  {skill.name}
                </p>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
