import { FaBuffer } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { BsBookHalf } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { CartContext } from "./context/CartContext";
import { separator } from "./helper/helper";
import { useContext } from "react";

const BasketDetailCart = ({ clickHandler }) => {
  const data = useContext(CartContext);
  const { state } = data;
  
  


  const course = state.selectedItems.filter(
    (i) => i.category === " دوره آموزشی"
  );
  const book = state.selectedItems.filter((i) => i.category === "کتاب");
  const sourceCode = state.selectedItems.filter(
    (i) => i.category === "سورس کد"
  );

  return (
    // change bg card <= 
    // bg-gradient-to-br from-blue-600/30 to-sky-500/30

    <div className=" self-start w-full  bg-darkBlue/50 p-3 md:p-7 justify-start flex flex-col gap-y-3 shadow-lg rounded-2xl h-full">
      {course.length > 0 && (
        <div className="w-full glass-card bg-white/90   shadow-[0px_0px_20px_4px_rgba(193,194,210,0.3)]  flex flex-col items-end  gap-2 p-5 courses rounded-xl">
          <div className="flex flex-row-reverse gap-2  items-center">
            <FaBuffer className="text-[#0c4058] text-[18px]" />
            <h2 className="text-[20px] md:text-[22px] text-[#0c4058] font-bold">
              دوره
            </h2>
          </div>
          <div className="courseItems  w-full  divide-y divide-black/20  flex flex-col justify-between py-2 items-end gap-y-2 h-full">
            {course.map((i) => (
              <div className="flex  w-full flex-col pt-3  gap-y-5" key={i.id}>
                <div className="w-full   gap-x-3 flex  flex-col justify-start md:flex-row-reverse ">
                  {/* change: mr-3 */}
                  <div className=" mr-2 shadow-md self-end w-[126px] h-[126px]  rounded-xl overflow-hidden">
                    <img
                      className=" w-full h-full object-cover"
                      src={i.image}
                      alt={i.cardTitle}
                    />
                  </div>
                  {/* change: a new div created
                   teacher name added */}
                 <div className="flex flex-col justify-evenly gap-2">
                 <h2 className="w-full changeDir max-w-[280px]   text-[18px] font-bold text-zinc-800 md:self-center self-end md:text-[22px] line-clamp-1  md:line-clamp-3  text-right  mt-4 ">
                    {i.cardTitle}
                  </h2>
                  <h2 className="w-full changeDir max-w-[280px] text-[16px] font-bold text-zinc-700 md:text-[16px]   md:line-clamp-3 md:self-center self-end text-right  ">
                    مدرس : {i.cardTeacher}
                  </h2>
                 </div>
                </div>
                {/* change :mb-3 */}
                <div className=" w-full mb-3 h-fit flex justify-between">
                  <button className="border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white transition-all ease-linear text-red-800 p-1">
                    <FaRegTrashCan onClick={() => clickHandler("REMOVE", i)} />
                  </button>
                  <div className="flex  font-bold text-[18px] md:text-[20px]   text-[#3f4d61]  md:w-[70%]  justify-end">
                    <h3 className=" changeDir ">{(i.price)} تومان</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {book.length > 0 && (
        <div className="w-full glass-card bg-white/80   shadow-[0px_0px_20px_4px_rgba(193,194,210,0.3)]  flex flex-col items-end  gap-2 p-5 courses rounded-xl">
          <div className="flex flex-row-reverse gap-2  items-center">
            <BsBookHalf className="text-[#0c4058] text-[18px]" />
            <h2 className="text-[20px] md:text-[22px] text-[#0c4058] font-bold">
              کتاب
            </h2>
          </div>
          <div className="courseItems w-full  divide-y divide-black/20  flex flex-col justify-between  items-end gap-y-2 h-full">
            {book.map((i) => (
              <div className="flex  w-full flex-col pt-3  gap-y-5" key={i.id}>
                <div className="w-full   gap-x-3 flex  flex-col justify-start md:flex-row-reverse ">
                  <div className="  shadow-md self-end w-[126px] h-[126px]  rounded-md overflow-hidden">
                    <img
                      className=" w-full h-full object-cover"
                      src={i.image}
                      alt={i.cardTitle}
                    />
                  </div>
                  <h2 className="w-full changeDir max-w-[280px]  h-full text-[18px] font-bold text-zinc-800 md:text-[22px] line-clamp-1  md:line-clamp-3 self-start text-right mr-4 mt-4 ">
                    {i.cardTitle}
                  </h2>
                </div>
                <div className=" w-full h-fit flex justify-between">
                  <button className="border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white transition-all ease-linear text-red-800 p-1">
                    <FaRegTrashCan onClick={() => clickHandler("REMOVE", i)} />
                  </button>
                  <div className="flex  font-bold text-[18px] md:text-[20px]   text-[#3f4d61]  md:w-[70%]  justify-end">
                    <h3 className=" changeDir ">{separator(i.price)} تومان</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {sourceCode.length > 0 && (
        <div className="w-full glass-card bg-white/80   shadow-[0px_0px_20px_4px_rgba(193,194,210,0.3)]  flex flex-col items-end  gap-2 p-5 courses rounded-xl">
          <div className="flex flex-row-reverse gap-2  items-center">
            <FaCode className="text-[#0c4058] text-[22px]" />
            <h2 className="text-[20px] md:text-[22px] text-[#0c4058] font-bold">
              سورس کد
            </h2>
          </div>
          <div className="courseItems w-full  divide-y divide-black/20  flex flex-col justify-between py-1 items-end gap-y-2 h-full">
            {sourceCode.map((i) => (
              <div className="flex  w-full flex-col pt-3  gap-y-5" key={i.id}>
                <div className="w-full   gap-x-3 flex  flex-col justify-start md:flex-row-reverse ">
                  <div className="  shadow-md self-end w-[126px] h-[126px]  rounded-md overflow-hidden">
                    <img
                      className=" w-full h-full object-cover"
                      src={i.image}
                      alt={i.cardTitle}
                    />
                  </div>
                  <h2 className="w-full changeDir max-w-[280px]  h-full text-[18px] font-bold text-zinc-800 md:text-[22px] line-clamp-1  md:line-clamp-3 self-start text-right mr-4 mt-4 ">
                    {i.cardTitle}
                  </h2>
                </div>
                <div className=" w-full h-fit flex justify-between">
                  <button className="border-2 border-red-700 rounded-md hover:bg-red-700 hover:text-white transition-all ease-linear text-red-800 p-1">
                    <FaRegTrashCan onClick={() => clickHandler("REMOVE", i)} />
                  </button>
                  <div className="flex  font-bold text-[18px] md:text-[20px]   text-[#3f4d61]  md:w-[70%]  justify-end">
                    <h3 className=" changeDir ">{separator(i.price)} تومان</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketDetailCart;
