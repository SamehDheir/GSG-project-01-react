import { useEffect } from "react";

import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import CategoriesMenu from "../../components/CategoriesMenu";
import SliderImage from "../../components/SliderImage";
import Categories from "../../components/Categories";
import OfferDay from "../../components/OfferDay";
import OfferMonth from "../../components/OfferMonth";
import CardProduct from "../../components/CardProduct";
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import OneSpicalOffer from "../../components/OneSpicalOffer";


export default function Home() {
    useEffect(() => {
      document.title = "Home Page | Exclusive";
    }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="md:flex gap-4 px-4 h-full justify-center md:px-10 py-6">
        <CategoriesMenu />
        <SliderImage />
      </div>
      <OfferDay/>
      <Categories/>
      <OfferMonth/>
      <OneSpicalOffer/>
      <CardProduct/>
      <Featured/>
      <Footer/>
    </>
  );
}
