import Button from "../Components/Elements/Button/Index";
import CardProduct from "../Components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Sepatu Baru",
    price: "Rp 200.000",
    image: "/images/product-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        eos numquam rerum recusandae dicta. Reprehenderit ullam iure earum
        facere ratione sed labore, laudantium expedita placeat quo nobis.
        Recusandae, fugit dolor.`,
  },
  {
    id: 2,
    title: "Sepatu Lama",
    price: "Rp 100.000",
    image: "/images/product-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        eos numquam rerum recusandae dicta.`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 flex-wrap">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
