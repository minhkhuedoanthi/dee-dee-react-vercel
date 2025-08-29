import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./NextButton.css";

const NextButton = ({ group1490Href, next, buyButtonTop, buyButtonLeft }) => {
  const groupAStyle = useMemo(() => {
    return {
      top: buyButtonTop,
      left: buyButtonLeft,
    };
  }, [buyButtonTop, buyButtonLeft]);

  return (
    <Link
      className="buy-button-container"
      to={group1490Href}
      style={groupAStyle}
    >
      <div className="buy-button2">
        <div className="buy-button-inner" />
        <b className="next">{next}</b>
      </div>
    </Link>
  );
};

export default NextButton;
