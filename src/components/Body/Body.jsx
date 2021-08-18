import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "../Body/pages/Home";
import Test from "../Body/pages/Test";
import Achievements from "../Body/pages/Achievements";
import Account from "../Body/pages/Account";

const StyledBody = styled.div`
  width: 100%;
  padding: 1rem;
  
`;

const Body = () => {
  return (
    <StyledBody>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/achievements">
          <Achievements />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </StyledBody>
  );
};

export default Body;
