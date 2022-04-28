import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import {
  productReducer,
  productDetailsReducer,
  productCreateReducer,
} from "./Reducers/productReducer.js"
import { cartAddReducer } from "./Reducers/cartReducer.js"
import { orderReducer, orderDetailsReducer } from "./Reducers/orderReducer.js"
import {
  registerReducer,
  loginReducer,
  userReducer,
  userUpdateReducer,
  allUserReducer,
} from "./Reducers/userReducer.js"
const reducer = combineReducers({
  productsReducer: productReducer,
  productDetails: productDetailsReducer,
  cart: cartAddReducer,
  registerReducer: registerReducer,
  loginReducer: loginReducer,
  userReducer: userReducer,
  userUpdate: userUpdateReducer,
  allUserReducer: allUserReducer,
  orderReducer: orderReducer,
  orderDetails: orderDetailsReducer,
  productCreate: productCreateReducer,
})
let middleware = [thunk]

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []
const addressItemsFromStorage = localStorage.getItem("addressInfo")
  ? JSON.parse(localStorage.getItem("addressInfo"))
  : []
const userItemsFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : []
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    ShippingAddress: addressItemsFromStorage,
  },
  loginReducer: {
    userInfo: userItemsFromStorage,
  },
}
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
