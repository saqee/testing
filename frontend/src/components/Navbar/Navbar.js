import React from "react"
import "./Navbar.css"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, Link } from "react-router-dom"
import { saveShippingAddress } from "../../action/cartAction.js"
const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const login = useSelector((state) => state.loginReducer)
  const { userInfo } = login
  console.log(userInfo)
  let history = useHistory()
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Fashion
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-hamburger"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Men's
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Women's
                </Link>
              </li>
              {userInfo && userInfo.isAdmin ? (
                <div style={{ marginTop: "5.5px" }}>
                  <span>
                    <i className="pt-5 px-3" />
                    <Link
                      to={`/all/profile`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <i>User List</i>
                    </Link>
                  </span>

                  <span>
                    <i className="pt-3 px-3" />
                    <Link
                      to={`/setting/profile/${userInfo._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <i>Orders List</i>
                    </Link>
                  </span>
                  <span>
                    <i className="pt-3 px-3" />
                    <Link
                      to={`/create/product`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <i>Product List</i>
                    </Link>
                  </span>
                </div>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Kids
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
            <form className="d-flex">
              <span>
                {" "}
                {
                  <Link to={`/cart/info`}>
                    {" "}
                    <i className="fas fa-heart" />{" "}
                  </Link>
                }
              </span>
              <span>
                {" "}
                <i className="fab fa-opencart px-3" />{" "}
              </span>
              <span>
                {userInfo && userInfo.name ? (
                  <>
                    <span>
                      <i className="px-3" />
                      {userInfo.name}
                    </span>
                    <span>
                      <i className="px-3" />
                      <Link
                        to={`/setting/profile/${userInfo._id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <i>Profile</i>
                      </Link>
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      <Link to={`/login/loginsite`}>
                        {" "}
                        <i className="fas fa-user px-3" />
                      </Link>
                    </span>
                  </>
                )}
              </span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
