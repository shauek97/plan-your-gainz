import styles from "./ExerciseField.module.scss";
import { BsFillTrashFill } from "react-icons/bs";

export default function ExerciseField({ id, title }) {
  return (
    <div className={styles.exerciseRow}>
    <div className={styles.exerciseEmptyField}>
      <div className={styles.description}>
        <h3 className={styles.exerciseId}>{id}.</h3>
        <p className={styles.exrciseName}>{title}</p>
      </div>
      <div className={styles.exerciseParameters}>
        <p>12/4/80kg</p>
      </div>
    </div>
    <div className={styles.trashIcon}>
      <BsFillTrashFill />
    </div>
    </div>
  );
}
