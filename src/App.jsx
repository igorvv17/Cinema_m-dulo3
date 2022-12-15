import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <h2>Cinema M3</h2>
      <Outlet />
    </div>
  )
}

export default App
