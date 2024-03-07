import "./Navbar.css";
import imgLoc from "../../images/logo/location.png";

function Navbar() {

  const navLocation = [
    "Универмаг", "Продукты", "Спорт", "Дача", "Электронника", "Детям", "Красота", "Бытовая Tехника", "Одежда"
  ]
 
  return (


    <nav>

      <div className="container">

        <div className="navBlock">

          <div className="navLoc">
            <img src={imgLoc} alt="" /> Москва
          </div>
          
          <ul className="navUl">
           {navLocation.map((item, index) => 
              <li key={index}><a href="#">{item}</a></li>
            )}
          </ul>

        </div>

      </div>

    </nav>

    
  )


}

export default Navbar