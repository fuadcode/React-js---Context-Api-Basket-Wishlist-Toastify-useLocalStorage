import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaShoppingBasket, FaRegHeart, FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import "./index.css";
import { BasketContext } from "../../context/BasketProvider";
import { WishlistContext } from "../../context/WishlistProvider";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addItemBasket, isBasket } = useContext(BasketContext);
  const { addItemWishlit, isWishlist } = useContext(WishlistContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleWishlistClick = (item) => {
    addItemWishlit(item);
    toast.success("Wishlist is added");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">All Products</h1>
      <div className="card-area">
        {products &&
          products.map((item) => (
            <Card className="card-me" key={item.id}>
              <CardMedia
                image={item.image}
                className="img"
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {item?.title.slice(0, 30)} | {item.category.slice(0, 10)}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.price} $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description.slice(0, 50)}..
                </Typography>
              </CardContent>
              <CardActions className="card-actions">
                <Button
                  className="action-button"
                  onClick={() => {
                    addItemBasket(item);
                    toast.success("Product added to the basket!");
                  }}
                >
                  {isBasket(item) ? <FaShoppingBasket /> : <MdDelete />}
                </Button>
                <Button
                  className={`action-button ${isWishlist(item) ? "black-heart" : ""}`}
                  onClick={() => handleWishlistClick(item)}
                >
                  {isWishlist(item) ? <FaHeart /> : <FaRegHeart />}
                </Button>
              </CardActions>
              <Toaster position="bottom-right" reverseOrder={false} />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Home;
