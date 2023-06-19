import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -Resturant Container
 *    -Resturant Card
 * Footer
 *  -Copyright
 *  -Links
 *  -Adddress
 *  -Contact
 **/

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        alt="Food Logo"
      />
    </div>
  );
};

const AppLayout = () => {
  return <div className="app">//Header //Body //Footer</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
