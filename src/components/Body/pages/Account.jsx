import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTitle } from "../../../app/appSlice";

const StyledAccount = styled.div``;

const Account = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle("Account Settings"));
  }, [dispatch]);

  return (
    <StyledAccount>
      <h1>Account</h1>
    </StyledAccount>
  );
};

export default Account;
