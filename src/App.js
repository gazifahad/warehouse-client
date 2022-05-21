import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Components/AddItem/AddItem';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems';
import NotFound from './Components/NotFound/NotFound';
import ReqiureAuth from './Components/RequireAuth/ReqiureAuth';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<ReqiureAuth><Details></Details></ReqiureAuth>}></Route>
        <Route path='/manageitems' element={<ReqiureAuth><ManageItems></ManageItems></ReqiureAuth>}></Route>  
        <Route path='/additem' element={<ReqiureAuth><AddItem></AddItem></ReqiureAuth>}></Route>               
        <Route path='/myitems' element={<ReqiureAuth><MyItems></MyItems></ReqiureAuth>}></Route>               
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>      
    </div>
  );
}

export default App;
