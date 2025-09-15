import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for the "Go to Home" button

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default page reload

    const formData = new FormData(event.target);

    try {
      await fetch("https://formsubmit.co/svmodularinteriors21@gmail.com", {
        method: "POST",
        body: formData,
      });
      setIsSubmitted(true); // Show thank-you page
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
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
            onSubmit={handleSubmit} // custom submit handler
          >
            <input type="text" name="name" placeholder="Full Name*" required />
            <input type="email" name="email" placeholder="Email Address*" required />
            <input type="text" name="mobile" placeholder="Mobile Number*" required />
            <input type="text" name="city" placeholder="City*" required />
            <textarea name="message" placeholder="Message*" rows="5" required></textarea>

            {/* Hidden fields for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <button type="submit" className="btn">Submit</button>
          </form>
        </>
      )}
    </section>
  );
}

export default Contact;
