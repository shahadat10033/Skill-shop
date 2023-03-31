import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Skills from "./Component/Skills";
import Blog from "./Component/Blog";

function App() {
  return (
    <div className="container">
      <Header></Header>

      <Skills></Skills>

      <Blog></Blog>
    </div>
  );
}

export default App;
