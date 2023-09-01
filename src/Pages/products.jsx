import { useContext, useEffect, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import { getProducts } from "../Services/products.service";
import { useLogin } from "../Hooks/useLogin";
import TableCart from "../Components/Fragments/TableCart";
import Navbar from "../Components/Layouts/Navbar";
import { DarkMode } from "../Context/DarkMode";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center py-5${isDarkMode && " bg-slate-900"}`}
      >
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
