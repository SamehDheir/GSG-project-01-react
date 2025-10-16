import { useEffect } from "react";

import CategoriesMenu from "../../components/CategoriesMenu";
import SliderImage from "../../components/SliderImage";
import Categories from "../../components/Categories";
import OfferDay from "../../components/OfferDay";
import OfferMonth from "../../components/OfferMonth";
import CardProduct from "../../components/CardProduct";
import Featured from "../../components/Featured";
import OneSpicalOffer from "../../components/OneSpicalOffer";
import Navbar from "../../components/Navbar";

export default function Home() {
  useEffect(() => {
    document.title = "Home Page | Exclusive";
  }, []);
  return (
    <>
      <Navbar heartIcon={true} cartIcon={true} profileIcon={false} />

      <div className="md:flex gap-4 px-4 h-full justify-center md:px-20 py-6">
        <CategoriesMenu />
        <SliderImage />
      </div>
      <OfferDay />
      <Categories />
      <OfferMonth />
      <OneSpicalOffer />
      <CardProduct />
      <Featured />
    </>
  );
}
