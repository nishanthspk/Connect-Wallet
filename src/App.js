import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />  {/* Include Navbar here */}
      
    </Router>
    </div>
  );
}

export default App;
