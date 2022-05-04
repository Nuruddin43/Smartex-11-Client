import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./smartEx warehouse/Shared/Header/Header";
import Blogs from "./smartEx warehouse/Blogs/Blogs";
import Footer from "./smartEx warehouse/Shared/Footer/Footer";
import Home from "./smartEx warehouse/Homepage/Home/Home";
import ProductDetail from "./smartEx warehouse/ProductDetail/ProductDetail";
import NotFound from "./smartEx warehouse/Shared/NotFound/NotFound";
import Login from "./smartEx warehouse/Login/Login/Login";
import SignUp from "./smartEx warehouse/Login/SignUp/SignUp";
import ProceedCheckout from "./smartEx warehouse/ProceedCheckout/ProceedCheckout";
import ProtectedRoute from "./smartEx warehouse/Login/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/product/:productName/"
          element={<ProductDetail></ProductDetail>}
        ></Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="proceedcheckout"
          element={
            <ProtectedRoute>
              <ProceedCheckout></ProceedCheckout>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
