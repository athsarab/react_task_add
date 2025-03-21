import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    
    <div className="App">
      <header className="App-header">

        <h1>React Task Add</h1>
        <button className = "user-botton" onClick={() => navigate('/useres')}> users </button>
      </header>
    </div>
  );  
}

export default App;
   