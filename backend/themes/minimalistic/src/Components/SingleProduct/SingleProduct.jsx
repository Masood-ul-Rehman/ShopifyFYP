import React, { useEffect } from "react";
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
// import { addToCart } from "../../Redux/cartSlice";
import { openSnackBar } from "../../Redux/appSlice";
import clsx from "clsx";
import { useNavigate } from "react-router";
import { getSingleItem } from "../../Redux/appSlice";
import { addToCart } from "../../Redux/addToCart";
import { useParams } from "react-router-dom";

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
  marginLeftTwo: {
    marginLeft: "2rem",
  },
}));

const SingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.app);
  const { pending, error } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.user);

  const { id } = useParams();

  const classes = useStyles();
  const filteredItem = items.filter((item) => item._id === id)[0];
  console.log(filteredItem);
  const handleClick = () => {
    dispatch(addToCart(filteredItem));
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
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={4}>
        <div className={classes.imgContainer}>
          <img
            src={`http://localhost:5000/images/${filteredItem?.image.data}`}
            alt={filteredItem?.title}
            className={classes.img}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography className={classes.marginTopTwo} variant="h4">
          {filteredItem?.title}
        </Typography>

        <Typography
          className={classNames(classes.paleText, classes.marginTopTwo)}
          variant="body1"
        >
          {filteredItem?.description}
        </Typography>
        <Typography className={classes.marginTopTwo} variant="subtitle2">
          <b>Price:</b>${filteredItem?.price}
        </Typography>

        <div style={{ display: "flex" }}>
          <Typography className={classes.marginTopTwo} variant="subtitle2">
            <b>Available Stock:</b> {filteredItem?.quantity}
          </Typography>
          <Typography
            className={clsx(classes.marginTopTwo, classes.marginLeftTwo)}
            variant="subtitle2"
          >
            <b>Item sold:</b> {filteredItem?.sold}
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
    // <div>hello</div>
  );
};

export default SingleProduct;
