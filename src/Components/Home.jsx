
import { Link } from "react-router-dom";
import {
    BriefcaseBusiness,
    HeartHandshake,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Users,
    Building2,
    Target,
} from "lucide-react";

const industries = [
    {
        title: "IT & Software",
        image: "photo-1497366754035-f200968a6e72",
    },
    {
        title: "Non-IT",
        image: "photo-1497366811353-6870744d04b2",
    },
    {
        title: "Back Office",
        image: "photo-1497366216548-37526070297c",
    },
    {
        title: "BPO & Telecom",
        image: "photo-1521737711867-e3b97375f902",
    },
    {
        title: "Finance & Banking",
        image: "photo-1460925895917-afdab827c52f",
    },
    {
        title: "Agriculture",
        image: "photo-1500382017468-9049fed747ef",
    },
    {
        title: "Marketing",
        image: "photo-1552664730-d307ca884978",
    },
    {
        title: "Chemical Industry",
        image: "photo-1581093458791-9d42e3c5b3d4",
    },
];

const features = [
    {
        icon: BriefcaseBusiness,
        title: "Career Opportunities",
        description:
            "Helping candidates explore opportunities that align with their skills and career goals.",
    },
    {
        icon: HeartHandshake,
        title: "Recruitment Support",
        description:
            "Connecting employers with candidates to support their hiring requirements.",
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description:
            "Supporting professional growth by connecting talent with potential opportunities.",
    },
];

function Home() {
    return (
        <>
            <section className="image-hero">
                <div className="hero-image-overlay">
                    <div className="container">
                        <div className="hero-image-content">
                            <span className="hero-tag">
                                WELCOME TO SHREE PLACEMENTS
                            </span>

                            <h1>
                                Connecting Talent.
                                <br />
                                Building Futures.
                                <br />
                                <span>Creating Opportunities.</span>
                            </h1>

                            <p>
                                Shree Placements connects job seekers and employers
                                across IT, Non-IT, Back Office, BPO, Finance,
                                Telecom and other industries.
                            </p>

                            <div className="hero-image-buttons">
                                <Link to="/about" className="hero-primary-btn">
                                    About Us <ArrowRight size={18} />
                                </Link>

                                <Link to="/contact" className="hero-secondary-btn">
                                    Hire Talent
                                </Link>
                            </div>

                            <div className="hero-image-note">
                                <CheckCircle2 size={18} />
                                Connecting Talent with Opportunity
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-space about-intro">
                <div className="container">
                    <div className="about-intro-grid">
                        <div>
                            <span className="eyebrow">WHO WE ARE</span>
                            <h2>About Shree Placements</h2>
                            <p>
                                Shree Placements is a recruitment consultancy
                                focused on connecting job seekers with potential
                                employers across multiple industries.
                            </p>
                            <p>
                                Our goal is to make recruitment more accessible
                                for businesses looking for talent and candidates
                                looking for their next career opportunity.
                            </p>

                            <Link to="/about" className="text-link">
                                Discover Our Story <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="about-highlight">
                            <div className="about-highlight-icon">
                                <HeartHandshake size={42} />
                            </div>
                            <h3>The Right Talent. The Right Opportunity.</h3>
                            <p>
                                Building meaningful connections between candidates
                                and employers across different sectors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="container stats-grid">
                    <article className="stat-card">
                        <Users size={32} />
                        <h3>To Be Confirmed</h3>
                        <p>Professionals Placed</p>
                    </article>

                    <article className="stat-card">
                        <Building2 size={32} />
                        <h3>Multiple</h3>
                        <p>Industries Served</p>
                    </article>

                    <article className="stat-card">
                        <BriefcaseBusiness size={32} />
                        <h3>Recruitment</h3>
                        <p>Hiring Support</p>
                    </article>

                    <article className="stat-card">
                        <Target size={32} />
                        <h3>Career Focused</h3>
                        <p>Our Approach</p>
                    </article>
                </div>
            </section>

            <section className="image-industries section-space">
                <div className="container">
                    <div className="section-heading">
                        <span className="eyebrow">OUR INDUSTRIES</span>
                        <h2>Recruitment Across Multiple Sectors</h2>
                        <p>
                            Explore the industries where candidates and employers
                            can connect through Shree Placements.
                        </p>
                    </div>

                    <div className="image-industry-grid">
                        {industries.map((industry, index) => (
                            <Link
                                to="/services"
                                className="image-industry-card"
                                key={industry.title}
                                style={{
                                    backgroundImage: `url("https://images.unsplash.com/${industry.image}?auto=format&fit=crop&w=900&q=85")`,
                                }}
                            >
                                <div className="industry-image-content">
                                    <span>
                                        INDUSTRY {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3>{industry.title}</h3>

                                    <span className="industry-explore">
                                        Learn More <ArrowRight size={16} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="why-section section-space">
                <div className="container">
                    <div className="section-heading">
                        <span className="eyebrow">WHY SHREE PLACEMENTS</span>
                        <h2>Your Goals. Our Focus.</h2>
                        <p>
                            We aim to make the journey between finding talent
                            and finding the right opportunity easier.
                        </p>
                    </div>

                    <div className="feature-grid">
                        {features.map(({ icon: Icon, title, description }) => (
                            <article className="feature-card" key={title}>
                                <div className="feature-icon">
                                    <Icon size={27} />
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="career-banner">
                <div className="career-banner-content">
                    <span>YOUR NEXT CHAPTER STARTS HERE</span>

                    <h2>
                        Great Careers Begin with the Right Opportunity.
                    </h2>

                    <p>
                        Looking for your next career opportunity or searching
                        for suitable candidates? Connect with Shree Placements.
                    </p>

                    <Link to="/contact" className="hero-primary-btn">
                        Contact Us <ArrowRight size={18} />
                    </Link>
                </div>
            </section>


            <footer className="site-footer">
                <div className="container">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <h2>
                                SHREE <span>PLACEMENTS</span>
                            </h2>

                            <p>
                                Connecting talent with opportunity. We help candidates
                                explore career opportunities and support employers with
                                recruitment across multiple industries.
                            </p>

                            <div className="footer-tagline">
                                Building Careers. Connecting Businesses.
                            </div>
                        </div>

                        <div className="footer-column">
                            <h3>Quick Links</h3>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/jobs">Career Opportunities</Link>
                            <Link to="/services">Our Services</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>

                        <div className="footer-column">
                            <h3>Our Services</h3>
                            <Link to="/services">IT & Software</Link>
                            <Link to="/services">Non-IT Recruitment</Link>
                            <Link to="/services">Back Office & BPO</Link>
                            <Link to="/services">Finance & Banking</Link>
                            <Link to="/services">Other Industries</Link>
                        </div>

                        <div className="footer-column footer-contact">
                            <h3>Get in Touch</h3>
                            <p>
                                Looking for a job or hiring candidates? Connect with
                                Shree Placements.
                            </p>

                            <Link to="/contact" className="footer-contact-btn">
                                Contact Our Team <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>
                            © {new Date().getFullYear()} Shree Placements.
                            All rights reserved.
                        </p>

                        <span>Connecting Talent with Opportunity</span>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Home;
