import './App.css';
import MyMessages from "./pages/MyMessages";
import MyChat from "./pages/MyChat";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyMessages />} />
        <Route path="/chat" element={<MyChat />} />
      </Routes>
    </div>
  );
}

export default App;
