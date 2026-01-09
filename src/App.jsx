import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AllRoutes/AppRoute";
import ScrollTop from "./common/ScrollTop";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <ScrollTop />
          <AppRoute />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
