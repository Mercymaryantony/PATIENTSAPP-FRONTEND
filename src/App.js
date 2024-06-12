
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/view' element={<View/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
