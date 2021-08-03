import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateTitle } from "../../../app/appSlice";

const StyledHome = styled.div``;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle("Elivia's Spelling Tester"));
  }, [dispatch]);

  return (
    <StyledHome>
      <h1>Home</h1>
    </StyledHome>
  );
};

export default Home;
