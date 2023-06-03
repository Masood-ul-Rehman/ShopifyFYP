import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   Grid,
   Typography,
   makeStyles,
   Button,
   alpha,
   Chip,
} from "@material-ui/core";
import classNames from "classnames";
import { addToCart } from "../../Redux/cartSlice";
import { openSnackBar } from "../../Redux/appSlice";
import clsx from 'clsx';
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
   container: {
      padding: theme.spacing(4),
      justifyContent: "space-around",
      height: "auto",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
         padding: theme.spacing(10),
      },
   },
   imgContainer: {
      width: "100%",
      height: "auto",
      boxShadow: theme.shadows[3],
   },
   img: {
      width: "100%",
      height: "auto",
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
   paleText: {
      color: alpha("#333", 0.8),
   },
   letterSpace: {
      letterSpacing: 2.5,
   },
   marginLeftTwo:{
      marginLeft: "2rem",
   }
}));

const SingleProduct = () => {
   const navigate = useNavigate();
   const { singleItem } = useSelector((state) => state.app);
   const { pending, error } = useSelector((state) => state.cart);
   const user = useSelector((state) => state.user.user);

   const classes = useStyles();
   const { title, price, description, quantity, sold, image: {data}, _id } = singleItem;
   const dispatch = useDispatch();

   console.log(singleItem, "this is the single item");

   const handleClick = () => {
      if (!user) {
         dispatch(openSnackBar({ severity: "error", text: "Please Log In" }));
         navigate("/login")

      } else {
         dispatch(addToCart(_id));
         if (!error && !pending) {
            dispatch(
               openSnackBar({
                  severity: "success",
                  text: "Item has been added to cart",
               })
            );
         } else if (error && !pending) {
            dispatch(
               openSnackBar({
                  severity: "error",
                  text: "Something went wrong",
               })
            );
         }
      }
   };

   return (
      // <h1>hello</h1>
      <Grid container className={classes.container}>
         <Grid item xs={12} sm={4}>
            <div className={classes.imgContainer}>
               <img src={`http://localhost:5000/images/${data}`} alt={title} className={classes.img} />
            </div>
         </Grid>
         <Grid item xs={12} sm={6}>
            <Typography className={classes.marginTopTwo} variant="h4">
               {title}
            </Typography>

            
            <Typography
               className={classNames(classes.paleText, classes.marginTopTwo)}
               variant="body1"
            >
               {description}
            </Typography>
            <Typography className={classes.marginTopTwo} variant="subtitle2">
               <b>Price:</b>${price}
            </Typography>

            <div style={{display: "flex"}}>
            <Typography className={classes.marginTopTwo} variant="subtitle2">
               <b>Available Stock:</b> {quantity}
            </Typography>
            <Typography className={clsx(classes.marginTopTwo, classes.marginLeftTwo)} variant="subtitle2">
               <b>Item sold:</b> {sold}
            </Typography>
            </div>

            <Button
               className={classNames(classes.letterSpace, classes.marginTopTwo)}
               fullWidth
               variant="contained"
               color="primary"
               disabled={pending}
               onClick={handleClick}
            >
               Add to Cart
            </Button>
         </Grid>
      </Grid>
   );
};

export default SingleProduct;
