import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Herosection() {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login"); 
  }
  
  return (
    <>
      <section>
        <div className="container">
          <div className="herosection">
            <div className="side1">
              <h1 className="herotext">
                Show Them <br />
                Don’t Just Tell
              </h1>
              <p className="color3">
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
              <button className="button" onClick={goToLoginPage}>
                Install HelpMeOut <AiOutlineArrowRight />
              </button>
            </div>
            <div>
              <img className="leftimg" src="images/Group 34435.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
