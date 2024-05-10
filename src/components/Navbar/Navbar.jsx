import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__box">
                    <div className="nav__titleBox">
                        <h1 className="nav__title">Personally</h1>
                    </div>
                    <div className="nav__pagesbox">
                        <div className="nav__linkbox">
                            <NavLink to="/" className="nav__link">
                                Главная
                            </NavLink>
                            <NavLink to="/myBlog" className="nav__link">
                                Мой блог
                            </NavLink>
                            <NavLink to="/about" className="nav__link">
                                Обо мне
                            </NavLink>
                        </div>
                        <div className="nav__button">
                            <div className="nav__buttonBox">
                                <h2 className="nav__buttonTitle">Подписаться</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Navbar;