import Link from "next/link";
import styles from "./styles.module.css";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.about}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie ultrices libero, vel rhoncus nibh.
                Phasellus eleifend, risus at lobortis dapibus, lectus turpis egestas tellus, in malesuada justo nulla condimentum nisi.
                Suspendisse fermentum sapien ut fringilla viverra. Suspendisse sollicitudin mauris ac ipsum accumsan consectetur.
                Nam id vehicula risus. Fusce condimentum lobortis mi vestibulum semper.
                Vestibulum mollis ligula vitae mauris vestibulum, id pellentesque dolor rutrum. Proin semper eu orci sit amet blandit.
            </div>
            <div>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.list_element}><Link href={'/'}>Tasks</Link></li>
                        <li className={styles.list_element}><Link href={'/create'}>New Task</Link></li>
                        <li className={styles.list_element}><Link href={'/pending'}>Pending Tasks</Link></li>
                        <li className={styles.list_element}><Link href={'/completed'}>Completed Tasks</Link></li>
                        <li className={styles.list_element}><Link href={'/about'}>About</Link></li>
                    </ul>
                </nav>
            </div>

            <div>
                <ul className={styles.social_list}>
                    <li className={styles.social}>VK</li>
                    <li className={styles.social}>Tg</li>
                    <li className={styles.social}>In</li>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;