import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./smartEx warehouse/Shared/Header/Header";
import Blogs from "./smartEx warehouse/Blogs/Blogs";
import Footer from "./smartEx warehouse/Shared/Footer/Footer";
import Home from "./smartEx warehouse/Homepage/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
