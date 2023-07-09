import styles from './ExerciseField.module.scss';

export default function ExerciseField() {

  return(
    <div className={styles.exerciseEmptyField}>
          <div className={styles.description}>
            <h3 className={styles.exerciseId}>1.</h3>
            <p className={styles.exrciseName}>dfgsffgg</p>
          </div>
          <div className={styles.exerciseParameters}>
            <p>12/4/80kg</p>
          </div>
        </div>
  ) 
}
