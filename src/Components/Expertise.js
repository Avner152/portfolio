import { Slide } from "react-reveal";
import Lines from "./Lines";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Expertise() {
  return (
    <div id="expertise" className="expertise title">
      <section>
        <div className="custom-shape-divider-top-triangle">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="content">
          <h2>My Expertise</h2>
          <div className="row">
            <Slide left>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <FontAwesomeIcon icon={faCode} />
                    <Lines index={120} />
                  </div>
                  <div className="col">
                    <h3 className="first-front">
                      <span className="software dev">Software</span>
                      <br />
                      Development
                    </h3>
                    <p>
                      Experienced in both functional and OOP: Dart, Python,
                      Java, JavaScript, TypeScript.
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide top>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <FontAwesomeIcon className="react-icon" icon={faReact} />
                    <Lines index={127} />
                  </div>
                  <div className="col">
                    <h3 className="first-front">
                      <span className="front dev">Frontend Dev</span>
                      <br />
                      React, NextJS
                    </h3>
                    <p>
                      Passionate about UI/UX. Over 2 years of development
                      experience in HTML, CSS, JS, React and NextJS frameworks.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide right>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-3">
                    <FontAwesomeIcon className="react-icon" icon={faReact} />
                    <Lines index={134} />
                  </div>
                  <div className="col">
                    <h3 className="first-front">
                      <span className="application dev">Frontend Dev</span>
                      <br />
                      React, NextJS
                    </h3>
                    <p>
                      Passionate about UI/UX. Over 2 years of development
                      experience in HTML, CSS, JS, React and NextJS frameworks.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Expertise;
