
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    House,
    BriefcaseBusiness,
    Building2,
    Users,
    Phone,
    Menu,
    X,
} from "lucide-react";
import logo from "../assets/ShreePlacement.png";
import "./Sidebar.css";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", path: "/", icon: House },
        { name: "Jobs", path: "/jobs", icon: BriefcaseBusiness },
        { name: "About Us", path: "/about", icon: Building2 },
        { name: "Our Services", path: "/services", icon: Users },
        { name: "Contact Us", path: "/contact", icon: Phone },
    ];

    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            <button
                type="button"
                className="menu-toggle"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
                aria-expanded={isOpen}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                className={`sidebar-overlay ${isOpen ? "visible" : ""}`}
                onClick={closeSidebar}
                aria-hidden="true"
            />

            <aside
                className={`sidebar ${isOpen ? "open" : ""}`}
                aria-hidden={!isOpen}
            >
                <div className="sidebar-header">
                    <img
                        src={logo}
                        alt="Shree Placements - Connecting Talent with Opportunity"
                        className="brand-logo"
                    />
                </div>

                <nav className="sidebar-menu" aria-label="Main navigation">
                    {links.map(({ name, path, icon: Icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end={path === "/"}
                            onClick={closeSidebar}
                            tabIndex={isOpen ? 0 : -1}
                            className={({ isActive }) =>
                                `sidebar-link ${isActive ? "active" : ""}`
                            }
                        >
                            <Icon size={21} />
                            <span>{name}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <p>Connecting Talent with Opportunity</p>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
