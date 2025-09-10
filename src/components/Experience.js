import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    const { resumeExperience, resumeBasicInfo } = this.props;
    const sectionName = resumeBasicInfo?.section_name.experience || "Experience";

    const workElements = resumeExperience?.map((work, i) => {
      const mainTech = work.mainTech?.map((tech, i) => (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {tech}
        </Badge>
      ));
      const tech = work.technologies?.map((tech, i) => (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {tech}
        </Badge>
      ));

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fab fa-react experience-icon"></i>}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTech}</div>
          <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
            {work.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <h1 className="section-title" style={{ color: "black" }}>
            {sectionName}
          </h1>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {workElements}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
