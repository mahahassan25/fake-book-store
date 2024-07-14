
import { Route,Routes } from "react-router-dom";
import Gallary from "./layout/Gallary";
import Header from "./layout/Header";
import Header2 from "./layout/Header2";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./layout/Footer";
function App() {
  return (
   <div>
    <Header/>
    <hr></hr>
    <Header2/>
    <Navbar/>
    <hr/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="login" element={<Login/>}/>
      <Route path="authors" element={<Authors/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="register" element={<Register/>}/>
      
   </Routes>
   <Footer/>
   </div>
  );
}

export default App;
