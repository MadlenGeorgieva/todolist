import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './create.module.css';
import Check from '../assets/Check.png';

export default function Create(){

    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = localStorage.getItem('tasks');
            const parsed = savedTasks ? JSON.parse(savedTasks) : [];
            return parsed.filter(task => task && task.id !== undefined && task.title && task.time);
        } catch {
            return [];
        }
    });

    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function createHandler(e) {
        e.preventDefault();
        const highestId = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) : -1;
        const newTask = {
            id: highestId + 1,
            title: title,
            time: time
        }
        setTasks([...tasks, newTask]);
        navigate("/");
    }

    return(
        <div className={styles.wrapper}>
            <img src={Check} alt="Check" style={{ height: '150px', width: '120px', marginBottom: '1rem' }} />
            <form className={styles.form} onSubmit={createHandler}>
                <h2>Create new task</h2>
                <div className={styles.field}>
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" id="title" name="title" value={title} required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="time">Time:</label>
                    <input 
                        type="time" id="time" name="time" value={time} required
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} type="submit">Create Task</button>
                </div>
            </form>
        </div>
    )
}