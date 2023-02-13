import { Checkbox } from "../Checkbox";

import styles from "./FilterModal.module.scss";

interface FilterModalProps {
  setFullTime: (a: boolean) => void;
  setLocation: (a: string) => void;
  location: string;
  fullTime: boolean;
}

export function FilterModal({ setFullTime, setLocation, fullTime, location }: FilterModalProps) {
  return (
    <div className={styles.modal}>
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Filter by location..."
        value={location}
      />
      <Checkbox setFullTime={setFullTime} fullTime={fullTime} />
    </div>
  );
}
