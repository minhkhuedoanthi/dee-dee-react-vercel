import { useMemo } from "react";
import "./Navbar3.css";

const Navbar3 = ({
  rectangleDivPosition,
  rectangleDivTop,
  rectangleDivLeft,
  deeDeeTextDecoration,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      position: rectangleDivPosition,
      top: rectangleDivTop,
      left: rectangleDivLeft,
    };
  }, [rectangleDivPosition, rectangleDivTop, rectangleDivLeft]);

  const deeDeeStyle = useMemo(() => {
    return {
      textDecoration: deeDeeTextDecoration,
    };
  }, [deeDeeTextDecoration]);

  return (
    <div className="rectangle-root" style={rectangleDivStyle}>
      <div className="component-child" />
      <b className="your-database">Your Database</b>
      <b className="add-profile">Add Profile</b>
      <img className="male-user-icon" alt="" src="/male-user@3x.png" />
      <div className="deedee" style={deeDeeStyle}>
        DeeDee.
      </div>
    </div>
  );
};

export default Navbar3;
