import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <Router>
      
        <Header />
        <main className='py-2'><Container>
          <Routes>
          <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
          </Routes>
            

          
            </Container></main>
        <Footer />
    </Router>
    
  );
}

export default App;
