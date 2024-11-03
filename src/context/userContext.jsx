import { createContext, useContext, useState} from "react";

const LoginContext =createContext()


export const LoginStateProvider =({children})=>{
 
  const [isLogin,setIsLogin]=useState(true)
  
    

    return(
      <LoginContext.Provider value={{isLogin,setIsLogin}}>
        {children}
      </LoginContext.Provider>
    )
  }
const useLogin = () =>{
  const login = useContext(LoginContext)
  return  login
}
  
export {useLogin}