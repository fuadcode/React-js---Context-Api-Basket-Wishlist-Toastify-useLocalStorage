import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  function addItemWishlit(item) {
    const index = wishlist.findIndex((x) => x.id === item.id);
    if (index === -1) {
      setWishlist([...wishlist, { ...item, count: 1 }]);
    } else {
      removeItemWishlist(item);
    }
  }
  function removeItemWishlist(item) {
    setWishlist(wishlist.filter((x) => x.id !== item.id));
  }
  function isWishlist(item) {
    return wishlist.findIndex((x) => x.id === item.id) === -1 ? true : false;
  }
  return (
    <div>
      <WishlistContext.Provider
        value={{ wishlist, removeItemWishlist, addItemWishlit,isWishlist }}
      >
        {children}
      </WishlistContext.Provider>
    </div>
  );
};

export default WishlistProvider;
