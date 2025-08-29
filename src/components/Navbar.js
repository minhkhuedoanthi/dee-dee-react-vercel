import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="rectangle-container">
      <nav className="instance-child" id="navbar" />
      <a className="your-database1">Your Database</a>
      <Link className="add-profile1" to="/sender-input">
        Add Profile
      </Link>
      <Link className="male-user" to="/login" />
      <button className="deedee1">DeeDee.</button>
    </div>
  );
};

export default Navbar;
