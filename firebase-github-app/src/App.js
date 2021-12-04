import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebse
import {initializeApp} from "firebase/app";
import "firebase/auth";

//components
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin";
import SignUp from "./Pages/Signup";
import PAgeNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import FirebaseConfig from "./Config/FirebaseConfig";


//initionalizatio of firebase
initializeApp(FirebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PAgeNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
