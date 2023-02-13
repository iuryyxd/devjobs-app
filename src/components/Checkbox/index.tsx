import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  setFullTime: (a: boolean) => void;
  fullTime?: boolean;
}

export function Checkbox({ setFullTime, fullTime }: CheckboxProps) {

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        onChange={(e) => setFullTime(e.target.checked)}
        checked={fullTime}
      />
      <label htmlFor="checkbox">
        {window.innerWidth > 1242 ? "Full Time Only" : "Full Time"}
      </label>
    </div>
  );
}
