import { PageTitle } from './TextComponents';
import styles from './componentStyles/components.module.css'

const ProjectsPageComponent = () => {
    return (
        <div className={styles.innerPage}>
            <PageTitle title={"Projects"} />
            <div className={styles.innerPageHeading}>
                Projects
            </div>
        </div>
    );
};

export default ProjectsPageComponent;