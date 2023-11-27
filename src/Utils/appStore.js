import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import ticketReducer from "./ticketSlice";
import currentReducer from "./currentSlice";
import { loadState, saveState } from "./localStorage"; // Adjust the path if necessary

const preloadedState = loadState();

const appStore = configureStore({
  reducer: {
    ticket: ticketReducer,
    user: userReducer,
    current: currentReducer,
  },
  preloadedState,
});

appStore.subscribe(() => {
  saveState({
    current: appStore.getState().current,
  });
});

export default appStore;
