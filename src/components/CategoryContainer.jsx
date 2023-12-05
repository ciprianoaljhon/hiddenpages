import React from "react";
function CategoryContainer({ children }) {
  return (
    <>
      <div className="w-full flex gap-y-4 flex-col items-center py-10">
        <h3>Featured Categories</h3>
        <div
          id="categories-btn"
          className="flex gap-3 items-center justify-center flex-wrap child:grow"
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default CategoryContainer;
