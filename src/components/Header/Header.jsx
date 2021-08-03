import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledHeader = styled.div`
  padding: 1rem;
`;

const Header = () => {
  const title = useSelector((state) => state.app.title);

  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  );
};

export default Header;
