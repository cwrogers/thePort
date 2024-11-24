import styles from "@/app/components/componentStyles/components.module.css";

const TechComponent = () => {
    return (
        <div className={styles.techComp}>
            <img
                src="https://via.placeholder.com/100"
                alt=""
                className={styles.techImage}
            />
            <p className={styles.techTitle}>
                React
            </p>
        </div>
    );
}

export default TechComponent;