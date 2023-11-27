// saveState.js
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // Log errors here, or handle them as you wish
      console.error('Save state failed: ', err);
    }
  };

  
  // loadState.js
export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined; // No state saved in localStorage
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined; // Errors could occur if the data is corrupt or not serializable
    }
  };
  