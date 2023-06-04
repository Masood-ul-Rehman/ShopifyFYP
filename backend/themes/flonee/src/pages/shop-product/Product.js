import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../redux/actions/productActions";

const Product = ({ location, product, singleProduct }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const {id} = useParams()
  console.log(id, "the name of the path")


  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [])

  console.log(singleProduct, "single prod");

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Product Page</title>
        <meta
          name="description"
          content="Product page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop Product
      </BreadcrumbsItem> */}

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb /> */}

        {/* product description with image */}
        {/* <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        /> */}

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={singleProduct.description}
        />

        {/* related product slider */}
        {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={singleProduct.category[0]}
        /> */}
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  return {
    singleProduct: state.singleProduct.products,
  };
};

export default connect(mapStateToProps)(Product);
// export default Product;
