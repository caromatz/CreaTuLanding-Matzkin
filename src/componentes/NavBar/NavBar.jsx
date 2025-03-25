// NavBar.jsx
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <header>
      <nav>
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li>Maquillajes</li>
          <li>Cremas</li>
          <li>Jabones</li>
          <li>Velas</li>
        </ul>
      </nav>

      <div className="cart-widget-container">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
