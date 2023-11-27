import React from 'react';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import './App.css'; 
import KanbanBoard from "./Components/KanbanBoard" 
import Navbar from './Components/Navbar';

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <main>
        <Navbar />
        <KanbanBoard /> 
      </main>
    </div>
    </Provider>
  );
}

export default App;
