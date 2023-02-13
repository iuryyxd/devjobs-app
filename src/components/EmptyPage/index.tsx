import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import { FaRegFrownOpen } from "react-icons/fa";
import styles from "./EmptyPage.module.scss";

interface EmptyPageProps {
  jobDetails?: boolean;
}

export function EmptyPage({ jobDetails }: EmptyPageProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.emptyPage}>
      <FaRegFrownOpen color={theme === "dark" ? "#fff" : "#000"} />
      <h1 style={{ color: theme === "dark" ? "#fff" : "#000" }}>
        {jobDetails ? "Job not found!" : "Page not found!"}
      </h1>
    </div>
  );
}
