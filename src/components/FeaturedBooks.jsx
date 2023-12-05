import React from "react";
import defaultImage from "../assets/defaultImage.jpg";
function FeaturedBooks({ group, forwardRef }) {
  return (
    <div
      group={group}
      ref={forwardRef}
      className=" w-full px-8 shrink-0 h-full"
    >
      <div className="h-full border-red-500 border-solid border-2 flex gap-x-4">
        <article id="feat-books" className="child:py-2">
          <h1 id="logo">{group}</h1>
          <p className="">
            <strong>Synopsis: </strong>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quos fugiat aut, quis consequatur nisi delectus
            soluta quidem laborum debitis commodi numquam autem consequuntur,
            quo voluptatem aliquam? At porro explicabo possimus! Sint iure in
            beatae porro reprehenderit doloribus unde illo non odio ex inventore
            magni qui nisi, eos iusto eaque dolorum! Qui esse doloremque eveniet
            facere. Dicta quasi ad optio pariatur?
          </p>
          <p>
            <strong>Author: </strong> No Author
          </p>
          <p>
            <strong>Genres: </strong>
          </p>
        </article>
        <img src={defaultImage} id="featured-img" />
      </div>
    </div>
  );
}

export default FeaturedBooks;
