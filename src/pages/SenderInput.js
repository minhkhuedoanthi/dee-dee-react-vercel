import NextButton from "../components/NextButton";
import Navbar1 from "../components/Navbar1";
import GroupYourProfileSwitch from "../components/GroupYourProfileSwitch";
import "./SenderInput.css";

const SenderInput = () => {
  return (
    <div className="sender-input">
      <NextButton group1490Href="/receiver-input" next="Next" />
      <Navbar1 />
      <GroupYourProfileSwitch
        group448Href="/receiver-input"
        scanProfile="Scan Profile"
        yourProfile="Your Profile"
      />
      <textarea
        className="group-yoururlinput"
        placeholder="Your LinkedIn URL"
      />
      <div className="text">
        <div className="resume-upload">Resume Upload</div>
      </div>
      <img className="sender-input-child" alt="" src="/rectangle-4.svg" />
      <input className="sender-input-item" type="file" />
    </div>
  );
};

export default SenderInput;
