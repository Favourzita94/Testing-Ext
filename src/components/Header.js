import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img className="logo" src="images/frameblue.png" alt="" />

            <div>
              <ul className="nav_menu">
                <li>
                  <ScrollLink
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as needed
                    duration={500} // Adjust scroll duration as needed
                  >
                    Features
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="how-it-works"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust this offset as needed
                    duration={500} // Adjust scroll duration as needed
                  >
                    How it works
                  </ScrollLink>
                </li>
              </ul>
            </div>

            <RouterLink to="/login" className="color1">
              Get Started
            </RouterLink>          
            </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
