import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          to="/diary"
          className="navbar-item has-text-weight-bold has-text-white"
        >
          5센스로그
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link
            to="/diary"
            className={`navbar-item ${
              isActive("/diary") ? "is-active has-text-weight-semibold" : ""
            }`}
          >
            일기 쓰기
          </Link>
          <Link
            to="/mypage"
            className={`navbar-item ${
              isActive("/mypage") ? "is-active has-text-weight-semibold" : ""
            }`}
          >
            마이페이지
          </Link>
          <Link
            to="/groups"
            className={`navbar-item ${
              isActive("/groups") ? "is-active has-text-weight-semibold" : ""
            }`}
          >
            그룹
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-light">로그아웃</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
