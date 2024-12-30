import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componet/login";
import Home from "./componet/home";
import Signup from "./componet/signup";
import AddTask from "./componet/Addtask";
function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
    
    <Route path="/dashboard" element={<Home/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
