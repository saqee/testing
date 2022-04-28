import React from "react"
import "./Next.css"
import Beautiful from "../../imgs/beautiful.jpg"
import Mann from "../../imgs/mann.jpg"
import Girl from "../../imgs/girly.jpg"
const Next = () => {
  return (
    <section className="next py-5 ">
      <div className="container-fluid py-5">
        <div className="row pt-5 g-2">
          <div className="col-lg-4">
            <div className="card zoom-n-rotate">
              <img src={Beautiful} alt="" />
              <button className="btnc">Shop More</button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card zoom-n-rotate">
              <img src={Girl} alt="" />
              <button className="btnc">Shop More</button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card zoom-n-rotate">
              <img src={Mann} alt="" />
              <button className="btnc">Shop More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Next
