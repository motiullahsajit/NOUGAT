import React from "react";
import { Facebook, LinkedIn } from "@mui/icons-material";
import "./Hero.css";

function Hero() {
  const facebookUrl = "https://www.facebook.com/YourFacebookPage";
  const linkedinUrl = "https://www.linkedin.com/company/YourLinkedInPage";
  return (
    <section style={{ display: "flex", justifyContent: "center" }} id="home">
      <div className="hero-container">
        <div className="left-container">
          <h1>
            <span className="third-color">
              Transform Your Ideas Into
              <br /> Captivating Visual{" "}
            </span>
            <span className="primary-color">Masterpieces!</span>
          </h1>
          <br />
          <p>
            Welcome to Nougat! We provide technical solutions to boost your
            online business and seamlessly transition your offline ventures to
            the digital realm. Let's embark on this digital journey together!
          </p>
          <br />
          <div>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="third-color"
            >
              <Facebook />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="third-color"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
        <div className="right-container">
          <iframe
            height="315"
            src="https://www.youtube.com/embed/CMvQCoh2q9U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Hero;
