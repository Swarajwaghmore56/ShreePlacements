
import { Link } from "react-router-dom";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";

function Jobs() {
    return (
        <section className="inner-page container">
            <span className="eyebrow">CAREER OPPORTUNITIES</span>
            <h1>Explore Jobs</h1>
            <p>Find opportunities that match your skills and career goals.</p>

            <div className="placeholder-card">
                <BriefcaseBusiness size={42} />
                <h2>Find Your Next Opportunity</h2>
                <p>
                    Job listings will appear here when they are added to the
                    website.
                </p>

                <Link to="/contact" className="hero-primary-btn">
                    Contact Us <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    );
}

export default Jobs;
