import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import ticketReducer from './ticketSlice';
import currentReducer from './currentSlice';
import { loadState, saveState } from './localStorage'; // Adjust the path if necessary

// Load any saved state
const preloadedState = loadState();

const appStore = configureStore({
  reducer: {
    ticket: ticketReducer,
    user: userReducer,
    current: currentReducer,
  },
  preloadedState, // Use the loaded state as the initial state
});

// Subscribe to store changes and save the state to localStorage
appStore.subscribe(() => {
  saveState({
    // You might only want to save specific parts of your state
    current: appStore.getState().current,
  });
});

export default appStore;
