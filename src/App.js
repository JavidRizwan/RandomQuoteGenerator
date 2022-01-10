import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuoteBox from "./components/QuoteBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Nav>
        <Header className="header" />
      </Nav>
      <QuoteBox />
      <Nav>
        <Footer className="footer" />
      </Nav>
    </div>
  );
}

export default App;
