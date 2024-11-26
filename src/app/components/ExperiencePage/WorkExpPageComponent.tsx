import WorkExperience from "../../models/WorkExperience";
import { PageTitle } from "../TextComponents";
import WorkExperienceComponent from "./WorkExperienceComponent";
import styles from '../componentStyles/components.module.css';
import IPageProps from "@/app/components/IPageProps";


const WorkExpPageComponent = () => {

    const work = [
        new WorkExperience(
            "REPAY",
            "Full-Stack Software Engineer",
            new Date(2022, 7, 1), new Date(2024, 10, 1),
            [
                "Developed web payment platforms integrating with AWS services, using C# in an agile development process",
                "Coordinated software releases and maintained Jenkins pipelines to automate builds, tests, and deployments",
                "Provided on-call technical support for payment gateway API to ensure high availability for clients.",
                "Led multiple projects to improve the performance and reliability of the payment gateway API"
            ]
        ),
        new WorkExperience(
            "REPAY",
            "Intern",
            new Date(2022, 5, 1), new Date(2022, 7, 1),
            [
                "Created API endpoints for payment processing using C#.NET and SQL Server",
                "Implemented improvements to CI/CD pipelines using Jenkins and Docker",
                "Developed changes to the front-end web UI written in React JS"
            ]),
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