import React from 'react'
import "./Header.css"
import imglogo from "../../images/logo/MARketLogo.svg";
import imgbtn from "../../images/img/leftalignment.png";
import imgshop from "../../images/img/shoppingbag.png";
import imgLove from "../../images/img/love.svg";
import imgCart from "../../images/img/cart.svg";
import imgGroup from "../../images/img/Group.svg";



function Header() {

    const degree = [
        {img:imgshop, title:"Заказы"},
        {img:imgLove, title:"Избранное"},
        {img:imgCart, title:"Корзина"},
    ]

  return (

    <div className="container">

        <header>

            <img src={imglogo} alt="" className='imgLogo' />

            <button className='button btnYellow'>
                <img src={imgbtn} alt="title" className='imgLeftBtn'/> Каталог
            </button>

            <form action="">
                <input type="text" className='input' placeholder='Поиск товара'/>
                <button className='button btnInput'>Найти</button>
            </form>

            <ul className='ulIcon'>
                {degree.map((item, index) => 
                    <a href="#">
                        <li key={index} className='li'>
                            <img src={item.img} alt="" className='imgIcon'/>
                            {item.title}    
                        </li>
                    </a>
                )}
            </ul>

            <a href="#">
                <img src={imgGroup} alt="" />
            </a>

        </header>

    </div>

  )
}

export default Header