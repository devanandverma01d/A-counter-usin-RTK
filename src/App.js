import './App.css';
import { AddSub } from './features/AddSub/AddSub';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Page1 />}/>
          <Route path='/page1' element={<Page1 />}/>
          <Route path='/page2' element={<Page2 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
