import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Skills from "./Component/Skills";
import Bookmark from "./Component/Bookmark";
import Blog from "./Component/Blog";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <div className="row">
        <Skills></Skills>
        <Bookmark></Bookmark>
        <Blog></Blog>
      </div>
    </div>
  );
}

export default App;
