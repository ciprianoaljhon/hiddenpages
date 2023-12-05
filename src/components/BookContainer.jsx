// import React from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { NavLink } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

// const book = {
//   bookID: uuidv4(),
//   title: "No title",
//   desc: "No desc",
//   imgSrc: "../assets/defaultImage.jpg",
//   author: "No author",
//   price: "P100",
// };
// function BookContainer({ children }) {
//   return (
//     <div
//       id="book-container"
//       className="flex flex-col border-solid border-red-500 border-2 px-6 py-2 "
//     >
//       <div className="flex items-center  justify-between">
//         <h1 className="">Category Name</h1>
//         <NavLink className="flex items-center text-md font-extralight underline">
//           View More{" "}
//           <IoIosArrowRoundForward className="text-2xl mt-[2px]"></IoIosArrowRoundForward>
//         </NavLink>
//       </div>
//       {children}
//     </div>
//   );
// }

// export default BookContainer;

import React from "react";
import { v4 as uuidv4 } from "uuid";
function BookContainer({ children, className }) {
  return (
    <div id="book-container" className={" h-full rounded-lg " + className}>
      {children}
    </div>
  );
}

export default BookContainer;
