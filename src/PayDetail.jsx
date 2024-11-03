import { useContext, useRef, useState } from "react";
import { GiRaspberry } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { CartContext } from "./context/CartContext";
import { disCount, finalPrice, separator, tax } from "./helper/helper";
import { useLogin } from "./context/userContext";
import BlurCard from "./BlurCard";
import { MdOutlineEdit } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const PayDetail = () => {

  const { state, dispatch } = useContext(CartContext);
  const { totalPrice } = state;

  const { isLogin } = useLogin();
  const [isActive, setActive] = useState(false);
  const [alert, setAlert] = useState("");
  const [discount, setDiscount] = useState("");
  const [showSale, setShowSale] = useState("");
  const [toggle, setToggle] = useState("CONFIRM");

  const sale = "qty";

  const inputRef = useRef(null);

  const submitHandler = () => {
    setAlert("");
    if (!discount) {
      setAlert(" کد وارد نشده است  ! ");
    } else if (discount === sale) {
      setToggle("EDIT");

      setShowSale(discount);
    } else if (discount !== sale) {
      setAlert(` کد نادرست است  ! `);
    }
  };

  const clickHandler = (type) => {
    dispatch({ type });
  };

  const editHandler = (event) => {
    event.preventDefault();
    setToggle("CONFIRM_AGAIN");

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);

    setAlert("");
    setToggle("CONFIRM_AGAIN");
    setShowSale("");
  };

  const deleteHandler = () => {
    setDiscount("");
    setToggle("CONFIRM");
    setShowSale("");
  };

  const handleWidth = () => {
    setActive(!isActive);
  };
  const finalPrice1 = (number) => {
    return number - disCount(number) + tax(number);
  };
  return (
    // parent div for paydetailscart
    <div className="self-center md:self-start max-md:mt-[40px] md:sticky top-[70px] bg-lightBlue/20  shadow-xl rounded-2xl  p-3 md:p-7 flex flex-col gap-6  justify-between w-full max-w-[410px] md:w-[80%]  h-fit">
      {/*payment top section:totalPrice +...  */}
      <div className="w-full flex flex-col bg-white/80 shadow-[0px_3px_20px_4px_rgba(193,194,210,0.5)] gap-2 p-4  rounded-xl min-h-[200px] ">
        <div className="flex justify-center flex-row-reverse items-center gap-2 ">
          <GiRaspberry className="text-[#0c4058] text-[27px] " />
          <h2 className="text-[20px] md:text-[24px] text-[#0c4058] font-bold">
            اطلاعات پرداخت
          </h2>
        </div>
        <div className="w-[90%] self-center mt-2 bg-blue-900/30 h-[2px]"></div>
        <div className="w-full  h-full flex justify-start gap-3 py-3 flex-col ">
          <div className="flex flex-row-reverse justify-between text-[16px] text-black font-bold">
            <h2 className="  changeDir ">جمع سبد خرید</h2>
            <h2 className="changeDir">{separator(totalPrice)} تومان</h2>
          </div>

          {isLogin && (
            <div
              className={
                isActive
                  ? "w-full  ease-linear h-full gap-3 p-[2px] flex flex-col justify-between overflow-hidden items-center"
                  : "w-full  h-[27px] flex flex-col gap-3 justify-between overflow-hidden  p-[2px] "
              }
            >
              <div className="flex  justify-between w-full flex-row-reverse">
                <h2 className="font-bold text-zinc-700"> کد تخفیف دارید؟</h2>
                <button onClick={handleWidth} id="discountCode">
                  <IoIosArrowDropdown className="text-[22px]" />
                </button>
              </div>
              <div className="flex  gap-2 w-full">
                {toggle === "CONFIRM" && (
                  <button
                    onClick={submitHandler}
                    className="py-1 text-[20px] px-3 border border-[#0a5273] transition-all ease-linear text-[#0a5273] hover:bg-darkBlue hover:text-white rounded-md font-semibold"
                  >
                    <GiConfirmed />
                  </button>
                )}

                {(toggle === "EDIT" || toggle === "CONFIRM_AGAIN") && (
                  <button
                    onClick={deleteHandler}
                    className="py-1 text-[20px]  px-3 border border-[#0a5273] transition-all ease-linear  text-[#0a5273] hover:bg-red-500 hover:border-[#ef4444] hover:text-white rounded-md font-semibold"
                  >
                   <MdOutlineDelete />
                  </button>
                )}
                {toggle === "EDIT" && (
                  <button
                    onClick={editHandler}
                    className="py-1 px-3 text-[20px]  border border-[#0a5273] transition-all ease-linear text-[#0a5273] hover:bg-[#fcd34d]  hover:border-[#fcd34d] hover:text-white rounded-md font-semibold"
                  >
                    <MdOutlineEdit />
                  </button>
                )}

                {toggle === "CONFIRM_AGAIN" && (
                  <button
                    onClick={submitHandler}
                    className="py-1 px-3 text-[20px]  border border-[#0a5273] transition-all ease-linear text-[#0a5273] hover:bg-darkBlue hover:bg-green-600 hover:border-[#16a34a] hover:text-white rounded-md font-semibold"
                  >
                    <MdOutlinePublishedWithChanges />
                  </button>
                )}

                <input
                  type="text"
                  placeholder="اینجا وارد کنید"
                  className="placeholder:text-right p-2  border-[2px]  rounded-md outline-none focus:border-[#0a5273] w-full h-full"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  disabled={toggle === "EDIT"}
                  ref={inputRef}
                />
              </div>

              {alert && (
                <div className=" rounded-md text-[14px] bg-red-500 px-3 py-1">
                  <h2 className=" w-full changeDir text-white">{alert}</h2>{" "}
                </div>
              )}
            </div>
          )}

          {showSale && (
            <div className="text-red-600 font-bold flex flex-row-reverse justify-between text-[16px]">
              <h2 className=" w-full changeDir  "> تخفیف</h2>
              <h2 className="">{separator(disCount(totalPrice))}</h2>
            </div>
          )}

          <div className="text-cyan-700 font-bold flex flex-row-reverse justify-between text-[16px]">
            <h2 className=" changeDir ">مالیات</h2>
            <h2 className=" changeDir">{separator(tax(totalPrice))} </h2>
          </div>

          {toggle === "CONFIRM" && (
            <div className="text-green-600 font-bold flex flex-row-reverse justify-between text-[18px]">
              <h2 className="  changeDir ">مبلغ نهایی</h2>
              <h2 className="  changeDir ">
                {separator(finalPrice(totalPrice))} تومان
              </h2>
            </div>
          )}
          {toggle === "CONFIRM_AGAIN" && (
            <div className="text-green-600 font-bold flex flex-row-reverse justify-between text-[18px]">
              <h2 className="  changeDir ">مبلغ نهایی</h2>
              <h2 className="  changeDir ">
                {separator(finalPrice(totalPrice))} تومان
              </h2>
            </div>
          )}
          {toggle === "EDIT" && (
            <div className="text-green-600 font-bold flex flex-row-reverse justify-between text-[18px]">
              <h2 className="  changeDir ">مبلغ نهایی</h2>
              <h2 className=" changeDir">
                {separator(finalPrice1(totalPrice))} تومان
              </h2>
            </div>
          )}
        </div>
      </div>

      {/* payment button */}
      {isLogin ? (
        <div
          onClick={() => clickHandler("CHECKOUT")}
          className=" cursor-pointer w-full shadow-xl group rounded-lg   transition-all ease-in delay-300 box-border h-[70px] relative  overflow-hidden "
        >
          <div className=" w-[50%] group-hover:w-[100%]  h-full  inline-block   justify-center transition-all ease-in delay-300 items-center bg-darkBlue">
            <div className="w-full h-full group flex justify-center items-center">
              <div className=" bg-[#dceeff] shadow-[-2px_1px_7px_2px_rgba(30,27,50,1)] w-[63px] group-hover:slide-top  transition-all delay-500  flex justify-evenly flex-col  rounded-md h-[40px] ">
                <div className="bg-[#09294d] w-[86%] mx-auto h-3"></div>
                <div className=" flex justify-start gap-1 pl-2 ">
                  <div className="rounded-full w-2 h-2 bg-cyan-700 "></div>
                  <div className="rounded-full w-2 h-2 bg-sky-900 "></div>
                  <div className="rounded-full w-2 h-2 bg-blue-950 "></div>
                </div>
              </div>
            </div>
            <div className="bg-black w-full  flex justify-center h-[75px] ">
              <div className="poze">
                <div className="bg-[#dddde0] z-20  w-[60px] relative  h-[75px] group-hover:slide-out rounded-[6px] overflow-hidden flex flex-col items-center  justify-start gap-1">
                  <div className="bg-zinc-800 w-[80%] rounded-lg  h-[20%]">
                    <div className="bg-zinc-600 w-full h-[50%] "></div>
                  </div>
                  <div className="mb-1 bg-white w-[80%] h-[18px]"></div>
                  <div className="  w-[80%] grid gap-1 grid-cols-3 grid-rows-2">
                    <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                    <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                    <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                    <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                    <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                    <div className="bg-zinc-500 rounded-sm w-3 h-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute w-[50%]   h-full  inline-block  text-center leading-[75px] text-[22px] text-[#0c4058] transition-all ease-linear delay-600 justify-center items-center bg-white font-bold">
            پرداخت
          </div>
        </div>
      ) : (
        <BlurCard />
      )}
    </div>
  );
};

export default PayDetail;
