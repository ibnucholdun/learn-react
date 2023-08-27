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

const ProductPage = () => {
  return (
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
  );
};

export default ProductPage;
