import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../slices/cartSlices";
import { alertThunk } from "../slices/alertSlice";

const ProductList = ({ list }) => {
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    let addProduct = {
      id: product.id,
      name: product.name,
      quantity: 1,
      price: product.price,
      image_url: product.image_url,
      category: product.category,
      type: product.type,
      description: product.description,
    };
    dispatch(addToCartThunk(addProduct));
    dispatch(alertThunk("Product added to cart", 3));
  };

  return (
    <Container className="py-5">
      {/* Button to load products */}
      <div className="text-center mb-4"></div>

      {/* Product Grid */}
      <Row>
        {list.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
            <Card className="h-100 shadow-sm">
              {/* If product has an image */}
              <Link to={`/product/${product.id}`}>
                {product.image_url && (
                  <Card.Img
                    variant="top"
                    src={product.image_url}
                    alt={product.name}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      backgroundColor: "#f8f9fa",
                    }}
                  />
                )}
              </Link>
              <Card.Body>
                <Card.Title as={Link} to={`/product/${product.id}`}>
                  {product.name}
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  Category: {product.category} Type: {product.type}
                </Card.Text>
                <Card.Text className="fw-bold">
                  Price: Rs {product.price}
                </Card.Text>
                <Button
                  variant="success"
                  onClick={() => handleAddProduct(product)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default ProductList;
