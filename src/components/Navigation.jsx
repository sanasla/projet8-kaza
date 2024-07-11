import React from "react";
import { Link } from "react-router-dom";

const Navigation= ()=>{
const links={

    lien0:{
        title:"Home mainpage",
        url:"/"
    },
    lien1:{
        title:"About",
        url:"/about"
    },
}
    return(
        
        <ul key="manav">

         {Object.entries(links).map(([key, link]) => (

          <li key={link.id}>
            <Link key={link.id+"test"} to={link.url}>{link.title}</Link>
          </li>
            ))}

        </ul>

        
    )
}
export default Navigation;