import styles from "./Checkbox.module.scss";

export function Checkbox() {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Full Time Only</label>
        </div>
    )
}