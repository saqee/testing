import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Next from "./components/Next/Next"
import Product from "./components/Product/Product"
import Filter from "./components/Filter/Filter"
import Iconic from "./components/Iconic/Iconic"
import ProductScreen from "./components/SignleData/SignleData"
import AddCartScreen from "./components/AddCartScreen/AddCartScreen"
import ShippingScreen from "./components/ShippingAddress/ShippingScreen"
import PaymentScreen from "./components/PaymentScreen/PaymentScreen"
import RegisterScreen from "./components/Register/Register"
import LoginScreen from "./components/LoginScreen/LoginScreen"
import ProfileScreen from "./components/ProfileScreen/ProfileScreen"
import PlaceOrderScreen from "./components/PlaceOrderScreen/PlaceOrderScreen"
import OrderScreen from "./components/OrderScreen/OrderScreen"
import ProductCreateScreen from "./components/Product/ProductCreate"
import UserListScreen from "./components/UserList/UserList"
import { BrowserRouter, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route path="/" exact>
          <Main />
          <Next />
          <Product />
          <Filter />
          <Iconic />
        </Route>
        <Route path="/:id" exact>
          <ProductScreen />
        </Route>
        <Route path="/cart/:id?">
          <AddCartScreen />
        </Route>
        <Route path="/address/shipping">
          <ShippingScreen />
        </Route>
        <Route path="/money/payment">
          <PaymentScreen />
        </Route>
        <Route path="/check/placeorder">
          <PlaceOrderScreen />
        </Route>
        <Route path="/order/:id">
          <OrderScreen />
        </Route>
        <Route path="/register/registration">
          <RegisterScreen />
        </Route>
        <Route path="/login/loginsite">
          <LoginScreen />
        </Route>
        <Route path="/setting/profile/:id">
          <ProfileScreen />
        </Route>
        <Route path="/all/profile/">
          <UserListScreen />
        </Route>
        <Route path="/create/product">
          <ProductCreateScreen />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App
