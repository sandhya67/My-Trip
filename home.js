import React from "react";


function Home() {
  return (
    <div className="Card">
      <h3>Trip-Package</h3>
      <div className="row row-cols-1 row-cols-md-3 card-hotel">
        <div className="col mb-4">
          <div className="card">
            <img
              src="./Travel/logo512.png"
              className="card-img-top"
              alt=" "
              height="100px"
              width="100px"
            />
            
        <div className="col mb-4">
          <div className="card">
            <img src="./Travel wb/bengaluru.jpg" className="card-img-top"   height="300px"
              width="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title">bengaluru</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="./Travel wb/ladak.jpg" className="card-img-top"  height="300px"
              width="300px"
              alt="..." />
            <div className="card-body">
              <h5 className="card-title">ladak</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="./Travel wb/goa.jpg" className="card-img-top"  height="300px"
              width="300px"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">goa</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="./Travel wb/indiagate.jpg" className="card-img-top"   height="300px"
              width="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title">indiagate</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Home;         
              
              