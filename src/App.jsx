import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <div className="text-info">
        <Home />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
