import styles from "./SearchBar.module.scss";

import ISearch from "/assets/desktop/icon-search.svg";
import ILocation from "/assets/desktop/icon-location.svg";
import { Checkbox } from "../Checkbox";

export function SearchBar() {
  return (
    <form id="formFilter" className={styles.form}>
      <div className={styles.form__filterTitle}>
        <img src={ISearch} alt="search icon" />
        <input type="text" placeholder="Filter by title, companies, expertise..." />
      </div>

      <div className={styles.form__filterLocation}>
        <img src={ILocation} alt="location icon" />
        <input type="text" placeholder="Filter by location..." />
      </div>

      <div className={styles.form__filterCheckbox}>
        <Checkbox />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
