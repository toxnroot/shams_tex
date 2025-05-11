import Product from "../Product/Product";

const Products = ({ title }) => {
  return (
    <section className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 mt-4">
      <p className="text-2xl sm:text-3xl font-bold text-center p-2 backdrop-blur-xl rounded-lg bg-white text-amber-500">
        {title}
      </p>
      <div className="min-h-screen max-h-full text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-4 place-items-center">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Products;