import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { Link } from "react-router-dom";

const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container">
          {coursesCard.map((val, index) => (
            <div className="items" key={index}>
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    {val.courTeacher.map((details, i) => (
                      <div className="box" key={i}>
                        <div className="dimg">
                          <img src={details.dcover} alt="" />
                        </div>
                        <div className="para">
                          <h4>{details.name}</h4>
                        </div>
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <Link to="/enrollnow">
                <button className="outline-btn">ENROLL NOW !</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
