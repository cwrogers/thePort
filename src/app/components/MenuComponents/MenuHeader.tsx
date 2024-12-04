import styles from '../componentStyles/components.module.css';
import Image from "next/image";
import IconLink from "@/app/components/MenuComponents/IconLink";

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
            <h2 className={styles.headingSubtitle}>Software Engineer</h2>
            <p className={styles.headerSmall}>Phoenix, AZ</p>
            <div className={styles.menuIconLinks}>
                <IconLink icon="linkedin" url="https://www.linkedin.com/in/cwrogers4/"/>
                <IconLink icon="github" url="https://github.com/cwrogers"/>
            </div>
        </div>
    );
}

export default MenuHeaderComponent;