import { useState } from "react";
import "./Contact.css"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitinfo = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_5uuu4fr';
    const templateId = 'template_lkkxj8c';
    const publicKey = 'KSD9qQE1VqpulzCmU';

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: { name, email, message }
    };

    async function sendEmail() {
      try {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setLoading(false);
        if (response.ok) {
          window.location.reload();
        } else {
          alert("Error sending email");
        }
      } catch (error) {
        setLoading(false);
        alert('Something went wrong. Please try again.');
      }
    }
    sendEmail();
  };

  return (
    <div className="contact-form" id="contact-section">
      <div className="contact-inner-wrap">

        {/* LEFT — heading + social links */}
        <div className="title">
          <p className="contact-label">Get In Touch</p>
          <h1>Let's Work <em>Together</em></h1>
          <p>Have a project in mind? I'd love to hear about it. Whether it's a collaboration, freelance work, or just a conversation — reach out.</p>
          <div className="contact-icons">
            <a href="https://www.instagram.com/ikristian2.0/" target="_blank" rel="noreferrer">
              <span>@ikristian2.0</span>
              <span className="contact-icon-label">Instagram ↗</span>
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
              <span>Christian Iradukunda</span>
              <span className="contact-icon-label">LinkedIn ↗</span>
            </a>
            <a href="mailto:christianira2003@gmail.com">
              <span>christianira2003@gmail.com</span>
              <span className="contact-icon-label">Email ↗</span>
            </a>
            <a href="https://wa.me/250798697759" target="_blank" rel="noreferrer">
              <span>+250 798 697 759</span>
              <span className="contact-icon-label">WhatsApp ↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="info">
          <form onSubmit={submitinfo}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button className="submit-button" type="submit">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
