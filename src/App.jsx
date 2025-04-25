import Navbar from './components/Navbar';
import Home from './assets/pages/Home';
import Contact from './assets/pages/Contact';
import Footer from './components/Footer'; // Fixed typo
import './index.css'; // Ensure this is the correct path to your CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;