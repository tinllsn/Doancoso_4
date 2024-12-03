import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    open: false,
    severity: null,
    message: null,
  },
  sidebar: {
    open: false,
    type: "CONTACT",
  },
  
  
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //toggle sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  
    openSnackBar(state, action) {
      console.log(action.payload);
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackBar(state) {
      console.log("This is getting executed");
      state.snackbar.open = false;
      state.snackbar.severity = null;
      state.snackbar.message = null;
    },
    
  },
});

//Reducer
export default slice.reducer;

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
}
export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}

// export function showSnackbar({ severity, message }) {
//   return async (dispatch, getState) => {
//     dispatch(
//       slice.actions.openSnackBar({
//         message,
//         severity,
//       })
//     );

//     setTimeout(() => {
//       dispatch(slice.actions.closeSnackBar());
//     }, 4000);
//   };
// }
let timeoutId;

export function showSnackbar({ severity, message }) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackBar({
        message,
        severity,
      })
    );

    if (timeoutId) {
      clearTimeout(timeoutId); // Xóa timeout cũ nếu đang tồn tại
    }

    timeoutId = setTimeout(() => {
      dispatch(slice.actions.closeSnackBar());
    }, 4000);
  };
}


export const closeSnackBar = () => async (dispatch, getState) => {
  dispatch(slice.actions.closeSnackBar());
};
