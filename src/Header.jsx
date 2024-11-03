import { LiaShoppingBagSolid } from "react-icons/lia";
import { CartContext} from "./context/CartContext";
import { useContext } from "react";

const Header = () => {
  const data = useContext(CartContext);
  const {state, dispatch}= data;
  const { itemCounter } = state;



  return (
    <div className='fixed flex justify-center gap-x-3 bg-[#F4F6F8]  pt-4 w-full h-[70px] z-30'>
      <div className=" text-[34px] relative ">
      <LiaShoppingBagSolid className="cursor-pointer" />
      {itemCounter ? <span className="absolute top-4 left-5 text-sm bg-red-700 rounded-full px-1 text-white" >{itemCounter}</span> : null}
      </div>
    </div>
  )
}

export default Header