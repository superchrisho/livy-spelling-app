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

const StyledHome = styled.div`
  width: 100%;
`;

const Home = () => {
  const dispatch = useDispatch();
  const Lists = useSelector(selectList);
  const isListLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(setLists(MOCK_DATA));
    dispatch(updateTitle("Elivia's Spelling Tester"));
    dispatch(setIsLoading(false));
  }, [Lists, dispatch]);

  // const columns = [
  //   { field: "id", headerName: "id", width: 90 },
  //   {
  //     field: "title",
  //     headerName: "Title",
  //     width: 150,
  //   },
  //   {
  //     field: "date",
  //     headerName: "Date",
  //     width: 100,
  //   },
  // ];

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  console.log(Lists);

  return (
    <StyledHome>
      <h1>Home</h1>
      {isListLoading ? (
        <CircularProgress />
      ) : (
        // <DataGrid columns={columns} rows={Lists} checkboxSelection />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      )}
    </StyledHome>
  );
};

export default Home;
