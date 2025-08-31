import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  ListGroup,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCartThunk } from "../slices/cartSlices";
import { alertThunk } from "../slices/alertSlice";

const AppNavbar = () => {
  const [showCart, setShowCart] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCartThunk(id));
    dispatch(alertThunk("Product removed from cart", 3));
  };

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm px-3 sticky-top">
        <Container>
          {/* Brand */}
          <Navbar.Brand className="fw-bold" href="/">
            Yadgaar Shop
          </Navbar.Brand>

          {/* Hamburger Toggle */}
          <Navbar.Toggle aria-controls="main-navbar" />

          {/* Collapsible Menu */}
          <Navbar.Collapse id="main-navbar">
            {/* Center Links */}
            <Nav className="mx-auto">
              <Nav.Link href="/explore">Explore</Nav.Link>
              <Nav.Link href="/ac">AC</Nav.Link>
              <Nav.Link href="/dc">DC</Nav.Link>
            </Nav>
            <div
              className="position-relative"
              style={{ display: "inline-block" }}
            >
              {/* Cart count div */}
              {cart.length > 0 && (
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                  style={{
                    position: "absolute",
                    top: "-8px", // adjust to move up
                    right: "-10px", // adjust to move right
                    width: "18px",
                    height: "18px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {cart.length}
                </div>
              )}

              {/* Cart Icon */}
              <FaShoppingCart
                size={22}
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Cart Sidebar */}
      <Offcanvas show={showCart} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart && cart.length > 0 ? (
            <>
              <ListGroup variant="flush">
                {cart.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {/* Left side: Image + details */}
                    <div className="d-flex align-items-center">
                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.name}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        />
                      )}
                      <div>
                        <strong>{item.name}</strong>
                        <div
                          className="text-muted"
                          style={{ fontSize: "0.85rem" }}
                        >
                          ₨{item.price / item.quantity} × {item.quantity}
                        </div>
                      </div>
                    </div>

                    {/* Right side: Delete button */}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      ✕
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              {/* Total Price */}
              <div className="d-flex justify-content-between align-items-center mt-3">
                <strong>Total:</strong>
                <span>
                  ₨
                  {cart
                    .reduce((sum, item) => sum + item.price, 0)
                    .toLocaleString()}
                </span>
              </div>

              {/* WhatsApp Order Button */}
              <div className="mt-3 text-center">
                <Button
                  variant="success"
                  className="w-100"
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://wa.me/923365959996?text=${encodeURIComponent(
                    `Hello, I'd like to place an order:\n\n${cart
                      .map(
                        (item) =>
                          `• ${item.name} (${item.quantity} × ₨${
                            item.price / item.quantity
                          }) = ₨${item.price}`
                      )
                      .join("\n")}\n\nTotal: ₨${cart.reduce(
                      (sum, item) => sum + item.price,
                      0
                    )}`
                  )}`}
                >
                  Send Order on WhatsApp
                </Button>
              </div>
            </>
          ) : (
            <p className="text-muted text-center">Your cart is empty!</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppNavbar;
