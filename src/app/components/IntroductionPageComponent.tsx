"use client";
import {PageTitle, InnerPageHeading} from "@/app/components/TextComponents";
import styles from './componentStyles/components.module.css';
import TechComponent from "@/app/components/TechComponent";
import {motion} from "motion/react";
import InnerPage from "@/app/components/InnerPage";


const IntroductionPageComponent = () => {

    const techArray = [];

    techArray.push(<TechComponent tech="React" />);
    techArray.push(<TechComponent tech="TypeScript" />);
    techArray.push(<TechComponent tech="Kotlin" />);
    techArray.push(<TechComponent tech="Swift" />);
    techArray.push(<TechComponent tech="Flutter" />);
    techArray.push(<TechComponent tech="Python" />);
    techArray.push(<TechComponent tech="C#/.NET" />);
    techArray.push(<TechComponent tech="SQL" />);
    techArray.push(<TechComponent tech="AWS" />);
    techArray.push(<TechComponent tech="Docker" />);
    techArray.push(<TechComponent tech="Jenkins" />);
    techArray.push(<TechComponent tech="Terraform" />);

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
                <div className={styles.introText}>
                    <InnerPageHeading title={"Technologies"} />
                    <div className={styles.techGrid}>
                        {techArray.map((l, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1}}
                                transition={{ delay: i * 0.025, duration: 0.25, easing: "easeInOut" }}
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