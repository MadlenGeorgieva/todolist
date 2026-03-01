import { Link } from "react-router-dom";
import styles from './header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <nav>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/create">Create</Link>&nbsp;|&nbsp;
            </nav>
        </header>
    )
}