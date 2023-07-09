import styles from "./MainCreator.module.scss";
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";


export default function MainCreator() {
  const [isName, setIsName] = useState(false);
  const [name, setName] = useState('');
  const [exercise, setExercise] = useState([
    {
      id: 1,
      title: "wyciskanie leżąc"
    },

    {
      id: 1,
      title: "wyciskanie leżąc"
    },

    {
      id: 1,
      title: "wyciskanie leżąc"
    },
    
    {
      id: 1,
      title: "wyciskanie leżąc"
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
