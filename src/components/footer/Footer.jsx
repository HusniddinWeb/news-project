import img from "../../images/logo/webir.svg";
import img1 from "../../images/logo/insta.svg";
import img2 from "../../images/logo/telgram.svg";




import React from 'react'
import "./Footer.css"
import { footerText } from '../../datas/FooterText/FooterText'
import { footerText1 } from '../../datas/FooterText/FooterText'
import { footerText2 } from '../../datas/FooterText/FooterText'

function Footer(props) {
  
  return (
    <footer>

      <div className='container'>

        <div className='footerBlock'>

          <ul>
            <p>{props.title}</p>
            {footerText.map((item, index) => 
              <a href=""><li key={index}>{item.text}</li></a>
            )}
          </ul>

          <ul>
            <p>{props.title}</p>
            {footerText1.map((item, index) => 
              <a href=""><li key={index}>{item.text}</li></a>
            )}
          </ul>

          <ul>
            <p>{props.title2}</p>
            {footerText2.map((item, index) => 
              <a href=""><li key={index}>{item.text}</li></a>
            )}
          </ul>

          <div className='footerImg'>
            <a href="#"><img src={img} /></a>
            <a href="#"><img src={img1} /></a>
            <a href="#"><img src={img2} /></a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer