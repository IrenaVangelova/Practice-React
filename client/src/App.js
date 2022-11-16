import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import './App.css';
import AllPosts from "./components/AllPosts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllPosts />
    </div>
  );
}

export default App;
