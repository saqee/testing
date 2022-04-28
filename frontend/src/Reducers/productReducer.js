import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
} from "../constants/productContants.js"
export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return {
        loading: true,
      }
    case "PRODUCT_SUCCESS":
      return {
        products: action.payload,
      }
    case "PRODUCT_LIST_FAIL":
      return {
        error: action.payload,
      }

    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_CREATE_REQUEST":
      return {
        loading: true,
      }
    case "PRODUCT_CREATE_SUCCESS":
      return {
        products: action.payload,
      }
    case "PRODUCT_CREATE_FAIL":
      return {
        error: action.payload,
      }

    default:
      return state
  }
}

export const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_DETAILS_REQUEST":
      return {
        loading: true,
      }
    case "PRODUCT_DETAILS_SUCCESS":
      return {
        product: action.payload,
      }
    case "PRODUCT_DETAILS_FAIL":
      return {
        error: action.payload,
      }

    default:
      return state
  }
}
