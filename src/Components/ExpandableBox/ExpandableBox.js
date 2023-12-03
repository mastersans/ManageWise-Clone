import React, { useState } from 'react';
import './ExpandableBox.css';

const ExpandableBox = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className={`expandable-box ${isExpanded ? 'expanded' : ''}`}>
        <div className="head" onClick={toggleDescription}>
          {title}
          <span className="icon">{isExpanded ? '×' : '+'}</span>
        </div>
        {isExpanded && (
          <div className="description">
            {description}
          </div>
        )}
      </div>
    );
  };

export default ExpandableBox;