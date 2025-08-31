import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <h1 className="fw-bold">Brighten Your World</h1>
              <p className="lead">
                Discover premium AC & DC lights for your home and business.
              </p>
              <Button variant="primary" href="/explore">
                Shop Now
              </Button>
            </Col>
            {/* <Col md={6}>
             
              <img
                src="https://images.unsplash.com/photo-1507477338202-487295c4a84f"
                alt="Modern Lights"
                className="img-fluid rounded shadow"
              />
            </Col> */}
          </Row>
        </Container>
      </section>

      {/* Featured Products Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-4">Featured Lights</h2>
          <Row>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  style={{ height: "275px", objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1532007271951-c487760934ae?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>LED Bulb</Card.Title>
                  <Card.Text>Energy efficient AC LED bulb.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
                  style={{ height: "275px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>Ceiling Light</Card.Title>
                  <Card.Text>Brighten your room with style.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  style={{ height: "275px", objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1556490643-28d9a1c29ab7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>RGB Lights</Card.Title>
                  <Card.Text>Durable DC outdoor lighting solution.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
