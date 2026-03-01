import TaskItem from "./TaskItem";
export default function TaskList({tasks, setTasks}){
    
    function deleteHandler(id){
        const isConfirmed = window.confirm("Are you sure you want to delete this task?")
        if(isConfirmed){
            setTasks(tasks.filter(task => task.id !== id));
        }
    }
    return(
        <>
        {tasks.map((task) => (
            <TaskItem key={task.id} task={task} deleteHandler={deleteHandler}/>
        ))}
        </>
    );
}