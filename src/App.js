import './App.css';
import './components/cart.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar/Index';
import RouteLink from './components/RouteLink';

function App() {
  return (
    <div>
      <Navbar />
      <RouteLink />
      <Cart />
    </div>
  );
}

export default App;
