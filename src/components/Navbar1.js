import { Link } from "react-router-dom";
import "./Navbar1.css";

const Navbar1 = ({ addProfileHref }) => {
  return (
    <div className="rectangle-div">
      <div className="instance-item" />
      <b className="your-database2">Your Database</b>
      <Link className="add-profile2" to={addProfileHref}>
        Add Profile
      </Link>
      <img className="male-user-icon1" alt="" src="/male-user@3x.png" />
      <Link className="deedee2" to="/">
        DeeDee.
      </Link>
    </div>
  );
};

export default Navbar1;
