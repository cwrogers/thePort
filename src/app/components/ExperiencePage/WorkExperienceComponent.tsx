import WorkExperience from "../../models/WorkExperience"
import style from '../componentStyles/components.module.css'

interface expProps {
    exp: WorkExperience
}

const WorkExperienceComponent = ({exp} : expProps) => {
    //tailwind resume template
    return (
        <div className={style.workExp}>
            <div className={`${style.workExpHeading}`}> {exp.title} </div>
            <div className={style.expDate}> {exp.date} </div>
            <ul className={style.expDesc}>
                {exp.description.map((desc, index) => (
                    <li key={index} className={style.workExpLi}>{desc}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkExperienceComponent;