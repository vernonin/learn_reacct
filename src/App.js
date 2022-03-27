import { BrowserRouter } from 'react-router-dom'
import Demo from './components/Demo'
// import RouterV5 from './components/RouterV5'
import Count from './components/Count'

import './App.css'

function App() {
  return (
    <div className="App">
      <Demo info={'I am App, is your father.'}>solt</Demo>
      <Count/>
    </div>
  );
}

export default App;
