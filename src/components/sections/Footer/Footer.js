import styles from './Footer.module.scss';

export default function Button() {
  return (
    <footer className={styles.box}>
      <h3 className={styles.rights}>All rights reserved.</h3>
    </footer>
  );
}
