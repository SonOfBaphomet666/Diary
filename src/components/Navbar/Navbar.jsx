import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "/src/utils/constants";

// import { RxHamburgerMenu } from "react-icons/rx";

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
                Моя учеба
              </NavLink>
              <NavLink to={APP_ROUTES.ABOUT} className="nav__link">
                Моя жизнь
              </NavLink>
            </div>
            <div className="nav__button">
              <p className="nav__buttonTitle">Подписаться</p>
            </div>
          </div>

          <div className="menu">
            <input
              type="checkbox"
              id="burger-checkbox"
              className="menu__burger-checkbox"
            />
            <label htmlFor="burger-checkbox" className="menu__burger" />
            <ul className="menu__list">
              <NavLink to={APP_ROUTES.HOME} className="menu__item">
                Главная
              </NavLink>
              <NavLink to={APP_ROUTES.BLOG} className="menu__item">
                Моя учеба
              </NavLink>
              <NavLink to={APP_ROUTES.ABOUT} className="menu__item">
                Моя жизнь
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
