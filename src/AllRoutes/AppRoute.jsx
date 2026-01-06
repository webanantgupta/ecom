import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ViewDetailes from "../pages/ViewDetailes";
import Cart from "../pages/Cart";
import Error from "../pages/Error";
import Header from "../common/Header";

const AppRoute = () =>{
    return <div>
<BrowserRouter>
<Header/>
<Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/view"} element={<ViewDetailes/>}/>
    <Route path={"/cart"} element={<Cart/>}/>
    <Route path={"*"} element={<Error/>}/>
</Routes>
</BrowserRouter>
    </div>
}

export default AppRoute;