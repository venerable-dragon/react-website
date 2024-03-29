import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { NavbarStyle, MobileView } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  // for open/close mobile menu
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
    // return burgerOpen;
  };

  return (
    <div className="navbar-wrapper">
      <NavbarStyle>
        <Link to="/" onClick={toggleBurger}>
          HOME
        </Link>
        <Link to="/membership" onClick={toggleBurger}>
          MEMBERSHIP
        </Link>
        <Link to="/magazine" onClick={toggleBurger}>
          MAGAZINE
        </Link>
        <Link to="/about" onClick={toggleBurger}>
          ABOUT
        </Link>
        <Link to="/event" onClick={toggleBurger}>
          EVENT
        </Link>
        <Link to="/contact" onClick={toggleBurger}>
          CONTACT
        </Link>
      </NavbarStyle>

      <MobileView>
        <div className="burgermenu-toggle" onClick={toggleBurger}>
          <BurgerMenu />
        </div>
      </MobileView>

      <style jsx>
        {`
          @media (max-width: 550px) {
            .navbar-wrapper > div > a {
              display: ${burgerOpen ? "inline" : "none"};
              background-color: black;
            }
          }
        `}
      </style>
    </div>
  );
};

export { Navbar };
