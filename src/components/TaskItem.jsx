import { Link } from "react-router-dom";
import styles from './taskItem.module.css';

export default function TaskItem({ task, deleteHandler }) {
  return (
    <li className={styles.taskItem}>
      <span className={styles.timeBadge}>{task.time}</span>
      <span className={styles.taskTitle}>{task.title}</span>
      <div className={styles.taskActions}>
        <Link to={`/update/${task.id}`}>Edit</Link>
        <button onClick={() => deleteHandler(task.id)} className={styles.deleteBtn}>Delete</button>
      </div>
    </li>
  );
}