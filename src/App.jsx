import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AllMebels from './Components/Home/MebelZakaz/AllBemels';
import Buy from './Components/Home/BuyPage/BuyFirst';
import Shkafbuy from './Components/Home/BuyPage/ShkafBuy';
import Buychild from './Components/Home/BuyPage/Buychild';

function App() {
  return (
    <>

    <Header/>

    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='delivery' element={<AllMebels/>}/>
        <Route path='buy' element={<Buy/>}/>
        <Route path='shkafbuy' element={<Shkafbuy/>}/>
        <Route path='/buychild' element={<Buychild/>}/>
        <Route path='/*' element={"Error"}/>
    </Routes>
    <Footer/>

    </>
  );
}

export default App;
