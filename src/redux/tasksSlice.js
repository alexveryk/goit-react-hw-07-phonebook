const tasksSlice = {
  name: 'tasks',
  initialState: {
    item: [],
    isloading: false,
    error: null,
  },
  reducer: {
    fetchingInProgress(state) {
      state.isloading = true;
    },
    fetchingSuccess(state, action) {
      state.isloading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isloading = false;
      state.error = action.payload;
    },
  },
};

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;
