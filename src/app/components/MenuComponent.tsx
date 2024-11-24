import Link from "next/link";
import React from "react";
import styles from "./componentStyles/components.module.css";
import MenuHeaderComponent from "@/app/components/MenuHeader";

const MenuComponent = () => {

    return (
        <div className="menuComp">
            <MenuHeaderComponent/>
            <ul className={styles.menu}>
                <li><Link href="/"> Introduction </Link></li>
                <li><Link href="/"> Experience </Link></li>
                <li><Link href="/"> Projects </Link></li>
                <li><Link href="/"> Contact </Link></li>
                <li><Link href="/blog"> Blog </Link></li>
            </ul>
            <p className={styles.lastUpdated}>
                Updated Nov 17, 2024
            </p>
        </div>
    );
}

export default MenuComponent;