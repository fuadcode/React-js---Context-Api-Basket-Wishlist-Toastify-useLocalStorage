import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BasketContext } from "../../context/BasketProvider";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { WishlistContext } from "../../context/WishlistProvider";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";

const Basket = () => {
  const {
    basket,
    addItemBasket,
    total,
    removeItemBasket,
    isBasket,
    increaceCount,
    decreaseCount,
  } = useContext(BasketContext);
  const { wishlist, removeItemWishlist, addItemWishlit, isWishlist } =
    useContext(WishlistContext);

  return (
    <div className="basket-container">
      <Alert className="alert" icon={<CheckIcon fontSize="inherit" />} severity="success">
        <p>Total Price: {total === 0 ? "Basket is empty" : total.toFixed(2)} $</p>
      </Alert>

      <div className="card-area">
        {basket &&
          basket.map((item) => (
            <Card className="card-me" key={item.id}>
              <CardMedia image={item.image} className="img" title={item.title} />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title.slice(0, 30)} | {item.category.slice(0, 10)}
                  <p>{item.price} $</p>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description.slice(0, 35)}
                </Typography>
              </CardContent>
              <CardActions className="card-actions">
                <Button
                  onClick={() => {
                    removeItemBasket(item);
                    toast("Item removed from basket!", {
                      icon: "🗑️",
                    });
                  }}
                >
                  {isBasket(item) ? "Add to Basket" : "Remove"}
                </Button>

                <Button onClick={() => addItemWishlit(item)}>
                  {isWishlist(item) ? "Add to Wishlist" : "Remove"} <FaHeart />
                </Button>

                <Button onClick={() => increaceCount(item)}>+</Button>
                <span className="count-display">{item.count}</span>
                <Button onClick={() => decreaseCount(item)}>-</Button>
              </CardActions>
            </Card>
          ))}
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default Basket;
