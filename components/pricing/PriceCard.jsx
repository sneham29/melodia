import React from "react";
import { useHistory } from "react-router-dom";
import { price } from "../../dummydata"; // Make sure this path is correct

const PriceCard = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push('/checkout');
  };

  return (
    <section className="price">
      <h1>Our Pricing Plans</h1>
    
      <div className="items-container">
        {price.map((val, index) => (
          <div key={index} className="items">
            <h4>{val.name}</h4>
            <h1>
              <span>₹ </span>
              {val.price}
            </h1>
            <p>{val.desc}</p>
            <button className="outline-btn" onClick={handleGetStarted}>
              GET STARTED
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceCard;
