import PreNavBar from './components/PreNavBar';
import NavBar from './components/NavBar';
import {BrowserRouter as Router} from "react-router-dom";
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from"./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"





function App() {
  return (
  <Router>
    <PreNavBar/>
    <NavBar />
    <Slider start={data.banner.start} />
    <Offers offers={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading text="HOT PRODUCTS"/>
    <HotAccessoriesMenu/>
    <Heading text="This site is under construction  "/>
    <Heading text="Guided by K.L.Narayan Sir"/>
    

  </Router>
  );
}

export default App;
