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
          <div className="dropdown">
            <ul className="dropdown__list">
              <li className="dropdown__posten">
                <NavLink to={APP_ROUTES.HOME} className="nav__link">
                  Главная
                </NavLink>
              </li>
              <li className="dropdown__posten">
                <NavLink to={APP_ROUTES.BLOG} className="nav__link">
                  Моя учеба
                </NavLink>
              </li>
              <li className="dropdown__posten">
                <NavLink to={APP_ROUTES.ABOUT} className="nav__link">
                  Моя жизнь
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
