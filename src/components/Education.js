import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Education extends Component {
  render() {
    const { education } = this.props;
    if (!education || education.length === 0) return null;

    const sectionName = "Education";

    const educationElements = education.map((edu, i) => (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={edu.year}
        iconStyle={{
          background: "#ae944f",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<i className="fas fa-graduation-cap experience-icon"></i>}
        key={i}
      >
       <h3 className="vertical-timeline-element-title main-badge">
  {edu.degree}
</h3>
<h4 className="vertical-timeline-element-subtitle education-badge">
  {edu.institution}
</h4>

      </VerticalTimelineElement>
    ));

    return (
      <section id="education" className="pb-5">
        <div className="col-md-12 mx-auto">
          <h1 className="section-title" style={{ color: "black" }}>
            {sectionName}
          </h1>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {educationElements}
            <VerticalTimelineElement
              iconStyle={{
                background: "#ae944f",
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

export default Education;
