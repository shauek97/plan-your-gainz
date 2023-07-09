import styles from "./Header.module.scss";

export default function Button() {
  return (
    <header>
      <div className={styles.logo}></div>
      <h1 className={styles.title}>STWÓRZ SWÓJ PLAN TRENINGOWY!</h1>
    </header>
  );
}
