import "./App.scss";
import Default from "./components/Default";
import Task from "./components/Task";
import Form from "./components/Form";
import { useSelector } from "react-redux";

function App() {
  const allTasks = useSelector((state) => state);
  return (
    <div className="App">
      <h1 className="heading">Todo</h1>

      {allTasks.length ? (
        <div className="container">
          <Task />
        </div>
      ) : (
        <Default />
      )}
      <Form />
    </div>
  );
}

export default App;
