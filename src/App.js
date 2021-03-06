import './App.css';
import Navbar from './components/Navbar/Index';
import RouteLink from './components/RouteLink';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg">
      <Navbar />
      <RouteLink />
      <Footer />
    </div>
  );
}

export default App;
