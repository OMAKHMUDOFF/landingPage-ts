import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./howitwork.module.css";

function HowWork() {
  const howWork = useSelector((state: RootState) => state.mainReducer);
  const { howWorks } = howWork;
  return (
    <section className={styles.HowItWorksPage}>
      <div className={styles.HowWorksTitle}>
        <h4>How does it work</h4>
      </div>
      <div className={styles.HowWorksShows}>
        {howWorks.map((elem) => {
          return (
            <div className={styles.HowWorksShowing} key={elem.id}>
              <div className={styles.HowWorksIcon}>
                <figure>
                  <img src={elem.icon} alt="" />
                </figure>
              </div>
              <div className={styles.HowWorksTitDes}>
                <div className={styles.HowWorksShowTitle}>
                  <h6>{elem.title}</h6>
                </div>
                <div className={styles.HowWorksDescription}>
                  <p>{elem.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowWork;
