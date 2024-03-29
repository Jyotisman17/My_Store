import PreNavBar from './components/PreNavBar';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from"./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"



function App() {
  return (
  <Router>
    <PreNavBar/>
    <NavBar />
    <Slider start={data.banner.start} />
    <Offers offers={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu/>
    
    <Routes>

    <Route exact path="/mobileStore"  element = {<HotAccessories mobileStore={data.hotAccessories_NEW.mobileStore} 
      mobileStoreCover={data.hotAccessoriesCover_NEW.mobileStore.imageLink}  />}/>
    <Route exact path="/TV" element={<HotAccessories tV={data.hotAccessories_NEW.TV} 
      tVCover={data.hotAccessoriesCover_NEW.TV.imageLink}  />}/>
    <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories_NEW.mobileAccessories} 
      mobileAccessoriesCover={data.hotAccessoriesCover_NEW.mobileAccessories.imageLink}  />}/>
    <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories_NEW.lifeStyle} 
      lifeStyleCover={data.hotAccessoriesCover_NEW.lifeStyle.imageLink}  />}/>
    <Route exact path="/smartHome" element={<HotAccessories smartHome={data.hotAccessories_NEW.smartHome} 
    smartHomeCover={data.hotAccessoriesCover_NEW.smartHome.imageLink}  />}/>
  </Routes >

  <Heading text="PRODUCT REVIEWS"/>
  <ProductReviews productReviews={data.productReviews}/>
  <Heading text="VIDEOS"/>
  <Videos videos={data.videos}/>
  <Heading text="IN THE PRESS"/>
  <Banner banner={data.banner}/>
  <Footer footer={data.footer} />
  </Router>
  );
}

export default App;
