import React from "react"
import Happy from "../../imgs/happy.jpg"
import horizental from "../../imgs/horizental.jpg"
import Two from "../../imgs/two.jpg"
import "./Filter.css"
const Filter = () => {
  return (
    <div className="filter my-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-5 text-center">
            <h1>New Arrrivals</h1>
          </div>
          <div className="col-lg-6 m-auto text-center nav2">
            <li>
              <a href="">Pink</a>
            </li>
            <li>
              <a href="">Green</a>
            </li>
            <li>
              <a href="">Yellow</a>
            </li>
            <li>
              <a href="">Red</a>
            </li>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-3">
            <div className="card border-0">
              <div className="card-body py-5 bg-light">
                <img src={Happy} className="img-fluid" alt="" />
              </div>
              <div className="card-footer text-center bg-white border-0">
                <h5>Girls Bag</h5>
                <p className="m-0">$29.99</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card border-0">
              <div className="card-body py-5 bg-light">
                <img src={Two} className="img-fluid" alt="" />
              </div>
              <div className="card-footer text-center bg-white border-0">
                <h5>Girls Bag</h5>
                <p className="m-0">$29.99</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card border-0">
              <div className="card-body py-5 bg-light">
                <img src={horizental} className="img-fluid" alt="" />
              </div>
              <div className="card-footer text-center bg-white border-0">
                <h5>Girls Bag</h5>
                <p className="m-0">$29.99</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card border-0">
              <div className="card-body py-5 bg-light">
                <img src={Happy} className="img-fluid" alt="" />
              </div>
              <div className="card-footer text-center bg-white border-0">
                <h5>Girls Bag</h5>
                <p className="m-0">$29.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
