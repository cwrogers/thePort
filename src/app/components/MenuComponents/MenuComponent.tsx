'use client';
import Link from "next/link";
import styles from "../componentStyles/components.module.css";
import MenuHeaderComponent from "@/app/components/MenuComponents/MenuHeader";

const MenuComponent = () => {

    return (
        <div className="menuComp">
            <MenuHeaderComponent/>
            <ul className={styles.menu}>
                <Link href="/"><li>Home</li></Link>
                <Link href="/"><li>Resume</li></Link>
                <Link href="/"><li>Contact</li></Link>
                <Link href="/"><li>Blog</li></Link>
            </ul>
            <p className={styles.lastUpdated}>
                Updated Nov 17, 2024
            </p>
        </div>
    );
}

export default MenuComponent;