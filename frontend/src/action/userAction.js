import axios from "axios"
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from "../constants/userConstants"

export const register = (dataInfo) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })
    const { data } = await axios.post("/api/users/register", dataInfo)
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const login = (dataInfo) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const { data } = await axios.post("/api/users/login", dataInfo)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })
    const {
      loginReducer: { userInfo },
    } = getState()
    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users/${id}`, config)
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const userUpdate = (dataInfo, id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })
    const {
      loginReducer: { userInfo },
    } = getState()
    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/users/${id}`, dataInfo, config)
    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
    dispatch({
      type: "USER_UPDATE_PROFILE_RESET",
    })
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const getAllUser = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })
    const {
      loginReducer: { userInfo },
    } = getState()
    const config = {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.get(`/api/users`, config)
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: error.response.data.message,
    })
  }
}
