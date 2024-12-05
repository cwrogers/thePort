import InnerPage from "@/app/components/InnerPage";
import styles from '@/app/components/componentStyles/components.module.css';


const NotFound = () => {
    return (
        <div className={styles.introPage}>
            <InnerPage>
                <h1 className={styles.headingTitle}>Error 404</h1>
                <p className={styles.headingSubtitle}>Page not found</p>
            </InnerPage>
        </div>

    )
}

export default NotFound;