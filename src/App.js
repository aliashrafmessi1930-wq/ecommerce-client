import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ScrollToTop from "./ui/ScrollToTop"; // 👈 استيراد المكون الجديد
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import Success from "./ui/Success";
import Orders from "./ui/Orders";
import Blog from "./ui/Blog";
import CategoryFilters from "./ui/CategoryFilters";
import Category from "./pages/Category";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 هنا هيشتغل في كل تغيير للصفحة */}
      <Layout>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />
<Route path="/cart" element={<Cart/>}/>
<Route path="/favorite" element={<Favorite/>}/>
<Route path="/profile" element={<Profile/>}/>
          {/* صفحة المنتج الفردي */}
          <Route path="/product" element={<Product />} />
         <Route path="/product/:id" element={<Product />} />
         <Route path="/category/:id" element={<Category />} />
          <Route path="/success" element={<Success/>}/>
          <Route path="/orders" element={<Orders/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
