"use client";
import {PageTitle, InnerPageHeading} from "@/app/components/TextComponents";
import styles from './componentStyles/components.module.css';
import TechComponent from "@/app/components/TechComponent";
import {motion} from "motion/react";
import InnerPage from "@/app/components/InnerPage";


const IntroductionPageComponent = () => {

    const techArray = [];

    for (let i = 0; i < 9; i++) {
        techArray.push(<TechComponent key={i} />);
    }

    return (
        <div className={styles.introPage}>
            <InnerPage>
                <PageTitle title={"Introduction"} />
                <div className={styles.introText}>
                    <InnerPageHeading title={"About Me"} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu bibendum tortor, non aliquam tellus. Quisque fermentum quam quis leo tristique rhoncus. In vel dolor non erat ornare lacinia gravida nec arcu. Nullam gravida augue nec arcu accumsan, vel sagittis sapien accumsan. I don&apos;t like talking about myself. Cras id quam enim. Quisque sit amet massa sit amet metus lacinia cursus. Proin quam erat, sollicitudin a nulla quis, egestas elementum felis. Aliquam sed justo ac purus scelerisque pretium. Etiam a mollis est. Ut vestibulum efficitur mattis. Praesent ut purus sed velit fermentum convallis quis ut libero. Mauris convallis metus ut congue semper.
                    </p>
                </div>
                <div>
                </div>
                <div className={styles.introText}>
                    <InnerPageHeading title={"Technologies"} />
                    <div className={styles.techGrid}>
                        {techArray.map((l, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1}}
                                transition={{ delay: i * 0.075, duration: 0.25, easing: "easeInOut" }}
                            >
                                {l}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </InnerPage>
        </div>
    );
}

export default IntroductionPageComponent;