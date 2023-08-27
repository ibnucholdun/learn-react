import CardProduct from "../Components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5 flex-wrap">
      <CardProduct>
        <CardProduct.Header image="/images/product-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          eos numquam rerum recusandae dicta. Reprehenderit ullam iure earum
          facere ratione sed labore, laudantium expedita placeat quo nobis.
          Recusandae, fugit dolor.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 200.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
