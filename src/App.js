
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './containers/HomePage';
import { About } from './containers/about';
import { Contact } from './containers/contact';
import { Photography } from './containers/photography';
import  Redline  from './containers/photography/redLine';
import { Prints } from './containers/prints';
import { WebDesign } from './containers/webDesign';
import Waste  from './containers/photography/waste';
import SignOfTime  from './containers/photography/signOfTime';
import Vietnam  from './containers/photography/vietnam';
import  Fading  from './containers/photography/fading';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className="Blank Page Design">
      <ParallaxProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/gabehug" element={<About/>}/>
            <Route path="/photography" element={<Photography/>}/>
            <Route path="/photography/fading" element={<Fading/>}/>
            <Route path="/photography/redline" element={<Redline/>}/>
            <Route path ="/photography/waste" element={<Waste />}/>
            <Route path ="/photography/sign" element={<SignOfTime />}/>
            <Route path="/photography/vietnam" element={<Vietnam />}/>
            <Route path="/webDesign" element= {<WebDesign/>}/>
            <Route path="/prints/*" element= {<Prints/>} />
            <Route path="/contact" element= {<Contact/>} />
          </Routes>
        </Router>
      </ParallaxProvider>
      <Analytics />
    </div>
  );
}

export default App;
