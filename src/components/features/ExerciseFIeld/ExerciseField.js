import styles from "./ExerciseField.module.scss";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

export default function ExerciseField(props) {

  const [inputOn, setInputOn] = useState(true);
  const [reps, setReps] = useState('');
  const [series, setSeries] = useState('');
  const [kg, setKg] = useState('');

  const handleClick = () => {
  
}

  return (
    <div className={styles.exerciseRow}>
    <div className={styles.exerciseEmptyField}>
      <div className={styles.description}>
        <h3 className={styles.exerciseId}>{props.number}.</h3>
        <p className={styles.exerciseName} onClick={handleClick}>{props.title}</p>
      </div>
      <div className={styles.exerciseParameters}>
   
        <input value={reps} onChange={(e) => setReps(e.target.value)} maxLength={2} placeholder="reps"></input> 
        <p>|</p>
        <input value={series} onChange={(e) => setSeries(e.target.value)} maxLength={2} placeholder="series"></input> 
        <p>|</p>
        <input value={kg} onChange={(e) => setKg(e.target.value)} maxLength={3}></input> <p>Kg</p>

         {/* /* <p>12|4|80kg</p><p>12|4|80kg</p><p>12|4|80kg</p><p>12|4|80kg</p><p>12|4|80kg</p> */ }
      </div>
    </div>
    <div className={styles.trashIcon} onClick={() => props.handleTrash(props.number)}>
      <BsFillTrashFill />
    </div>
    </div>
  );
}
