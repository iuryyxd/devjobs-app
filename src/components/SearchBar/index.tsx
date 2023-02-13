import { useContext, useEffect, useState } from "react";

import styles from "./SearchBar.module.scss";
import ISearch from "/assets/desktop/icon-search.svg";
import ILocation from "/assets/desktop/icon-location.svg";
import IFilter from "/assets/mobile/icon-filter.svg";

import { Checkbox } from "../Checkbox";
import { FilterContext } from "../../contexts/FilterContext";
import { FilterModal } from "../FilterModal";

export function SearchBar() {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [fullTime, setFullTime] = useState<boolean>(false);
  const [openModalFilter, setOpenModalFilter] = useState<boolean>(false);

  const { filter, setFilter } = useContext(FilterContext);

  function handleSearchFilter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setFilter({ title, location, fullTime });
    setOpenModalFilter(false);
  }

  return (
    <form id="formFilter" className={styles.form} onSubmit={handleSearchFilter}>
      <div className={styles.form__filterTitle}>
        <img src={ISearch} alt="search icon" />
        <input
          type="text"
          placeholder={
            window.innerWidth > 1242
              ? "Filter by title, companies, expertise..."
              : "Filter by title..."
          }
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
        {window.innerWidth > 802 ? (
          <Checkbox setFullTime={setFullTime} />
        ) : (
          <img
            src={IFilter}
            alt="filter icon"
            onClick={() => setOpenModalFilter((state) => !state)}
          />
        )}
        <button type="submit">
          {window.innerWidth > 802 ? (
            "Search"
          ) : (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#fff"
                fill-rule="nonzero"
              />
            </svg>
          )}
        </button>
      </div>

      {openModalFilter && (
        <FilterModal
          setFullTime={setFullTime}
          fullTime={fullTime}
          setLocation={setLocation}
          location={location}
        />
      )}
    </form>
  );
}
