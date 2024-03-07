
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import Footer from "./components/footer/Footer";

function App() {

  const sectionTitle = [
    "Может пригодиться",
    "Возможно, Вам понравится",
    "Мужской образ для особого случая", 
    "Классная электроника"
  ];


  return (
    

    <div className="App">

      <Header/>
     
      <Navbar/>
      
      <Main  />

      {sectionTitle.map((item, index) =>
        <Section title={item} key={index} />
      )}

      <Footer title="Покупателям" title1="Продавцам" title2="Сотрудничество" />  

    </div>

  );
}


export default App;
