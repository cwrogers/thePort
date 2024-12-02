import styles from "@/app/components/componentStyles/components.module.css";
import Image from "next/image";

const TechComponent = () => {
    return (
        <div className={styles.techComp}>
            <Image
                src="globe.svg"
                alt=""
                className={styles.techImage}
                width={100}
                height={100}
            />
            <p className={styles.techTitle}>
                React
            </p>
        </div>
    );
}

export default TechComponent;