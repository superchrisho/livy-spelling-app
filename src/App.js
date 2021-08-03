import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const StyledApp = styled.div`
  height: 100vh;
  background: hsl(0, 0%, 98%);
  border-radius: 2rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Body />
        <Footer />
      </StyledApp>
    </Router>
  );
}

export default App;
