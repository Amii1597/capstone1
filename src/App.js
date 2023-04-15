
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Select from './Pages/Select';
function App() {
  return (
    <>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Select' element={<Select/>}/>

  </Routes>
    </>
  );
}

export default App;
