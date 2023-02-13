import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  setFullTime: (a: boolean) => void;
}

export function Checkbox({ setFullTime }: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => setFullTime(e.target.checked)} />
      <label htmlFor="checkbox">Full Time Only</label>
    </div>
  );
}
