import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Create from "./create";
import Edit from "./edit";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/create" Component={Create} />
          <Route path="/edit/:id" Component={Edit} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
