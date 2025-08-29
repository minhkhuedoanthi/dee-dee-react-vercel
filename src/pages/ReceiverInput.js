import { Link } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import GroupYourProfileSwitch from "../components/GroupYourProfileSwitch";
import NextButton from "../components/NextButton";
import "./ReceiverInput.css";

const ReceiverInput = () => {
  return (
    <div className="receiver-input">
      <Navbar3
        rectangleDivPosition="absolute"
        rectangleDivTop="0px"
        rectangleDivLeft="0px"
        deeDeeTextDecoration="none"
      />
      <GroupYourProfileSwitch
        group448Href="/sender-input"
        scanProfile="Your Profile"
        yourProfile="Scan Profile"
        propLeft="76px"
        propLeft1="214px"
      />
      <textarea
        className="group-receiverurl"
        placeholder="Receiver’s LinkedIn URL"
      />
      <Link className="receiver-input-inner" to="/result-page">
        <NextButton
          group1490Href="/result-page"
          next="Submit"
          buyButtonTop="0px"
          buyButtonLeft="0px"
        />
      </Link>
    </div>
  );
};

export default ReceiverInput;
