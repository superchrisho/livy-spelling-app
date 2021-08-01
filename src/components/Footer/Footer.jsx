import styled from "styled-components";
import PenIcon from "../../assets/pen.png";
import HomeIcon from "../../assets/home.png";
import TrophyIcon from "../../assets/trophy.png";
import LockIcon from "../../assets/doorknob.png";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  .icon {
    width: 5rem;
    height: 5rem;
  }

  .penIconContainer {
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <img src={HomeIcon} alt="Home" className="icon" />
      </Link>
      <Link to="/test">
        <img src={PenIcon} alt="Test" className="icon" />
      </Link>
      <Link to="/achievements">
        <img src={TrophyIcon} alt="Achievements" className="icon" />
      </Link>
      <Link to="/account">
        <img src={LockIcon} alt="Account" className="icon" />
      </Link>
    </StyledFooter>
  );
};

export default Footer;
