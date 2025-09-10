import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTopFile from "./components/ScrollToTopFile";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  componentDidMount() {
    // Default language: English
    this.applyPickedLanguage(window.$primaryLanguage);
  }

  applyPickedLanguage = (pickedLanguage) => {
    document.documentElement.lang = pickedLanguage;

    // Set resume JSON path
    const resumePath =
      pickedLanguage === window.$primaryLanguage
        ? process.env.PUBLIC_URL + "/res_primaryLanguage.json"
        : process.env.PUBLIC_URL + "/res_secondaryLanguage.json";

    // Set shared portfolio JSON path
    const sharedPath =
      pickedLanguage === window.$primaryLanguage
        ? process.env.PUBLIC_URL + "/portfolio_shared_data.json"
        : process.env.PUBLIC_URL + "/portfolio_shared_data2.json";

    this.loadJSON(resumePath, "resumeData");
    this.loadJSON(sharedPath, "sharedData");
  };

  loadJSON = (path, stateKey) => {
    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        return res.json();
      })
      .then((data) => this.setState({ [stateKey]: data }))
      .catch((err) => console.error(err));
  };

  render() {
    const { resumeData, sharedData } = this.state;

    return (
      <div>
        {/* Header */}
        <Header sharedData={sharedData.basic_info} />

        {/* Language Switch */}
        <div className="col-md-12 mx-auto text-center language">
          {/* English */}
          <div
            onClick={() => this.applyPickedLanguage(window.$primaryLanguage)}
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>

          {/* French */}
          <div
            onClick={() => this.applyPickedLanguage(window.$secondaryLanguage)}
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-france"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>

        {/* Sections */}
        <About
          resumeBasicInfo={resumeData.basic_info}
          sharedBasicInfo={sharedData.basic_info}
        />
        <Projects
          resumeProjects={resumeData.projects}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Skills
          sharedSkills={sharedData.skills}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Experience
          resumeExperience={resumeData.experience}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Education education={resumeData.education} />
        <Footer sharedBasicInfo={sharedData.basic_info} />
        <ScrollToTopFile sharedBasicInfo={sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
