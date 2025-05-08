import React from "react";
import {
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import SocialButton from "./social-button";

function Contact() {
  return (
    <div className="homepage-div">
      <div className="homepage-container">
        <div className="homepage-text-part right">
          <h1>
            Thank You<span style={{ color: "#0087ca" }}>.</span>
          </h1>
          <p>
            Regardless of whether you are my future employer, a classmate, or a
            stranger online,
            <b> thank you</b> for taking the time to learn more about me.
            <br />
            <br />
            If you have any questions or just want to say hi,
            <a href="mailto:brianfransis.moniaga@gmail.com" target="_blank">
              {" "}
              feel free to reach out to me
            </a>
            .
          </p>
          <div className="social-buttons align-right">
            <SocialButton
              link="mailto:brianfransis.moniaga@gmail.com"
              icon={EnvelopeOpenIcon}
              label="Twitter"
            />
            <SocialButton
              link="https://www.linkedin.com/in/brian-fransis-moniaga"
              icon={LinkedInLogoIcon}
              label="LinkedIn"
            />
            <SocialButton
              link="https://github.com/BrianAnakPintar"
              icon={GitHubLogoIcon}
              label="GitHub"
            />
          </div>
          <br />
          <a
            href="mailto:brianfransis.moniaga@gmail.com"
            target="_blank"
            className="blue"
          >
            {" "}
            Resume available on request by email.
          </a>
        </div>
        <div className="homepage-img">
          <div className="landing_img">
            <img
              className="gh_landing_img"
              src={require("../Assets/serie_transparent.png")}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
