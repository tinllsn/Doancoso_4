// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ThemeSettings from "./components/settings";
import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { closeSnackBar } from "./redux/slices/app";

const vertical = "bottom";
const horizontal = "center";

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

function App() {
  const dispatch = useDispatch();

  const { open, message, severity } = useSelector((state) => state.app.snackbar);

  // const { open, message, severity } = useSelector(
  //   (state) => console.log(state.app) 
  // );
  // const store = useStore();

  // console.log(store.dispatch);
  // // console.log(open);
  // // console.log(severity);

  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          {" "}
          <Router />{" "}
        </ThemeSettings>
      </ThemeProvider>

      {/* {message && open ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          key={vertical + horizontal}
          onClose={() => {
            console.log("This is clicked");
            dispatch(closeSnackBar());
          }}
        >
          <Alert
            onClose={() => {
              console.log("This is clicked");
              dispatch(closeSnackBar());
            }}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )} */}
      {open && message && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          autoHideDuration={4000}
          onClose={() => dispatch(closeSnackBar())}
        >
          <Alert
            onClose={() => dispatch(closeSnackBar())}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
      
    </>
  );
}

export default App;
