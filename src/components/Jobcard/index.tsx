import styles from "./Jobcard.module.scss";

import { useNavigate } from "react-router-dom";

interface JobcardProps {
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  id: number;
}

export function Jobcard({
  company,
  logo,
  logoBackground,
  position,
  contract,
  location,
  postedAt,
  id,
}: JobcardProps) {

  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/details/${id}`)}>
      <div
        className={styles.card__logo}
        style={{ background: logoBackground }}
      >
        <img src={logo} alt={company + " logo"} />
      </div>
      <p className={styles.card__time}>
        {postedAt} <div /> {contract}
      </p>
      <h3 className={styles.card__position}>{position}</h3>
      <p className={styles.card__company}>{company}</p>
      <p className={styles.card__location}>{location}</p>
    </div>
  );
}
