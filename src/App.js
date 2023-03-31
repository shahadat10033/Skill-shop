import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Skills from "./Component/Skills";
import Bookmark from "./Component/Bookmark";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="row">
        <Skills></Skills>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
}

export default App;
