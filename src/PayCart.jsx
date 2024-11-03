import { useContext, useEffect } from "react";
import BasketDetailCart from "./BasketDetailCart";
import { CartContext } from "./context/CartContext";
import Lottie from "lottie-web"
import Empty from "./assets/empty.json";
import Header from "./Header";
import PayDetail from "./PayDetail";

const PayCart = () => {
  const { state, dispatch } = useContext(CartContext);

  // Retrieve cart data from localStorage when the component loads
  useEffect(() => {
    const savedCart = localStorage.getItem("cartData");
    if (savedCart) {
      dispatch({ type: "SET_CART", payload: JSON.parse(savedCart) });
    }
  }, [dispatch]);

  // Save updated cart state to localStorage
  const saveToLocalStorage = (updatedState) => {
    localStorage.setItem("cartData", JSON.stringify(updatedState));
  };

  // Handle adding or removing items from the cart
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
    // Save the new state after updating the cart
    saveToLocalStorage({
      ...state,
      items: state.items.map((item) =>
        item.id === payload.id
          ? { ...item, quantity: item.quantity + (type === "ADD" ? 1 : -1) }
          : item
      ),
    });
  };

  return (
    <>
      <Header />

      <div className="flex min-h-[100vh] justify-center items-center py-[100px] bg-[#F4F6F8] w-full ">
        <div className="flex  justify-evenly items-center max-md:flex-col flex-row-reverse  p-6 gap-6 w-[1150px]  ">
          {!state.itemCounter ? (
           <Lottie
           animationData={Empty}
           loop={true}
         
         />
    
          ) : (
            <>
              <BasketDetailCart clickHandler={clickHandler} />
              <PayDetail />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PayCart;
