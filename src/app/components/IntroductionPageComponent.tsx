import {PageTitle, InnerPageHeading} from "@/app/components/TextComponents";
import styles from './componentStyles/components.module.css';
import TechComponent from "@/app/components/TechComponent";


const IntroductionPageComponent = () => {
    return (
        <div className={styles.introPage}>
            <div className={styles.innerPage}>
                <PageTitle title={"Introduction"} />
                <div className={styles.introText}>
                    <InnerPageHeading title={"About Me"} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu bibendum tortor, non aliquam tellus. Quisque fermentum quam quis leo tristique rhoncus. In vel dolor non erat ornare lacinia gravida nec arcu. Nullam gravida augue nec arcu accumsan, vel sagittis sapien accumsan. Suspendisse turpis tortor, lobortis ut condimentum ut, ornare eu mauris. Cras id quam enim. Quisque sit amet massa sit amet metus lacinia cursus. Proin quam erat, sollicitudin a nulla quis, egestas elementum felis. Aliquam sed justo ac purus scelerisque pretium. Etiam a mollis est. Ut vestibulum efficitur mattis. Praesent ut purus sed velit fermentum convallis quis ut libero. Mauris convallis metus ut congue semper.
                    </p>
                </div>
                <div>
                </div>
                <div className={styles.introText}>
                    <InnerPageHeading title={"Technologies"} />
                    <div className={styles.techGrid}>
                        <TechComponent />
                        <TechComponent />
                        <TechComponent />
                        <TechComponent />
                        <TechComponent />
                        <TechComponent />
                        <TechComponent />
                        <TechComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroductionPageComponent;