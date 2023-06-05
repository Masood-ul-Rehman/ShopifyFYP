import React, { useEffect, useRef } from "react";
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
   Grid,
   makeStyles,
   CircularProgress,
   Typography,
   Button,
   withStyles,
} from "@material-ui/core";
import classNames from "classnames";
import { clearCart } from "../../Redux/cartSlice";
import { openSnackBar } from "../../Redux/appSlice";
import { getTotal } from "../../Redux/cartSlice";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
   },
   progress: {
      padding: theme.spacing(10),
   },
   priceDiv: {
      backgroundColor: theme.palette.grey[100],
      borderRadius: theme.spacing(2),
      boxShadow: theme.shadows[2],
      overflow: "hidden",
      padding: theme.spacing(3),
   },
   btnContainer: {
      marginTop: theme.spacing(2),
   },
   navigateBtn: {
      marginBottom: theme.spacing(4),
   },
   marginRightTwo: {
      marginRight: theme.spacing(2),
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
   letterSpace: {
      letterSpacing: 3,
   },
}));

const mapThroughItems = (items) => {

   const productMap = new Map();

   items.forEach((item) => {
      const productId = item._id;
  
      if (productMap.has(productId)) {
        // If the product ID already exists in the map, increase its quantity
        const existingItem = productMap.get(productId);
        existingItem.quantity += 1;
      } else {
        // If it's a new product ID, add it to the map
        productMap.set(productId, { ...item, quantity: 1 });
      }
    });

    return Array.from(productMap.values()).map((item, idx) => {
      return <CartItem key={idx} item={item} />;
    });

   // return items.map((item, idx) => {
   //    return <CartItem key={idx} item={item} />;
   // });
};
const DangerButton = withStyles((theme) => ({
   root: {
      borderColor: theme.palette.error.main,
      backgroundColor: theme.palette.error.main,
      color: theme.palette.common.white,
      letterSpacing: 2,
      transition: "0.3s all ease-in-out",
      "&:hover": {
         transform: "ScaleX(1.05)",
         color: theme.palette.common.white,
         borderColor: theme.palette.error.light,
         backgroundColor: theme.palette.error.light,
      },
   },
}))(Button);
const SuccessButton = withStyles((theme) => ({
   root: {
      borderColor: theme.palette.success.main,
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white,
      letterSpacing: 2,
      transition: "0.3s all ease-in-out",
      "&:hover": {
         transform: "ScaleX(1.05)",
         color: theme.palette.common.white,
         borderColor: theme.palette.success.light,
         backgroundColor: theme.palette.success.light,
      },
   },
}))(Button);

const CartList = () => {
   const { cartItems } = useSelector(
      (state) => state.cartItems
   );
   const classes = useStyles();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const isMounted = useRef(false);

   useEffect(() => {
      if (cartItems.length !== 0) {
         dispatch(getTotal());
      }
   }, [dispatch, cartItems, cartItems.length]);

   // const handleClearCart = () => {
   //    dispatch(clearCart());
   //    if (!error && !pending) {
   //       dispatch(
   //          openSnackBar({
   //             severity: "success",
   //             text: "Cart has been cleared",
   //          })
   //       );
   //    } else if (error && !pending) {
   //       dispatch(
   //          openSnackBar({
   //             severity: "error",
   //             text: "Something went wrong",
   //          })
   //       );
   //    }
   // };

   return (
      <>
         {cartItems.length !== 0 ? (
            <Grid className={classes.container} container item xs={10} lg={8}>
               <Button
                  onClick={() => navigate("/products")}
                  variant="contained"
                  color="primary"
                  className={classNames(
                     classes.letterSpace,
                     classes.navigateBtn
                  )}
               >
                  Continue Shopping
               </Button>
               {mapThroughItems(cartItems)}
               <Grid
                  item
                  container
                  justifyContent="flex-end"
                  xs={12}
                  className={classes.priceDiv}
               >
                  <Typography variant="body1" color="initial">
                     Total: {cartItems.length}
                  </Typography>
               </Grid>
               <Grid
                  item
                  container
                  justifyContent="flex-end"
                  className={classes.btnContainer}
               >
                  <DangerButton
                     variant="contained"
                     // onClick={handleClearCart}
                     className={classes.marginRightTwo}
                  >
                     Clear Cart
                  </DangerButton>
                  <SuccessButton
                     variant="contained"
                     onClick={() => navigate("/checkout")}
                  >
                     Checkout
                  </SuccessButton>
               </Grid>
            </Grid>
         ) :  cartItems.length === 0 ? (
            <Grid
               className={classes.container}
               direction="column"
               alignItems="center"
               container
               item
            >
               <Typography variant="h4" color="initial">
                  Cart is empty
               </Typography>
               <Button
                  color="primary"
                  onClick={() => navigate("/products")}
                  variant="contained"
                  className={classNames(
                     classes.letterSpace,
                     classes.marginTopTwo
                  )}
               >
                  Shop Now!!!
               </Button>
            </Grid>
         ) : (
            <Grid
               className={classNames(classes.progress, classes.container)}
               container
            >
               <CircularProgress size="5rem" />
            </Grid>
         )}
      </>
   );
};

export default CartList;
