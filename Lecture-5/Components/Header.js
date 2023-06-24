// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
      alt="Smoking Burger"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;