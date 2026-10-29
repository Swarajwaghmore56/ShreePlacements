
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <section className="inner-page container">
            <span className="eyebrow">LET'S CONNECT</span>
            <h1>Contact Shree Placements</h1>
            <p>
                Send us an enquiry about recruitment or career opportunities.
            </p>

            <div className="contact-layout">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        Contact details can be added once the client provides
                        the official information.
                    </p>

                    <div className="contact-detail">
                        <Mail size={21} />
                        <span>Official email to be provided</span>
                    </div>

                    <div className="contact-detail">
                        <Phone size={21} />
                        <span>Official phone number to be provided</span>
                    </div>

                    <div className="contact-detail">
                        <MapPin size={21} />
                        <span>Office address to be provided</span>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                }}>
                    <label>
                        Full Name
                        <input name="name" placeholder="Enter your full name" required />
                    </label>

                    <label>
                        Email Address
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </label>

                    <label>
                        Phone Number
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                        />
                    </label>

                    <label>
                        Enquiry Type
                        <select name="enquiry" defaultValue="job-seeker">
                            <option value="job-seeker">Looking for a job</option>
                            <option value="employer">Hiring candidates</option>
                            <option value="other">Other enquiry</option>
                        </select>
                    </label>

                    <label>
                        Message
                        <textarea
                            name="message"
                            placeholder="How can we help you?"
                            rows="4"
                            required
                        />
                    </label>

                    <button type="submit" className="hero-primary-btn">
                        Submit Enquiry <Send size={17} />
                    </button>

                    {submitted && (
                        <p className="form-notice" role="status">
                            This is a frontend demo. Your enquiry has not been sent.
                            A backend or form service is needed to receive it.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;
