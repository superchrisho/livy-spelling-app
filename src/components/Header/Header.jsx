import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 1rem;
`;

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
    </StyledHeader>
  );
};

export default Header;
