import styles from '../componentStyles/components.module.css';

const MenuHeaderComponent = () => {
    return (
        <div className={styles.headerArea}>
            <img
                src="https://via.placeholder.com/150"
                alt="Charles Rogers"
                className={styles.headerImage}
            />
            <h1 className={styles.headingTitle}>Charles Rogers</h1>
            <h4 className={styles.headingSubtitle}>Software Engineer</h4>
            <p className={styles.headerSmall}>Phoenix, AZ</p>
        </div>
    );
}

export default MenuHeaderComponent;