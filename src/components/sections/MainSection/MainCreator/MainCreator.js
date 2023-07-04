import styles from "./MainCreator.module.scss";

export default function MainCreator() {
  return (
    <section className={styles.mainCreator}>
      <div className={styles.mainBox}>
        <div className={styles.planName}>
          <h2>Trening nr 4</h2>
        </div>
        <div className={styles.exerciseEmptyField}>
          <div className={styles.description}>
            <h3 className={styles.exerciseId}>1.</h3>
            <p className={styles.exrciseName}>dfgsffgg</p>
          </div>
          <div className={styles.exerciseParameters}>
            <p>12/4/80kg</p>
          </div>
        </div>
        <div className={styles.exerciseEmptyField}>
          <div className={styles.description}>
            <h3 className={styles.exerciseId}>2.</h3>
            <p className={styles.exrciseName}>dfgsffgg</p>
          </div>
          <div className={styles.exerciseParameters}>
            <p>12/4/80kg</p>
          </div>
        </div>
        <div className={styles.exerciseEmptyField}>
          <div className={styles.description}>
            <h3 className={styles.exerciseId}>3.</h3>
            <p className={styles.exrciseName}>dfgsffgg</p>
          </div>
          <div className={styles.exerciseParameters}>
            <p>12/4/80kg</p>
          </div>
        </div>
        <div className={styles.exerciseEmptyField}>
          <div className={styles.description}>
            <h3 className={styles.exerciseId}>4.</h3>
            <p className={styles.exrciseName}>dfgsffgg</p>
          </div>
          <div className={styles.exerciseParameters}>
            <p>12/4/80kg</p>
          </div>
        </div>
      </div>
    </section>
  );
}
