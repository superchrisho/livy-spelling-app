import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateTitle, updateSelectedLists } from "../../../app/appSlice";
import {
  setLists,
  setIsLoading,
  selectList,
  selectIsLoading,
} from "../../../app/wordsSlice";
import MOCK_DATA from "../../../MOCK_DATA";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  columnHeader: {
    fontSize: 16,
  },
  cell: {
    fontSize: 16,
  },
});

const StyledHome = styled.div`
  width: 100%;
`;

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const Lists = useSelector(selectList);
  const isListLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(setLists(MOCK_DATA));
    dispatch(updateTitle("Elivia's Spelling Tester"));
    dispatch(setIsLoading(false));
  }, [Lists, dispatch]);

  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      minWidth: 30,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 30,
      flex: 0.5,
    },
  ];

  const rows = Lists;

  console.log(Lists);

  return (
    <StyledHome>
      <h1>Home</h1>
      <div style={{ padding: "2rem" }}>
        <DataGrid
          classes={{
            columnHeader: classes.columnHeader,
            cell: classes.cell,
          }}
          loading={isListLoading}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight
          autoPageSize
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(obj) => dispatch(updateSelectedLists(obj))}
        />
      </div>
    </StyledHome>
  );
};

export default Home;
