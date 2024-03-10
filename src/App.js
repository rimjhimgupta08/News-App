import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<News key="general" country = "in" category="general"/>}/>
        <Route path='/general' element={<News key="general" country = "in" category="general"/>}/>
        <Route path='/sports' element={<News key="sports" country = "in" category="sports"/>}/>
        <Route path='/entertainment' element={<News  key="entertainment" country = "in" category="entertainment"/>}/>
        <Route path='/business' element={<News key="business"  country = "in" category="business"/>}/>
        <Route path='/health' element={<News key="health" country = "in" category="health"/>}/>
        <Route path='/science' element={<News key="science" country = "in" category="science"/>}/>
        <Route path='/technology' element={<News key="technology"  country = "in" category="technology"/>}/>
        

      </Routes>
      
        {/* <News  country = "in" category="sports"/> */}
      </BrowserRouter>
        
      </>
    );
  }
}

export default App;

