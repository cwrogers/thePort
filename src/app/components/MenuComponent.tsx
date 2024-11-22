import Link from "next/link";
import React from "react";
import styles from "./componentStyles/components.module.css";

const MenuComponent = () => {

    return (
        <div className="menuComp">
            <h1>Menu Component</h1>
            <ul className={styles.menu}>
                <li><Link href="/"> Home </Link></li>
                <li><Link href="/blog"> Blog </Link></li>
                <li><Link href="/"> Home </Link></li>
            </ul>
        </div>
    );
}

export default MenuComponent;