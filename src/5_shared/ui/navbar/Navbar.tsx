import Link from "next/link";
import styles from './styles.module.css';

export default function Navbar() {

    return (
        <header className={styles.header}>
            <div><img src="/logo.png" alt="Logo" className={styles.logo}/></div>
            <div>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.list_element}><Link href={'/'}>Tasks</Link></li>
                        <li className={styles.list_element}><Link href={'/create'}>New Task</Link></li>
                        <li className={styles.list_element}><Link href={'/pending'}>Pending Tasks</Link></li>
                        <li className={styles.list_element}><Link href={'/completed'}>Completed Tasks</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}