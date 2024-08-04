import "./collapse.css";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

export default function Collapse({about}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
      <div className="collapseContainer">
        <div className="collapseTitle" onClick={toggleCollapse}>
          {about.title}
          
          { /* if isOpen===true ===> className=iconUp else className=iconDown  */}

          <img
            src={arrow}
            className={isOpen ? 'iconUp' : 'iconDown'}
            alt="arrow"
            role="button"
          />
        </div>
      
        { /* if isOpen=== true display text */}
        {isOpen && 
          <div className="text">
            {about.text}
          </div>
        }
      </div>
  );
}
