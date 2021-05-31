import './resources/styles.css';

import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/Index';
import Events from './components/events/Events';
import Highights from './components/highlights/Highlights';
import Pricing from './components/pricings/Pricings'

function App() {
  return (
    <div className="App">
      <Header/>
      <Element name="slider">
        <Featured/>
      </Element>
      <Element name="events">
        <Events/>
      </Element>
      <Element name="highlight">
        <Highights/>
      </Element>
      <Element name="pricing">
        <Pricing/>
      </Element>
      <Footer/>
    </div>
  );
}

export default App;
