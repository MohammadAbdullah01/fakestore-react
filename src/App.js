import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import AllProducts from './components/AllProducts/AllProducts';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className='text-center my-2'>My super duper fake store !!</h1>
      <Navbar count={count}></Navbar>
      <AllProducts setCount={setCount} count={count}></AllProducts>
    </div>
  )
}

export default App;
