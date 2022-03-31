import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Order from './Components/Order/Order';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/order-review' element={<Order></Order>}></Route>
      </Routes>
    </div>
  );
}

export default App;
