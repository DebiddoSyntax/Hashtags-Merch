import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import HomePage from './Mainpages/HomePage';
import StorePage from './Mainpages/StorePage';
import ContactUs from './Mainpages/ContactUs';
import Cart from './Mainpages/Cart';
import Productpage from './Mainpages/Productpage';


function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productpage" element={<Productpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;