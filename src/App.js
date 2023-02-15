import "./App.css";
import Mensaje from "./Mensaje";

function App() {
  const a = 3;
  const b = 2;

  return (
    <div className="App">
      <Mensaje color="red" message="estamos trabajando en un curso" />
      <h1> Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es: </p>
        {a + b}
      </div>
    </div>
  );
}

export default App;
