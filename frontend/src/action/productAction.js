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
import axios from "axios"
export const allProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    })
    const { data } = await axios.get("/api/products")

    dispatch({
      type: PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    })
    const { data } = await axios.get(`/api/products/${id}`)
    console.log(data)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const createProduct = (dataInfo) => async (dispatch, getState) => {
  try {
    const {
      loginReducer: { userInfo },
    } = getState()
    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post("/api/products/create", dataInfo, config)
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data })
  } catch (error) {
    /* dispatch({type:PRODUCT_CREATE_FAIL,
      payload:error.response.data}) */
  }
}
