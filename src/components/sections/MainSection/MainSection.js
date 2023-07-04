import styles from './MainSection.module.scss';
import RightColumns from './RightColumns/RightColumns';
import LeftColumns from './LeftColumns/LeftColumns';
import MainCreator from './MainCreator/MainCreator';

export default function MainSection() {
  return(
    <main className={styles.box}>
    <RightColumns />
    <MainCreator />
    <LeftColumns />
    </main>
  );
}