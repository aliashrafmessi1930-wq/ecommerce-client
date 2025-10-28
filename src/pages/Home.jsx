import React from "react";
import BannerCategories from "../ui/BannerCategories";
import HomeBanner from "../ui/HomeBanner";
import Highlights from "../ui/Highlights";
import Categories from "../ui/Categories";
import ProductList from "../ui/ProductList";
import DiscountedBanner from "../ui/DiscountedBanner";
import Blog from "../ui/Blog";

const Home = () => {
  return (
    <>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />
      <ProductList />
      <DiscountedBanner />
      <Blog />
    </>
  );
};

export default Home;
