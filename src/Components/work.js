import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "1. First, browse through a variety of delicious food options. ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "2. Next, choose your favorite dish and place your order in just a few clicks.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "3. Finally, sit back and relax while your food is freshly prepared and delivered right to your doorstep.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;