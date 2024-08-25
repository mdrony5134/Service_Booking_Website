import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
