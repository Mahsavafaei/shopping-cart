const sumCourse = (course) => {
  const itemCounter = course.reduce((acc, cur) => acc + cur.quantity, 0);
  //added unary plus before price
  const totalPrice = course.reduce((acc, cur) => acc + +cur.price, 0);

  return { itemCounter, totalPrice };
};

const courseDetails = (state, id) => {
  if(state.selectedItems){
    state.selectedItems.findIndex((i) => i.id === id);
  }
  if (state.selectedItems.findIndex((i) => i.id === id) === -1) {
    return 0;
  } else {
    return 1;
  }
};

const separator = (num) => {
  return num.toLocaleString();
};
const tax = (num) => {
  return num * 0.09;
};

const disCount = (number) => {
  const firstResult = (number * 10) / 100;
  // const finalResult =   number - firstResult
  return firstResult;
};

const finalPrice = (number) => {
  return number + number * 0.09;
};

const searchFa = (courses , search) =>{
  if(!search) return courses
  const finalSearch = courses.filter(course => course.cardTitle.includes(search))
  return finalSearch
}

export { sumCourse, courseDetails, separator, tax, disCount, finalPrice ,searchFa };
