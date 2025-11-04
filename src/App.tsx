import "./App.css";
import Battle from "./components/Battle";

function App() {
  interface User {
    name: string;
    age: number;
  }

  const anson: User = {
    name: "Anson",
    age: 10,
  };
  return (
    <>
      <div>
        <h1>
          {anson.name} is {anson.age} years old
        </h1>
        <Battle />
      </div>
    </>
  );
}

export default App;
