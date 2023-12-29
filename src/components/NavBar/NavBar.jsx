import CartWidget from "./CartWidget";
import "./NavBAr.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar" className="navbar">
      <div className="baner">
        <Link to="/" className="title">A la Par</Link>
      </div>
      <ul>
        <li>
          <Link to="/categorias/hombre">HOMBRE</Link>
        </li>
        <li>
          <Link to="/categorias/mujer">MUJER</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
