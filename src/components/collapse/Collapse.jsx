import "./collapse.css";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

export default function Collapse({title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
      <div className="collapseContainer">
        <div className="collapseTitle" onClick={toggleCollapse}>
          {title}
          
          { /* if isOpen===true ===> className=iconUp else className=iconDown  */}

          <img
            src={arrow}
            className={isOpen ? 'iconUp' : 'iconDown'}
            alt="arrow"
          />
        </div>
      
        { /* if isOpen=== true then on affiche le texte */}
        {isOpen && 
          <div className="text">
            {text}
          </div>
        }
      </div>
  );
}
