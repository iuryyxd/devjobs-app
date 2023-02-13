import ISun from "/assets/desktop/icon-sun.svg";
import IMoon from "/assets/desktop/icon-moon.svg";

import styles from "./Switch.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Switch() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.switch}>
      <img src={ISun} alt="Sun icon" />
      <button
        className={`${styles.switch__button} ${styles[theme]}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div />
      </button>
      <img src={IMoon} alt="Moon icon" />
    </div>
  );
}
