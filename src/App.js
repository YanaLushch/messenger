import './App.css';
import MyChats from "./pages/MyChats";
import MyChat from "./pages/MyChat";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyChats />} />
        <Route path="/chat" element={<MyChat />} />
      </Routes>
    </div>
  );
}

export default App;
