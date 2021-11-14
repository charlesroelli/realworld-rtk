import React from 'react';
import './App.css';
import { Home } from './features/pages/Home';
import { Navbar } from './features/pages/Navbar';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './features/pages/Login';
import { Profile } from './features/profile/Profile';
import { Settings } from './features/settings/Settings';
import { CreateArticle } from './features/article/CreateArticle';
import { Article } from './features/article/Article';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/create" element={<CreateArticle/>} />
          <Route path="/article" element={<Article/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
