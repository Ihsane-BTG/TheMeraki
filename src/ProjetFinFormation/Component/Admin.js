import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const renderContent = () => {
        switch (selectedMenuItem) {
            case 'dashboard':
                return <DashboardContent />;
            case 'manage-orders':
                return <ManageOrdersContent />;
            case 'manage-products':
                return <ManageProductsContent />;
            case 'manage-users':
                return <ManageUsersContent />;
            default:
                return null;
        }
    };

    return (
        <div className="AdminPage">
            <header>
                <nav className={`navbar navbar-expand-lg navbar-dark ${isScrolled ? "sticky" : ""}`} style={{ backgroundColor: "#000000", marginTop: isScrolled ? "0" : "10px" }}>
                    <div className="container-fluid">
                        <Link to={"/"} className="navbar-brand">
                            <img src={`${process.env.PUBLIC_URL}/PFF-Images/logo.jpg`} alt="TheMerakiLogo" className={`brand-logo ${isScrolled ? "small-logo" : ""}`} />
                        </Link>
                        <ul className="navbar-nav d-flex flex-row me-1">
                            <li className="nav-item ">
                                <Link to={"/connexion"} className="nav-link text-white" id="" role="button" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                </svg> </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to={"/connexion"} className="nav-link text-white" id="" role="button" aria-expanded="false"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                                </svg> </Link>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <Link to={""} className="nav-link text-white" id="" role="button" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside>
                <Sidebar onMenuItemClick={(menuItem) => handleMenuItemClick(menuItem)} />
            </aside>
            <main>
                {renderContent()}
            </main>
        </div>
    )
}
const Sidebar = ({ onMenuItemClick }) => {
    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <button onClick={() => onMenuItemClick('dashboard')}>Dashboard</button>
                </li>
                <li>
                    <button onClick={() => onMenuItemClick('manage-orders')}>Manage Orders</button>
                </li>
                <li>
                    <button onClick={() => onMenuItemClick('manage-products')}>Manage Products</button>
                </li>
                <li>
                    <button onClick={() => onMenuItemClick('manage-users')}>Manage Users</button>
                </li>
            </ul>
        </nav>
    );
};

const DashboardContent = () => {
    return (
        <div>
            <h2>Dashboard Content</h2>
            {/* Add your dashboard content here */}
        </div>
    );
};

const ManageOrdersContent = () => {
    return (
        <div>
            <h2>Manage Orders Content</h2>
            {/* Add your content for managing orders */}
        </div>
    );
};

const ManageProductsContent = () => {
    return (
        <div>
            <h2>Manage Products Content</h2>
            {/* Add your content for managing products */}
        </div>
    );
};

const ManageUsersContent = () => {
    return (
        <div>
            <h2>Manage Users Content</h2>
            {/* Add your content for managing users */}
        </div>
    );
};
export default Admin;