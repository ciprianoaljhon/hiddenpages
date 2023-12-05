import React from "react";

function ProductDescription({ className }) {
  return (
    <article className={className}>
      {/* <div className="wrapper">
        <h1>{book.title}</h1>
        <p>
          by <em className="font-bold">{book.author}</em>
        </p>
      </div>
      <div className="genre-container">
        <p htmlFor="genres" className="inline font-semibold">
          {"Genre(s): "}
        </p>
        <ul name="genres" className="inline-flex gap-x-1">
          {book.genre.map((genre) => {
            return (
              <p
                key={genre}
                className="bg-neutral-3 px-2 py-1 rounded-sm text-xs"
              >
                {genre}
              </p>
            );
          })}
        </ul>
      </div> */}
      <p className="text-justify max-h-full">
        <strong>Synopsis: </strong>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ad esse optio provident! Sed laboriosam iste maxime,
        aut expedita fugiat odit tenetur necessitatibus illo consequuntur
        accusantium laborum at dolorem eveniet temporibus. Id amet rem pariatur
        iste eius harum natus voluptatum maxime facere voluptate molestias neque
        fugit dolores excepturi rerum, deleniti mollitia quaerat. Iusto laborum
        dolores possimus eius sapiente soluta placeat velit! Dolorum aliquam
        ipsum aut, provident ad eos, nisi amet aperiam quas non consectetur
        dolores possimus incidunt placeat minus, nam distinctio? Adipisci,
        quibusdam. Tempore adipisci, inventore sequi voluptatibus aut minus
        provident! Iste quia illo ad amet consectetur quae eaque, atque,
        molestiae inventore dignissimos animi cupiditate temporibus eum
        praesentium quos? Fugiat repudiandae deleniti voluptatibus deserunt
        magnam nulla quia totam error cupiditate. Repellendus? Vitae minima
        placeat, qui beatae autem obcaecati iusto, totam repellendus possimus
        maiores ipsum dolorum nostrum quisquam perspiciatis aspernatur.
        Veritatis voluptate hic neque doloremque ab ducimus numquam similique
        sint nesciunt amet!
      </p>
    </article>
  );
}

export default ProductDescription;
