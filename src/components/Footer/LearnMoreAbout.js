import React from "react";
import {Link} from 'react-router-dom';
function LearnMoreAboutSection() {
  return (
    <>
      <div className="container">
        <div className="mainCon">
          <div className="card-i">
            <div className="img-con">
              <img
                className="inner-con-img"
                src="img/bg/bg14.jpg"
                alt="node owner"
              />
            </div>
            <Link to="/node" className="btn  btn-i">Learn more about Node Owner</Link>
          </div>
          <div className="card-i">
            <div className="img-con">
              <img
                className="inner-con-img"
                src="img/bg/bg4.jpg"
                alt="node owner"
              />
            </div>
            <Link to="/coalition" className="btn  btn-i">Learn more about Coalition</Link>
          </div>

          <div className="card-i">
            <div className="img-con">
              <img
                className="inner-con-img"
                src="img/bg/bg21.jpg"
                alt="node owner"
              />
            </div>
            <Link to="/app-dev"  className="btn  btn-i">
              Learn more about Application Developers
            </Link>
          </div>

          <div className="card-i">
            <div className="img-con">
              <img
                className="inner-con-img"
                src="img/bg/bg20.jpg"
                alt="node owner"
              />
            </div>
            <Link to="/users"  className="btn btn-i">Learn more about Users</Link>
          </div>

          <div className="card-i">
            <div className="">
              <img
                className="inner-con-img"
                src="img/bg/bg19.jpg"
                alt="node owner"
              />
            </div>
            <Link to="/assets"  className="btn  btn-i">
              Learn more about Asset Backed Providers
            </Link>
          </div>

          <div className="card-i">
            <div className="img-con">
              <img
                className="inner-con-img"
                src="img/bg/bg18.jpg"
                alt="node owner"
              />
            </div>
            <Link to="/authentic"  className="btn  btn-i">
              Learn more about Authentic Intelligence
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearnMoreAboutSection;
