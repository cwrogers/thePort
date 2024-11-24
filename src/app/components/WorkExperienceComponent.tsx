import WorkExperience from "../models/WorkExperience"
import style from './componentStyles/components.module.css'

interface expProps {
    exp: WorkExperience
}

const WorkExperienceComponent = ({exp} : expProps) => {
    //tailwind resume template
    return (
        <div className={style.workExp}>
            <div className={`${style.workExpHeading}`}> {exp.title} </div>
            <div className={style.expDate}> {exp.date} </div>
            <div className={style.expDesc}> 
                <p>
                    {exp.description}
                </p>
            </div>
        </div>
    );
}

export default WorkExperienceComponent;