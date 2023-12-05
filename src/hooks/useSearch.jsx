import { useState } from "react";

export const useSearch = () => {
  const [data, setData] = useState("");

  return [data, setData];
};
