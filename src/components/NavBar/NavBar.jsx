import CartWidget from "./CartWidget";
import "./NavBAr.scss";

const NavBar = () => {
  return (
    <div id="navbar" className="navbar">
      <div className="baner">
        <p className="title">A la Par</p>
      </div>
      <ul>
        <li>
          <a href="">INICIO</a>
        </li>
        <li>
          <a href="">HOMBRE</a>
        </li>
        <li>
          <a href="">MUJER</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
