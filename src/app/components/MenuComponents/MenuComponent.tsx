import Link from "next/link";
import styles from "../componentStyles/components.module.css";
import MenuHeaderComponent from "@/app/components/MenuComponents/MenuHeader";

const MenuComponent = () => {

    const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE;

    return (
        <div className="menuComp">
            <MenuHeaderComponent/>
            <ul className={styles.menu}>
                <li><Link href="/">Home</Link></li>
                <li><a href="/resume" target='_blank'>Resume</a></li>
                <li><a href={`mailto:${process.env.EMAIL}`}>Contact</a></li>
            </ul>
            <p className={styles.lastUpdated}>
                Updated {buildDate}
            </p>
        </div>
    );
}

export default MenuComponent;