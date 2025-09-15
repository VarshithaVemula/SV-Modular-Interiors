import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for the "Go to Home" button

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default page reload
    
    // You can add your form submission logic here, e.g., using fetch()
    // For Formsubmit, the form's 'action' and 'method' attributes handle the email sending automatically.
    
    setIsSubmitted(true); // Set state to true to show the thank you message
  };

  return (
    <section className="contact-page container" id="Contact">
      {isSubmitted ? (
        // Display the "Thank You" page after submission
        <div className="thank-you-page">
          <h1>Thank You!</h1>
          <p>Your message has been successfully submitted. We will get back to you shortly.</p>
          <Link to="/" className="btn">Go to Home</Link>
        </div>
      ) : (
        // Display the contact form
        <>
          <h1><center>Contact Us</center></h1>
          <form
            className="contact-form"
            action="https://formsubmit.co/svmodularinteriors21@gmail.com"
            method="POST"
            onSubmit={handleSubmit} // Use the onSubmit handler
          >
            <input type="text" name="name" placeholder="Full Name*" required />
            <input type="email" name="email" placeholder="Email Address*" required />
            <input type="text" name="mobile" placeholder="Mobile Number*" required />
            <input type="text" name="city" placeholder="City*" required />
            <textarea name="message" placeholder="Message*" rows="5" required></textarea>
            <button type="submit" className="btn">Submit</button>
          </form>
        </>
      )}
    </section>
  );
}

export default Contact;