import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

export default function NavBar():JSX.Element{
    return(
        <nav className="{styles.container}" >
            <NavLink className={styles.link} to={"AdmittedStudents"}>Admitted students</NavLink>
            <NavLink className={styles.link} to={"OrganizationalInfo"}>Organizational info</NavLink>
            <NavLink className={styles.link} to={"ExamScores"}>Exam scores</NavLink>
        </nav>
    );
}