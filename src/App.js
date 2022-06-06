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
import AddProduct from "./smartEx warehouse/AddProduct/AddProduct";
import ManageInventories from "./smartEx warehouse/ManageInventories/ManageInventories";
import Allitem from "./smartEx warehouse/Allitem/Allitem";
import MyItem from "./smartEx warehouse/MyItem/MyItem";
import Order from "./smartEx warehouse/Order/Order";
import About from "./smartEx warehouse/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/product/:productId"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/allitem" element={<Allitem></Allitem>}></Route>
        <Route path="/myitem" element={<MyItem></MyItem>}></Route>

        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/proceedcheckout/:productId"
          element={
            <ProtectedRoute>
              <ProceedCheckout></ProceedCheckout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/addproduct"
          element={
            <ProtectedRoute>
              <AddProduct></AddProduct>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <ProtectedRoute>
              <ManageInventories></ManageInventories>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Order></Order>
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
