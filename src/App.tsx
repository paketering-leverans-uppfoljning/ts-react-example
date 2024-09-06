import Greeting from "./components/Greeting";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>Vite React App</h1>
      <Greeting name="John" lastName="Doeson" />
      <Todo />
    </div>
  );
}

export default App;
