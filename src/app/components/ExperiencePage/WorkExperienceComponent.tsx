"use client"
import WorkExperience from "../../models/WorkExperience"
import style from '../componentStyles/components.module.css'
import { motion } from 'motion/react'

interface expProps {
    exp: WorkExperience
}

const WorkExperienceComponent = ({exp} : expProps) => {
    //tailwind resume template
    return (
        <div className={style.workExp}>
            <motion.div
                initial={{ opacity: 0, transform: 'translateX(-18px)' }}
                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true, threshold: 0.8 }}
                className={`${style.workExpHeading}`}> {exp.title} </motion.div>
            <motion.div
                initial={{ opacity: 0, transform: 'translateX(-18px)' }}
                whileInView={{ opacity: 1, transform: 'translateX(0)' }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true, threshold: 0.8 }}
                className={style.expDate}> {exp.date} </motion.div>
            <ul className={style.expDesc}>
                {exp.description.map((desc, index) => (
                    <motion.li
                        initial={{ opacity: -1, transform: 'translateY(18px)' }}
                        whileInView={{ opacity: 1, transform: 'translateY(0)' }}
                        transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeInOut' }}
                        viewport={{ once: true, threshold: 0.1 }}
                        key={index} className={style.workExpLi}>{desc}</motion.li>
                ))}
            </ul>
        </div>
    );
}

export default WorkExperienceComponent;