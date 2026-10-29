
import { Link } from "react-router-dom";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

const services = [
    "IT & Software Recruitment",
    "Non-IT Recruitment",
    "Back Office Recruitment",
    "BPO & Telecom Recruitment",
    "Finance & Banking Recruitment",
    "Agriculture Recruitment",
    "Marketing Recruitment",
    "Chemical Industry Recruitment",
];

function Services() {
    return (
        <section className="inner-page container">
            <span className="eyebrow">WHAT WE DO</span>
            <h1>Our Services</h1>
            <p>Recruitment support across a wide range of industries.</p>

            <div className="service-grid">
                {services.map((service) => (
                    <article className="feature-card service-card" key={service}>
                        <BriefcaseBusiness size={27} />
                        <h3>{service}</h3>

                        <Link to="/contact" className="service-link">
                            Enquire Now <ArrowRight size={16} />
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Services;
