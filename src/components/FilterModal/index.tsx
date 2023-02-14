import { motion } from "framer-motion";

import { Checkbox } from "../Checkbox";
import styles from "./FilterModal.module.scss";

interface FilterModalProps {
  setFullTime: (a: boolean) => void;
  setLocation: (a: string) => void;
  location: string;
  fullTime: boolean;
}

export function FilterModal({
  setFullTime,
  setLocation,
  fullTime,
  location,
}: FilterModalProps) {
  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0, y: 90 }}
      animate={{ opacity: 1, y: 110 }}
      exit={{ opacity: 0, y: 90 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Filter by location..."
        value={location}
      />
      <Checkbox setFullTime={setFullTime} fullTime={fullTime} />
    </motion.div>
  );
}
