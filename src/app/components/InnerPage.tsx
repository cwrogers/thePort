"use client";
import {ScriptProps} from "next/script";
import {motion} from "motion/react";
import styles from './componentStyles/components.module.css';


const InnerPage = ( {children} : ScriptProps ) => {
    return (
        <motion.div
            className={styles.innerPage}
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, easing: "easeInOut"}}
        >
            {children}
        </motion.div>
    )
}

export default InnerPage;