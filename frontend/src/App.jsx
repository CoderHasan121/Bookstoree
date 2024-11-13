/* eslint-disable no-unused-vars */
import Home from "./Home/Home.jsx"
import Course from "./Courses/Courses.jsx"
import { Routes,Route, Navigate } from "react-router-dom"
import Signup from "./components/Signup.jsx"
import Contact from "./components/Contact.jsx"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "../src/context/AuthProvider"

function App() {
  const [authUser,setAuthUser]=useAuth([])
  console.log(authUser);

  return (
    <>

    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/course" element={authUser?<Course/>:<Navigate to ="/signup"/>}/>
         <Route path="/Signup" element={<Signup/>}/>
         <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Toaster />

    </>
  )
}

export default App

