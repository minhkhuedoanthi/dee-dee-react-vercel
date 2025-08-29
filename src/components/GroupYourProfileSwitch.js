import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./GroupYourProfileSwitch.css";

const GroupYourProfileSwitch = ({
  group448Href,
  scanProfile,
  yourProfile,
  propLeft,
  propLeft1,
}) => {
  const groupA1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className="group-yourprofileswitch">
      <div className="toggle-wrapper">
        <div className="toggle-wrapper">
          <div className="toggle-child" />
          <Link
            className="scan-profile-wrapper"
            to={group448Href}
            style={groupA1Style}
          >
            <b className="scan-profile">{scanProfile}</b>
          </Link>
          <div className="group-div" style={groupDivStyle}>
            <div className="group-child1" />
            <b className="your-profile">{yourProfile}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupYourProfileSwitch;
