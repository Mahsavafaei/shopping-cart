import { Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import CourseProvider from "./context/CourseContext";
import HomePage from "./pages/HomePage";
import PayCart from "./PayCart";
import { LoginStateProvider } from "./context/userContext";

function App() {
  return (
   <LoginStateProvider>
     <CartProvider>
      <CourseProvider>
       <Routes>
        <Route path="/"  element={ <HomePage />} />
        <Route path="/payment" element={<PayCart/>} />
       </Routes>
      </CourseProvider>
    </CartProvider>
   </LoginStateProvider>
  );
}

export default App;
