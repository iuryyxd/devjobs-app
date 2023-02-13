import { useContext, useState } from "react";

import styles from "./SearchBar.module.scss";
import ISearch from "/assets/desktop/icon-search.svg";
import ILocation from "/assets/desktop/icon-location.svg";

import { Checkbox } from "../Checkbox";
import { FilterContext } from "../../contexts/FilterContext";

export function SearchBar() {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);

  const { setFilter } = useContext(FilterContext);

  function handleSearchFilter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setFilter({ title, location, fullTime });
  }

  return (
    <form id="formFilter" className={styles.form} onSubmit={handleSearchFilter}>
      <div className={styles.form__filterTitle}>
        <img src={ISearch} alt="search icon" />
        <input
          type="text"
          placeholder="Filter by title, companies, expertise..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.form__filterLocation}>
        <img src={ILocation} alt="location icon" />
        <input
          type="text"
          placeholder="Filter by location..."
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className={styles.form__filterCheckbox}>
        <Checkbox setFullTime={setFullTime} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
