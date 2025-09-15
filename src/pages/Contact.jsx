import React from "react";

function Contact() {
  return (
    <section className="contact-page container" id="Contact">
      <h1>
        <center>Contact Us</center>
      </h1>
      <form
        className="contact-form"
        action="https://formsubmit.co/svmodularinteriors21@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Full Name*" required />
        <input type="email" name="email" placeholder="Email Address*" required />
        <input type="text" name="mobile" placeholder="Mobile Number*" required />
        <input type="text" name="city" placeholder="City*" required />
        <textarea name="message" placeholder="Message*" rows="5" required></textarea>

        {/* Hidden fields for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://sv-modular-interiors.vercel.app/thank-you" />


        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
