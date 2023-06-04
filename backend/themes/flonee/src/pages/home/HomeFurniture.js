import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import TabProductTwo from "../../wrappers/product/TabProductTwo";
import HeroSliderNineteen from "../../wrappers/hero-slider/HeroSliderNineteen";
import BannerSixteen from "../../wrappers/banner/BannerSixteen";
import BannerFifteen from "../../wrappers/banner/BannerFifteen";
import { fetchSingleProduct } from "../../redux/actions/productActions";

const HomeFurniture = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchSingleProduct("647318062e45597a68d39763"))
  // }, [])


  return (
    <Fragment>
      <MetaTags>
        <title>Furniture Home</title>
        <meta name="description" content="Furniture home." />
      </MetaTags>

      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderNineteen />

        {/* banner */}
        <BannerFifteen spaceTopClass="pt-10" spaceBottomClass="pb-85" />

        {/* feature icon */}

        {/* tab product */}
        <TabProductTwo spaceBottomClass="pb-100" category="furniture" />
        {/* banner */}
        <BannerSixteen spaceTopClass="pt-95" />

        {/* newsletter */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurniture;
