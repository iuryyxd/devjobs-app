import { useContext, useState } from "react";

import styles from "./Home.module.scss";
import { jobsList } from "../../utils/jobs";

import { Jobcard } from "../../components/Jobcard";
import { FilterContext } from "../../contexts/FilterContext";
import { EmptyPage } from "../../components/EmptyPage";

export function Home() {
  const [limitLength, setLimitLength] = useState<number>(9);

  const { filter } = useContext(FilterContext);

  const jobsFilter = jobsList.filter((job) => {
    const jobTitle = job.company
      .toLowerCase()
      .concat(job.position.toLowerCase());

    if (filter.fullTime) {
      return (
        jobTitle.includes(filter.title.toLowerCase()) &&
        job.location.toLowerCase().includes(filter.location.toLowerCase()) &&
        job.contract === "Full Time"
      );
    } else {
      return (
        jobTitle.includes(filter.title.toLowerCase()) &&
        job.location.toLowerCase().includes(filter.location.toLowerCase())
      );
    }
  });

  return (
    <main
      className={styles.jobslist}
      // style={{ height: jobsFilter.length === 15 ? "100%" : "100vh" }}
    >
      <div className={styles.jobslist__container}>
        {jobsFilter.length > 0 ? (
          jobsFilter.map((job, index) => (
            <>
              {index < limitLength && (
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
          ))
        ) : (
          <EmptyPage jobDetails />
        )}

        {limitLength === 9 && jobsFilter.length === 15 && (
          <button onClick={() => setLimitLength(12)}>Load More</button>
        )}
      </div>
    </main>
  );
}
