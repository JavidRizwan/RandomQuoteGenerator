import "./App.scss";
import QuoteBox from "./components/QuoteBox";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1 id="header" className="row justify-content-center">
        Random Quote Generator
      </h1>
      <QuoteBox />
      <p id="footer" className="row justify-content-center">
        Made with ❤️
      </p>
    </div>
  );
}

export default App;
