import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Select from './Pages/Select';
import Homepage from './Pages/Homepage';
import Movie from './Pages/Movie';
function App() {
  return (
    <>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Select' element={<Select/>}/>
<Route path='/Homepage' element={<Homepage/>}/>
<Route path='/Movie' element={<Movie/>}/>
  </Routes>
    </>
  );
}

export default App;
