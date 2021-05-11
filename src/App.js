import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Index';
import RouteLink from './components/RouteLink';

function App() {
  return (
    <div>
      <Navbar />
      <RouteLink />
    </div>
  );
}

export default App;
