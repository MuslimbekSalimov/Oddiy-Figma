import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <>

    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='*' element={"Error"}/>
    </Routes>

    </>
  );
}

export default App;
