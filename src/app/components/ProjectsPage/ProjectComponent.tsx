import ProjectModel from "@/app/models/ProjectModel";
import style from '../componentStyles/components.module.css';

interface ProjectComponentProps {
    project: ProjectModel
}

const ProjectComponent = ({project} : ProjectComponentProps)  =>{

    return (
        <div className={style.workExp}>
            <div className={style.workExpHeading}>
                {project.title}
            </div>
            <ul className={style.expDesc}>
                {project.description.map((desc, index) => (
                    <li key={index} className={style.workExpLi}>{desc}</li>
                ))}
            </ul>
            <div className={`${style.expDate} ${style.projectsTechUsed}`}>
                <span className='font-bold'>
                    Technologies Used:&nbsp;
                </span>
                {project.tech.map((tech, index) => (
                    <span key={index}>{tech + ((index + 1 < project.tech.length) ? ", " : "")}</span>
                    ))}
            </div>
        </div>
    );
}

export default ProjectComponent;