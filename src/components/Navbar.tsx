import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <nav>
        <h3>
          <Link to="/">My Brand</Link>
        </h3>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
