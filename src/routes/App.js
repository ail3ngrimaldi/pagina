//Routing
import {
 BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Home from '../pages/Home';
import NotFound from '../pages/Notfound';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Contact from "../components/Contact";
import Layout from "../components/Layout";

function App() {
    return ( 
    <Router>
      <Layout>
        <Routes className="App">
            <Route path="/" element={<Home /> } />
            <Route exact path="about" element={<AboutMe />} />
            <Route exact path="portfolio" element={<Portfolio />} />
            <Route exact path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  
  )
}

export default App;
