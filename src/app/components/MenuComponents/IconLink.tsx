"use client"
import styles from "@/app/components/componentStyles/components.module.css";
import {getSvg} from "@/app/models/svgs";
import {ReactElement} from "react";
import {motion} from "motion/react";


interface IIconLinkProps {
    url: string;
    icon: string;
}

const IconLink = ({icon, url} : IIconLinkProps) => {

    const svg : ReactElement = (
        <motion.div
        className={styles.iconLink}>
            {getSvg(icon)}
        </motion.div>
    );

    return (
        <div>
            <a href={url} target="_blank">
                {svg}
            </a>
        </div>
    );

};

export default IconLink