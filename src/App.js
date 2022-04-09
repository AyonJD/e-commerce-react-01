import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Components/LogIn/LogIn';
import Navbar from './Components/Navbar/Navbar';
import Order from './Components/Order/Order';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order-review' element={<Order></Order>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
