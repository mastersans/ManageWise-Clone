import React from "react";
import ReactDOM from "react";
import './SectionTitle.css';
const SectionTitle = ({emoji, text}) => {
      return (
        <div className="section-title">
          <span className="emoji" role="img" aria-label="Emoji">
            {emoji}
          </span>
          <h2 className="text">{text}</h2>
        </div>
      )
}
export default SectionTitle; 