import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import {  Tool, File, User, WelcomePage, NotFound404, Feed, UploadSongs } from "./Pages";
import { TopNav } from './Components/TopNav/TopNav';
import { BottomNav } from "./Components/BottomNav/BottomNav";
import { Login, Signup } from './Components';
import { LoginError } from './Components/LoginError';


function Main() {
  const location = useLocation();
  const isPublicRoute = ['/', '/welcomepage', '/login', '/signup'].includes(location.pathname.toLowerCase());
  const token = localStorage.getItem("token");
  const [showAlert, setShowAlert] = useState(false);

  // Effect to show alert when user is already logged in and tries to access public routes
  useEffect(() => {
    if (token && isPublicRoute) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [token, isPublicRoute]);

  // Redirect to home if user is already logged in and tries to access public routes
  if (token && isPublicRoute) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      {!isPublicRoute && !token && <LoginError />}
      {!isPublicRoute && token && (
        <div className="top-nav">
          <TopNav />
        </div>
      )}
      {showAlert && (
        <div className="alert alert-warning" role="alert">
          You are already logged in.
        </div>
      )}
      <div className="content">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcomepage" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {token && (
            <>
              <Route path="/feed" element={<Feed />} />
              <Route path="/tool" element={<Tool />} />
              <Route path="/uploadsongs" element={<UploadSongs />} />
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
