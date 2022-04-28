import React from "react"
import "./Product.css"
import Beauti from "../../imgs/beauti.png"
import Brwon from "../../imgs/brown-leather-shoes.jpg"
import POLO from "../../imgs/fashion-polo-shirt-men.jpg"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { allProduct, listProductDetails } from "../../action/productAction.js"
import Loader from "../Utils/Loader"
import { useHistory } from "react-router-dom"
const Product = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { loading, products } = useSelector((state) => state.productsReducer)
  useEffect(() => {
    dispatch(allProduct())
  }, [dispatch])

  const handleProduct = (id) => {
    history.push(`/${id}`)
  }
  return (
    <section className="product">
      <div className="container">
        <h1>Our Product</h1>
        <div className="row pt-5">
          {loading ? (
            <Loader />
          ) : (
            products &&
            products.map((product) => (
              <div className="col-lg-3" key={product._id}>
                <div className="card border-0">
                  <div className="card-body py-5 bg-light">
                    <img src={product.image} className="img-fluid" alt="" />
                  </div>
                  <div className="card-footer text-center bg-white border-0">
                    <h5>{product.name}</h5>
                    <p className="m-0">${product.price}</p>
                  </div>
                  <button
                    className="btn3 overlay"
                    onClick={() => handleProduct(product._id)}
                  >
                    Product Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Product
