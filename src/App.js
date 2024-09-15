import CardComponent from "./components/CardComponent";
import NavbarComponent from "./components/NavbarComponent";
import './index.scss';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CardComponent price={500}/>
    </div>
  );
}

export default App;
