import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QuestionsProvider } from './context/Questions';
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <QuestionsProvider>
        <Routes />
      </QuestionsProvider>
    </BrowserRouter>
  );
}

export default App;
