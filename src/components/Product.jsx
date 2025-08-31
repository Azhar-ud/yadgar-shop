import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { addToCartThunk } from "../slices/cartSlices";
import { useDispatch } from "react-redux";
import { alertThunk } from "../slices/alertSlice";

const Product = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product not found</h2>
      </Container>
    );
  }
  const suggested = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3); // limit to 3 items

  const handleAddProduct = (product) => {
    let addProduct = {
      id: product.id,
      name: product.name,
      quantity: quantity,
      price: product.price,
      image_url: product.image_url,
      category: product.category,
      type: product.type,
      description: product.description,
    };
    try {
      dispatch(addToCartThunk(addProduct));
      dispatch(alertThunk("Product added to cart", 3));
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Left: Product Image */}
        <Col md={6}>
          <Card className="shadow-sm">
            {product.image_url && (
              <Card.Img
                variant="top"
                src={product.image_url}
                alt={product.name}
              />
            )}
          </Card>
        </Col>

        {/* Right: Product Info */}
        <Col md={6}>
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Type:</strong> {product.type}
          </p>
          <p>
            <strong>Quantity:</strong>{" "}
            <Button variant="light" onClick={() => setQuantity(quantity - 1)}>
              -
            </Button>{" "}
            {quantity}{" "}
            <Button variant="light" onClick={() => setQuantity(quantity + 1)}>
              +
            </Button>
          </p>
          <h4 className="text-success fw-bold">Price: Rs {product.price}</h4>
          <Button
            variant="success"
            size="lg"
            onClick={() => handleAddProduct(product)}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
      {/* Suggested Products */}
      {suggested.length > 0 && (
        <>
          <h3 className="mb-4 mt-5">You may also like</h3>
          <Row>
            {suggested.map((item) => (
              <Col key={item.id} md={4} sm={6} xs={12} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-decoration-none text-dark"
                  >
                    {item.image_url && (
                      <Card.Img
                        variant="top"
                        src={item.image_url}
                        alt={item.name}
                      />
                    )}
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Card.Text className="fw-bold">${item.price}</Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Product;
