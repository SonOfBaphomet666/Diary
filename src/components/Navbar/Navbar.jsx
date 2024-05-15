import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "/src/utils/constants";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__box">
          <div className="nav__titleBox">
            <p className="nav__title">Personally</p>
          </div>
          <div className="nav__pagesbox">
            <div className="nav__linkbox">
              <NavLink to={APP_ROUTES.HOME} className="nav__link">
                Главная
              </NavLink>
              <NavLink to={APP_ROUTES.BLOG} className="nav__link">
                Мой блог
              </NavLink>
              <NavLink to={APP_ROUTES.ABOUT} className="nav__link">
                Обо мне
              </NavLink>
            </div>
            <div className="nav__button">
              <p className="nav__buttonTitle">Подписаться</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
