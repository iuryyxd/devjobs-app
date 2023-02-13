import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import { FaRegFrownOpen } from "react-icons/fa";
import styles from "./EmptyPage.module.scss";

export function EmptyPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.emptyPage}>
      <FaRegFrownOpen color={theme === "dark" ? "#fff" : "#000"} />
      <h1 style={{ color: theme === "dark" ? "#fff" : "#000" }}>
        Page not found!
      </h1>
    </div>
  );
}
