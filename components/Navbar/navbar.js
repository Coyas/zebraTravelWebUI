import scss from "./navbar.module.scss";

const NavBar = () => {
    return (
        <>
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">ola mundo</div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown">
                            <a className="navbar-link">Experiencias</a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">Experiencis</a>
                                <a className="navbar-item">Home</a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <a className="navbar-item"></a>
                    </div>
                </div>
            </nav>

            <style jsx>{`
                nav {
                    border: 2px solid blue;
                }
            `}</style>
        </>
    );
};

export default NavBar;
