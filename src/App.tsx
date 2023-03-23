import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomeScreen from './Components/HomeScreen';
import DetailScreen from './Components/DetailScreen';

function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<HomeScreen/>} />
        <Route path='/DetailScreen' element={ <DetailScreen/>} />
     </Routes>
   </Router>
  );
}

export default App;
