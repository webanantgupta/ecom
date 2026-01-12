import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ViewDetailes from "../pages/ViewDetailes";
import Cart from "../pages/Cart";
import Error from "../pages/Error";
import Header from "../common/Header";
import Footer from "../common/Footer";

const AppRoute = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/view"} element={<ViewDetailes />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoute;
