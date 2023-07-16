import styles from "./ExerciseField.module.scss";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

const [inputOn, setInputOn] = useState(true);
const [reps, setReps] = useState('');
const [series, setSeries] = useState('');
const [kg, setKg] = useState('');

const handleClick = () => {
  
}

export default function ExerciseField(props) {
  return (
    <div className={styles.exerciseRow}>
    <div className={styles.exerciseEmptyField}>
      <div className={styles.description}>
        <h3 className={styles.exerciseId}>{props.number}.</h3>
        <p className={styles.exerciseName} onClick={handleClick}>{props.title}</p>
      </div>
      <div className={styles.exerciseParameters}>
        <p>12</p><p>12|4|80kg</p><p>12|4|80kg</p><p>12|4|80kg</p><p>12|4|80kg</p><p>12|4|80kg</p>
      </div>
    </div>
    <div className={styles.trashIcon} onClick={() => props.handleTrash(props.number)}>
      <BsFillTrashFill />
    </div>
    </div>
  );
}
