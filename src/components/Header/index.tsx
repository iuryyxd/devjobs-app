import { useLocation } from "react-router-dom";

import { Switch } from "../Switch";
import { SearchBar } from "../SearchBar";

import Logo from "/assets/desktop/logo.svg";
import styles from "./Header.module.scss";

export function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__top}>
          <img src={Logo} alt="devjobs logo" className={styles.header__logo} />
          <Switch />
        </div>
        {location?.pathname === "/" && <SearchBar />}
      </div>
    </header>
  );
}
