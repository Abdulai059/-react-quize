import { useEffect, useReducer } from "react";
import Header from "./component.jsx/Header";
import Main from "./component.jsx/Main";

// Initial state
const initialization = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialization);

  // Reducer
  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "data Failed":
        return {
          ...state,
          status: "error",
        };

      default:
        throw new Error("Action unknown");
    }
  }

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFiled" }));
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
