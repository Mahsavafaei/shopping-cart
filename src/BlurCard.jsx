const BlurCard = () => {
  return (
    <div className="flex justify-center  items-center w-full h-full bg-white/80  py-3  rounded-lg ">
      <div className="flex text-[18px] flex-col gap-y-6 items-center">
        <h2> لطفا وارد حساب شوید</h2>
        <button className="w-fit h-fit text-white rounded-xl py-3 px-6 bg-darkBlue">
          ورود / ثبت نام
        </button>
      </div>
    </div>
  );
};

export default BlurCard;
