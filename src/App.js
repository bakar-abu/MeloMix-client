import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Home, Tool, Appstore, File, User, WelcomePage, NotFound404 } from "./Pages";
import { TopNav } from './Components/TopNav/TopNav';
import { BottomNav } from "./Components/BottomNav/BottomNav";
import { Login, Signup } from './Components';
import {LoginError} from './Components/LoginError';

function Main() {
  const location = useLocation();
  const isPublicRoute = ['/', '/welcomepage', '/login', '/signup'].includes(location.pathname.toLowerCase());
  const token = localStorage.getItem("token");

  return (
    <>
      {!isPublicRoute && !token && <LoginError />}
      {!isPublicRoute && token && (
        <div className="top-nav">
          <TopNav />
        </div>
      )}
      <div className="content">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {token && !isPublicRoute && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/tool" element={<Tool />} />
              <Route path="/appstore" element={<Appstore />} />
              <Route path="/file" element={<File />} />
              <Route path="/user" element={<User />} />
            </>
          )}
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
      {!isPublicRoute && token && (
        <div className="bottom-nav">
          <BottomNav />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <div className="App w-full flex flex-col justify-start">
      <Router>
        <Main /> 
      </Router>
    </div>
  );
}

export default App;
