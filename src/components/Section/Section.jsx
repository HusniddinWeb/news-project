import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img from "../../images/logo/l.svg"

import "./Section.css"
import {mal} from '../../datas/Products/Products'

function Section({title}) {

    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'slideOutUp',
        dots: false,
        nav: false,
        margin: 0,
        responsive: {
            1200: {
                items: 1,
            },
            724: {
                items: 1,
            },
            500: {
                items: 1,
            },

            370: {
                items: 1,
                innerWidth: "100%",
                outerWidth: "100%"
            },
        },
    }

  return (
    <div className='container section'>
            

        <div className='sectionTitle'>
            <a href="">{title}</a>
        </div>

        <OwlCarousel className='owl-theme sectionBlock' {...options}>

            
            
            {mal.map((item, index) =>
                <div className='block' key={index.id}>
                    <img src={item.img} />
                    <div className='sectionText'>{item.title}</div>
                </div>
            )}
        </OwlCarousel>

    </div>
  )
}

export default Section