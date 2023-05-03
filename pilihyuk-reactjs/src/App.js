import React from "react";
import AppRouter from "./routers/AppRouter";
import Navbar from "./components/Layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
