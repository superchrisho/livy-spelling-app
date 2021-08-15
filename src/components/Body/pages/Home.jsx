import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateTitle } from "../../../app/appSlice";
import {
  setLists,
  setIsLoading,
  selectList,
  selectIsLoading,
} from "../../../app/wordsSlice";
import MOCK_DATA from "../../../MOCK_DATA";
import CircularProgress from "@material-ui/core/CircularProgress";
import { DataGrid } from "@material-ui/data-grid";

const StyledHome = styled.div``;

const Home = () => {
  const dispatch = useDispatch();
  const Lists = useSelector(selectList);
  const isListLoading = useSelector(selectIsLoading);
  console.log(isListLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(setLists(MOCK_DATA));
    dispatch(updateTitle("Elivia's Spelling Tester"));
    dispatch(setIsLoading(false));
  }, [Lists, dispatch]);

  const columns = [
    { field: "id", headerName: "id", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      width: 100,
    },
  ];

  console.log(rows);

  return (
    <StyledHome>
      <h1>Home</h1>
      {isListLoading ? (
        <CircularProgress />
      ) : (
        <DataGrid columns={columns} rows={Lists} checkboxSelection />
      )}
    </StyledHome>
  );
};

export default Home;
