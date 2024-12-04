import Link from "next/link";
import styles from "../componentStyles/components.module.css";
import MenuHeaderComponent from "@/app/components/MenuComponents/MenuHeader";

const MenuComponent = () => {

    const buildDate = process.env.BUILD_DATE;

    return (
        <div className="menuComp">
            <MenuHeaderComponent/>
            <ul className={styles.menu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Resume</Link></li>
                <li><Link href="/">Contact</Link></li>
                <li><Link href="/">Blog</Link></li>
            </ul>
            <p className={styles.lastUpdated}>
                Updated {buildDate}
            </p>
        </div>
    );
}

export default MenuComponent;