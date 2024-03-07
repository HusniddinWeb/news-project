import React from 'react'
import "./Main.css"
import MainLeft from "../../images/img/mainR.png";
import MainRaght from "../../images/img/Group.jpg";
import MainRaghtB from "../../images/img/Rectangle 29.jpg";



function Main() {
  
  return (
    <main>
      <div className="container">

        <div className="mainBlock">

          <div className="blockLeft">
            <a href="#">
              <img src={MainLeft} alt="" />
            </a>
          </div>
          
          <div className="blockRight">
            <img src={MainRaght} alt="" />
            <img src={MainRaghtB} alt="" />
          </div>

        </div>

      </div>
    </main>
  )
}

export default Main