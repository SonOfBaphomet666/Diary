import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <div className="nav__titlebox">
                    <h1 className="nav__title">Personally</h1>
                </div>
                <div className="nav__pagesbox">
                    <NavLink to="/" className="nav__link">
                        Главная
                    </NavLink>
                    <NavLink to="/myBlog" className="nav__link">
                        Мой блог
                    </NavLink>
                    <NavLink to="/createBlog" className="nav__link">
                        Создать блог
                    </NavLink>
                    <NavLink to="/about" className="nav__link">
                        Обо мне
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}


export default Navbar;