import WorkExperience from "../models/WorkExperience";
import { PageTitle } from "./TextComponents";
import WorkExperienceComponent from "./WorkExperienceComponent";
import styles from './componentStyles/components.module.css';


const WorkExpPageComponent = () => {

    const work = [
        new WorkExperience("REPAY", "Full-Stack Software Engineer", new Date(2022, 7, 1), new Date(2024, 10, 1), "Description 1"),
        new WorkExperience("REPAY", "Intern", new Date(2022, 5, 1), new Date(2022, 7, 1), "Description 2"),
    ]

    return (
        <div className={styles.innerPage}>
            <PageTitle title={"Experience"} />
            <div>
                {work.map((exp, i) => (
                    <WorkExperienceComponent exp={exp} key={i} />
                ))}
            </div>
        </div>
    );
}


export default WorkExpPageComponent;