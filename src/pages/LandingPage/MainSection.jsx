import React from "react";
import ExploreButton from "../../components/ExploreButton";
import img3 from "../../assets/display/img3.png";
function MainSection() {
  return (
    <section className="flex h-full w-full">
      <div className="flex flex-col justify-center   h-full w-1/2 min-w-[400px]">
        <h1 className="responsive-txt-900 font-bold text-5xl mb-3 ">
          Discover Worlds Between Pages, Explore Beyond Words.
        </h1>
        <p className="responsive-txt-400">
          Immerse yourself in a world of stories, ideas, and adventures—all just
          a click away. Our carefully curated collection spans genres and
          cultures, offering a diverse tapestry of books waiting to be explored.
        </p>
        <ExploreButton></ExploreButton>
      </div>
      <div className="img-container-res flex justify-center items-center h-full w-1/2 min-w-[400px]">
        <img src={img3} alt="" />
      </div>
    </section>
  );
}

export default MainSection;
