import { useEffect } from "react";
import Header from "./component.jsx/Header";
import Main from "./component.jsx/Main";

function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}
export default App;
