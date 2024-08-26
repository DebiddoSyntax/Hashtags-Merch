import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import HomePage from './Mainpages/HomePage';
import StorePage from './Mainpages/StorePage';
import ContactUs from './Mainpages/ContactUs';
import Cart from './Components/Cart';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;