import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTitle } from "../../../app/appSlice";

const StyledAchievements = styled.div``;

const Achievements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle("Achievements page"));
  }, [dispatch]);

  return (
    <StyledAchievements>
      <h1>Achievements</h1>
    </StyledAchievements>
  );
};

export default Achievements;
