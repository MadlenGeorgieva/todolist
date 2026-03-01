  import TaskList from '../components/TaskList';
  import SearchField from '../components/SearchField';
  import { useState, useEffect } from 'react';
  import ToDo from '../assets/ToDo.png';
  import styles from './defaultPage.module.css'

  function DefaultPage() {
    const [tasks, setTasks] = useState(() => {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    });

    const [filterText, setFilterText] = useState(() =>{
      const savedFilter = localStorage.getItem('filterText')
      return savedFilter ? savedFilter : '';
    });
    
    useEffect(() => {
      localStorage.setItem('filterText', filterText);
    }, [filterText]);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const sortedTasks = tasks.toSorted((a, b) => 
      a.time.localeCompare(b.time, "en", {sensitive: "base"})
    );

    const filteredTasks = sortedTasks.filter(task =>
      task.title.toLowerCase().includes(filterText.toLowerCase())
    );

    const handleInputChange = (e) => {
      setFilterText(e.target.value);
    }

    return (
  <>
    <div className={styles.page}>
      <img src={ToDo} alt='To Do' className={styles.logo} />
      <SearchField handleInputChange={handleInputChange} filter={filterText} />

      {filteredTasks.length > 0 ? (
      <div className={styles.searchWrapper}>
        <TaskList tasks={filteredTasks} setTasks={setTasks}/>
      </div>
      ) : (
        <p>Sorry, nothing to show...</p>
      )}

      <div className={styles.videoWrapper}>
        <iframe src="https://www.youtube.com/embed/jMPNACl1TTs?si=JHalGJroSYYcTidd"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
    </div>
    </>
    );
  }

  export default DefaultPage
