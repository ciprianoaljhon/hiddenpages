import React from "react";
import { useParams } from "react-router-dom";

function FilteredCollection() {
  const { id } = useParams();
  console.log(id);
  return <div>FilteredCollection</div>;
}

export default FilteredCollection;
