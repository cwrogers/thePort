"use client"
import styles from "@/app/components/componentStyles/components.module.css";
import {getSvg} from "@/app/models/svgs";
import {motion} from "motion/react"

interface ITechComponentProps {
    tech: string;
}

const TechComponent = ({tech} : ITechComponentProps) => {
    return (
        <motion.div
            initial={{scale: 1}}
            whileHover={{scale: 1.1}}
            className={styles.techComp}>

            {getSvg(tech)}

            <p className={styles.techTitle}>
                {tech}
            </p>
        </motion.div>
    );
}

export default TechComponent;