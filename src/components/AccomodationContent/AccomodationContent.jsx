import "./accomodationContent.css";
import accoommodation1 from "../../assets/accommodation1.jpg";
import accoommodation2 from "../../assets/accommodation1.jpg";
import accoommodation3 from "../../assets/accommodation1.jpg";
import accoommodation4 from "../../assets/accommodation1.jpg";
import accoommodation5 from "../../assets/accommodation1.jpg";


 export default function AccomodationContent() {

    return (
        <section>

            <div className="slideContainer">
                <img src="/static/media/arrowIcon.b052dd29e3a2bab76700eee79e133c37.svg" alt="left arrow" role="button" className="leftArrow"/>
                <img src="/static/media/arrowIcon.b052dd29e3a2bab76700eee79e133c37.svg" alt="right arrow" role="button" className="rightArrow"/>
                <div className="imgContainer_">
                    <img alt="logement" className="imgSlide" src={accoommodation1}/>
                    <img alt="logement" className="imgSlide" src={accoommodation2}/>
                    <img alt="logement" className="imgSlide" src={accoommodation3}/>
                    <img alt="logement" className="imgSlide" src={accoommodation4}/>
                    <img alt="logement" className="imgSlide" src={accoommodation5}/> 
                </div>
                
                <div className="numbers">
                    <p>1/5</p>
                </div>
            </div>
                

            <div className="hostContainer">
                <div className="leftContainer">
                    <div className="title">Appartement cosy</div>
                    <div className="location">Ile de France - Paris 17e</div>
                </div>

                    <div class="rightContainer">
                        <div class="hostInfos">
                            <div class="hostName">Nathalie \n Jean</div>
                            <div class="pictContainer"></div>
                        </div>

                        <div className="starsContainer">
                            <img className="starPicture" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgBtVeLVYMwFL1xgjqBjGAnME5ANzA9HUCdwI6AEzRO4AjWCXQDGYEFevA9CBYhfPJS7jmckB+Xd5N3A4AQpTFJudvdQIgryJHidNpAiBjijbtEUBCAZabix1WvlbUFAiGNWP/dKZVCACnxmawsRXLHR0z3JP0KgQgmJhJNRZuI728RCEnED5624HWWEGtPm8GSxCQzS5p4ulZuCZYhJtwJ+3pQ9KaGyhf4I1kCbDb7yrmcE71DsDsDcaRrS06X/7NMegGOfI9lkBHhc1PpebWL/gOXkz4nWzXqcPhsN/Y2F8tAxZoui3hYflaXtOIZmxWx8eoNZO3r0IDJY1EgPZOunXKDmJPHBWQRI5ZYIwwr2kyTZjKHOPygn3FGLxExI47YGX/i6So4N6ncwr+ek4fGVMS+szdHnZtvtHMt6pzPPePSGGLdqWfopErLcLLO2FG5B/PYnb1frjppCG7OE2rDaT6N7mnO0Td2LOImJXL3gFFSBo2pFMFZ+sG0GiNmqSxqab8xEx2v1whB9UNmzCMiwdIPffr+AjupegpgWVPkAAAAAElFTkSuQmCC" alt="red star"/>
                            <img className="starPicture" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgBtVeLVYMwFL1xgjqBjGAnME5ANzA9HUCdwI6AEzRO4AjWCXQDGYEFevA9CBYhfPJS7jmckB+Xd5N3A4AQpTFJudvdQIgryJHidNpAiBjijbtEUBCAZabix1WvlbUFAiGNWP/dKZVCACnxmawsRXLHR0z3JP0KgQgmJhJNRZuI728RCEnED5624HWWEGtPm8GSxCQzS5p4ulZuCZYhJtwJ+3pQ9KaGyhf4I1kCbDb7yrmcE71DsDsDcaRrS06X/7NMegGOfI9lkBHhc1PpebWL/gOXkz4nWzXqcPhsN/Y2F8tAxZoui3hYflaXtOIZmxWx8eoNZO3r0IDJY1EgPZOunXKDmJPHBWQRI5ZYIwwr2kyTZjKHOPygn3FGLxExI47YGX/i6So4N6ncwr+ek4fGVMS+szdHnZtvtHMt6pzPPePSGGLdqWfopErLcLLO2FG5B/PYnb1frjppCG7OE2rDaT6N7mnO0Td2LOImJXL3gFFSBo2pFMFZ+sG0GiNmqSxqab8xEx2v1whB9UNmzCMiwdIPffr+AjupegpgWVPkAAAAAElFTkSuQmCC" alt="red star"/>
                            <img className="starPicture" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgBtVeLVYMwFL1xgjqBjGAnME5ANzA9HUCdwI6AEzRO4AjWCXQDGYEFevA9CBYhfPJS7jmckB+Xd5N3A4AQpTFJudvdQIgryJHidNpAiBjijbtEUBCAZabix1WvlbUFAiGNWP/dKZVCACnxmawsRXLHR0z3JP0KgQgmJhJNRZuI728RCEnED5624HWWEGtPm8GSxCQzS5p4ulZuCZYhJtwJ+3pQ9KaGyhf4I1kCbDb7yrmcE71DsDsDcaRrS06X/7NMegGOfI9lkBHhc1PpebWL/gOXkz4nWzXqcPhsN/Y2F8tAxZoui3hYflaXtOIZmxWx8eoNZO3r0IDJY1EgPZOunXKDmJPHBWQRI5ZYIwwr2kyTZjKHOPygn3FGLxExI47YGX/i6So4N6ncwr+ek4fGVMS+szdHnZtvtHMt6pzPPePSGGLdqWfopErLcLLO2FG5B/PYnb1frjppCG7OE2rDaT6N7mnO0Td2LOImJXL3gFFSBo2pFMFZ+sG0GiNmqSxqab8xEx2v1whB9UNmzCMiwdIPffr+AjupegpgWVPkAAAAAElFTkSuQmCC" alt="red star"/>
                            <img className="starPicture" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgBtVeLVYMwFL1xgjqBjGAnME5ANzA9HUCdwI6AEzRO4AjWCXQDGYEFevA9CBYhfPJS7jmckB+Xd5N3A4AQpTFJudvdQIgryJHidNpAiBjijbtEUBCAZabix1WvlbUFAiGNWP/dKZVCACnxmawsRXLHR0z3JP0KgQgmJhJNRZuI728RCEnED5624HWWEGtPm8GSxCQzS5p4ulZuCZYhJtwJ+3pQ9KaGyhf4I1kCbDb7yrmcE71DsDsDcaRrS06X/7NMegGOfI9lkBHhc1PpebWL/gOXkz4nWzXqcPhsN/Y2F8tAxZoui3hYflaXtOIZmxWx8eoNZO3r0IDJY1EgPZOunXKDmJPHBWQRI5ZYIwwr2kyTZjKHOPygn3FGLxExI47YGX/i6So4N6ncwr+ek4fGVMS+szdHnZtvtHMt6pzPPePSGGLdqWfopErLcLLO2FG5B/PYnb1frjppCG7OE2rDaT6N7mnO0Td2LOImJXL3gFFSBo2pFMFZ+sG0GiNmqSxqab8xEx2v1whB9UNmzCMiwdIPffr+AjupegpgWVPkAAAAAElFTkSuQmCC" alt="red star/"/>
                            <img className="starPicture" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGcSURBVHgBtVeLVYMwFL1xgjqBjGAnME5ANzA9HUCdwI6AEzRO4AjWCXQDGYEFevA9CBYhfPJS7jmckB+Xd5N3A4AQpTFJudvdQIgryJHidNpAiBjijbtEUBCAZabix1WvlbUFAiGNWP/dKZVCACnxmawsRXLHR0z3JP0KgQgmJhJNRZuI728RCEnED5624HWWEGtPm8GSxCQzS5p4ulZuCZYhJtwJ+3pQ9KaGyhf4I1kCbDb7yrmcE71DsDsDcaRrS06X/7NMegGOfI9lkBHhc1PpebWL/gOXkz4nWzXqcPhsN/Y2F8tAxZoui3hYflaXtOIZmxWx8eoNZO3r0IDJY1EgPZOunXKDmJPHBWQRI5ZYIwwr2kyTZjKHOPygn3FGLxExI47YGX/i6So4N6ncwr+ek4fGVMS+szdHnZtvtHMt6pzPPePSGGLdqWfopErLcLLO2FG5B/PYnb1frjppCG7OE2rDaT6N7mnO0Td2LOImJXL3gFFSBo2pFMFZ+sG0GiNmqSxqab8xEx2v1whB9UNmzCMiwdIPffr+AjupegpgWVPkAAAAAElFTkSuQmCC" alt="red star"/>
                        </div>   
                    </div>  

                    <div class="tagsContainer">
                        <div class="tag">Batignolle</div>
                        <div class="tag">Montmartre</div>
                    </div>
                    

            </div>
            
                
                
            <div className="collapseHostContainer">
                <div className="Collapse_collapseContainer">
                    <div className="Collapse_title">
                        "Description"
                        <img src="/static/media/arrowIcon.b052dd29e3a2bab76700eee79e133c37.svg" className="Collapse_iconDown" alt="arrow down" role="button"/>
                    </div>
                </div>

                <div className="Collapse_collapseContainer">
                    <div className="Collapse_title">
                        "Équipements"
                        <img src="/static/media/arrowIcon.b052dd29e3a2bab76700eee79e133c37.svg" className="Collapse_iconDown" alt="arrow down" role="button"/>
                    </div>
            
                </div>
            </div>
        </section>
            
    )
 }
