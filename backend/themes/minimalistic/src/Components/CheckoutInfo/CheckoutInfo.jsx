import React from "react";
import classNames from "classnames";
import {
  makeStyles,
  Typography,
  Button,
  Grid,
  Box,
  TextField,
} from "@material-ui/core";
import storeInfo from "../../storeData.json";
import { openSnackBar } from "../../Redux/appSlice";

// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../../Redux/cartSlice";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    minHeight: 320,
    minWidth: 320,
    maxWidth: 444,
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[2],
  },
  iconContainer: {
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(5),
    width: theme.spacing(5),
    borderRadius: "50%",
    color: "#fff",
  },
  link: {
    color: theme.palette.primary.light,
    transition: "all 0.1s ease-in-out",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    marginLeft: theme.spacing(1),
    textDecoration: "none",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerMargin: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  marginTopThree: {
    marginTop: theme.spacing(3),
  },
  text: {
    color: theme.palette.grey[600],
    letterSpacing: 2.5,
  },
  letterSpace: {
    letterSpacing: 2,
  },
}));

const CheckoutInfo = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cartItems);

  // let productIdArr = [];
  // cartItems.forEach((item) => {
  //    productIdArr.push({ _id: item._id, quantity: item.quantity });
  //  });

  const productIdMap = new Map();

  cartItems.forEach((item) => {
    const productId = item._id;

    if (productIdMap.has(productId)) {
      // If the product ID already exists in the map, increase the quantity by 1
      const existingItem = productIdMap.get(productId);
      existingItem.quantity += 1;
    } else {
      // If it's a new product ID, initialize the quantity to 1
      productIdMap.set(productId, { _id: productId, quantity: 1 });
    }
  });

  const productIdArr = Array.from(productIdMap.values());
  console.log(JSON.stringify(productIdArr) + "fron cart");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const customerName = data.get("name");
    const phoneNumber = data.get("phoneNumber");
    dispatch(
      checkout({
        User: storeInfo.User,
        customerName,
        store_id: storeInfo.store_id,
        productId: productIdArr,
        total: 1300,
      })
    );
    dispatch(
      openSnackBar({
        severity: "success",
        text: "Order Placed",
      })
    );
    navigate("/products");
  };

  return (
    <>
      <Grid
        className={classNames(classes.letterSpace, classes.formContainer)}
        item
        container
        direction="column"
        xs={12}
        md={6}
      >
        <Typography component="h1" variant="h4">
          Checkout
        </Typography>

        <Box
          component="form"
          className={classes.marginTopTwo}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            fullWidth
            type="text"
            className={classes.marginTopTwo}
            id="email"
            label="Email"
            name="email"
            autoFocus
          />
          <TextField
            required
            fullWidth
            className={classes.marginTopTwo}
            name="name"
            label="Name"
            type="text"
            id="name"
          />
          <TextField
            required
            fullWidth
            className={classes.marginTopTwo}
            name="phoneNumber"
            label="Phone Number"
            type="tel"
            id="phoneNumber"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.marginTopThree}
            // disabled={pending}
          >
            <Typography variant="body1" className={classes.letterSpace}>
              Checkout
            </Typography>
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default CheckoutInfo;
