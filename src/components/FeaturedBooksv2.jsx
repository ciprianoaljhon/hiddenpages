import React from "react";
import { NavLink } from "react-router-dom";

function FeaturedBooksv2({
  img,
  header,
  emphasize = undefined,
  subHeader,
  btnTxt,
  imgClass,
  fSize = "text-3xl",
  children,
  className,
}) {
  return (
    <>
      <div className="flex flex-col items-start gap-x-2 ft-v2">
        <h4 className="mb-4 text-lg text-gray-600 responsive-txt-600">
          {subHeader}
        </h4>
        <header>
          <div className={"mb-10 responsive-txt-800 " + fSize}>
            {emphasize && (
              <h1 className={"responsive-txt-900 text-red-500 " + fSize}>
                {emphasize}
              </h1>
            )}

            <h1 className="responsive-txt-900 text-4xl">{header}</h1>
          </div>
        </header>
        <NavLink to={"/collections"}>
          <button className="primary-btn px-8 py-2 bg-main-clr hover:bg-main-clr-opacity">
            {btnTxt}
          </button>
        </NavLink>
      </div>
      <img src={img} className={imgClass} />
      <div className={className}>{children}</div>
    </>
  );
}

export default FeaturedBooksv2;
