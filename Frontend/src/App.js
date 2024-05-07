import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './screen/Home';
import Login from './screen/Login';
import SignUp from './screen/SignUp';
import AddProduct from './screen/AddProduct';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/addproduct' element={<AddProduct/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
