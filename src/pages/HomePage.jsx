import { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { CartContext } from "../context/CartContext";
import { useCourse } from "../context/CourseContext";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Search from '../Search'
import { searchFa } from "../helper/helper";

// Develop with ❤️ by Ali & Mahsa for TutLearning

function HomePage() {

  const courses = useCourse();
  const {state}  = useContext(CartContext);
  
  const [displayed , setDisplayed] = useState([])
  const [query , setQuery] = useState({})

  useEffect(()=>{
    setDisplayed(courses)
  } , [courses])

  useEffect(()=>{
    setDisplayed(searchFa(courses, query.search))
    console.log(query)
  } , [query])

  const [search , setSearch] = useState('')
  const searchHandler =()=>{
    setQuery(query => ({...query ,  search}))
  }
  return (
    <div className="mx-auto">
      <div className="w-full bg-blue-500 h-10 mb-6">
        <Link to="/payment">
          <div className="relative w-[300px] h-full pl-6"><BsCart2 className="text-white font-bold text-2xl " /></div>
         <span className="text-black absolute top-4  left-5 px-1 bg-white rounded-full text-sm"> {state.itemCounter}</span>
        </Link>
      </div>
    <Search search={search} setSearch={setSearch} searchHandler={searchHandler} />
      <div className=" mx-auto flex justify-center items-center flex-wrap">
        {displayed.map((course) => (
          <Card data={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
