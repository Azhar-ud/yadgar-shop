import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Explore = ({ products, loading }) => {
  const category = useParams().category;
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (category === "ac") {
    const acProducts = products.filter(
      (product) => product.category.toLowerCase() === "ac"
    );
    products = acProducts;
  }

  if (category === "dc") {
    const dcProducts = products.filter(
      (product) => product.category.toLowerCase() === "dc"
    );
    products = dcProducts;
  }

  return (
    <>
      <ProductList list={products} />
    </>
  );
};

export default Explore;
