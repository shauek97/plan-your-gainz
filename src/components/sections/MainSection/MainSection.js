import styles from './MainSection.module.scss';

import MainCreator from './MainCreator/MainCreator';

export default function MainSection() {
  return(
    <main className={styles.box}>
    <MainCreator />
    </main>
  );
}