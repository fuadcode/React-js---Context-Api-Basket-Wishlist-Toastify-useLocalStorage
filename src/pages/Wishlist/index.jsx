import React, { useContext } from 'react';
import { WishlistContext } from '../../context/WishlistProvider';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./index.css";

const Wishlist = () => {
  const { wishlist, addItemWishlit, isWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      <p className="wishlist-title">Wishlist Page</p>
      <div className="card-area">
        {wishlist &&
          wishlist.map((item) => (
            <Card className="card-me" key={item.id}>
              <CardMedia
                image={item.image}
                className="img"
                title={item.title}
              />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title.slice(0, 30)} | {item.category.slice(0, 10)}
                  <p>{item.price} $</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description.slice(0, 35)}
                </Typography>
              </CardContent>
              <CardActions className="card-actions">
                <Button className="button" onClick={() => addItemWishlit(item)}>
                  {isWishlist(item) ? "Add to Wishlist" : "Remove from Wishlist"}
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default Wishlist;
