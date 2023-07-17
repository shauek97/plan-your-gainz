import styles from "./MainCreator.module.scss";
import { useState } from "react";
import ExerciseField from "../../../features/ExerciseField/ExerciseField.js";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";

export default function MainCreator() {
  const [isName, setIsName] = useState(false);
  const [name, setName] = useState('');
  const [exerciseTitle, setExerciseTitle] = useState('');
  console.log(exerciseTitle);
  const [exercises, setExercises] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsName(true);
  };

  const handlePencilClick = (e) =>{
    e.preventDefault();
    setIsName(false);
  };

  const handleTrash = (exerciseId) =>{
    const updatedExercises = exercises.filter((exercise) => exercise.id !== exerciseId);
    setExercises(updatedExercises);
  };

  const handleExerciseAdding = (e) =>{
    e.preventDefault();
    setExerciseTitle('');
    const newExercise = {
      id: exercises.length > 0 ? exercises[exercises.length -1].id + 1 : 1,
      title: exerciseTitle,
    };
    setExercises([...exercises, newExercise]);
  };

  return (
    <section className={styles.mainCreator}>
      <h1 className={styles.titleWrite}>STWÓRZ SWÓJ PLAN TRENINGOWY!</h1>
      <div className={styles.mainBox}>
        <div className={styles.planName}>
        {!isName && <form className={styles.creatingName} onSubmit={handleSubmit}><input type="text" value={name} onChange={handleNameChange} placeholder="Nazwa planu"/><button className={styles.settingButton}>Ustaw</button></form>}
        
        {isName && <div className={styles.titleHolder}><p className={styles.title}>{name}</p><FaPencilAlt onClick={handlePencilClick} className={styles.icon}/></div>}
        </div>

        {exercises.map((exercise) => (
            <ExerciseField key={exercise.id} number={exercise.id} title={exercise.title} handleTrash={handleTrash}/>
          )
        )}
        <form className={styles.addingForm} onSubmit={handleExerciseAdding}>
        <input type="text" value={exerciseTitle} placeholder="Dodaj ćwiczenie" onChange={(e) => setExerciseTitle(e.target.value)}></input>
        <button className={styles.addingButton}>   
        <AiFillPlusCircle />
        </button>
        </form>
      </div>
    </section>
  );
}
