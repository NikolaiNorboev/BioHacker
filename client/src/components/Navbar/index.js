import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

export default function Nav() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  console.log(isAuthenticated, username);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand mb-0 h1" href="#">
        Bio-hacker
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="program">
              Program
            </a>
          </li>
          <li>
            <a className="nav-link" href="/quest">
              Quest
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {isAuthenticated && (
            <>
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-person-circle"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fill-rule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
              <span class="navbar-text mx-2">{username}</span>
              <button className="btn btn-success my-2 my-sm-0" href="logout">
                logout
              </button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <button className="btn btn-success my-2 my-sm-0" href="signup">
                Register
              </button>
              <button className="btn btn-success my-2 my-sm-0" href="login">
                login
              </button>
            </>
          )}
        </form>
      </div>
    </nav>
  );
}
