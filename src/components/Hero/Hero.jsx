import React from "react";
import TypeWriter from "../../helpers/TypeWriter";
import { useState, useEffect } from "react";
const Hero = () => {
  const msgs = [
    "A Full Stack Developer",
    "A Shopify Expert",
    "A Graphic Designer",
    "A Problem Solver",
    "A Life Long Learner",
  ];
  const [scrollPostionIni, setScrollPositionIni] = useState(0);
  useEffect(() => {
    if (window) {
      const handleScroll = () => {
        setScrollPositionIni(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section>
      <div className="hero">
        <div className="hero__info ">
          <h1 className="hero__name">
            <TypeWriter heading={"Hi I'm Walid "} messages={msgs} />
          </h1>

          <a
            href="https://docs.google.com/document/d/1HdbkoQAo2prNYX88mBR5vzDZj3GUvXeAVYWlJ3IAO9c/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="hero__link "
          >
            <button className="hero__btn animate-pop-in">
              <span>resum&eacute;</span>
            </button>
          </a>
        </div>
        <div
          style={{
            opacity: 350 > scrollPostionIni > 0 ? 1 : 0,
          }}
          className="jsx-123"
        >
          <p className="hero__scrollDown">Scroll down</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
