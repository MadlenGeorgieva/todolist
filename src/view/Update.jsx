import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styles from './update.module.css';

export default function Update(){
    const {id} = useParams();
    const [tasks, setTasks] = useState(() =>{
        try {
            const savedTasks = localStorage.getItem("tasks");
            const parsed = savedTasks ? JSON.parse(savedTasks) : [];
            return parsed.filter(task => task && task.id !== undefined && task.title && task.time);
        } catch {
            return [];
        }
    });
     const task = tasks.find(task => task.id === Number(id));

     const [title, setTitle] = useState("");
     const [time, setTime] = useState("");

     let navigate = useNavigate();

     useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
     }, [tasks]);

     useEffect(() => {
        if(task){
            setTitle(task.title);
            setTime(task.time);
        }
     }, [task]);

     function updateHandler(e) {
        e.preventDefault();
        const updatedTask = {id: Number(id), title: title, time: time};
        setTasks(tasks.map(e => e.id === Number(id) ? updatedTask : e));
        navigate("/");
     }

    return(
       <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={updateHandler}>
            <h2>Update Task</h2>
            <div className={styles.field}>
                <label htmlFor="id">ID</label>
                <input type="number" id="id" name="id" value={id} readOnly />
            </div>
            <div className={styles.field}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="Title" value={title} required
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className={styles.field}>
                <label htmlFor="time">Time</label>
                <input type="time" id="time" name="time" value={time} required
                    onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} type="submit">Update Task</button>
            </div>
        </form>
       </div>
    )
}