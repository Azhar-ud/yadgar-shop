import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SlidingAlert = ({ alert }) => {
  return (
    <div>
      {/* Sliding Alert */}
      <div
        style={{
          position: "fixed",
          top: "20px", // slide in/out
          left: "20px",
          transition: "top 0.4s ease-in-out",
          zIndex: 1050,
        }}
      >
        <Alert variant="success" dismissible className="shadow">
          ✅ {alert}
        </Alert>
      </div>
    </div>
  );
};

export default SlidingAlert;
