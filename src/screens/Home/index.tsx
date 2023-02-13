import { useContext, useState } from "react";

import styles from "./Home.module.scss";
import { jobsList } from "../../utils/jobs";

import { Jobcard } from "../../components/Jobcard";
import { FilterContext } from "../../contexts/FilterContext";

export function Home() {
  const [limit, setLimit] = useState<number>(9);

  const { filter } = useContext(FilterContext);

  // terminar a parte do filtro
  const jobsFilter =
    filter.location.trim() !== "" || filter.title.trim() !== ""
      ? jobsList.filter((job) => {
          //   if (
          //     (filter.title.trim() !== "" &&
          //       job.company
          //         .toLowerCase()
          //         .concat(job.position.toLowerCase())
          //         .includes(filter.title.toLowerCase())) ||
          //     (filter.location.trim() !== "" &&
          //       job.location
          //         .toLowerCase()
          //         .includes(filter.location.toLowerCase()))
          //   ) {
          //     return job;
          //   }

          if (filter.fullTime && job.contract === "Full Time") return job;
        })
      : jobsList;

  return (
    <main className={styles.jobslist}>
      <div className={styles.jobslist__container}>
        {jobsFilter.map((job, index) => (
          <>
            {index < limit && (
              <Jobcard
                key={crypto.randomUUID()}
                company={job.company}
                contract={job.contract}
                location={job.location}
                logo={job.logo}
                logoBackground={job.logoBackground}
                position={job.position}
                postedAt={job.postedAt}
                id={job.id}
              />
            )}
          </>
        ))}
        {limit === 9 && <button onClick={() => setLimit(12)}>Load More</button>}
      </div>
    </main>
  );
}
