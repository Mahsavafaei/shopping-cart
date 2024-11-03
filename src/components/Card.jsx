import { useContext, useState } from 'react';
import { courseDetails } from '../helper/helper';
import { CartContext } from '../context/CartContext';

function Card({ data }) {
  const { state, dispatch } = useContext(CartContext);
  const [alert, setAlert] = useState('');

  const quantity = courseDetails(state, data.id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });

    if (type === 'ADD') {
      setAlert(`  .${data.category}" به سبد خرید شما اضافه شد  "`);
    } else if (type === 'REMOVE') {
      setAlert(`  .${data.category}" از سبد خرید شما حذف شد  "`);
    }

    setTimeout(() => {
      setAlert('');
    }, 2500);
  };

  return (
    <>
      <div className="flex flex-col w-[400px] h-[400px] mx-auto">
        <div
          key={data.id}
          className="w-[300px] h-[330px] p-5 ring-2 ring-blue-500 rounded-lg box-border"
        >
          <img src={data.image} alt="" />
          <h3>{data.cardTitle}</h3>
          <p>{data.cardTeacher}</p>
          <p>{data.price}</p>

          {quantity === 0 && (
            <button
              className="bg-blue-500 p-2 rounded-md mt-2 text-white"
              onClick={() => clickHandler('ADD')}
            >
              add
            </button>
          )}
          {quantity > 0 && (
            <button
              className="bg-blue-500 p-2 rounded-md mt-2 text-white"
              onClick={() => clickHandler('REMOVE')}
            >
              remove
            </button>
          )}
        </div>
        <div>
          {alert && (
            <h4 className="bg-green-400 p-4 rounded-md text-center">{alert}</h4>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
