import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTitle } from "../../../app/appSlice";

const StyledTest = styled.div``;

const Test = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitle("Test Lists"));
  }, [dispatch]);

  return (
    <StyledTest>
      <h1>Test</h1>
    </StyledTest>
  );
};

export default Test;
