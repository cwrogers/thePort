"use client";
import {PageTitle, InnerPageHeading} from "@/app/components/TextComponents";
import styles from './componentStyles/components.module.css';
import TechComponent from "@/app/components/TechComponent";
import {motion} from "motion/react";
import InnerPage from "@/app/components/InnerPage";


const IntroductionPageComponent = () => {

    const techArray = [
        "React",
        "TypeScript",
        "Kotlin",
        "Swift",
        "Flutter",
        "Python",
        "C#/.NET",
        "SQL",
        "AWS",
        "Docker",
        "Jenkins",
        "Terraform"
    ].map((tech, i) => <TechComponent tech={tech} key={i} /> );

    return (
        <div className={styles.introPage}>
            <InnerPage>
                <PageTitle title={"Introduction"} />
                <div className={styles.introText}>
                    <InnerPageHeading title={"About Me"} />
                    <p className={styles.secondary}>
                        I am a Full Stack Software Engineer with a strong focus on creating engaging, accessible user interfaces and building robust applications. I have experience with web and mobile development, backend API design, and infrastructure management. My approach combines technical versatility with a commitment to delivering efficient, scalable, and user-focused solutions.
                    </p>
                </div>
                <div className={styles.introText}>
                    <InnerPageHeading title={"Technologies"} />
                    <div className={styles.techGrid}>
                        {techArray.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1}}
                                transition={{ delay: i * 0.025, duration: 0.25, easing: "easeInOut" }}
                                className={styles.techComp}
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </InnerPage>
        </div>
    );
}

export default IntroductionPageComponent;