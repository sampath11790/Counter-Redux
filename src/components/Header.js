import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/AuthStore";

const Header = () => {
  const Dispatch = useDispatch();
  const isauth = useSelector((state) => state.authkey.isauthentication);

  const logoutHandler = () => {
    Dispatch(authAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {!isauth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
