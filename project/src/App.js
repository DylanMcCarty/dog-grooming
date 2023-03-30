import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'

export default function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}
