import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const BasketContext = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const total = basket.reduce((prev, next) => prev + (next.count * next.price), 0)
  function addItemBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    console.log(index);

    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      removeItemBasket(item);
    }
  }
  function removeItemBasket(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }
  function isBasket(item) {
    return basket.findIndex((x) => x.id === item.id) === -1 ? true : false;
  }

  function increaceCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    basket[index].count++;
    setBasket([...basket])
  }
  function decreaseCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);

    if (item.count >= 1) {
      basket[index].count--;
      setBasket([...basket])
    } else if (item.count === 0) {
      removeItemBasket(item)
    }

  }
  return (
    <div>
      <BasketContext.Provider
        value={{ basket, addItemBasket, removeItemBasket, isBasket, increaceCount, decreaseCount, total }}
      >
        {children}
      </BasketContext.Provider>
    </div>
  );
};

export default BasketProvider;
