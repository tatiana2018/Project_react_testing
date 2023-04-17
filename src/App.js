import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <label >El valor actual es {count}</label>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  
  );
}

export default App;
