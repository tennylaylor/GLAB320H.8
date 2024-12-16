import "./App.css";
import Nav from "./components/nav";
// Import Route and our components
import { Route, Routes } from "react-router";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/price/:symbol" element={<Price />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
