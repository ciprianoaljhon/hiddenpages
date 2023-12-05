import React from "react";

function FeatureItem(props) {
  const {
    feature = "feature",
    icon = "icon",
    description = "description",
  } = props;
  return (
    <li className="feat-card-res w-60 flex flex-col items-center p-4 text-center shadow-xl">
      <span className="responsive-text-700  text-4xl">{icon} </span>
      <h6 className="font-bold responsive-txt-400">{feature}</h6>
      <p className="responsive-txt-400">{description}</p>
      <div className="offset-border"></div>
    </li>
  );
}

export default FeatureItem;
