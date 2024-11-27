import styles from '../componentStyles/components.module.css';
import Image from "next/image";

const MenuHeaderComponent = () => {
    return (
        <div className={styles.headerArea}>
            <Image
                src={`/20240615_191036.png`}
                alt={`Charles Rogers`}
                className={styles.headerImage}
                width={100}
                height={100}
            />
            <h1 className={styles.headingTitle}>Charles Rogers</h1>
            <h4 className={styles.headingSubtitle}>Software Engineer</h4>
            <p className={styles.headerSmall}>Phoenix, AZ</p>
        </div>
    );
}

export default MenuHeaderComponent;