import styles from "./ExerciseField.module.scss";
import { BsFillTrashFill } from "react-icons/bs";

export default function ExerciseField(props) {
  return (
    <div className={styles.exerciseRow}>
    <div className={styles.exerciseEmptyField}>
      <div className={styles.description}>
        <h3 className={styles.exerciseId}>{props.number}.</h3>
        <p className={styles.exrciseName}>{props.title}</p>
      </div>
      <div className={styles.exerciseParameters}>
        <p>12/4/80kg</p>
      </div>
    </div>
    <div className={styles.trashIcon} onClick={props.handleTrash(props.key)}>
    <icon><BsFillTrashFill /></icon>
    </div>
    </div>
  );
}
