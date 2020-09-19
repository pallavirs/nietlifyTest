import React from 'react';
import logo from './logo.svg';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import Carrousel from './components/featured/Carrousel';
import TimeUntil from './components/featured/TimeUntil';
import VenueNfo from './components/venueNfo/index';
import Highlight from './components/Highlight';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header_footer/Footer';
import { Element} from 'react-scroll';

function App() {
  return (
    <div className="App" style={{height:'1500px' ,background:'cornflowerblue' }}>
      <Header/>
      <Element name="featured">  <Featured/> </Element>
     
      <Carrousel/>
      <TimeUntil/>
      <Element><VenueNfo name="venueinfo" /> </Element>
      <Element name="highlights"><Highlight/></Element>
      <Element name="pricing"> <Pricing /> </Element>
      <Element name="location"> <Location /> </Element>
      <Element name="contacts">  <Footer /> </Element>
     
    </div>
  );
}

export default App;
