import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  brand: string;
  price: number;
};

export const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) throw Error("something wrong with response");

      const { products } = await res.json();
      setProducts(products);
      return products;
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <h2>Lista</h2>
      {products.length > 0 && (
        <ul>
          {products.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
