import {ScriptProps} from "next/script";
import styles from './componentStyles/components.module.css';


const PageTitle = ({title} : ScriptProps) => {
    return (
        <div className={styles.pageTitle}>
            {title}
        </div>
    );
}
const InnerPageHeading = ({title} : ScriptProps) => {
    return (
        <div className={styles.innerPageHeading}>
            {title}
        </div>
    );
}

export { PageTitle, InnerPageHeading };