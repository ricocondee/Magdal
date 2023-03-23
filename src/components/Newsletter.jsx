import React from "react";
import newsletterStyles from "../styles/newsletter.module.css";
const Newsletter = ({ title, text, textPolicy, linkPolicy, textButton }) => {
  return (
    <div className={newsletterStyles.container}>
      <div className={newsletterStyles.infoContainer}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className={newsletterStyles.inputContainer}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email..."
        />
        <button>{textButton}</button>
      </div>
      <div className={newsletterStyles.policyContainer}>
        <span>
          <a href={linkPolicy}>{textPolicy}</a>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
