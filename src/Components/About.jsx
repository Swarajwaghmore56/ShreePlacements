
import {
    Target,
    HeartHandshake,
    Users,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    TrendingUp,
    Handshake,
} from "lucide-react";

function About() {
    const values = [
        {
            icon: <Target size={30} />,
            title: "Our Mission",
            description:
                "Our mission is to connect job seekers with suitable career opportunities and help employers find candidates who match their hiring requirements. We aim to make the recruitment journey clear, professional, and accessible.",
        },
        {
            icon: <HeartHandshake size={30} />,
            title: "Our Approach",
            description:
                "We believe recruitment is about more than filling vacancies. We focus on understanding candidate profiles and employer expectations to support meaningful professional connections.",
        },
        {
            icon: <Users size={30} />,
            title: "Our Focus",
            description:
                "We support recruitment opportunities across IT, Non-IT, Back Office, BPO, Telecom, Finance, Banking, Agriculture, Marketing, Chemical Industry, and other sectors.",
        },
    ];

    const services = [
        "Candidate sourcing and recruitment support",
        "Job opportunity sharing and candidate applications",
        "Employer hiring and talent identification support",
        "Recruitment support across multiple industries",
        "Connecting candidates with relevant job openings",
        "Support for both entry-level and experienced candidates",
    ];

    const industries = [
        "IT & Software",
        "Non-IT",
        "Back Office",
        "BPO & Telecom",
        "Finance & Banking",
        "Agriculture",
        "Marketing",
        "Chemical Industry",
    ];

    return (
        <section className="inner-page container">
            <div className="about-page-hero">
                <span className="eyebrow">GET TO KNOW US</span>

                <h1>
                    About <span>Shree Placements</span>
                </h1>

                <p className="about-lead">
                    Connecting talent with opportunity through professional
                    recruitment support across multiple industries.
                </p>
            </div>

            <div className="about-story">
                <div className="about-story-content">
                    <span className="eyebrow">WHO WE ARE</span>

                    <h2>
                        Building Connections Between
                        <span> People and Opportunities</span>
                    </h2>

                    <p>
                        Shree Placements is a recruitment consultancy concept
                        focused on helping job seekers explore employment
                        opportunities and assisting employers with their hiring
                        needs.
                    </p>

                    <p>
                        We aim to simplify the connection between candidates
                        and organizations by sharing relevant opportunities,
                        supporting applications, and encouraging professional
                        communication throughout the recruitment process.
                    </p>

                    <p>
                        Our industry-wide approach helps us serve a diverse
                        range of recruitment requirements, from technology
                        and business operations to finance, telecom, marketing,
                        and other sectors.
                    </p>
                </div>

                <div className="about-story-card">
                    <Handshake size={42} />

                    <h3>Connecting Talent</h3>

                    <p>
                        Helping candidates discover opportunities and
                        supporting employers in finding suitable talent.
                    </p>

                    <div className="about-story-points">
                        <div>
                            <CheckCircle2 size={19} />
                            Candidate-focused approach
                        </div>

                        <div>
                            <CheckCircle2 size={19} />
                            Multi-industry recruitment
                        </div>

                        <div>
                            <CheckCircle2 size={19} />
                            Employer hiring support
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-values-section">
                <div className="about-section-heading">
                    <span className="eyebrow">WHAT GUIDES US</span>
                    <h2>Our Mission, Approach & Focus</h2>
                    <p>
                        The principles that shape our recruitment approach
                        and candidate-employer connections.
                    </p>
                </div>

                <div className="feature-grid about-grid">
                    {values.map((value, index) => (
                        <article className="feature-card" key={index}>
                            <div className="about-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="about-services-section">
                <div className="about-section-heading">
                    <span className="eyebrow">WHAT WE DO</span>
                    <h2>Our Recruitment Support</h2>
                    <p>
                        We aim to support candidates and employers through
                        different stages of the recruitment process.
                    </p>
                </div>

                <div className="about-services-grid">
                    {services.map((service, index) => (
                        <div className="about-service-item" key={index}>
                            <CheckCircle2 size={20} />
                            <span>{service}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="about-industries-section">
                <div className="about-section-heading">
                    <span className="eyebrow">OUR INDUSTRY COVERAGE</span>
                    <h2>Opportunities Across Multiple Sectors</h2>
                    <p>
                        Exploring recruitment opportunities across a broad
                        range of industries.
                    </p>
                </div>

                <div className="about-industries-grid">
                    {industries.map((industry, index) => (
                        <div className="about-industry-item" key={index}>
                            <Building2 size={21} />
                            <span>{industry}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="about-commitment">
                <div className="about-commitment-icon">
                    <TrendingUp size={30} />
                </div>

                <div>
                    <h2>Our Commitment</h2>
                    <p>
                        We aim to build professional relationships, promote
                        relevant career opportunities, and support organizations
                        with their recruitment needs. Our goal is to make the
                        journey from job search to potential employment more
                        organized and accessible.
                    </p>
                </div>
            </div>

            <div className="about-cta">
                <BriefcaseBusiness size={35} />

                <h2>Let's Connect Talent with Opportunity</h2>

                <p>
                    Whether you are exploring career opportunities or looking
                    for recruitment support, Shree Placements welcomes you
                    to get in touch.
                </p>

                <a href="/contact" className="btn-primary-custom">
                    Contact Us
                </a>
            </div>
        </section>
    );
}

export default About;
