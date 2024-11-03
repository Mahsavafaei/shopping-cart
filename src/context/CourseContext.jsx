import { createContext, useContext, useEffect } from 'react';
import data from '../utils/data'

 const CourseContext = createContext()

function CourseProvider({children}) {
 
  return (
 <CourseContext.Provider value={data}>{children}</CourseContext.Provider>
  )
}
const useCourse =()=>{
  const courses = useContext(CourseContext)
  return courses
}

export default CourseProvider;
export {useCourse}