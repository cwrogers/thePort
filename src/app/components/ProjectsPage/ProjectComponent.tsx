"use client"
import ProjectModel from "@/app/models/ProjectModel";
import style from '../componentStyles/components.module.css';
import { motion } from 'motion/react';

interface ProjectComponentProps {
    project: ProjectModel
}

const ProjectComponent = ({project} : ProjectComponentProps)  =>{

    return (
        <div className={style.workExp}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true, threshold: 0.8 }}
                className={style.workExpHeading}>
                {project.title}
            </motion.div>
            <ul className={style.expDesc}>
                {project.description.map((desc, index) => (
                    <motion.li
                        initial={{ opacity: -1, transform: 'translateX(-18px)' }}
                        whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeInOut' }}
                        viewport={{ once: true, threshold: 0.1 }}
                        key={index} className={style.workExpLi}>{desc}
                    </motion.li>
                ))}
            </ul>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, threshold: 0.8 }}
                className={`${style.expDate} ${style.projectsTechUsed}`}>
                <span className='font-bold'>
                    Technologies Used:&nbsp;
                </span>
                {project.tech.map((tech, index) => (
                    <motion.span
                        initial={{ opacity: -1, transform: 'translateX(-18px)' }}
                        whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeInOut' }}
                        viewport={{ once: true, threshold: 0.1 }}
                        key={index}>{tech + ((index + 1 < project.tech.length) ? ", " : "")}</motion.span>
                    ))}
            </motion.div>
        </div>
    );
}

export default ProjectComponent;