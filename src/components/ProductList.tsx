import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fething producst in ", category);
    setProducts(["Cloth", "House"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
