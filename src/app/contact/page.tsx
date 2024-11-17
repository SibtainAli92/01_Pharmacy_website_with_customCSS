import "../../style/contact.css";

export default function Contact() {
return (
<div className="contact-box">
<div className="contact-content">
<h2>Contact Us</h2>
<form className="contact-form">
<div className="form-group">
<label htmlFor="name">Name:</label>
<input type="text" id="name" name="name" required />
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" required />
</div>
<div className="form-group">
<label htmlFor="message">Message:</label>
<textarea id="message" name="message" required></textarea>
</div>
<button type="submit" className="btn btn-primary">
Send Message
</button>
</form>
</div>
</div>
);
}