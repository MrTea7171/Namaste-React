import UserIcon from "./user.png";
export const Navbar = () => {
  const divStyle = {
    backgroundColor: "white",
    color: "black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
  };

  const LogoStyle = {
    color: "black",
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const SearchStyle = {
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#f7f7f7",
  };

  return (
    <div style={divStyle}>
      <div style={LogoStyle}>
        <h2>DOLO.</h2>
      </div>
      <div>
        <input type="text" placeholder="search" style={SearchStyle} />
      </div>
      <div>
        <img src={UserIcon} alt="placeholder" />
      </div>
    </div>
  );
};
