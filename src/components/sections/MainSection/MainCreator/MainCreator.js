import styles from "./MainCreator.module.scss";
import { useState } from "react";
import ExerciseField from "../../../features/ExerciseFIeld/ExerciseField";
import { FaPencilAlt } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";



export default function MainCreator() {
  const [isName, setIsName] = useState(false);
  const [name, setName] = useState('');
  const [exercises, setExercise] = useState([
    {
      id: 1,
      title: "Wyciskanie leżąc"
    },

    {
      id: 2,
      title: "Przysiady ze sztangą"
    },

    {
      id: 3,
      title: "Martwy ciąg"
    },
    
    {
      id: 4,
      title: "Podciąganie na drążku"
    }
  ]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsName(true);
  };

  const handlePencilClick = (e) =>{
    e.preventDefault();
    setIsName(false)
  }

  console.log(isName, name)

  return (
    <section className={styles.mainCreator}>
      <div className={styles.mainBox}>
        <div className={styles.planName}>
        {!isName && <form onSubmit={handleSubmit}><input type="text" value={name} onChange={handleNameChange} placeholder="Nazwa"/><button>Ustaw</button></form>}
        
        {isName && <div className={styles.titleHolder}><p className={styles.title}>{name}</p><FaPencilAlt onClick={handlePencilClick} className={styles.icon}/></div>}
        </div>

        {exercises.map((exercise) => (
            <ExerciseField key={exercise.id} id={exercise.id} title={exercise.title} />
          )
        )}
        <div className={styles.addingButton}>
        <AiFillPlusCircle />
        </div>
      </div>
    </section>
  );
}
