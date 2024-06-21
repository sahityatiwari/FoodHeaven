import "./App.css"
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import AdminLogin from './components/AdminLogin.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import About from "./components/about";
import Qualities from "./components/Qualities";
import Team from "./components/Team";
import Reservation from "./components/Reservation";
import Menu from "./components/Menu";
import Mainpage from "./components/mainpage";
import ReservationList from './components/ReservationList';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/success"  element={<Success />}/>
        <Route path="/"  element={<NotFound />}/>
        <Route path="/about"  element={<About />}/>
        <Route path="/Qualities"  element={<Qualities />}/>
        <Route path="/mainpage"  element={<Mainpage />}/>
        <Route path="/team" element={<Team />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservationlist" element={<ReservationList />} /> 
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;



























// import React from 'react';
// import AdminLogin from './components/AdminLogin.jsx';
// import AdminDashboard from './components/AdminDashboard.jsx';
// import './App.css'; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Success from './pages/Success';
// import NotFound from './pages/NotFound';
// import About from './components/about';
// import Qualities from './components/Qualities';
// import Team from './components/Team';
// import Reservation from './components/Reservation';
// import Menu from './components/Menu';
// import Mainpage from './components/mainpage.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/success" element={<Success />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/qualities" element={<Qualities />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/mainpage" element={<Mainpage />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
