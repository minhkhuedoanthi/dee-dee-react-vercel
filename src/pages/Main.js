import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Main.css";

const Main = () => {
  return (

    <div className="main-1" >
      <Navbar />
      <div className="we-make-parent">
        <h1 className="we-make">{`We make  `}</h1>
        <h1 className="so-much-easier">so much easier.</h1>
        <h1 className="networking">{`networking `}</h1>
      </div>
      <h3 className="simply-upload-a">
        Simply upload a LinkedIn profile you're interested in. Our tool will
        identify similarities, uncover intriguing facts, and generate a
        personalized email to spark a meaningful connection. Start building
        stronger professional relationships today!
      </h3>
      <Link className="buy-button" to="/login">
        <div className="buy-button-child" />
        <Link className="starts-now" to="/sender-input">
          Starts now!
        </Link>
      </Link>
      
    </div>
  );
};

export default Main;
