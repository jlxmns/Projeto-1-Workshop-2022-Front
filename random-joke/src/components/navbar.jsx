import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {

  return (
    <Fragment>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Chuck Norris Facts</Link>
          </li>
          <li>
            <Link to="/dadJoke">Dad Joke</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;