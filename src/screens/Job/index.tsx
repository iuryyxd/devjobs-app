import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { jobsList } from "../../utils/jobs";
import styles from "./Job.module.scss";

import { EmptyPage } from "../../components/EmptyPage";

interface JobType {
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export function Job() {
  const [job, setJob] = useState<JobType | null>(null);

  const location = useLocation();

  useEffect(() => {
    const jobID = Number(location.pathname.replace(/^\D+/g, ""));

    const jobData = jobsList.filter((job) => job.id === jobID);
    setJob(jobData[0]);
  }, []);

  return (
    <>
      {job ? (
        <main className={styles.details}>
          <section className={styles.details__container}>
            <div className={styles.details__header}>
              <div className={styles.header__companyInfo}>
                <div
                  className={styles.header__logo}
                  style={{ background: job.logoBackground }}
                >
                  <img src={job.logo} alt={job.company + " logo"} />
                </div>
                <div className={styles.header__info}>
                  <h3>{job.company}</h3>
                  <span>{job.website}</span>
                </div>
              </div>
              <a href={job.website}>
                <button className={styles.header__button}>Company Site</button>
              </a>
            </div>

            <div className={styles.details__content}>
              <div className={styles.content__header}>
                <div className={styles.content__headerInfo}>
                  <p>
                    {job.postedAt} <div /> {job.contract}
                  </p>
                  <h2>{job.position}</h2>
                  <p>{job.location}</p>
                </div>
                <a href={job.apply}>
                  <button>Apply Now</button>
                </a>
              </div>

              <p className={styles.content__description}>{job.description}</p>

              <div className={styles.content__requirements}>
                <h3>Requirements</h3>
                <p>{job.requirements.content}</p>
                <ul>
                  {job.requirements.items.map((item) => (
                    <li key={crypto.randomUUID()}>
                      <div /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.content__role}>
                <h3>What You Will Do</h3>
                <p>{job.role.content}</p>
                <ol>
                  {job.role.items.map((item, index) => (
                    <li key={crypto.randomUUID()}>
                      <span>{index + 1}</span> {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className={styles.details__apply}>
            <div className={styles.apply__container}>
              <h3>How to Apply</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque facilis nihil repudiandae odit quos consequatur, nemo
                sint aliquid earum. Explicabo neque voluptate fuga quis possimus
                repudiandae molestias numquam obcaecati! Dolor.
              </p>
              <a href={job.apply}>{job.apply}</a>
            </div>
          </section>

          <footer className={styles.details__footer}>
            <div className={styles.footer__container}>
              <div>
                <h3>{job.position}</h3>
                <span>{job.company}</span>
              </div>
              <a href={job.apply} target="_blank">
                <button>Apply Now</button>
              </a>
            </div>
          </footer>
        </main>
      ) : (
        <EmptyPage jobDetails />
      )}
    </>
  );
}
