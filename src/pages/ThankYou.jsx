import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="thank-you-page container text-center py-20">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="mb-6">
        Your message has been successfully submitted. We will get back to you shortly.
      </p>
      <Link to="/" className="btn">
        Go to Home
      </Link>
    </div>
  );
}

export default ThankYou;
