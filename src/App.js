import './App.css';
import MyMessages from "./pages/MyMessages/MyMessages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyMessages />} />
      </Routes>
    </div>
  );
}

export default App;
