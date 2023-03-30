import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light mt-2 mx-2 mb-2 shadow-lg">
      <div class="container-fluid">
        <a class="navbar-brand" id="Logo">Holly Newton</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarText">
        <div class="row d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-end">
            <li class="nav-item">
              <Link to={''} class="nav-link" aria-current="page" href="#">Home</Link>
            </li>
            <li class="nav-item">
              <Link to={'pricing'} class="nav-link" href="#">Pricing</Link>
            </li>
            <li class="nav-item">
              <Link to={'contactme'} class="nav-link" href="#">Contact Me</Link>
            </li>
            <li class="nav-item">
              <Link to={'aboutme'} class="nav-link" href="#">About Me</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}


