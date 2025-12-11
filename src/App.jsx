import NavBar from "./NavBar.jsx"
import Hero from "./Hero.jsx"
import Card from './Card.jsx'
import Reservation from "../Reservation.jsx"
import ImageToyota from './assets/toyota.jpg'
import ImagePorshe from './assets/porshe.jpg'
import ImageBmw from './assets/bmw.avif'
import ImageSubaru from './assets/subaru.jpg'
import About from "./About.jsx"
import Brands from "./Brands.jsx"
import ImageBmwLogo from './assets/honda-logo.png'
import ImagePorscheLogo from './assets/posche.png'
import ImageSubaruLogo from './assets/aston-logo.png'
import ImageToyotaLogo from './assets/Toyota_Logo.png'
import Footer from "./Footer.jsx"
import ModelsToyotaTop from "./assets/toyota-top.png"
import ModelsToyotaBottom from "./assets/toyota-bottom.png"
import ModelsToyotaLeft from "./assets/toyota-left.png"
import ModelsToyotaRight from "./assets/toyota-right.png"
import ModelsPorscheTop from "./assets/porsche-top.png"
import ModelsPorscheBottom from "./assets/porsche-bottom.png"
import ModelsPorscheLeft from "./assets/porsche-left.png"
import ModelsPorscheRight from "./assets/porsche-right.png"
import ModelsAstonTop from "./assets/astonmartin-top.png"
import ModelsAstonBottom from "./assets/astonmartin-bottom.png"
import ModelsAstonLeft from "./assets/astonmartin-left.png"
import ModelsAstonRight from "./assets/astonmartin-right.png"
import ModelsBenzTop from "./assets/mercedes-top.png"
import ModelsBenzBottom from "./assets/mercedes-bottom.png"
import ModelsBenzLeft from "./assets/mercedes-left.png"
import ModelsBenzRight from "./assets/mercedes-right.png"




function App() {
 

  return (
    <>
     <NavBar/>
     <Hero/>
     <div className="cards">
      <Card img={ImageToyota} title="最新車型Toyota X3" name="現在只需要" highLight="199元!!!"/>
     <Card img={ImagePorshe} title="高端車型 保時捷 911" name="現在只需要" highLight="499元!!!"/>
     <Card img={ImageBmw} title="高端車型 BMW X728" name="現在只需要" highLight="359元!!!"/>
     <Card img={ImageSubaru} title="老闆自組裝賽車 Subaru X" name="現在只需要" highLight="459元!!!"/>
     </div>
     <div className="reservation">
      <Reservation/>
     </div>
      <About/>
      <div className="carBrands">
        <h1>合作品牌</h1>
        <div className="carBrands-logo">
      
      
      <Brands img={ImageToyotaLogo} alt="Toyota"
  models={[ModelsToyotaTop, ModelsToyotaBottom, ModelsToyotaLeft, ModelsToyotaRight
    
  ]}
/>
<Brands img={ImagePorscheLogo} alt="porsche"
  models={[ModelsPorscheTop, ModelsPorscheBottom, ModelsPorscheLeft, ModelsPorscheRight
    
  ]}/>
  <Brands img={ImageBmwLogo} alt="astonmartin"
  models={[ModelsAstonTop, ModelsAstonBottom, ModelsAstonLeft, ModelsAstonRight
    
  ]}/>
  <Brands img={ImageSubaruLogo} alt="benz"
  models={[ModelsBenzTop, ModelsBenzBottom, ModelsBenzLeft, ModelsBenzRight
    
  ]}/>
      </div>
      </div>
     <Footer/>
    </>
  )
}

export default App
